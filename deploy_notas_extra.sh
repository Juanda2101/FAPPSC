#!/bin/bash
set -e
cd ~/FAPPSC

echo 'Actualizando src/components/Icons.jsx...'
mkdir -p $(dirname src/components/Icons.jsx)
cat > src/components/Icons.jsx << 'FILEEOF'
// Íconos SVG livianos y reutilizables (sin dependencias externas)

export function IconPencil({ className = "size-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487a2.06 2.06 0 0 1 2.915 2.914L7.5 19.68l-4 1 1-4L16.862 4.487Z" />
    </svg>
  );
}

export function IconTrash({ className = "size-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 7h12M9.5 7V5.5A1.5 1.5 0 0 1 11 4h2a1.5 1.5 0 0 1 1.5 1.5V7m2 0-.6 12.1a2 2 0 0 1-2 1.9H8.6a2 2 0 0 1-2-1.9L6 7h12Z" />
    </svg>
  );
}

export function IconMail({ className = "size-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.5 6.5h17v11h-17v-11Zm0 0 8.5 6.5 8.5-6.5" />
    </svg>
  );
}

export function IconLock({ className = "size-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="5" y="10.5" width="14" height="9" rx="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 10.5V7.5a4 4 0 1 1 8 0v3" />
    </svg>
  );
}

export function IconUser({ className = "size-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="8" r="3.2" strokeLinecap="round" strokeLinejoin="round" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.2c0-3.3 3.4-5.2 7.5-5.2s7.5 1.9 7.5 5.2" />
    </svg>
  );
}

export function IconCalendar({ className = "size-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="4" y="5.5" width="16" height="14.5" rx="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 3.5v4M16 3.5v4M4 10h16" />
    </svg>
  );
}

export function IconPlus({ className = "size-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14M5 12h14" />
    </svg>
  );
}

export function IconLogOut({ className = "size-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 4.5H6a1.5 1.5 0 0 0-1.5 1.5v12A1.5 1.5 0 0 0 6 19.5h3M16 15l4-3-4-3M20 12H9" />
    </svg>
  );
}

export function IconChevronDown({ className = "size-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="m6 9 6 6 6-6" />
    </svg>
  );
}

export function IconAlert({ className = "size-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v4.5M12 16.5h.01" />
      <circle cx="12" cy="12" r="9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconNotes({ className = "size-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6M9 8h6M5 4h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1Z" />
    </svg>
  );
}

export function IconClipboard({ className = "size-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <rect x="6" y="4.5" width="12" height="16" rx="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="9" y="3" width="6" height="3" rx="1" strokeLinecap="round" strokeLinejoin="round" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 11h6M9 14.5h4" />
    </svg>
  );
}

export function IconSparkles({ className = "size-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 3.5c.5 2 1.5 3 3.5 3.5-2 .5-3 1.5-3.5 3.5-.5-2-1.5-3-3.5-3.5 2-.5 3-1.5 3.5-3.5ZM17.5 12c.4 1.6 1.2 2.4 2.8 2.8-1.6.4-2.4 1.2-2.8 2.8-.4-1.6-1.2-2.4-2.8-2.8 1.6-.4 2.4-1.2 2.8-2.8Z"
      />
    </svg>
  );
}

export function IconDevices({ className = "size-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="4.5" width="13" height="9" rx="1.4" strokeLinecap="round" strokeLinejoin="round" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M7 17.5h5M16.5 10h4v7h-4a1 1 0 0 1-1-1v-5a1 1 0 0 1 1-1Z" />
    </svg>
  );
}

export function IconCheck({ className = "size-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="m5 13 4 4L19 7" />
    </svg>
  );
}

export function IconX({ className = "size-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M6 18 18 6" />
    </svg>
  );
}

export function IconSearch({ className = "size-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="11" cy="11" r="6.5" strokeLinecap="round" strokeLinejoin="round" />
      <path strokeLinecap="round" strokeLinejoin="round" d="m20 20-4.3-4.3" />
    </svg>
  );
}

export function Spinner({ className = "size-4" }) {
  return (
    <svg className={`${className} animate-spin`} viewBox="0 0 24 24" fill="none">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 0 1 8-8v4a4 4 0 0 0-4 4H4Z" />
    </svg>
  );
}
FILEEOF

echo 'Actualizando src/components/NoteCard.jsx...'
mkdir -p $(dirname src/components/NoteCard.jsx)
cat > src/components/NoteCard.jsx << 'FILEEOF'
import { useState } from "react";
import { useNotes } from "../context/NotesContext";
import { Link } from "react-router-dom";
import { IconPencil, IconTrash, IconCalendar, IconCheck } from "./Icons";
import ConfirmDialog from "./ConfirmDialog";
import { useToast } from "../context/ToastContext";

