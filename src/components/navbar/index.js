import React from "react";
import { NavLink } from "react-router-dom";
import { BsFillChatDotsFill } from "react-icons/bs";
import { HiMiniUsers, HiSquare2Stack } from "react-icons/hi2";
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
                className="flex items-center justify-center w-[50px] h-[50px] bg-[#9db4ff92] rounded-full "
              >
                <BsFillChatDotsFill color="#1BA8F0" fontSize={25} />
              </NavLink>
            </li>
            <li className="flex items-center">
              <NavLink
                to={"/myfriends"}
                className="flex items-center justify-center w-[50px] h-[50px] bg-[#9db4ff92] rounded-full"
              >
                <HiMiniUsers color="#1BA8F0" fontSize={30} />
              </NavLink>
            </li>
            <li className="flex items-center">
              <NavLink
                to={"/mystories"}
                className="flex items-center justify-center w-[50px] h-[50px] bg-[#9db4ff92] rounded-full"
              >
                <HiSquare2Stack color="#1BA8F0" fontSize={30} />
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
