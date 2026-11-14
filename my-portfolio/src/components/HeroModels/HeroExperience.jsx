
const HeroExperience = () => {
  return (
    <div className="hero-image-container">
      <div className="hero-image-glow" />

      <div className="hero-image-frame">
        <img
          src="/images/portpic1.jpg"
          alt="Solomon - Developer"
          className="hero-profile-image"
        />
      </div>

      <div className="hero-image-caption">
        <span className="hero-caption-dot" />
        <span>Building digital experiences</span>
      </div>
    </div>
  );
};

export default HeroExperience;
