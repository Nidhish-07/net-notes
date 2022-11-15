import React from "react";
import { FcDeleteDatabase } from "react-icons/fc";

import NoteList from "../props/props_noteList";

const Note = ({id,description,date}:NoteList) => {
  return (
    <div className="bg-green-400 mb-3 rounded-md p-2 min-h-[150px] flex flex-col justify-between ">
      <span className="text-2xl">{description}</span>
      <div className="flex items-center justify-between">
        <small>{date}</small>
        <FcDeleteDatabase  size="1.5rem" color="#000"/>
      </div>
    </div>
  );
};

export default Note;
