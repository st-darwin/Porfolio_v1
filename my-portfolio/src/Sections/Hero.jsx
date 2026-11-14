
import React from "react";
import { words } from "../Constants";
import Button from "../components/Button";
import HeroExperience from "../components/HeroModels/HeroExperience";
import AnimatedCounter from "../components/AnimatedCounter";

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      {/* Background */}
      <div className="hero-background">
        <img src="/images/bg.png" alt="" />
      </div>

      {/* Main Hero Content */}
      <div className="hero-layout">
        {/* Left: Text Content */}
        <header className="hero-content">
          <div className="hero-content-inner">
            <span className="hero-eyebrow">
              <span className="hero-status-dot" />
              Full-Stack Developer
            </span>

            <div className="hero-heading">
              <h1 className="hero-title">
                Shaping
                <span className="hero-slide">
                  <span className="wrapper">
                    {words.map((word) => (
                      <span
                        className="hero-word"
                        key={`${word.text}`}
                      >
                        <span className="hero-word-inner">
                          <img
                            src={word.imgPath}
                            alt=""
                            className="hero-word-icon"
                          />
                          {word.text}
                        </span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>

              <h1 className="hero-title">
                into real projects
              </h1>

              <h1 className="hero-title hero-title-muted">
                that deliver results.
              </h1>
            </div>

            <p className="hero-description">
              Hi, I'm Solomon — a developer based in Nigeria with a passion
              for building modern, responsive, and meaningful digital
              experiences.
            </p>

            <div className="hero-actions">
              <Button
                className="hero-button md:justify-center md:w-80 md:h-16 w-70"
                id="button"
                text="See my Work"
              />
            </div>

            <span className="hero-location">
              Based in Lagos, Nigeria
            </span>
          </div>
        </header>

        {/* Right: Profile Image */}
        <figure className="hero-visual">
          <HeroExperience />
        </figure>
      </div>

      {/* Counter */}
      <AnimatedCounter />
    </section>
  );
};

export default Hero;
