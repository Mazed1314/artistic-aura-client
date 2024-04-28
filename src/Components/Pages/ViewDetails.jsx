import { Helmet } from "react-helmet";
import { useLoaderData, useParams } from "react-router-dom";
import { MdOutlineStarHalf } from "react-icons/md";
import { IoPricetagsSharp } from "react-icons/io5";

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
          <img src={photo} alt="" className="w-full h-[200px] lg:h-[500px]" />
        </div>
        <h2 className="text-center font-bold text-2xl my-6 pt-4 rounded-t-md">
          {item_name}
          {"("}
          <span className="text-gray-600 text-md font-medium">
            {subcategory_name}
          </span>
          {")"}
        </h2>
        <div className="px-2 md:px-8">
          <div className="mt-4 flex justify-between">
            <div className="md:flex justify-start gap-3">
              <p>
                processing_time:{" "}
                <span className="font-semibold text-gray-500">
                  {processing_time}
                </span>{" "}
                h
              </p>
              <p className="flex gap-1">
                <IoPricetagsSharp className="text-pink-700 text-xl font-medium" />
                <span className="text-gray-600 font-medium">${price}</span>
                <span className="text-gray-600 font-medium pl-2">
                  {stock_status}
                </span>
              </p>
            </div>
            <div className="flex gap-1">
              <span className="text-pink-700 text-2xl font-medium">
                <MdOutlineStarHalf />
              </span>{" "}
              <span className="font-semibold text-gray-500">{rating}</span>
            </div>
          </div>
          <h2 className="py-2">{customization}</h2>
          <div className="py-4 md:py-8 text-lg text-gray-600">
            {short_description}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
