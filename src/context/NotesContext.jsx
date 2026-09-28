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
