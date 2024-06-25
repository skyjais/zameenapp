import React, { useState, useEffect } from "react";
const images = [
  "https://zameensquare.com/_next/static/media/Post-Property-Banner.f6ea47b2.jpg",
  "https://zameensquare.com/_next/static/media/homeHeaderImage.25bb3789.gif",
  "https://zameensquare.com/_next/static/media/Get-Our-Mobile-App-Now-web(new).d119e432.gif",
];

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero-section">
      <img
        src={images[currentImageIndex]}
        alt="Hero"
        style={{ width: "100%" }}
      />
    </div>
  );
};

export default HeroSection;
