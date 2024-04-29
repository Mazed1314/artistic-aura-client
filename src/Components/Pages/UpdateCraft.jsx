import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const UpdateCraft = () => {
  const navigate = useNavigate();
  const craft = useLoaderData();
  const {
    _id,
    item_name,
    subcategory_name,
    short_description,
    stock_status,
    price,
    rating,
    processing_time,
    customization,
    photo,
    email,
    user_name,
  } = craft;

  const handleUpdateCraft = (e) => {
    e.preventDefault();

    const form = e.target;

    const item_name = form.item_name.value;
    const subcategory_name = form.subcategory_name.value;
    const short_description = form.short_description.value;
    const stock_status = form.stock_status.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const processing_time = form.processing_time.value;
    const customization = form.customization.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const user_name = form.user_name.value;

    const updatedItem = {
      item_name,
      subcategory_name,
      short_description,
      stock_status,
      price,
      rating,
      processing_time,
      customization,
      photo,
      email,
      user_name,
    };

    fetch(`https://artistic-aura-server.vercel.app/craft/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedItem),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Updated Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
          navigate(-1);
        }
      });
  };

  return (
    <div>
      <Helmet>
        <title>Edit Craft</title>
      </Helmet>

      <div className="bg-transparent border shadow-2xl p-4 md:w-2/3 mx-auto rounded-t-md">
        <h2 className="text-3xl text-center font-extrabold my-4">Edit Item</h2>
        <form onSubmit={handleUpdateCraft}>
          <div className="flex flex-col md:flex-row gap-5 w-full">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-lg font-semibold">
                  User Name
                </span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="user_name"
                  defaultValue={user_name}
                  placeholder="user name"
                  className="input input-bordered w-full"
                  required
                />
              </label>
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-lg font-semibold">
                  User Email
                </span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="email"
                  defaultValue={email}
                  placeholder="user email"
                  className="input input-bordered w-full"
                  required
                />
              </label>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-5 w-full">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-lg font-semibold">
                  Item Name
                </span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="item_name"
                  defaultValue={item_name}
                  placeholder="item name"
                  className="input input-bordered w-full"
                  required
                />
              </label>
            </div>
            <div className="w-full flex gap-5">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text text-lg font-semibold">
                    Price
                  </span>
                </label>
                <label className="input-group">
                  <input
                    type="number"
                    name="price"
                    placeholder="price"
                    defaultValue={price}
                    className="input input-bordered w-full"
                    required
                  />
                </label>
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text text-lg font-semibold">
                    Processing Time
                  </span>
                </label>
                <label className="input-group">
                  <input
                    type="number"
                    name="processing_time"
                    placeholder="processing time"
                    defaultValue={processing_time}
                    className="input input-bordered w-full"
                    required
                  />
                </label>
              </div>
            </div>
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-lg font-semibold">Image</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="photo"
                defaultValue={photo}
                placeholder="give image URL"
                className="input input-bordered w-full"
                required
              />
            </label>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 my-3">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg font-semibold">
                  Subcategory Name
                </span>
              </label>
              <select
                name="subcategory_name"
                defaultValue={subcategory_name}
                className="rounded-md border"
              >
                <option value="Landscape Painting">Landscape Painting</option>
                <option value="Portrait Drawing">Portrait Drawing</option>
                <option value="Watercolour Painting">
                  Watercolour Painting
                </option>
                <option value="Oil Painting">Oil Painting</option>
                <option value="Charcoal Sketching">Charcoal Sketching</option>
                <option value="Cartoon Drawing">Cartoon Drawing</option>
              </select>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg font-semibold">
                  Stock Status
                </span>
              </label>
              <select
                name="stock_status"
                defaultValue={stock_status}
                className="rounded-md border"
              >
                <option value="In stock">In stock</option>
                <option value="Out of stock">Out of stock</option>
              </select>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg font-semibold">Rating</span>
              </label>
              <select
                name="rating"
                defaultValue={rating}
                className="rounded-md border"
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg font-semibold">
                  Customization
                </span>
              </label>
              <select
                name="customization"
                defaultValue={customization}
                className="rounded-md border"
              >
                <option value="Customized">Yes</option>
                <option value="Un Customized">No</option>
              </select>
            </div>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text text-lg font-semibold">
                Short Description
              </span>
            </label>
            <textarea
              className="rounded-lg pl-3 pt-2"
              name="short_description"
              defaultValue={short_description}
              placeholder="short description"
              rows="5"
              cols="40"
              required
            ></textarea>
          </div>

          <div className="flex justify-center my-4">
            <input
              type="submit"
              value="Update"
              className="btn btn-md text-lg font-bold"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateCraft;
