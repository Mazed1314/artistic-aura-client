import { Helmet } from "react-helmet";
import { useLoaderData, useParams } from "react-router-dom";
import { MdDateRange, MdOutlinePriceCheck } from "react-icons/md";
import { GiGunStock } from "react-icons/gi";

const ViewDetails = () => {
  const cards = useLoaderData();
  const { _id } = useParams();
  const card = cards.find((c) => c._id == _id);
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
  } = card;
  return (
    <div>
      <div className="mx-2 md:mx-20 bg-slate-50">
        <Helmet>
          <title>Artistic Aura | Estate_details : {_id}</title>
        </Helmet>

        <div className="w-full">
          <img src={photo} alt="" className="w-full" />
        </div>
        <h2 className="text-center font-bold text-2xl my-6 pt-8 rounded-t-md">
          {item_name}
        </h2>
        <div className="px-2 md:px-8">
          <div className="my-4 md:flex justify-start text-xl font-bold">
            <p>
              <MdDateRange />
              {processing_time}
              <span className="text-gray-600 font-medium">
                {"rating icon"}{" "}
              </span>{" "}
              <span className="font-normal">{rating}</span>
            </p>
            <p>
              Icon
              <span className="text-gray-600 font-medium">
                {subcategory_name}
              </span>
            </p>
            <p>
              <GiGunStock />
              <span className="text-gray-600 font-medium">{stock_status}</span>
            </p>
            <p>
              <MdOutlinePriceCheck />{" "}
              <span className="text-gray-600 font-medium">{price}</span>
            </p>
          </div>
          <div className="py-4 md:py-8 text-lg text-gray-600">
            {short_description}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
