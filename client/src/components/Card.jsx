import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import "../styles/card.css";

function Card({ image, name, id, visible }) {
  return (
    <figure className={visible ? "" : "invisible"}>
      <NavLink to={`/detail/${id}`}>
        <img loading="lazy" src={image} alt={name} />
        <figcaption>
          <h3>{name}</h3>
        </figcaption>
      </NavLink>
    </figure>
  );
}

export default Card;

Card.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  id: PropTypes.number,
  visible: PropTypes.boolean
};
