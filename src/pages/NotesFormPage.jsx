import { useForm } from "react-hook-form";
import { useNotes } from "../context/NotesContext";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IconPencil, IconPlus, Spinner } from "../components/Icons";
import { useToast } from "../context/ToastContext";

function NotesFormPage() {
  const { register, handleSubmit, setValue } = useForm();
  const { createNotes, getNote, updateNote } = useNotes();
  const navigate = useNavigate();
  const params = useParams();
  const toast = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    async function loadNote() {
      if (params.id) {
        const note = await getNote(params.id);
        setValue("title", note.title);
        setValue("description", note.description);
      }
    }
    loadNote();
  }, []);

  const onSubmit = handleSubmit(async (data) => {
    setIsSubmitting(true);
    const ok = params.id
      ? await updateNote(params.id, data)
      : await createNotes(data);
    setIsSubmitting(false);
    if (ok) {
      toast.success(params.id ? "Nota actualizada" : "Nota creada");
      navigate("/notes");
    } else {
      toast.error("No se pudo guardar la nota. Intenta de nuevo.");
    }
  });

  const isEditing = Boolean(params.id);

  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center px-4">
      <div className="w-full max-w-md rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 sm:p-10 shadow-2xl shadow-black/30">
        <div className="flex items-center gap-3 mb-6">
          <span className="flex size-10 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400">
            {isEditing ? (
              <IconPencil className="size-4.5" />
            ) : (
              <IconPlus className="size-4.5" />
            )}
          </span>
          <h1 className="text-xl font-bold">
            {isEditing ? "Editar nota" : "Nueva nota"}
          </h1>
        </div>
        <form onSubmit={onSubmit} className="space-y-3">
          <input
            type="text"
            className="w-full bg-zinc-950/60 border border-zinc-800 text-white px-4 py-2.5 rounded-lg placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
            placeholder="Title"
            {...register("title")}
            autoFocus
          />
          <textarea
            rows="3"
            className="w-full bg-zinc-950/60 border border-zinc-800 text-white px-4 py-2.5 rounded-lg placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition resize-none"
            placeholder="Description"
            {...register("description")}
          ></textarea>
          <button
            disabled={isSubmitting}
            className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-indigo-600 px-3 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo-950/40 hover:bg-indigo-500 active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed transition"
          >
            {isSubmitting && <Spinner className="size-4" />}
            {isSubmitting ? "Guardando..." : "Save"}
          </button>
        </form>
      </div>
    </div>
  );
}
export default NotesFormPage;
