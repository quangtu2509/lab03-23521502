// src/TodoForm.jsx

import { useState } from "react";
import PropTypes from "prop-types";

function TodoForm({ onAddTodo }) {
  const [text, setText] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const newText = text.trim();
    if (newText === "") return;

    onAddTodo(newText);

    setText("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "16px" }}>
      <input
        type="text"
        placeholder="What needs to be done?"
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{ marginRight: "8px", padding: "4px" }}
      />
      <button type="submit">Add Todo</button>
    </form>
  );
}

TodoForm.propTypes = {
  onAddTodo: PropTypes.func.isRequired,
};

export default TodoForm;
