import { IconAlert } from "./Icons";

function ConfirmDialog({
  open,
  title,
  description,
  confirmText = "Eliminar",
  onConfirm,
  onCancel,
  loading = false,
}) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-fade-in"
        onClick={onCancel}
      />
      <div className="relative w-full max-w-sm rounded-2xl border border-zinc-800 bg-zinc-900 p-6 shadow-2xl shadow-black/50 animate-modal-in">
        <span className="mb-3 flex size-10 items-center justify-center rounded-xl bg-red-500/10 text-red-400">
          <IconAlert className="size-5" />
        </span>
        <h2 className="text-lg font-bold text-white">{title}</h2>
        {description && (
          <p className="text-sm text-zinc-400 mt-1">{description}</p>
        )}
        <div className="mt-6 flex gap-3">
          <button
            onClick={onCancel}
            disabled={loading}
            className="flex-1 rounded-lg border border-zinc-700 px-4 py-2 text-sm font-medium text-zinc-300 hover:bg-zinc-800 disabled:opacity-60 transition"
          >
            Cancelar
          </button>
          <button
            onClick={onConfirm}
            disabled={loading}
            className="flex-1 rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-500 disabled:opacity-60 transition"
          >
            {loading ? "Eliminando..." : confirmText}
          </button>
        </div>
      </div>
    </div>
  );
}
export default ConfirmDialog;
