import { createContext, useCallback, useContext, useState } from "react";
import { IconCheck, IconAlert, IconX } from "../components/Icons";

const ToastContext = createContext();

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};

let toastId = 0;

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const remove = useCallback((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const push = useCallback(
    (message, type) => {
      const id = ++toastId;
      setToasts((prev) => [...prev, { id, message, type }]);
      setTimeout(() => remove(id), 3500);
    },
    [remove]
  );

  const toast = {
    success: (message) => push(message, "success"),
    error: (message) => push(message, "error"),
  };

  return (
    <ToastContext.Provider value={toast}>
      {children}
      <div className="pointer-events-none fixed top-4 right-4 left-4 sm:left-auto z-50 flex flex-col items-end gap-2">
        {toasts.map((t) => (
          <div
            key={t.id}
            className={`animate-toast-in pointer-events-auto flex w-full sm:w-auto sm:min-w-[280px] max-w-sm items-start gap-2.5 rounded-xl border px-4 py-3 shadow-2xl shadow-black/40 backdrop-blur-md ${
              t.type === "success"
                ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-300"
                : "bg-red-500/10 border-red-500/30 text-red-300"
            }`}
          >
            <span className="mt-0.5 shrink-0">
              {t.type === "success" ? (
                <IconCheck className="size-4" />
              ) : (
                <IconAlert className="size-4" />
              )}
            </span>
            <p className="text-sm flex-1">{t.message}</p>
            <button
              onClick={() => remove(t.id)}
              className="shrink-0 text-current/70 hover:text-current"
            >
              <IconX className="size-3.5" />
            </button>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}
