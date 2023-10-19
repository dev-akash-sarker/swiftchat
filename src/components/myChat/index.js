import React from "react";
import Navbar from "../navbar";
import { AiOutlinePlus } from "react-icons/ai";
import {
  BsFilter,
  BsSearch,
  BsFillTelephoneFill,
  BsCameraVideoFill,
  BsReverseLayoutSidebarInsetReverse,
} from "react-icons/bs";
import { LuDot } from "react-icons/lu";
import "./style.css";

export default function Mychat() {
  const userimage = "./images/userimage.webp";
  return (
    <>
      <Navbar />
      <div className="flex ">
        <div className="chatlist w-[20%] rounded-sm shadow">
          <div className="p-3 px-5 bg-white ">
            <div className="flex justify-between bg-white">
              <h4>Chats</h4>
              <div className="flex gap-4">
                <div className="flex items-center gap-1 font-semibold text-[12px] text-[#64748b]">
                  <AiOutlinePlus />
                  New
                </div>
                <div className="flex items-center gap-1 font-semibold text-[12px] text-[#64748b]">
                  <BsFilter />
                  Filter
                </div>
              </div>
            </div>
          </div>
          <div className="relative search p-3 px-5">
            <input
              type="text"
              className="w-[100%] bg-[#e2e8f0]  rounded-full indent-10 py-2 outline-none"
              placeholder="search"
            />
            <BsSearch className="absolute text-[gray] top-[50%] translate-y-[-50%] left-[35px]" />
          </div>

          <div className="p-3 pt-0 px-5 h-[582px]">
            <div className="chatuser flex gap-4 mb-2">
              <div className="chatImage block w-[48px] h-[48px]">
                <img
                  className="w-[100%] h-[100%] rounded-md"
                  src={userimage}
                  alt="userimage"
                />
              </div>
              <div className="imageDetail whitespace-nowrap">
                <h6 className="font-bold text-[14px] text-[#64748b] ">
                  Jasmine Thampson{" "}
                  <span className="ml-1 font-normal text-[#cbd5e1] text-[0.625rem]">
                    typing ...
                  </span>
                </h6>
                <div className="relative flex items-center">
                  <p className="text-[0.75rem] text-[#64748b] mb-0 w-[170px] overflow-hidden text-ellipsis">
                    Had they visited rome before Had they visited rome before
                  </p>
                </div>
                <div className=" flex items-center text-[#94a3b8] text-[0.55rem]">
                  <LuDot fontSize={10} /> 45 min
                </div>
              </div>
            </div>
            <div className="chatuser flex gap-4 mb-2">
              <div className="chatImage block w-[48px] h-[48px]">
                <img
                  className="w-[100%] h-[100%] rounded-md"
                  src={userimage}
                  alt="userimage"
                />
              </div>
              <div className="imageDetail whitespace-nowrap">
                <h6 className="font-bold text-[14px] text-[#64748b] ">
                  Jasmine Thampson{" "}
                  <span className="ml-1 font-normal text-[#cbd5e1] text-[0.625rem]">
                    typing ...
                  </span>
                </h6>
                <div className="relative flex items-center">
                  <p className="text-[0.75rem] text-[#64748b] mb-0 w-[170px] overflow-hidden text-ellipsis">
                    Had they visited rome before Had they visited rome before
                  </p>
                </div>
                <div className=" flex items-center text-[#94a3b8] text-[0.55rem]">
                  <LuDot fontSize={10} /> 45 min
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="chating w-[60%] bg-blue">
          <div className="p-7 shadow flex justify-between">
            <div className="chatuser flex gap-4">
              <div className="chatImage block w-[48px] h-[48px]">
                <img
                  className="w-[100%] h-[100%] rounded-md"
                  src={userimage}
                  alt="userimage"
                />
              </div>
              <div className="flex flex-col justify-center imageDetail whitespace-nowrap">
                <h6 className="font-semibold text-[14px] text-[#64748b] ">
                  Jasmine Thampson
                </h6>

                <div className=" flex items-center text-[#94a3b8] text-[10px]">
                  <span className="w-[10px] h-[10px] bg-[#56e956] shadow rounded-full mr-2"></span>{" "}
                  Active
                </div>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex justify-center items-center w-[40px] h-[40px] bg-[#e2e8f0] rounded-lg">
                <BsFillTelephoneFill color="gray" />
              </div>
              <div className="flex justify-center items-center w-[40px] h-[40px] bg-[#e2e8f0] rounded-lg">
                <BsCameraVideoFill color="gray" />
              </div>
              <div className="flex justify-center items-center w-[40px] h-[40px] bg-[#e2e8f0] rounded-lg">
                <BsSearch color="gray" />
              </div>
              <div className="flex justify-center items-center w-[40px] h-[40px] bg-[#e2e8f0] rounded-lg">
                <BsReverseLayoutSidebarInsetReverse color="gray" />
              </div>
            </div>
          </div>
          <div className="bg-[#DBEAFE] px-5 py-3 w-[100%] h-[500px] shadow overflow-y-auto">
            <h1>Hello world</h1>
            <h1>Hello world</h1>
            <h1>Hello world</h1>
            <h1>Hello world</h1>
            <h1>Hello world</h1>
            <h1>Hello world</h1>
            <h1>Hello world</h1>
            <h1>Hello world</h1>
            <h1>Hello world</h1>
            <h1>Hello world</h1>
            <h1>Hello world</h1>
            <h1>Hello world</h1>
            <h1>Hello world</h1>
            <h1>Hello world</h1>
            <h1>Hello world</h1>
            <h1>Hello world</h1>
            <h1>Hello world</h1>
            <h1>Hello world</h1>
            <h1>Hello world</h1>
            <h1>Hello world</h1>
            <h1>Hello world</h1>
            <h1>Hello world</h1>
            <h1>Hello world</h1>
            <h1>Hello world</h1>
            <h1>Hello world</h1>
            <h1>Hello world</h1>
            <h1>Hello world</h1>
            <h1>Hello world</h1>
            <h1>Hello world</h1>
            <h1>Hello world</h1>
            <h1>Hello world</h1>
            <h1>Hello world</h1>
            <h1>Hello world</h1>
            <h1>Hello world</h1>
            <h1>Hello world</h1>
            <h1>Hello world</h1>
            <h1>Hello world</h1>
            <h1>Hello world</h1>
            <h1>Hello world</h1>
            <h1>Hello world</h1>
            <h1>Hello world</h1>
            <h1>Hello world</h1>
            <h1>Hello world</h1>
            <h1>Hello world</h1>
            <h1>Hello world</h1>
            <h1>Hello world</h1>
            <h1>Hello world</h1>
            <h1>Hello world</h1>
            <h1>Hello world</h1>
            <h1>Hello world</h1>
            <h1>Hello world</h1>
            <h1>Hello world</h1>
            <h1>Hello world</h1>
            <h1>Hello world</h1>
            <h1>Hello world</h1>
            <h1>Hello world</h1>
            <h1>Hello world</h1>
          </div>
        </div>
        <div className="incomingProfile w-[20%] bg-green">c</div>
      </div>
    </>
  );
}
