const PremiumLearning = () => {
  return (
    <>
      <div className="wrap bg-[#FDF8EE]">
        {/* Premium Logo */}
        <div className="flex items-center pb-8">
          <div className="premium-img w-full">
            <img className="" src="/img/premium-logo.png" alt="" />
          </div>
          <div className="text-body font-Roboto">
            <p className="text-[#050C26] font-extrabold text-[6vw] leading-[135%]">
              Premium <span className="text-[#FF7426]">Learning</span>{" "}
              Experience
            </p>
          </div>
        </div>
        <div className="heart flex items-center gap-2 pb-1">
          <div className="bg-[#4d2c5e] rounded-[20px] w-[20%] h-fit p-2">
            <img
              className="w-full h-full"
              src="/img/premium-hearts.png"
              alt=""
            />
          </div>
          <div className="flex flex-wrap ">
            <p className="text-[#050C26] font-medium text-[5vw]">
              Easily Accessible
            </p>
            <p className="text-[3.5vw] text-[#8A8A8A]">
              Learning Will fell Very Comfortable With Courslab.
            </p>
          </div>
        </div>
        <div className="jigsaw flex items-center gap-2">
          <div className="bg-[#4d2c5e] rounded-[20px] w-[20%] h-fit p-2">
            <img
              className="w-full h-full"
              src="/img/premium-jigsaw.png"
              alt=""
            />
          </div>
          <div className="flex flex-wrap ">
            <p className="text-[#050C26] font-medium text-[5vw]">
              Fun learning expe
            </p>
            <p className="text-[3.5vw] text-[#8A8A8A]">
              Learning Will fell Very Comfortable With Courslab.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PremiumLearning;
