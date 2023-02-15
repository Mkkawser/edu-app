const PremiumLearning = () => {
  return (
    <>
      <div className="bg-[#FDF8EE] p-6">
        {/* Premium Logo */}
        <div className="flex items-center gap-1 pb-8">
          {/* Premium Image */}
          <div className="w-full">
            <img
              className="w-full h-full object-cover"
              src="/img/premium-logo.png"
              alt=""
            />
          </div>

          {/* Premium Main Title */}
          <div className="">
            <p className="text-[#050C26] font-extrabold text-[6vw] leading-[135%] font-Roboto">
              Premium <span className="text-[#FF7426]">Learning</span>{" "}
              Experience
            </p>
          </div>
        </div>

        {/* Easily Accessible */}
        <div className="flex items-center gap-3 pb-1">
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
        <div className="flex items-center gap-3">
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
