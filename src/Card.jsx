import PropTypes from "prop-types";

function Card({ title, children }) {
  return (
    <div
      className="card"
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "16px",
        margin: "10px",
      }}
    >
      {title && <h3 className="card-title">{title}</h3>}
      {title && <hr />}

      <div className="card-content">{children}</div>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Card;
