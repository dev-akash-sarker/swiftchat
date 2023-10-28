import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  BsAppIndicator,
  BsFillChatDotsFill,
  BsFillGridFill,
} from "react-icons/bs";
import { HiSquare2Stack } from "react-icons/hi2";
import { BiSolidUserDetail } from "react-icons/bi";
import { useSelector } from "react-redux";
export default function Navbar() {
  const user = useSelector((state) => state.login.loggedIn);
  const logo = "./images/logo.svg";
  const [myprofile, setMyprofile] = useState(false);
  const [darkmode, setDarkmode] = useState(true);
  const handleProfileDiologe = () => {
    setMyprofile(!myprofile);
  };

  const handleOff = (e) => {
    // if (e.target.checked === true) {
    //   setDarkmode();
    // }
    if (darkmode) {
      e.target.checked = false;
    }
    console.log("dekhi", (e.target.checked = false));
  };
  const handleOn = (e) => {
    setDarkmode(true);
  };
  return (
    <>
      <div>
        <nav className="fixed w-[100%] z-30 bg-white flex justify-between items-center">
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
          <ul className="flex mr-[15px] gap-4">
            <li>
              <button className="flex items-center justify-center w-[50px] h-[50px] text-[#334155] hover:text-[#1BA8F0] bg-[#e2e8f0] hover:bg-[#9db4ff92] rounded-full">
                <BsFillGridFill fontSize={25} />
              </button>
            </li>
            <li>
              <button className="flex items-center justify-center w-[50px] h-[50px] text-[#334155] hover:text-[#1BA8F0] bg-[#e2e8f0] hover:bg-[#9db4ff92] rounded-full">
                <BsAppIndicator fontSize={25} />
              </button>
            </li>
            <li className="relative">
              <button
                onClick={handleProfileDiologe}
                className="w-[48px] h-[48px] overflow-hidden rounded-full"
              >
                <img
                  src="https://source.unsplash.com/random/300×300/?person"
                  alt="myprofile"
                  className="w-[100%] h-[100%] object-cover"
                />
              </button>
              {myprofile && (
                <>
                  <div className="absolute top-[56px] shadow-lg rounded-md px-[18px] left-[-149px] w-[196px] bg-white">
                    <div className="">
                      <Link to={"/myprofile"}>
                        <div className="py-[20px] flex justify-between items-center">
                          <div className="w-[48px] h-[48px] overflow-hidden rounded-md">
                            <img
                              src="https://source.unsplash.com/random/300×300/?person"
                              alt="myprofile"
                              className="w-[100%] h-[100%] object-cover"
                            />
                          </div>
                          <div>
                            <h6 className="text-[#64748b] text-[14px] font-bold leading-[19.6px]">
                              {user.displayName}
                            </h6>
                            <p className="text-[#64748b] text-[14px] font-[400] leading-[19.6px]">
                              sdsdsd
                            </p>
                          </div>
                        </div>
                      </Link>
                      <hr />
                      <div className="py-3">
                        <h4>Darkmode</h4>
                        <div className="flex gap-3 items-center mt-2">
                          <div>
                            <label>
                              <input
                                type="radio"
                                onClick={(e) => handleOn(e)}
                              />{" "}
                              on
                            </label>
                          </div>
                          <div>
                            <label>
                              <input
                                type="radio"
                                onClick={(e) => handleOff(e)}
                                checked
                              />
                              off
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
