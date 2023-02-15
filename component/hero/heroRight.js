import Image from "next/image";

const HeroRight = () => {
  return (
    <>
      <div className="wrap p-6 flex flex-wrap items-center justify-center">
        {/* text */}
        <div className="flex justify-center p-0">
          <p className="font-Poppins font-bold text-[#adb1b6] pb-2 text-[5vw] ">
            Digital Learning
          </p>
        </div>
        {/* picture */}
        <div className="max-w-[75vw] flex justify-center">
          <Image
            src="/img/hero-img.png"
            height={1000}
            width={1000}
            alt="Hero"
          />
        </div>
      </div>
    </>
  );
};

export default HeroRight;
