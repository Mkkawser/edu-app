const OurTrack = () => {
  return (
    <>
      <div className="wrap p-6 ">
        {/* Our Tracks Head */}
        <div className="font-Poppins flex pb-4">
          <div className="hidden">
            <img src="/img/ourTrack-lamp.png" alt="lamp" />
          </div>
          <div className="flex flex-wrap items-center justify-center">
            <p className="font-bold text-[5vw] text-[#000]">Our Tracks</p>
            <p className="text-[3vw] text-[#8A8A8A] py-1">
              Lorem Ipsum is simply dummy text of the printing.
            </p>
          </div>
          <div className="hidden">
            <img src="/img/ourTrack-arrow.png" alt="arrow" />
          </div>
        </div>
        {/* Our Tracks Card */}
        <div className="card-wrap">
          <div className="card p-2 shadow-[0px_4px_25px_rgba(0,0,0,0.1)] mb-4">
            <div className="card-img">
              <img
                className="w-full object-cover rounded-md"
                src="/img/ourTrack-devloper.png"
                alt=""
              />
            </div>
            <div className="card-body pt-1">
              <div className="title_rating flex items-center justify-between gap-4 p-1">
                <p className="font-Poppins text-[#000] font-bold">
                  UI/UX Design for Beginners
                </p>
                <img
                  className="h-[10px]"
                  src="/img/ourTrack-rating.png"
                  alt="rating"
                />
              </div>
            </div>
            <div className="price text-[#FF7426] font-semibold">$98</div>
            <div className="Hdash border-b border-[#ACACAC] border-dashed pt-3"></div>
            <div className="card-util flex text-[12px] gap-4 pt-4 pb-6 max-w-fit">
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
            <div className="button flex justify-center">
              <button className="bg-[#FF7426] font-Roboto text-white rounded-[20px] p-1 text-[15px] max-w-[50%]">
                Join Course
              </button>
            </div>
          </div>
          <div className="card p-2 shadow-[0px_4px_25px_rgba(0,0,0,0.1)] mb-4">
            <div className="card-img">
              <img
                className="w-full object-cover rounded-md"
                src="/img/ourTrack-ux-designer.png"
                alt=""
              />
            </div>
            <div className="card-body pt-1">
              <div className="title_rating flex items-center justify-between gap-4 p-1">
                <p className="font-Poppins text-[#000] font-bold">
                  Software Development Beginners
                </p>
                <img
                  className="h-[10px]"
                  src="/img/ourTrack-rating.png"
                  alt="rating"
                />
              </div>
            </div>
            <div className="price text-[#FF7426] font-semibold">$100</div>
            <div className="Hdash border-b border-[#ACACAC] border-dashed pt-3"></div>
            <div className="card-util flex text-[12px] gap-4 pt-4 pb-6 max-w-fit">
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
            <div className="button flex justify-center">
              <button className="bg-[#FF7426] font-Roboto text-white rounded-[20px] p-1 text-[15px] max-w-[50%]">
                Join Course
              </button>
            </div>
          </div>
          <div className="card p-2 shadow-[0px_4px_25px_rgba(0,0,0,0.1)] mb-4">
            <div className="card-img">
              <img
                className="w-full object-cover rounded-md"
                src="/img/ourTrack-little-girl-participating-online-classes.png"
                alt=""
              />
            </div>
            <div className="card-body pt-1">
              <div className="title_rating flex items-center justify-between gap-4 p-1">
                <p className="font-Poppins text-[#000] font-bold">
                  Junior Software Development
                </p>
                <img
                  className="h-[10px]"
                  src="/img/ourTrack-rating.png"
                  alt="rating"
                />
              </div>
            </div>
            <div className="price text-[#FF7426] font-semibold">$50</div>
            <div className="Hdash border-b border-[#ACACAC] border-dashed pt-3"></div>
            <div className="card-util flex text-[12px] gap-4 pt-4 pb-6 max-w-fit">
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
