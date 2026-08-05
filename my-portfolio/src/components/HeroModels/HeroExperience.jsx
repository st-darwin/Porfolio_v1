const HeroExperience = () => {
  return (
    // The wrapper now uses Flexbox to perfectly center the image in its half of the screen
    <div className="flex justify-center items-center w-full h-full p-5 md:p-10">
      <img 
        // We use responsive max-widths and aspect-square to keep it a perfect circle at any screen size
        className="w-full max-w-[350px] mt-40 xl:mt-40 md:max-w-[400px] xl:max-w-[500px] aspect-square object-cover rounded-full shadow-2xl transition-transform duration-600 " 
        src="images/portPic.png" 
   
        alt="Solomon - Developer" 
      />
    </div>
  );
};

export default HeroExperience; 