import { useAuth } from "../context/AuthContext";
import { IconUser, IconMail, IconCalendar } from "../components/Icons";

function ProfilePage() {
  const { user } = useAuth();

  if (!user) return null;

  const initial = user.username ? user.username.charAt(0).toUpperCase() : "?";

  const rows = [
    { icon: IconUser, label: "Usuario", value: user.username },
    { icon: IconMail, label: "Correo", value: user.email },
  ];
  if (user.createdAt) {
    rows.push({
      icon: IconCalendar,
      label: "Miembro desde",
      value: new Date(user.createdAt).toLocaleDateString(),
    });
  }

  return (
    <div className="flex justify-center px-4">
      <div className="w-full max-w-md mt-6 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 sm:p-10 shadow-2xl shadow-black/30">
        <div className="flex flex-col items-center text-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 text-3xl font-bold text-white shadow-lg shadow-indigo-950/40 ring-4 ring-zinc-800">
            {initial}
          </div>
          <h1 className="mt-4 text-2xl font-bold">{user.username}</h1>
          <p className="text-zinc-500 text-sm break-all">{user.email}</p>
        </div>

        <div className="mt-8 space-y-2">
          {rows.map(({ icon: Icon, label, value }) => (
            <div
              key={label}
              className="flex items-center gap-3 rounded-xl border border-zinc-800 bg-zinc-950/40 px-4 py-3"
            >
              <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-400">
                <Icon className="size-4" />
              </span>
              <div className="min-w-0 text-left">
                <p className="text-xs text-zinc-500">{label}</p>
                <p className="text-sm font-medium text-zinc-100 truncate">
                  {value}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default ProfilePage;
