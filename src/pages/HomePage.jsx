import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { IconSparkles, IconNotes, IconDevices } from "../components/Icons";

function HomePage() {
  const { isAuthenticated, user } = useAuth();

  const features = [
    {
      icon: IconNotes,
      title: "Todo organizado",
      desc: "Crea, edita y elimina tus notas en segundos, sin complicaciones.",
    },
    {
      icon: IconDevices,
      title: "Desde cualquier lugar",
      desc: "Accede a tus tareas desde el computador, tablet o celular.",
    },
    {
      icon: IconSparkles,
      title: "Simple y rápido",
      desc: "Una interfaz limpia pensada para que no pierdas tiempo.",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center text-center min-h-[calc(100vh-6rem)] px-4">
      <span className="mb-5 inline-flex items-center gap-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-300">
        <IconSparkles className="size-3.5" />
        Gestor de tareas
      </span>

      <h1 className="text-3xl sm:text-5xl font-bold mb-4 tracking-tight">
        {isAuthenticated ? (
          <>Hola, {" "}
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              {user?.username}
            </span>{" "}
            👋
          </>
        ) : (
          <>
            Organiza tus tareas{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              en un solo lugar
            </span>
          </>
        )}
      </h1>

      <p className="text-zinc-400 max-w-xl mb-8 text-sm sm:text-base">
        {isAuthenticated
          ? "Gestiona tus notas y tareas pendientes desde cualquier dispositivo."
          : "Una aplicación simple para crear, editar y organizar tus notas. Regístrate y empieza a usarla en segundos."}
      </p>

      <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto mb-16">
        {isAuthenticated ? (
          <Link
            to="/notes"
            className="rounded-lg bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-950/40 hover:bg-indigo-500 active:scale-[0.98] transition text-center"
          >
            Ver mis notas
          </Link>
        ) : (
          <>
            <Link
              to="/register"
              className="rounded-lg bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-950/40 hover:bg-indigo-500 active:scale-[0.98] transition text-center"
            >
              Crear cuenta
            </Link>
            <Link
              to="/login"
              className="rounded-lg border border-zinc-700 bg-zinc-900 px-6 py-3 text-sm font-semibold text-white hover:bg-zinc-800 active:scale-[0.98] transition text-center"
            >
              Iniciar sesión
            </Link>
          </>
        )}
      </div>

      {!isAuthenticated && (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-3xl">
          {features.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-5 text-left"
            >
              <span className="mb-3 flex size-9 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-400">
                <Icon className="size-4.5" />
              </span>
              <h3 className="font-semibold text-sm text-white mb-1">{title}</h3>
              <p className="text-xs text-zinc-500">{desc}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
export default HomePage;
