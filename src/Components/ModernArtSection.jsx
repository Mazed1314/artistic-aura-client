const ModernArtSection = () => {
  const img_1 = "/images/blog01.webp";
  const img_2 = "/images/blog02.webp";
  const img_3 = "/images/blog03.webp";
  return (
    <div>
      <div className="flex flex-col md:flex-row gap-8 py-4">
        <div className="p-2 md:w-96 bg-transparent">
          <figure>
            <img className="h-[400px] md:h-[500px]" src={img_1} alt="" />
          </figure>
          <div className=" card-body text-white bg-orange-400">
            <h2 className="text-4xl pb-4">Impressionism Art</h2>
            <p>By George</p>
          </div>
        </div>
        <div className="p-2 md:w-96 bg-transparent">
          <figure>
            <img className="h-[400px] md:h-[500px]" src={img_2} alt="" />
          </figure>
          <div className=" card-body text-white bg-red-800">
            <h2 className="text-4xl pb-4">Expressionism Art</h2>
            <p>By Antony</p>
          </div>
        </div>
        <div className="p-2 md:w-96 bg-transparent">
          <figure>
            <img className="h-[400px] md:h-[500px]" src={img_3} alt="" />
          </figure>
          <div className=" card-body text-white bg-cyan-500">
            <h2 className="text-4xl pb-4">Abstract Art</h2>
            <p>By Lisha</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModernArtSection;
