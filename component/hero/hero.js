import HeroBottom from "./heroBottom";
import HeroLeft from "./heroLeft";
import HeroRight from "./heroRight";
import Nav from "./nav";

const Hero = () => {
  return (
    <>
      <div className="hero-wrap bg-[#FDF8EE] sm:bg-[red]">
        <Nav />
        <HeroLeft />
        <HeroRight />
        <HeroBottom /> {/* 3 Accebility  */}
      </div>
    </>
  );
};

export default Hero;
