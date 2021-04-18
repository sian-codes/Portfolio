import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

function createEntry(emojiTerm) {
  return (
    <Entry
      key={emojiTerm.id}
      emoji={emojiTerm.emoji}
      name={emojiTerm.name}
      description={emojiTerm.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span> Emojipedia! </span>
      </h1>
      <d1 className="dictionary">{emojipedia.map(createEntry)}</d1>
    </div>
  );
}

export default App;
