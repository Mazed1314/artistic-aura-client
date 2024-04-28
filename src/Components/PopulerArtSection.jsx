const PopulerArtSection = () => {
  const img_1 = "/images/home04_600x.webp";
  const img_2 = "/images/Shop12_600x.webp";
  const img_3 = "/images/Shop11_600x.webp";
  const img_4 = "/images/Shop03_600x.webp";
  const img_5 = "/images/Shop04_600x.webp";
  return (
    <div>
      <div className="flex flex-col md:flex-row gap-8 justify-center mb-4">
        <div className="p-2  md:w-96 bg-transparent">
          <figure>
            <img src={img_1} alt="image" />
          </figure>
          <div className="md:pl-0 card-body">
            <h2 className=" text-4xl">Fantasy Art</h2>
            <p>$850.00</p>
            <div className="card-actions">
              <button className="btn rounded-none text-pink-700 border-pink-900 bg-transparent hover:bg-pink-900 hover:text-white">
                Add to cart
              </button>
            </div>
          </div>
        </div>
        <div className="p-2  md:w-96 bg-transparent">
          <figure>
            <img src={img_2} alt="image" />
          </figure>
          <div className="md:pl-0 card-body">
            <h2 className=" text-4xl">Dragon Art</h2>
            <p>$1,200.00</p>
            <div className="card-actions ">
              <button className="btn rounded-none text-pink-700 border-pink-900 bg-transparent hover:bg-pink-900 hover:text-white">
                Add to cart
              </button>
            </div>
          </div>
        </div>
        <div className="p-2  md:w-96 bg-transparent">
          <figure>
            <img src={img_3} alt="image" />
          </figure>
          <div className="md:pl-0 card-body">
            <h2 className=" text-4xl">Impressionism Art</h2>
            <p>$690.00</p>
            <div className="card-actions ">
              <button className="btn rounded-none text-pink-700 border-pink-900 bg-transparent hover:bg-pink-900 hover:text-white">
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-8 ">
        <div className="p-2  md:w-96 bg-transparent">
          <figure>
            <img src={img_4} alt="image" />
          </figure>
          <div className="md:pl-0 card-body">
            <h2 className=" text-4xl">ImageThink</h2>
            <p>$625.00</p>
            <div className="card-actions ">
              <button className="btn rounded-none text-pink-700 border-pink-900 bg-transparent hover:bg-pink-900 hover:text-white">
                Add to cart
              </button>
            </div>
          </div>
        </div>
        <div className="p-2 md:w-96 bg-transparent">
          <figure>
            <img src={img_5} alt="image" />
          </figure>
          <div className="md:pl-0 card-body">
            <h2 className=" text-4xl">Fine Art Spot</h2>
            <p>$580.00</p>
            <div className="card-actions ">
              <button className="btn rounded-none text-pink-700 border-pink-900 bg-transparent hover:bg-pink-900 hover:text-white">
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopulerArtSection;
