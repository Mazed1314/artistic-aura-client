const PopulerArtSection = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row gap-8 justify-center mb-4">
        <div className="p-2  md:w-96 bg-transparent">
          <figure>
            <img
              src="https://dt-monaliza.myshopify.com/cdn/shop/products/home04_600x.jpg?v=1658476398"
              alt="Shoes"
            />
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
            <img
              src="https://dt-monaliza.myshopify.com/cdn/shop/products/Shop12_600x.jpg?v=1658476403"
              alt="Shoes"
            />
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
            <img
              src="https://dt-monaliza.myshopify.com/cdn/shop/products/Shop11_600x.jpg?v=1658476406"
              alt="Shoes"
            />
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
            <img
              src="https://dt-monaliza.myshopify.com/cdn/shop/products/Shop03_600x.jpg?v=1658476421"
              alt="Shoes"
            />
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
            <img
              src="https://dt-monaliza.myshopify.com/cdn/shop/products/Shop04_600x.jpg?v=1658476420"
              alt="Shoes"
            />
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
