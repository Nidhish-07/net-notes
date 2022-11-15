import React, { useState } from "react";
import Notes from "./components/Notes";
import { nanoid } from "nanoid";

const App = () => {
  const [notes, setNotes] = useState<
    { id: string; description: string; date: string }[]
  >([{ id: nanoid(), description: "sadasd", date: "sadadsa" }]);

  return (
    <div className="mx-auto max-w-4xl px-4">
      <Notes notes={notes} />
    </div>
  );
};

export default App;
