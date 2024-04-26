import PropTypes from "prop-types";
const Craft = ({ craft }) => {
  const {
    item_name,
    subcategory_name,
    short_description,
    stock_status,
    price,
    rating,
    processing_time,
    customization,
    photo,
  } = craft;
  return (
    <div>
      <div className="card w-96 glass">
        <figure>
          <img src={photo} alt="image" />
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
