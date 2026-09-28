import { useEffect, useMemo, useState } from "react";
import { useNotes } from "../context/NotesContext";
import NoteCard from "../components/NoteCard";
import { Link } from "react-router-dom";
import { IconPlus, IconClipboard, IconSearch, IconX } from "../components/Icons";

const FILTERS = [
  { key: "all", label: "Todas" },
  { key: "pending", label: "Pendientes" },
  { key: "completed", label: "Completadas" },
];

export function NotesPage() {
  const { notes, getNotes, loadingNotes } = useNotes();
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    getNotes(); // ✅ Se ejecuta al cargar la página
  }, []);

  useEffect(() => {
    console.log("Notas actualizadas:", notes);
  }, [notes]); // ✅ Se ejecuta cuando `notes` cambia

  const filteredNotes = useMemo(() => {
    const q = query.trim().toLowerCase();
    return notes.filter((note) => {
      const matchesQuery =
        !q ||
        note.title?.toLowerCase().includes(q) ||
        note.description?.toLowerCase().includes(q);
      const matchesFilter =
        filter === "all" ||
        (filter === "completed" && note.completed) ||
        (filter === "pending" && !note.completed);
      return matchesQuery && matchesFilter;
    });
  }, [notes, query, filter]);

  const pendingCount = useMemo(
    () => notes.filter((n) => !n.completed).length,
    [notes]
  );

  return (
    <div className="px-2 sm:px-0">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
        <div className="flex items-center gap-3">
          <h1 className="text-2xl font-bold">Mis tareas</h1>
          {notes.length > 0 && (
            <span className="rounded-full bg-zinc-800 px-2.5 py-0.5 text-xs font-medium text-zinc-400">
              {pendingCount} pendiente{pendingCount === 1 ? "" : "s"}
            </span>
          )}
        </div>
        <Link
          to="/add-note"
          className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-indigo-950/30 hover:bg-indigo-500 active:scale-[0.98] transition"
        >
          <IconPlus className="size-4" />
          Nueva nota
        </Link>
      </div>

      {notes.length > 0 && (
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-5">
          <div className="relative flex-1 sm:max-w-xs">
            <IconSearch className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-zinc-500" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar notas..."
              className="w-full rounded-lg border border-zinc-800 bg-zinc-900/60 py-2 pl-9 pr-8 text-sm text-white placeholder:text-zinc-500 outline-none transition focus:border-indigo-500"
            />
            {query && (
              <button
                onClick={() => setQuery("")}
                className="absolute right-2.5 top-1/2 flex size-4 -translate-y-1/2 items-center justify-center text-zinc-500 hover:text-zinc-300"
                title="Limpiar búsqueda"
              >
                <IconX className="size-3.5" />
              </button>
            )}
          </div>

          <div className="flex items-center gap-1 rounded-lg border border-zinc-800 bg-zinc-900/60 p-1">
            {FILTERS.map((f) => (
              <button
                key={f.key}
                onClick={() => setFilter(f.key)}
                className={`rounded-md px-3 py-1.5 text-xs font-medium transition ${
                  filter === f.key
                    ? "bg-indigo-600 text-white"
                    : "text-zinc-400 hover:text-zinc-200"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {loadingNotes && notes.length === 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="h-32 rounded-xl border border-zinc-800 bg-zinc-900/40 animate-pulse"
            />
          ))}
        </div>
      ) : notes.length === 0 ? (
        <div className="flex flex-col items-center justify-center text-center py-20 text-zinc-500">
          <span className="mb-4 flex size-14 items-center justify-center rounded-full bg-zinc-900 border border-zinc-800 text-zinc-600">
            <IconClipboard className="size-6" />
          </span>
          <p className="text-lg text-zinc-300 font-medium">
            No hay tareas todavía
          </p>
          <p className="text-sm mt-1">Crea tu primera nota para empezar.</p>
        </div>
      ) : filteredNotes.length === 0 ? (
        <div className="flex flex-col items-center justify-center text-center py-20 text-zinc-500">
          <span className="mb-4 flex size-14 items-center justify-center rounded-full bg-zinc-900 border border-zinc-800 text-zinc-600">
            <IconSearch className="size-6" />
          </span>
          <p className="text-lg text-zinc-300 font-medium">
            No se encontraron notas
          </p>
          <p className="text-sm mt-1">Prueba con otra búsqueda o filtro.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredNotes.map((note, i) => (
            <NoteCard note={note} key={note._id} index={i} />
          ))}
        </div>
      )}
    </div>
  );
}
