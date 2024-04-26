import PropTypes from "prop-types";
const Craft = ({ craft }) => {
  const {
    item_name,

    short_description,
  } = craft;
  return (
    <div className="">
      <div className="card md:w-72 glass">
        <figure>
          <img
            src="https://dt-monaliza.myshopify.com/cdn/shop/files/grid05_9c76563b-22d5-4f80-bbd1-1aa9ed68b7b6.jpg?v=1658894831"
            alt="image"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{item_name}</h2>
          <p>{short_description}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">View Details</button>
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
