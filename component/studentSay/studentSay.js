const StudentSay = () => {
  return (
    <>
      <div className="bg-[#F5F5F5] py-4 md:flex md:flex-wrap md:justify-center">
        {/* Top & Title  */}
        <div className="font-Poppins flex justify-center flex-col items-center pt-[15px] pb-[10px]">
          <p className="text-[#050C26] text-[4vw]">What student’s say</p>
          <p className="text-[#8A8A8A] text-[12px]">
            Lorem Ipsum is simply dummy text of the printing.
          </p>
        </div>

        {/* Carousole Students Say Card*/}
        <div className="p-3 flex justify-center md:w-[70%]">
          {/* Card */}
          <div className="font-Roboto bg-[#FFFFFF] shadow-[0px_4px_88px_rgba(0,0,0,0.05)] p-3 max-w-[80%] rounded-sm">
            {/* Card Text Area */}
            <div className="">
              <p className="text-[#ACACAC] tracking-[0.02em] text-[3.5vw] leading-[150%] md:text-[2.5vw]">
                “Teachings of the great explore of truth, the master-builder of
                human happiness. no one rejects,dislikes, or avoids pleasure
                itself, pleasure itself”
              </p>
            </div>

            {/* Card Profile */}
            <div className="flex gap-3 items-center justify-start">
              {/* Profile Image */}
              <div className="img h-10 w-10">
                <img src="/img/stdSay-profile1.png" alt="profile pic" />
              </div>

              {/* Profile Name, Degination */}
              <div className="name text-[14px]">
                <p className="text-[#353535]">Finlay Kirk</p>
                <p className="text-[#8E8E8E] text-[12px]">Web Developper</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentSay;
