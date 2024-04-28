import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../Providers/AuthProvider";

const AddCraft = () => {
  const { user } = useContext(AuthContext);

  const handleAddCraft = (event) => {
    event.preventDefault();

    const form = event.target;

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

    const addNewItem = {
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

    console.log(addNewItem);

    // send data to the server
    fetch("https://artistic-aura-server.vercel.app/addCraft", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addNewItem),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Craft Added Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div>
      <div className="bg-gray-200 p-4 md:w-2/3 mx-auto rounded-t-md">
        <h2 className="text-3xl text-center font-extrabold my-4">
          Add a Craft Item
        </h2>
        <form onSubmit={handleAddCraft}>
          {/* form item name and sub category name row */}
          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Item Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="item_name"
                  placeholder="item name"
                  className="input input-bordered w-full"
                  required
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 md:ml-4">
              <label className="label">
                <span className="label-text">Subcategory Name</span>
              </label>
              <select name="subcategory_name" className="rounded-md">
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
          </div>
          {/* form item name and sub category name row */}
          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Short Description</span>
              </label>
              <textarea
                className="rounded-lg pl-3 pt-2"
                name="short_description"
                placeholder="short description"
                rows="5"
                cols="50"
                required
              ></textarea>
            </div>
            <div className="flex flex-col w-full">
              <div className="form-control md:ml-4">
                <label className="label">
                  <span className="label-text">User Name</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="user_name"
                    defaultValue={user.displayName}
                    placeholder="user name"
                    className="input input-bordered w-full"
                    required
                  />
                </label>
              </div>
              <div className="form-control md:ml-4">
                <label className="label">
                  <span className="label-text">User Email</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="email"
                    defaultValue={user.email}
                    placeholder="user email"
                    className="input input-bordered w-full"
                    required
                  />
                </label>
              </div>
            </div>
          </div>
          {/* form price, rating customization and processing_time row  */}
          <div className="md:flex mb-8 gap-5">
            <div className="form-control md:w-1/4">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <label className="input-group">
                <input
                  type="number"
                  name="price"
                  placeholder="price"
                  className="input input-bordered w-full"
                  required
                />
              </label>
            </div>
            <div className="form-control md:w-1/4 ">
              <label className="label">
                <span className="label-text">Rating</span>
              </label>
              <label className="input-group">
                <input
                  type="number"
                  name="rating"
                  placeholder="rating"
                  className="input input-bordered w-full"
                  required
                />
              </label>
            </div>
            <div className="form-control md:w-1/4 ">
              <label className="label">
                <span className="label-text">Processing Time</span>
              </label>
              <label className="input-group">
                <input
                  type="number"
                  name="processing_time"
                  placeholder="processing time"
                  className="input input-bordered w-full"
                  required
                />
              </label>
            </div>
            <div className="flex flex-col md:w-1/4">
              <div className="form-control ">
                <label className="label">
                  <span className="label-text">Customization</span>
                </label>
                <select name="customization" className="rounded-md">
                  <option value="Customized">Yes</option>
                  <option value="Un Customized">No</option>
                </select>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Stock Status</span>
                </label>
                <select name="stock_status" className="rounded-md">
                  <option value="In stock">In stock</option>
                  <option value="Out of stock">Out of stock</option>
                </select>
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="mb-8">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Image</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="photo"
                  placeholder="Give image URL"
                  className="input input-bordered w-full"
                  required
                />
              </label>
            </div>
          </div>
          <div className="flex justify-center">
            <input type="submit" value="Add Item" className="btn " />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCraft;
