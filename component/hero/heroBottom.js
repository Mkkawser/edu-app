const HeroBottom = () => {
  return (
    <>
      <div className="p-4 lg:mx-auto lg:w-[900px]">
        <div className="bg-[#4D2C5E] rounded-[20px] p-1 md:flex md:p-2 md:gap-4 lg:p-4">
          {/*  3 Accebility  */}

          <HeroCard
            imageSrc="/img/hero-online-test.png"
            title="Learn The Latest Skills"
            description="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a BC, making it over 2000 years old."
          />

          <HeroCard
            imageSrc="/img/hero-exam.png"
            title="Get Ready For a Career"
            description="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a BC, making it over 2000 years old."
          />

          <HeroCard
            imageSrc="/img/hero-certification.png"
            title="Earn a Certificate"
            description="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a BC, making it over 2000 years old."
          />
        </div>
      </div>
    </>
  );
};

const HeroCard = ({ imageSrc, title, description }) => {
  return (
    <div className="flex items-center gap-2 p-2 pr-[2.5vw] md:pr-0 md:p-1">
      <div className="bg-[rgba(255,255,255,0.2)] p-2 max-w-[20%] rounded-[20px]">
        <img className="w-full object-cover" src={imageSrc} alt={title} />
      </div>

      <div className="max-w-[60vw] font-Roboto text-white">
        <p className="text-[3.5vw] md:text-[18px] md:w-max">{title}</p>
        <p className="text-[rgba(255,255,255,0.6)] text-[2.7vw] md:text-[11px]">
          {description}
        </p>
      </div>
    </div>
  );
};

export default HeroBottom;
