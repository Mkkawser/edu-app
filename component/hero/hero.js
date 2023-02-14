import HeroBottom from "./heroBottom";
import HeroLeft from "./heroLeft";
import HeroRight from "./heroRight";
import Nav from "./nav";

const Hero = () => {
  return (
    <>
      <div className="hero-wrap bg-[#FDF8EE] ">
        <Nav />
        <HeroLeft />
        <HeroRight />
        <HeroBottom />
      </div>
    </>
  );
};

export default Hero;