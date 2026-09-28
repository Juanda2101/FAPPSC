import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { IconUser, IconMail, IconLock, IconAlert, Spinner } from "../components/Icons";
import { useToast } from "../context/ToastContext";

function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signup, isAuthenticated, errors: registerErrors } = useAuth();
  const navigate = useNavigate();
  const toast = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (isAuthenticated) navigate("/notes");
  }, [isAuthenticated]);

  const onSubmit = handleSubmit(async (values) => {
    setIsSubmitting(true);
    const ok = await signup(values);
    setIsSubmitting(false);
    if (ok) toast.success("¡Cuenta creada correctamente!");
  });
  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center px-4">
      <div className="w-full max-w-md rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 sm:p-10 shadow-2xl shadow-black/30">
        <div className="flex flex-col items-center text-center mb-6">
          <span className="mb-3 flex size-11 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400">
            <IconUser className="size-5" />
          </span>
          <h1 className="text-2xl font-bold">Crea tu cuenta</h1>
          <p className="text-sm text-zinc-500 mt-1">
            Empieza a organizar tus tareas en segundos
          </p>
        </div>

        {registerErrors.map((error, i) => (
          <div
            className="flex items-center gap-2 rounded-lg bg-red-500/10 border border-red-500/30 p-3 text-sm text-red-400 mb-3"
            key={i}
          >
            <IconAlert className="size-4 shrink-0" />
            {error}
          </div>
        ))}

        <form onSubmit={onSubmit} className="space-y-3">
          <div className="relative">
            <IconUser className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 size-4 text-zinc-500" />
            <input
              type="text"
              {...register("username", { required: true })}
              className="w-full bg-zinc-950/60 border border-zinc-800 text-white pl-10 pr-4 py-2.5 rounded-lg placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
              placeholder="Username"
            />
          </div>
          {errors.username && (
            <p className="text-red-400 text-xs">Username is required</p>
          )}

          <div className="relative">
            <IconMail className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 size-4 text-zinc-500" />
            <input
              type="email"
              {...register("email", { required: true })}
              className="w-full bg-zinc-950/60 border border-zinc-800 text-white pl-10 pr-4 py-2.5 rounded-lg placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
              placeholder="Email"
            />
          </div>
          {errors.email && (
            <p className="text-red-400 text-xs">Email is required</p>
          )}

          <div className="relative">
            <IconLock className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 size-4 text-zinc-500" />
            <input
              type="password"
              {...register("password", { required: true })}
              className="w-full bg-zinc-950/60 border border-zinc-800 text-white pl-10 pr-4 py-2.5 rounded-lg placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
              placeholder="Password"
            />
          </div>
          {errors.password && (
            <p className="text-red-400 text-xs">Password is required</p>
          )}

          <button
            disabled={isSubmitting}
            className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-indigo-600 px-3 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo-950/40 hover:bg-indigo-500 active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed transition"
            type="submit"
          >
            {isSubmitting && <Spinner className="size-4" />}
            {isSubmitting ? "Creando..." : "Register"}
          </button>
        </form>

        <p className="flex flex-wrap gap-x-2 justify-center mt-5 text-sm text-zinc-500">
          Already have an account?{" "}
          <Link to="/login" className="text-indigo-400 hover:text-indigo-300 font-medium">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
export default RegisterPage;
