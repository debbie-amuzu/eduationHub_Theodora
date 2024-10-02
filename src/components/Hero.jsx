const Hero = () => {
  return (
    <div className="hero">
      {/* Hero goes here */}
      <div className="overlay">
        <div className="hero-text">
          <h1>Learning Center for your kids</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br /> Quam nam
            inventore laudantium eveniet esse cumque repellat doloremque nisi at
            iure.
          </p>
          
          <button className="bttn">Explore more</button>
        </div>

        <div className="video">
            <button className="video-btn">Video</button>
          </div>
      </div>

    </div>
  );
};

export default Hero;
