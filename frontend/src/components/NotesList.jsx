import { useEffect, useState } from "react";
import NoteCard from "./NoteCard";
import api from "../util/axios";

const NotesList = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const res = await api.get("/notes");
        setNotes(res.data);
      } catch (error) {
        console.error("Error while fetching notes", error);
      }
    };

    fetchNotes();
  }, []);

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {notes.map((note) => (
        <NoteCard key={note._id} note={note} setNotes={setNotes} />
      ))}
    </div>
  );
};
export default NotesList;
