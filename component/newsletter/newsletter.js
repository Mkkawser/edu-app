import React from "react";

const Newsletter = () => {
  return (
    <>
      <div className="wrap p-2 relative">
        <div className="center bg-[#4D2C5E] h-40 w-full flex items-center justify-center flex-wrap pt-4">
          <div className="box flex flex-wrap items-center justify-center text-white font-Poppins text-[4.5vw] w-full ">
            <p className="block pt-1">Subscribe to our newsletter</p>
            <p className="text-[3vw] block pb-2">
              Lorem Ipsum is simply dummy text of the printing.
            </p>
            <div className="search flex items-center justify-between text-[15px] p-1 rounded-lg bg-white w-[250px]">
              <input
                className="max-w-[70%] outline-none text-black  placeholder:text-[12px] placeholder:text-slate-500"
                type="text"
                placeholder="Email Address"
              />
              <button className="bg-[#FF7426] w-1/4 rounded-[15px]">
                Send
              </button>
            </div>
          </div>
        </div>
        <div className="top-left rotate-[278deg] w-[70px] absolute min-w-[10%] top-0 left-[7px]">
          <img src="/img/newsletter3.png" alt="" />
        </div>
        <div className="top-left rotate-[355deg] w-[70px] absolute min-w-[10%] top-0 right-[7px]">
          <img src="/img/newsletter3.png" alt="" />
        </div>
      </div>
    </>
  );
};

export default Newsletter;