function NoteCard({ note, index = 0 }) {
  const { deleteNote, toggleComplete } = useNotes();
  const toast = useToast();
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [toggling, setToggling] = useState(false);
  const completed = !!note.completed;

  const handleDelete = async () => {
    setDeleting(true);
    const ok = await deleteNote(note._id);
    setDeleting(false);
    setConfirmOpen(false);
    if (ok) toast.success("Nota eliminada");
    else toast.error("No se pudo eliminar la nota");
  };

  const handleToggle = async () => {
    setToggling(true);
    const ok = await toggleComplete(note._id, !completed);
    setToggling(false);
    if (!ok) toast.error("No se pudo actualizar la nota");
  };

  return (
    <>
      <div
        className={`group relative flex w-full flex-col justify-between overflow-hidden rounded-xl border p-5 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-black/30 animate-card-in ${
          completed
            ? "border-zinc-800/60 bg-zinc-900/30"
            : "border-zinc-800 bg-zinc-900/60 hover:border-zinc-700"
        }`}
        style={{ animationDelay: `${Math.min(index, 8) * 60}ms` }}
      >
        <span
          className={`absolute inset-y-0 left-0 w-1 bg-gradient-to-b opacity-70 ${
            completed
              ? "from-emerald-500 to-teal-500"
              : "from-indigo-500 to-purple-500"
          }`}
        />

        <header className="flex justify-between items-start gap-2">
          <div className="flex items-start gap-2.5 min-w-0">
            <button
              onClick={handleToggle}
              disabled={toggling}
              title={completed ? "Marcar como pendiente" : "Marcar como completada"}
              className={`mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-md border transition disabled:opacity-50 ${
                completed
                  ? "border-emerald-500 bg-emerald-500 text-white"
                  : "border-zinc-600 text-transparent hover:border-emerald-500"
              }`}
            >
              <IconCheck className="size-3.5" />
            </button>
            <h1
              className={`text-lg font-bold break-words ${
                completed ? "text-zinc-500 line-through" : "text-white"
              }`}
            >
              {note.title}
            </h1>
          </div>
          <div className="flex gap-x-1 items-center shrink-0 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity">
            <Link
              to={`/notes/${note._id}`}
              className="flex size-7 items-center justify-center rounded-md text-zinc-400 hover:bg-zinc-800 hover:text-sky-400 transition"
              title="Editar"
            >
              <IconPencil className="size-3.5" />
            </Link>
            <button
              onClick={() => setConfirmOpen(true)}
              className="flex size-7 items-center justify-center rounded-md text-zinc-400 hover:bg-zinc-800 hover:text-red-400 transition"
              title="Eliminar"
            >
              <IconTrash className="size-3.5" />
            </button>
          </div>
        </header>
        <p
          className={`text-sm mt-2 break-words ${
            completed ? "text-zinc-600 line-through" : "text-zinc-400"
          }`}
        >
          {note.description}
        </p>
        <span className="flex items-center gap-1.5 text-xs text-zinc-600 mt-4">
          <IconCalendar className="size-3.5" />
          {new Date(note.date).toLocaleDateString()}
        </span>
      </div>

      <ConfirmDialog
        open={confirmOpen}
        title="¿Eliminar esta nota?"
        description={`"${note.title}" se eliminará permanentemente.`}
        onCancel={() => setConfirmOpen(false)}
        onConfirm={handleDelete}
        loading={deleting}
      />
    </>
  );
}

export default NoteCard;
FILEEOF

echo 'Actualizando src/pages/NotesPages.jsx...'
mkdir -p $(dirname src/pages/NotesPages.jsx)
cat > src/pages/NotesPages.jsx << 'FILEEOF'
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
FILEEOF

echo 'Actualizando src/context/NotesContext.jsx...'
mkdir -p $(dirname src/context/NotesContext.jsx)
cat > src/context/NotesContext.jsx << 'FILEEOF'
import { createContext, useContext, useState } from "react";
import {
  createNotesRequest,
  getNotesRequest,
  deleteNotesRequest,
  getNoteRequest,
  updateNotesRequest,
} from "../api/notes";

const NoteContext = createContext();

export const useNotes = () => {
  const context = useContext(NoteContext);
  if (!context) {
    throw new Error("useNotes must be used within a NotesProvider");
  }
  return context;
};

export function NoteProvider({ children }) {
  const [notes, setNotes] = useState([]);
  const [loadingNotes, setLoadingNotes] = useState(false);

  const getNotes = async () => {
    setLoadingNotes(true);
    try {
      const res = await getNotesRequest();
      setNotes(res.data);
    } catch (error) {
      console.error("Error al obtener notas:", error);
    } finally {
      setLoadingNotes(false);
    }
  };

  const createNotes = async (note) => {
    try {
      await createNotesRequest(note);
      await getNotes();
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  };

  const deleteNote = async (id) => {
    try {
      const res = await deleteNotesRequest(id);
      if (res.status == 204) {
        setNotes((prev) => prev.filter((note) => note._id != id));
        return true;
      }
      return false;
    } catch (error) {
      console.log(error);
      return false;
    }
  };

  const getNote = async (id) => {
    try {
      const res = await getNoteRequest(id);
      return res.data;
    } catch (error) {
      console.error(error);
    }
  };

  const updateNote = async (id, note) => {
    try {
      await updateNotesRequest(id, note);
      await getNotes();
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  const toggleComplete = async (id, completed) => {
    try {
      await updateNotesRequest(id, { completed });
      setNotes((prev) =>
        prev.map((n) => (n._id === id ? { ...n, completed } : n))
      );
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  return (
    <NoteContext.Provider
      value={{
        notes,
        loadingNotes,
        getNotes,
        createNotes,
        deleteNote,
        getNote,
        updateNote,
        toggleComplete,
      }}
    >
      {children}
    </NoteContext.Provider>
  );
}
FILEEOF

echo 'Instalando dependencias (por si acaso) y compilando...'
npm run build

echo 'Reiniciando pm2...'
pm2 restart frontend
pm2 save

echo 'Listo! Frontend actualizado con buscador, marcar como completada y filtro.'
