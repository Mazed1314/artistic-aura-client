import { NavLink, useLoaderData } from "react-router-dom";

const AllCraft = () => {
  const getCraft = useLoaderData();
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="min-w-[90%] shadow-md border mx-auto border-gray-100 my-6">
          <thead>
            <tr className="bg-pink-800 text-white">
              <th className="py-4 px-6 text-lg text-left border-b">Image</th>
              <th className="py-4 px-6 text-lg text-left border-b">
                Craft Name
              </th>
              <th className="py-4 px-6 text-lg text-left border-b">Price</th>
              <th className="py-4 px-6 text-lg border-b text-end">Action</th>
            </tr>
          </thead>
          <tbody>
            {getCraft.map((craft) => (
              <>
                <tr className="hover:bg-gray-50 border-b transition duration-300">
                  <td className="py-4 px-4 flex justify-start">
                    <img
                      src={craft.photo}
                      alt="table navigate ui"
                      className="h-16 w-16 object-cover bg-gray-300"
                    />
                  </td>
                  <td className="py-4 px-6 border-b text-xl font-medium">
                    {craft.item_name}
                  </td>
                  <td className="py-4 px-6 border-b text-lg font-medium">
                    ${craft.price}
                  </td>
                  <td className="py-4 px-6 border-b text-end">
                    <NavLink
                      to={`/view-details/${craft._id}`}
                      className="btn btn-sm mt-2 rounded text-pink-700 border-pink-900 bg-transparent hover:bg-pink-900 hover:text-white"
                    >
                      View Details
                    </NavLink>
                  </td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllCraft;
