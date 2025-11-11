// src/TodoItem.jsx

import PropTypes from "prop-types";

function TodoItem({ todo, onToggleTodo, onDeleteTodo }) {
  const itemStyle = {
    textDecoration: todo.completed ? "line-through" : "none",
    color: todo.completed ? "#ff0000ff" : "#fefefeff",
    fontSize: "1.2rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "8px 0",
  };

  return (
    <li style={itemStyle}>
      <div>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggleTodo(todo.id)}
          style={{ marginRight: "10px" }}
        />
        <span>{todo.text}</span>
      </div>

      <button
        onClick={() => onDeleteTodo(todo.id)}
        style={{
          marginLeft: "16px",
          backgroundColor: "#ff4d4d",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Delete
      </button>
    </li>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  onToggleTodo: PropTypes.func.isRequired,
  onDeleteTodo: PropTypes.func.isRequired,
};

export default TodoItem;
