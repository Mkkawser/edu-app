import { FiMenu } from "react-icons/fi";
import { Sidebar } from "primereact/sidebar";
import { useState } from "react";

const Nav = () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <div className="nav-wraper flex items-center justify-between p-6">
        <div className="logo flex gap-1 items-center max-w-[100px]">
          <div className="logo-wrap max-w-[22px] max-h-[22px]">
            <img
              className="w-full h-full object-cover"
              src="/img/logo.png"
              alt="logo of site"
            />
          </div>
          <div className="logo-name text-[12px] font-semibold">
            <p className="font-Roboto">Book Store</p>
          </div>
        </div>
        <div className="menu-wrap">
          <button onClick={() => setVisible(true)}>
            <FiMenu className="w-[20px] h-[20px]" />
          </button>
        </div>
      </div>

      {/* sidebar panel */}
      <div className="card flex justify-content-center ">
        <Sidebar
          className="customWidth"
          visible={visible}
          onHide={() => setVisible(false)}
        >
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
