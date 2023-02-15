const Footer = () => {
  return (
    <>
      {/* Footer All Category*/}
      <div className="grid grid-cols-3 justify-items-center p-4 font-Roboto text-[13px] text-[#606060] bg-[#FDF8EE]">
        {/* Cources */}
        <div className="list-none">
          <li className="font-bold text-[15px] text-[#000]">Cources</li>
          <li>Categories</li>
          <li>Ofline Course</li>
          <li>Video Course</li>
        </div>

        {/* Company */}
        <div className="list-none">
          <li className="font-bold text-[15px] text-[#000]">Company</li>
          <li>About Us</li>
          <li>How to work?</li>
          <li>Populer Course</li>
          <li>Service</li>
        </div>

        {/* Support */}
        <div className="list-none">
          <li className="font-bold text-[15px] text-[#000]">Support</li>
          <li>FAQ</li>
          <li>Help Center</li>
          <li>Career</li>
          <li>Privacy</li>
        </div>

        {/* About Company & Contact */}
        <div className="flex col-span-3 gap-3 w-full pt-3 max-[385px]:flex max-[385px]:flex-wrap">
          {/* Company Info */}
          <div className="">
            {/* Logo */}
            <div className="flex items-center gap-1 py-1">
              <img className="w-8" src="/img/logo.png" alt="Main logo" />
              <p className="text-[20px]">Book Store</p>
            </div>
            {/* About Company */}
            <p className="text-[14px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy a
              type specimen book.
            </p>
          </div>

          {/* Contact */}
          <div className="list-none text-[14px]">
            <li className="font-bold text-[16px] text-[#000]">Contact</li>
            <li>+880189-1234-737, +880189-1234-737</li>
            <li>irumorgan420@gmail.com</li>
            <li>Bhulta, Gawsia, Rupgonj-Narayngonj</li>
          </div>
        </div>
      </div>

      {/* Footer Treademark */}
      <div className="bg-[#FDF8EE]">
        <hr className="h-2" />
        <p className="font-Roboto text-[#606060] text-[12px] flex justify-center">
          BookStore All Right Reserved, 2022
        </p>
      </div>
    </>
  );
};

export default Footer;
