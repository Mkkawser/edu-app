const HeroBottom = () => {
  return (
    <>
      <div className="bg-[#4D2C5E] rounded-[20px]">
        {/* Our Tracks  */}
        <div className="card flex items-center gap-2 p-2 pr-[2.5vw]">
          <div className="card-img bg-[rgba(255,255,255,0.2)] p-2 max-w-[20%] rounded-[20px]">
            <img
              className="w-full object-cover"
              src="/img/hero-online-test.png"
              alt="online-test"
            />
          </div>
          <div className="card-text font-Roboto text-white">
            <p className="text-[3vw]">Learn The Latest Skills</p>
            <p className="text-[rgba(255,255,255,0.6)] text-[2.5vw]">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a BC, making it over 2000 years old.
            </p>
          </div>
        </div>
        <div className="card flex items-center gap-2 p-2 pr-[2.5vw]">
          <div className="card-img bg-[rgba(255,255,255,0.2)] p-2 max-w-[20%] rounded-[20px]">
            <img
              className="w-full object-cover"
              src="/img/hero-exam.png"
              alt="exam"
            />
          </div>
          <div className="card-text font-Roboto text-white">
            <p className="text-[3vw]">Get Ready For a Career</p>
            <p className="text-[rgba(255,255,255,0.6)] text-[2.5vw]">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a BC, making it over 2000 years old.
            </p>
          </div>
        </div>
        <div className="card flex items-center gap-2 p-2 pr-[2.5vw]">
          <div className="card-img bg-[rgba(255,255,255,0.2)] p-2 max-w-[20%] rounded-[20px]">
            <img
              className="w-full object-cover"
              src="/img/hero-certification.png"
              alt="certification"
            />
          </div>
          <div className="card-text font-Roboto text-white">
            <p className="text-[3vw]">Earn a Certificate</p>
            <p className="text-[rgba(255,255,255,0.6)] text-[2.5vw]">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a BC, making it over 2000 years old.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroBottom;
