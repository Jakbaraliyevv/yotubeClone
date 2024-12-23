import React from "react";
import {
  FaBars,
  FaBell,
  FaMicrophone,
  FaPlus,
  FaSearch,
  FaUser,
} from "react-icons/fa";
import logo from "../../img/Logo.svg";
function Navbar() {
  return (
    <header className="m-auto bg-[#FFF] sticky top-0 z-29  flex items-center justify-between shadow-[2px_0_5px_rgba(0,0,0,0.1)] py-4 px-7">
      <div className="flex items-center gap-3">
        <button>
          <FaBars className="text-[20px]" />
        </button>
        <img src={logo} alt="" />
      </div>

      <div className="flex items-center gap-7">
        <form className="w-[600px] h-[35px] rounded-2xl flex items-center border-[rgb(219,219,219)] border-[1px]">
          <input
            placeholder="Qidiruv"
            className="w-[88%]  h-full outline-none pl-2 rounded-tr-[0px] rounded-br-[0px] rounded-bl-[15px] rounded-tl-[15px] border-none"
            type="search"
          />
          <button className="w-[12%] h-full flex items-center justify-center bg-[rgb(244,244,244)] rounded-tr-[15px] rounded-br-[15px] rounded-bl-[0px] rounded-tl-[0px] ">
            <FaSearch className="text-[rgb(96,96,96)] text-[19px]" />
          </button>
        </form>

        <button className="w-[40px] bg-[rgb(244,244,244)] h-[40px] flex items-center justify-center rounded-[100%]">
          <FaMicrophone className="text-[rgb(96,96,96)]" />
        </button>
      </div>

      <div className="flex items-center gap-[32px]">
        <button>
          <FaBell className="text-[rgb(96,96,96)] text-[20px]" />
        </button>
        <button className="flex gap-2 items-center w-[100px] bg-[rgb(244,244,244)] h-[35px] rounded-2xl justify-center">
          <FaUser className="text-[rgb(96,96,96)]" />
          Sign
        </button>
      </div>
    </header>
  );
}

export default Navbar;
