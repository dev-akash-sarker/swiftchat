import React from "react";
import { NavLink } from "react-router-dom";
import { BsFillChatDotsFill } from "react-icons/bs";
import { HiSquare2Stack } from "react-icons/hi2";
import { BiSolidUserDetail } from "react-icons/bi";
export default function Navbar() {
  const logo = "./images/logo.svg";
  return (
    <>
      <div>
        <nav>
          <ul className="border-b-2 border-[#dbeafe] flex gap-4 ">
            <li>
              <NavLink
                to={"/home"}
                className="block p-3 border-[#dbeafe] w-[180px] border-r-2"
              >
                <img src={logo} alt="logo" width={150} />
              </NavLink>
            </li>
            <li className="flex items-center">
              <NavLink
                to={"/mychat"}
                className="flex items-center justify-center w-[50px] h-[50px] text-[#334155] hover:text-[#1BA8F0] bg-[#e2e8f0] hover:bg-[#9db4ff92] rounded-full"
              >
                <BsFillChatDotsFill fontSize={25} />
              </NavLink>
            </li>
            <li className="flex items-center">
              <NavLink
                to={"/myfriends"}
                className="flex items-center justify-center w-[50px] h-[50px] text-[#334155] hover:text-[#1BA8F0] bg-[#e2e8f0] hover:bg-[#9db4ff92] rounded-full"
              >
                <BiSolidUserDetail fontSize={30} />
              </NavLink>
            </li>
            <li className="flex items-center">
              <NavLink
                to={"/mystories"}
                className="flex items-center justify-center w-[50px] h-[50px] text-[#334155] hover:text-[#1BA8F0] bg-[#e2e8f0] hover:bg-[#9db4ff92] rounded-full"
              >
                <HiSquare2Stack fontSize={30} />
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
