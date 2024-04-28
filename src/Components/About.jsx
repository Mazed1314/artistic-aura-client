import { Helmet } from "react-helmet-async";

const About = () => {
  return (
    <div className="bg-pink-100 text-gray-600 font-medium p-4 rounded-t-md">
      <Helmet>
        <title>Artistic Aura - About</title>
      </Helmet>
      <h2 className="text-center text-xl md:text-3xl my-2 text-pink-800">
        Welcome to Artistic Aura!
      </h2>
      <div className=" md:w-8/12 mx-auto">
        <div className=" my-4">
          <img src="/images/grid01.webp" className="w-full " alt="" />
        </div>
        <p>
          At Artistic Aura, we believe in the transformative power of
          creativity. Our platform serves as a sanctuary for artists and art
          enthusiasts alike, fostering a vibrant community where imagination
          knows no bounds.
        </p>
        <br />
        <p>
          <h2 className="font-bold text-xl">Our Mission</h2>
          Artistic Aura is more than just a website; it's a celebration of human
          expression. Our mission is to provide a space where artists can
          showcase their talents, connect with like-minded individuals, and
          inspire one another to push the boundaries of creativity.
        </p>
        <br />
        <p>
          <h2 className="font-bold text-xl">What We Offer</h2>
          Whether you're an established artist or just starting on your creative
          journey, Artistic Aura has something for you. From captivating visual
          art to stirring literary works, our platform features a diverse range
          of artistic endeavors. Explore our galleries, read our articles, and
          immerse yourself in the beauty of human imagination.
        </p>
        <br />
        <p>
          <h2 className="font-bold text-xl">Community Matters</h2>
          At the heart of Artistic Aura is our vibrant community. We believe
          that art has the power to bring people together, transcending
          boundaries of culture, language, and geography. Join us in celebrating
          diversity, fostering dialogue, and forging meaningful connections
          through the universal language of creativity.
        </p>
        <br />
        <p>
          <h2 className="font-bold text-xl">Get Involved </h2>
          Are you an artist looking for a platform to showcase your work? Or
          perhaps you're an art lover eager to connect with fellow enthusiasts?
          Whatever your passion may be, we invite you to join the Artistic Aura
          community. Together, let's ignite the spark of inspiration and unleash
          the boundless potential of artistic expression.
        </p>{" "}
        <br />
        <p>
          <h2 className="font-bold text-xl">Join Us</h2>
          Whether you're here to create, explore, or simply be inspired, we're
          thrilled to have you as part of the Artistic Aura family. Welcome to a
          world where imagination knows no limits. Welcome to Artistic Aura.
        </p>{" "}
        <br />
        <h2>Sincerely,</h2>
        <h2>
          Abdul Mazed <br /> Founder, Artistic Aura
        </h2>
      </div>
    </div>
  );
};

export default About;
