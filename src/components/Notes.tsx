import React from "react";
import Note from "./Note";
import NoteList from "../props/props_noteList";

const Notes = ({ notes }: any) => {
  return (
    <div className="grid gap-3 grid-cols-4 ">
      {notes &&
        notes.map((n: NoteList) => (
          <Note id={n.id} description={n.description} date={n.date} />
        ))}
    </div>
  );
};

export default Notes;
