import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { IconNotes, IconPlus, IconUser, IconLogOut, IconChevronDown } from "./Icons";

function Navbar2() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { logout, user } = useAuth();

  const initial = user?.username ? user.username.charAt(0).toUpperCase() : "?";

  const linkClass = (active) =>
    `rounded-full px-4 py-2 text-sm font-medium transition ${
      active
        ? "bg-indigo-500/10 text-indigo-300"
        : "text-zinc-400 hover:bg-zinc-800 hover:text-white"
    }`;

  return (
    <nav className="sticky top-0 z-20 border-b border-zinc-800/80 bg-zinc-950/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/* Botón del menú móvil */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-zinc-400 hover:bg-zinc-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              aria-controls="mobile-menu"
              aria-expanded={menuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {menuOpen ? (
                <svg className="size-6" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="size-6" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 6h18M3 12h18m-18 6h18" />
                </svg>
              )}
            </button>
          </div>

          {/* Links del menú */}
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <Link to="/notes" className="flex shrink-0 items-center gap-2">
              <span className="flex size-8 items-center justify-center rounded-lg bg-indigo-600 text-white shadow-lg shadow-indigo-950/40">
                <IconNotes className="size-4.5" />
              </span>
              <span className="text-white font-semibold text-lg tracking-tight">
                FAPPSC
              </span>
            </Link>
            <div className="hidden sm:ml-8 sm:block">
              <div className="flex space-x-1">
                <Link to="/notes" className={linkClass(true)}>
                  Notes
                </Link>
                <Link to="/add-note" className={linkClass(false)}>
                  <span className="inline-flex items-center gap-1.5">
                    <IconPlus className="size-3.5" />
                    Create Note
                  </span>
                </Link>
              </div>
            </div>
          </div>

          <div className="hidden sm:block">
            <span className="rounded-full px-3 py-1.5 text-sm font-medium text-zinc-400">
              {user?.username}
            </span>
          </div>

          {/* Dropdown del perfil */}
          <div className="relative ml-3">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-1.5 rounded-full py-1 pl-1 pr-2.5 text-sm text-zinc-300 ring-1 ring-zinc-800 hover:ring-zinc-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            >
              <span className="sr-only">Open user menu</span>
              <span className="flex size-7 items-center justify-center rounded-full bg-indigo-600 text-xs font-semibold text-white">
                {initial}
              </span>
              <IconChevronDown className="size-3.5 text-zinc-500" />
            </button>

            {dropdownOpen && (
              <div className="absolute right-0 z-10 mt-2 w-48 origin-top-right divide-y divide-zinc-800 overflow-hidden rounded-xl bg-zinc-900 shadow-2xl shadow-black/40 ring-1 ring-zinc-800">
                <Link
                  to="/profile"
                  className="flex items-center gap-2.5 px-4 py-2.5 text-sm text-zinc-300 hover:bg-zinc-800 hover:text-white transition"
                >
                  <IconUser className="size-4 text-zinc-500" />
                  Your Profile
                </Link>

                <Link
                  to="/"
                  onClick={() => {
                    logout();
                  }}
                  className="flex items-center gap-2.5 px-4 py-2.5 text-sm text-red-400 hover:bg-red-500/10 transition"
                >
                  <IconLogOut className="size-4" />
                  Sign out
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Menú móvil */}
      {menuOpen && (
        <div className="sm:hidden border-t border-zinc-800" id="mobile-menu">
          <div className="space-y-1 px-2 pt-2 pb-3">
            <Link
              to="/notes"
              className="block rounded-md bg-indigo-500/10 px-3 py-2 text-base font-medium text-indigo-300"
            >
              Notes
            </Link>
            <Link
              to="/add-note"
              className="block rounded-md px-3 py-2 text-base font-medium text-zinc-400 hover:bg-zinc-800 hover:text-white"
            >
              Create Note
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar2;
