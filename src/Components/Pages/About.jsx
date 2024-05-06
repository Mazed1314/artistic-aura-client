import { Helmet } from "react-helmet-async";

const About = () => {
  return (
    <div className=" text-gray-600 p-4 rounded-t-md">
      <Helmet>
        <title>About</title>
      </Helmet>
      <h2 className="text-center text-xl md:text-3xl my-2 text-pink-800">
        Welcome to Artistic Aura!
      </h2>
      <div className="">
        <div className="my-4">
          <img src="/images/" className="w-full " alt="" />
        </div>
        <p className="text-center text-lg md:w-9/12 mx-auto">
          At Artistic Aura, we believe in the transformative power of
          creativity. Our platform serves as a sanctuary for artists and art
          enthusiasts alike, fostering a vibrant community where imagination
          knows no bounds.
        </p>
        <div className="flex flex-col md:flex-row my-20">
          <div className="w-full md:w-1/2 my-4">
            <img src="/images/grid01.webp" alt="" />
          </div>
          <div className="w-full md:w-1/2 text-center my-auto px-8">
            <h2 className="font-medium text-xl md:text-2xl">
              Acrylic Painting
            </h2>
            <p>
              Acrylic painting: vibrant colors, quick-drying versatility.
              Perfect for artists of all levels.
            </p>
          </div>
        </div>
        <div className="flex flex-col-reverse md:flex-row my-20">
          <div className="w-full md:w-1/2 text-center my-auto px-8">
            <h2 className="font-medium text-xl md:text-2xl">
              Watercolor Painting
            </h2>
            <p>
              Watercolor painting: translucent layers, fluid beauty. Ideal for
              landscapes and florals.
            </p>
          </div>
          <div className="w-full md:w-1/2 my-4">
            <img src="/images/grid02.webp" alt="" />
          </div>
        </div>
        <div className="flex flex-col md:flex-row my-20">
          <div className="w-full md:w-1/2 my-4">
            <img
              src="/images/grid03.webp"
              className="h-full w-full rounded-tl-[150px] rounded-b-[150px] hover:border-0"
              alt=""
            />
          </div>
          <div className="w-full md:w-1/2 px-8">
            <h2 className="py-1 text-3xl">Extremely Versatile</h2>
            <p>
              Acrylic painting: vibrant colors, quick-drying versatility.
              Perfect for artists of all levels.
            </p>
            <div className="">
              <div className="py-2">
                {/* icon */}
                <p>
                  <h2 className="text-2xl py-1">Popular fine art</h2>
                  Are you an artist looking for a platform to showcase your
                  work? Or perhaps you're an art lover eager to connect with
                  fellow enthusiasts?
                </p>
              </div>
              <div className="py-3">
                {/* icon */}
                <p>
                  <h2 className="text-2xl py-1">Online art exhibitions</h2>
                  Are you an artist looking for a platform to showcase your
                  work? Or perhaps you're an art lover eager to connect with
                  fellow enthusiasts?
                </p>
              </div>
              <div className="py-2">
                {/* icon */}
                <p>
                  <h2 className="text-2xl py-1">Best art galleries</h2>
                  Are you an artist looking for a platform to showcase your
                  work? Or perhaps you're an art lover eager to connect with
                  fellow enthusiasts?
                </p>
              </div>
            </div>
          </div>
        </div>
        <p className="py-4">
          <h2 className="font-semibold text-xl md:text-3xl">Our Mission</h2>
          Artistic Aura is more than just a website; it's a celebration of human
          expression. Our mission is to provide a space where artists can
          showcase their talents, connect with like-minded individuals, and
          inspire one another to push the boundaries of creativity.
        </p>
        <p className="py-4">
          <h2 className="font-semibold text-xl md:text-3xl">Get Involved </h2>
          Are you an artist looking for a platform to showcase your work? Or
          perhaps you're an art lover eager to connect with fellow enthusiasts?
          Whatever your passion may be, we invite you to join the Artistic Aura
          community. Together, let's ignite the spark of inspiration and unleash
          the boundless potential of artistic expression.
        </p>{" "}
      </div>

      <div className="flex flex-col md:flex-row gap-6 justify-between my-12">
        <div className="relative">
          <img
            src="images/team03_800x.webp"
            className="w-[340px] h-[500px]"
            alt=""
          />
          <div className="text-center text-white text-xl bg-pink-800 bg-opacity-50 absolute bottom-0 w-full py-2">
            <h2>Lisha Edwin</h2>
            <h2>
              <i className="text-lg">Artist</i>
            </h2>
          </div>
        </div>
        <div className="relative">
          <img
            src="images/team02_800x.webp"
            className="w-[340px] h-[500px]"
            alt=""
          />
          <div className="text-center text-white text-xl bg-pink-800 bg-opacity-50 absolute bottom-0 w-full py-2">
            <h2>James Watson</h2>
            <h2>
              <i className="text-lg">Manager</i>
            </h2>
          </div>
        </div>
        <div className="relative">
          <img
            src="images/team01_800x.webp"
            className="w-[340px] h-[500px]"
            alt=""
          />
          <div className="text-center text-white text-xl bg-pink-800 bg-opacity-50 absolute bottom-0 w-full py-2">
            <h2>Lara</h2>
            <h2>
              <i className="text-lg">CEO</i>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
