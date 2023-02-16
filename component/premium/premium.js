const PremiumLearning = () => {
  return (
    <>
      <div className="bg-[#FDF8EE] p-6 md:flex">
        {/* Premium Logo */}
        <div className="flex items-center gap-1 pb-8 md:gap-3">
          {/* Premium Image */}
          <div className="w-full md:w-[80%]">
            <img
              className="w-full h-full object-cover"
              src="/img/premium-logo.png"
              alt=""
            />
          </div>

          {/* Premium Main Title */}
          <div className="">
            <p className="text-[#050C26] font-extrabold text-[6vw] leading-[135%] font-Roboto md:text-[4vw]">
              Premium <span className="text-[#FF7426]">Learning</span>{" "}
              Experience
            </p>
            {/* Easily Accessible */}
            <div className="hidden items-center gap-3 pb-1 md:flex">
              {/* Image */}
              <div className="bg-[#4d2c5e] rounded-[20px] w-[25%] h-fit p-2">
                <img
                  className="w-full h-full object-cover"
                  src="/img/premium-hearts.png"
                  alt=""
                />
              </div>

              {/* Text */}
              <div className="flex flex-wrap ">
                <p className="text-[#050C26] font-medium text-[3vw]">
                  Easily Accessible
                </p>
                <p className="text-[2vw] text-[#8A8A8A]">
                  Learning Will fell Very Comfortable With Courslab.
                </p>
              </div>
            </div>

            {/* Fun Learning Expe */}
            <div className="hidden items-center gap-3 md:flex">
              {/* Imgae */}
              <div className="bg-[#4d2c5e] rounded-[20px] w-[25%] h-fit p-2">
                <img
                  className="w-full h-full object-cover"
                  src="/img/premium-jigsaw.png"
                  alt=""
                />
              </div>

              {/* Text */}
              <div className="flex flex-wrap ">
                <p className="text-[#050C26] font-medium text-[3vw]">
                  Fun learning expe
                </p>
                <p className="text-[2vw] text-[#8A8A8A]">
                  Learning Will fell Very Comfortable With Courslab.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Easily Accessible */}
        <div className="flex items-center gap-3 pb-1 md:hidden">
          {/* Image */}
          <div className="bg-[#4d2c5e] rounded-[20px] w-[25%] h-fit p-2">
            <img
              className="w-full h-full object-cover"
              src="/img/premium-hearts.png"
              alt=""
            />
          </div>

          {/* Text */}
          <div className="flex flex-wrap ">
            <p className="text-[#050C26] font-medium text-[4.5vw]">
              Easily Accessible
            </p>
            <p className="text-[3.2vw] text-[#8A8A8A]">
              Learning Will fell Very Comfortable With Courslab.
            </p>
          </div>
        </div>

        {/* Fun Learning Expe */}
        <div className="flex items-center gap-3 md:hidden">
          {/* Imgae */}
          <div className="bg-[#4d2c5e] rounded-[20px] w-[25%] h-fit p-2">
            <img
              className="w-full h-full object-cover"
              src="/img/premium-jigsaw.png"
              alt=""
            />
          </div>

          {/* Text */}
          <div className="flex flex-wrap ">
            <p className="text-[#050C26] font-medium text-[4.5vw]">
              Fun learning expe
            </p>
            <p className="text-[3.2vw] text-[#8A8A8A]">
              Learning Will fell Very Comfortable With Courslab.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PremiumLearning;
