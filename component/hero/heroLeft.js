const HeroLeft = () => {
  return (
    <>
      <div className="font-Roboto pt-4 px-6 relative">
        {/* Icon Circle */}
        <div className="rotate-[60deg] absolute top-0 flex opacity-80">
          <img
            className="w-[20px] h-[20px]"
            src="/img/hero-circle2.png"
            alt=""
          />
          <img
            className="h-[10px] w-[10px]"
            src="/img/hero-circle3.png"
            alt=""
          />
        </div>
        {/* Icon Rular */}
        <div className="absolute top-6 right-5">
          <img className="w-[35px] h-[35px]" src="/img/hero-ruler.png" alt="" />
        </div>
        {/* Title */}
        <p className="font-extrabold text-[7vw] pt-[12px] md:text-[4vw]">
          The <span className="text-[#FF7426]">Smart</span> Choice For{" "}
          <span className="text-[#FF7426]">Future</span>
        </p>
        {/* Description */}
        <p className="font-medium leading-[171%] text-[#8a8a8a] text-[3vw] py-4 md:text-[12px]">
          Elearn is a global training provider based across the UK that
          specialises in accredited and bespoke training courses. We crush
          the...
        </p>
        {/* Search Location */}
        <div className="search flex items-center rounded-[50px] bg-[#ffff] border-2 gap-[5px] max-w-fit h-[40px]">
          <div className="search-icon min-w-[15px] w-[15px] ml-[5px]">
            <img src="./img/hero-search.png" alt="Location Search" />
          </div>
          <input
            className="border-none outline-none max-w-[34vw] placeholder:text-[11px] placeholder:text-[#0F335E]"
            type="text"
            placeholder="Search for a location..."
          />
          <button className="bg-[#4D2C5E] border-none outline-none text-white rounded-[20px] p-1 font-normal">
            Continue
          </button>
        </div>
        {/* Icon Lab & Jemiti */}
        <div className="flex max-w-[80%] justify-between py-4 opacity-80">
          <div className="w-[40px] h-[40px]">
            <img className="w-full h-full" src="/img/hero-lab.png" alt="" />
          </div>
          <div className="w-[40px] h-[40px] ">
            <img className="w-full h-full" src="/img/hero-jemiti.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroLeft;
