import { Sidebar } from "primereact/sidebar";
import { FiMenu } from "react-icons/fi";
import { useState } from "react";

const Nav = () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      {/* navbar  */}
      <div className="flex items-center justify-between p-6">
        {/* navbar logo */}
        <div className="flex gap-1 items-center max-w-[140px]">
          <div className="logo-wrap max-w-[35px] ">
            <img
              className="w-full h-full object-cover"
              src="/img/logo.png"
              alt="logo of site"
            />
          </div>
          <div className="logo-name font-semibold">
            <p className="font-Roboto text-[14px]">Book Store</p>
          </div>
        </div>

        {/* navbar menu button*/}
        <button className="md:hidden" onClick={() => setVisible(true)}>
          <FiMenu className="w-[25px] h-[25px]" />
        </button>

        {/* navbar menu list */}
        <div className="hidden list-none text-[#1D1D1D] font-Roboto md:flex flex-row gap-4">
          <li className="pt-2 text-[14px] hover:text-[#717578] lg:text-[18px]">
            Home
          </li>
          <li className="pt-2 text-[14px] hover:text-[#717578] lg:text-[18px]">
            Courses
          </li>
          <li className="pt-2 text-[14px] hover:text-[#717578] lg:text-[18px]">
            Our Service
          </li>
          <li className="pt-2 text-[14px] hover:text-[#717578] lg:text-[18px]">
            About Us
          </li>
          <li className="pt-2 text-[14px] hover:text-[#717578] lg:text-[18px]">
            Contact us
          </li>
          <li className="pt-2 text-[14px] hover:text-[#717578] lg:text-[18px]">
            Sign in
          </li>
        </div>
      </div>

      {/* sidebar panel */}
      <div className="card flex justify-content-center ">
        <Sidebar
          className="customWidth"
          visible={visible}
          onHide={() => setVisible(false)}
        >
          {/* sidebar menu items */}
          <div className="list-none text-[#1D1D1D] font-Roboto flex items-center flex-col">
            <li className="pt-2 text-[22px] hover:text-[#717578]">Home</li>
            <li className="pt-2 text-[22px] hover:text-[#717578]">Courses</li>
            <li className="pt-2 text-[22px] hover:text-[#717578]">
              Our Service
            </li>
            <li className="pt-2 text-[22px] hover:text-[#717578]">About Us</li>
            <li className="pt-2 text-[22px] hover:text-[#717578]">
              Contact us
            </li>
            <li className="pt-2 text-[22px] hover:text-[#717578]">Sign in</li>
          </div>
        </Sidebar>
      </div>
    </>
  );
};

export default Nav;
