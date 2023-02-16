const HeroBottom = () => {
  return (
    <>
      <div className="p-4">
        <div className="bg-[#4D2C5E] rounded-[20px] p-1 md:flex md:p-2 md:gap-4">
          {/*  3 Accebility  */}
          <div className="flex items-center gap-2 p-2 pr-[2.5vw] md:pr-0 md:p-1">
            {/* Card Image */}
            <div className="bg-[rgba(255,255,255,0.2)] p-2 max-w-[20%] rounded-[20px]">
              <img
                className="w-full object-cover"
                src="/img/hero-online-test.png"
                alt="online-test"
              />
            </div>

            {/* Card Text */}
            <div className=" max-w-[60vw] font-Roboto text-white">
              <p className="text-[3.5vw] md:text-[18px] md:w-max">
                Learn The Latest Skills
              </p>
              <p className="text-[rgba(255,255,255,0.6)] text-[2.7vw] md:text-[11px]">
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a BC, making it over 2000 years old.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 p-2 pr-[2.5vw] md:pr-0 md:p-1">
            {/* Card Image */}
            <div className=" bg-[rgba(255,255,255,0.2)] p-2 max-w-[20%] rounded-[20px]">
              <img
                className="w-full object-cover"
                src="/img/hero-exam.png"
                alt="exam"
              />
            </div>
            {/* Card Text */}
            <div className=" max-w-[60vw] font-Roboto text-white">
              <p className="text-[3.5vw] md:text-[18px] md:w-max">
                Get Ready For a Career
              </p>
              <p className="text-[rgba(255,255,255,0.6)] text-[2.7vw] md:text-[11px]">
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a BC, making it over 2000 years old.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 p-2 pr-[2.5vw] md:pr-0 md:p-1">
            {/* Card Image */}
            <div className=" bg-[rgba(255,255,255,0.2)] p-2 max-w-[20%] rounded-[20px]">
              <img
                className="w-full object-cover"
                src="/img/hero-certification.png"
                alt="certification"
              />
            </div>

            {/* Card Text */}
            <div className=" max-w-[60vw] font-Roboto text-white">
              <p className="text-[3.5vw] md:text-[18px] md:w-max">
                Earn a Certificate
              </p>
              <p className="text-[rgba(255,255,255,0.6)] text-[2.7vw] md:text-[11px]">
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a BC, making it over 2000 years old.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroBottom;
