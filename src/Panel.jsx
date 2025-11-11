// src/Panel.jsx
import PropTypes from "prop-types";

function Panel({ title, children, isActive, onShow }) {
  return (
    <section
      className="panel"
      style={{ border: "1px solid #ccc", margin: "10px 0" }}
    >
      <h3 style={{ margin: "0", padding: "8px" }}>{title}</h3>

      {isActive ? (
        <div style={{ padding: "8px" }}>{children}</div>
      ) : (
        <button onClick={onShow} style={{ margin: "8px" }}>
          Show
        </button>
      )}
    </section>
  );
}

Panel.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  isActive: PropTypes.bool.isRequired,
  onShow: PropTypes.func.isRequired,
};

export default Panel;
