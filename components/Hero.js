const Hero = () => {
  return (
    <section
      className="bg-cover bg-center h-96"
      style={{ backgroundImage: "url(/path-to-your-hero-image.jpg)" }}
    >
      <div className="container mx-auto h-full flex items-center justify-center">
        <div className="text-white text-center">
          <h1 className="text-4xl font-bold mb-4">
            Welcome to Ambient Graphics
          </h1>
          <a
            href="/gallery"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Explore the Gallery
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
