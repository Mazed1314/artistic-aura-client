const CategorySection = () => {
  const img_1 = "/images/MA305200-1024x698.jpg";
  const img_2 = "/images/alexander-krivitskiy-4XOJGHd4kUY-unsplash.jpg";
  const img_3 = "/images/boston-public-library-HKEcKGVBCtY-unsplash.jpg";
  const img_4 = "/images/europeana-SMWPYQhVRuY-unsplash.jpg";
  const img_5 = "/images/maxresdefault.jpg";
  const img_6 = "/images/chuttersnap-6tQ_sXnsYzM-unsplash.jpg";
  return (
    <div className="md:w-9/12 md:my-16 mx-auto ">
      <div className="flex flex-col md:flex-row gap-8 justify-center mb-4">
        <div className=" bg-transparent shadow-2xl">
          <figure>
            <img
              src={img_1}
              className="w-full h-64 border-8 border-white"
              alt="image"
            />
          </figure>
          <div className="p-2 my-auto mb-0 flex flex-col items-center">
            <h2 className="text-4xl">Landscape Painting</h2>
            <p className="py-3">
              {" "}
              Mountain view canvas, Forest based Landscape painting, etc.
            </p>
            <div className="">
              <button className="btn btn-sm rounded-none text-pink-700 border-pink-900 bg-transparent hover:bg-pink-900 hover:text-white">
                View Category
              </button>
            </div>
          </div>
        </div>
        <div className=" bg-transparent shadow-2xl">
          <figure>
            <img
              src={img_2}
              className="w-full h-64 border-8 border-white"
              alt="image"
            />
          </figure>
          <div className="p-2 my-auto mb-0 flex flex-col items-center">
            <h2 className="text-4xl">Landscape Painting</h2>
            <p className="py-3">
              {" "}
              Mountain view canvas, Forest based Landscape painting, etc.
            </p>
            <div className="">
              <button className="btn btn-sm rounded-none text-pink-700 border-pink-900 bg-transparent hover:bg-pink-900 hover:text-white">
                View Category
              </button>
            </div>
          </div>
        </div>
        <div className=" bg-transparent shadow-2xl">
          <figure>
            <img
              src={img_3}
              className="w-full h-64 border-8 border-white"
              alt="image"
            />
          </figure>
          <div className="p-2 my-auto mb-0 flex flex-col items-center">
            <h2 className="text-4xl">Landscape Painting</h2>
            <p className="py-3">
              {" "}
              Mountain view canvas, Forest based Landscape painting, etc.
            </p>
            <div className="">
              <button className="btn btn-sm rounded-none text-pink-700 border-pink-900 bg-transparent hover:bg-pink-900 hover:text-white">
                View Category
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-8 justify-center mb-4">
        <div className=" bg-transparent shadow-2xl">
          <figure>
            <img
              src={img_4}
              className="w-full h-64 border-8 border-white"
              alt="image"
            />
          </figure>
          <div className="p-2 my-auto mb-0 flex flex-col items-center">
            <h2 className="text-4xl">Landscape Painting</h2>
            <p className="py-3">
              {" "}
              Mountain view canvas, Forest based Landscape painting, etc.
            </p>
            <div className="">
              <button className="btn btn-sm rounded-none text-pink-700 border-pink-900 bg-transparent hover:bg-pink-900 hover:text-white">
                View Category
              </button>
            </div>
          </div>
        </div>
        <div className=" bg-transparent shadow-2xl">
          <figure>
            <img
              src={img_5}
              className="w-full h-64 border-8 border-white"
              alt="image"
            />
          </figure>
          <div className="p-2 my-auto mb-0 flex flex-col items-center">
            <h2 className="text-4xl">Landscape Painting</h2>
            <p className="py-3">
              {" "}
              Mountain view canvas, Forest based Landscape painting, etc.
            </p>
            <div className="">
              <button className="btn btn-sm rounded-none text-pink-700 border-pink-900 bg-transparent hover:bg-pink-900 hover:text-white">
                View Category
              </button>
            </div>
          </div>
        </div>
        <div className=" bg-transparent shadow-2xl">
          <figure>
            <img
              src={img_6}
              className="w-full h-64 border-8 border-white"
              alt="image"
            />
          </figure>
          <div className="p-2 my-auto mb-0 flex flex-col items-center">
            <h2 className="text-4xl">Landscape Painting</h2>
            <p className="py-3">
              {" "}
              Mountain view canvas, Forest based Landscape painting, etc.
            </p>
            <div className="">
              <button className="btn btn-sm rounded-none text-pink-700 border-pink-900 bg-transparent hover:bg-pink-900 hover:text-white">
                View Category
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategorySection;
