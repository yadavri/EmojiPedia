import React from "react";
import Element from "./Element";
import emojipedia from "./emojipedia";

function CreateElement(element) {
  return (
    <Element
      key={element.id}
      emoji={element.emoji}
      name={element.name}
      meaning={element.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(CreateElement)};</dl>
    </div>
  );
}

export default App;
