import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
const Craft = ({ craft }) => {
  const {
    _id,
    item_name,

    short_description,
  } = craft;
  return (
    <div className="">
      <div className="rounded md:w-60 glass">
        <figure>
          <img
            src="https://dt-monaliza.myshopify.com/cdn/shop/files/grid05_9c76563b-22d5-4f80-bbd1-1aa9ed68b7b6.jpg?v=1658894831"
            alt="image"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{item_name}</h2>
          <p>{short_description.slice(0, 100)}...</p>
          <div className="card-actions justify-end">
            <NavLink
              to={`/view-details/${_id}`}
              className="btn rounded text-pink-700 border-pink-900 bg-transparent hover:bg-pink-900 hover:text-white"
            >
              View Details
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

Craft.propTypes = {
  craft: PropTypes.object,
};

export default Craft;
