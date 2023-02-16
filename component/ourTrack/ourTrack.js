const OurTrack = () => {
  return (
    <>
      <div className="p-6">
        {/* Our Tracks Head */}
        <div className="font-Poppins flex pb-4">
          <div className="hidden">
            <img src="/img/ourTrack-lamp.png" alt="lamp" />
          </div>
          <div className="flex flex-wrap items-center justify-center md:w-full md:flex-col">
            <p className="font-bold text-[5vw] text-[#000] md:text-[22px]">
              Our Tracks
            </p>
            <p className="text-[3vw] text-[#8A8A8A] py-1 md:text-[14px]">
              Lorem Ipsum is simply dummy text of the printing.
            </p>
          </div>
          <div className="hidden">
            <img src="/img/ourTrack-arrow.png" alt="arrow" />
          </div>
        </div>

        {/* Our Tracks Card Wrap */}
        <div className="sm:grid sm:grid-cols-2 md:grid-cols-3">
          {/* Card 1 */}
          <div className="p-2 shadow-[0px_4px_25px_rgba(0,0,0,0.1)] mb-4">
            {/* Card Image */}
            <div className="">
              <img
                className="w-full object-cover rounded-md"
                src="/img/ourTrack-devloper.png"
                alt=""
              />
            </div>

            {/* Card Title & Rating*/}
            <div className="pt-1">
              <div className="flex items-center justify-between gap-4 p-1">
                <p className="font-Poppins text-[#000] font-bold sm:text-[2vw] truncate">
                  UI/UX Design for Beginners
                </p>
                <img
                  className="h-[10px]"
                  src="/img/ourTrack-rating.png"
                  alt="rating"
                />
              </div>
            </div>

            {/* Card Price */}
            <div className="p-1 text-[#FF7426] font-semibold">$98</div>

            {/* Card Horizontal Line */}
            <div className="border-b border-[#ACACAC] border-dashed pt-3"></div>

            {/* Card Time, Course, Sell */}
            <div className="flex text-[12px] gap-4 pt-4 pb-6 max-w-fit md:text-[9px]">
              <div className="time flex items-center justify-center gap-1">
                <div className="w-[15px]">
                  <img src="/img/ourTrack-time.png" alt="time" />
                </div>
                <p className="font-Poppins text-[#acacac]">22hr 30min</p>
              </div>
              <div className="video flex items-center justify-center gap-1">
                <div className="w-[15px]">
                  <img src="/img/ourTrack-video.png" alt="video" />
                </div>
                <p className="font-Poppins text-[#acacac]">34 Cources</p>
              </div>
              <div className="download flex items-center justify-center gap-1">
                <div className="w-[15px]">
                  <img src="/img/ourTrack-download.png" alt="download" />
                </div>
                <p className="font-Poppins text-[#acacac]">250 Sales</p>
              </div>
            </div>
            {/* Card Join Button*/}
            <div className="button flex justify-center">
              <button className="bg-[#FF7426] font-Roboto text-white rounded-[20px] p-1 text-[15px] max-w-[50%]">
                Join Course
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="p-2 shadow-[0px_4px_25px_rgba(0,0,0,0.1)] mb-4">
            {/* Card Image */}
            <div className="">
              <img
                className="w-full object-cover rounded-md"
                src="/img/ourTrack-ux-designer.png"
                alt=""
              />
            </div>

            {/* Card Title & Rating*/}
            <div className="pt-1">
              <div className="flex items-center justify-between gap-4 p-1">
                <p className="font-Poppins text-[#000] font-bold sm:text-[2vw] truncate">
                  Software Development Beginners
                </p>
                <img
                  className="h-[10px]"
                  src="/img/ourTrack-rating.png"
                  alt="rating"
                />
              </div>
            </div>

            {/* Card Price */}
            <div className="p-1 text-[#FF7426] font-semibold">$100</div>

            {/* Card Horizontal Line */}
            <div className="border-b border-[#ACACAC] border-dashed pt-3"></div>

            {/* Card Time, Course, Sell */}
            <div className="flex text-[12px] gap-4 pt-4 pb-6 max-w-fit md:text-[9px]">
              <div className="time flex items-center justify-center gap-1">
                <div className="w-[15px]">
                  <img src="/img/ourTrack-time.png" alt="time" />
                </div>
                <p className="font-Poppins text-[#acacac]">32hr 30min</p>
              </div>
              <div className="video flex items-center justify-center gap-1">
                <div className="w-[15px]">
                  <img src="/img/ourTrack-video.png" alt="video" />
                </div>
                <p className="font-Poppins text-[#acacac]">50 Cources</p>
              </div>
              <div className="download flex items-center justify-center gap-1">
                <div className="w-[15px]">
                  <img src="/img/ourTrack-download.png" alt="download" />
                </div>
                <p className="font-Poppins text-[#acacac]">520 Sales</p>
              </div>
            </div>

            {/* Card Join Button*/}
            <div className="button flex justify-center">
              <button className="bg-[#FF7426] font-Roboto text-white rounded-[20px] p-1 text-[15px] max-w-[50%]">
                Join Course
              </button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="p-2 shadow-[0px_4px_25px_rgba(0,0,0,0.1)] mb-4">
            {/* Card Image */}
            <div className="">
              <img
                className="w-full object-cover rounded-md"
                src="/img/ourTrack-little-girl-participating-online-classes.png"
                alt=""
              />
            </div>

            {/* Card Title & Rating*/}
            <div className="pt-1">
              <div className="flex items-center justify-between gap-4 p-1">
                <p className="font-Poppins text-[#000] font-bold sm:text-[2vw] truncate">
                  Junior Software Development
                </p>
                <img
                  className="h-[10px]"
                  src="/img/ourTrack-rating.png"
                  alt="rating"
                />
              </div>
            </div>

            {/* Card Price */}
            <div className="p-1 text-[#FF7426] font-semibold">$50</div>

            {/* Card Horizontal Line */}
            <div className="border-b border-[#ACACAC] border-dashed pt-3"></div>

            {/* Card Time, Course, Sell */}
            <div className="flex text-[12px] gap-4 pt-4 pb-6 max-w-fit md:text-[9px]">
              <div className="time flex items-center justify-center gap-1">
                <div className="w-[15px]">
                  <img src="/img/ourTrack-time.png" alt="time" />
                </div>
                <p className="font-Poppins text-[#acacac]">22hr 30min</p>
              </div>
              <div className="video flex items-center justify-center gap-1">
                <div className="w-[15px]">
                  <img src="/img/ourTrack-video.png" alt="video" />
                </div>
                <p className="font-Poppins text-[#acacac]">34 Cources</p>
              </div>
              <div className="download flex items-center justify-center gap-1">
                <div className="w-[15px]">
                  <img src="/img/ourTrack-download.png" alt="download" />
                </div>
                <p className="font-Poppins text-[#acacac]">250 Sales</p>
              </div>
            </div>

            {/* Card Join Button*/}
            <div className="button flex justify-center">
              <button className="bg-[#FF7426] font-Roboto text-white rounded-[20px] p-1 text-[15px] max-w-[50%]">
                Join Course
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurTrack;
