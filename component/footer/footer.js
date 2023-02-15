const Footer = () => {
  return (
    <>
      {/* footer all category*/}
      <div className="wrap flex flex-wrap justify-evenly  p-4 font-Roboto text-[12px] text-[#606060] bg-[#FDF8EE]">
        {/* Cources */}
        <div className=" list-none">
          <li className="font-bold text-[15px] text-[#000]">Cources</li>
          <li>Categories</li>
          <li>Ofline Course</li>
          <li>Video Course</li>
        </div>
        {/* Company */}
        <div className=" list-none">
          <li className="font-bold text-[15px] text-[#000]">Company</li>
          <li>About Us</li>
          <li>How to work?</li>
          <li>Populer Course</li>
          <li>Service</li>
        </div>
        {/* Support */}
        <div className=" list-none">
          <li className="font-bold text-[15px] text-[#000]">Support</li>
          <li>FAQ</li>
          <li>Help Center</li>
          <li>Career</li>
          <li>Privacy</li>
        </div>
        {/* Contact */}
        <div className=" Info list-none grow inline-grid justify-evenly text-[14px]">
          <li className="font-bold text-[16px] text-[#000]">Contact</li>
          <li>+880189-1234-737, +880189-1234-737</li>
          <li>irumorgan420@gmail.com</li>
          <li>Bhulta, Gawsia, Rupgonj-Narayngonj</li>
        </div>
      </div>
      {/* footer trademark */}
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
