import { FiMenu } from "react-icons/fi";
const Nav = () => {
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
          <FiMenu className="w-[20px] h-[20px]" />
        </div>
      </div>
    </>
  );
};

export default Nav;
