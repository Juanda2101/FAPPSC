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
