import React from "react";

function collab({ open, children, onClose }) {
  if (!open) return null;
  return (
    <div>
      <button onClick={onClose}>Close Button</button>
      Hello World
    </div>
  );
}
export default collab;
