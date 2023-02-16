import HeroBottom from "./heroBottom";
import HeroLeft from "./heroLeft";
import HeroRight from "./heroRight";
import Nav from "./nav";

const Hero = () => {
  return (
    <>
      <div className="hero-wrap bg-[#FDF8EE]">
        <Nav />
        <div className="md:grid md:grid-cols-[40%_60%] md:items-center">
          <HeroLeft />
          <HeroRight />
        </div>
        <HeroBottom /> {/* 3 Accebility  */}
      </div>
    </>
  );
};

export default Hero;
