import React, { useState } from "react";
import Navbar from "../navbar";
import { AiOutlinePlus } from "react-icons/ai";
import {
  BsFilter,
  BsSearch,
  BsFillTelephoneFill,
  BsCameraVideoFill,
  BsReverseLayoutSidebarInsetReverse,
  BsPlusLg,
  BsFillImageFill,
  BsFillEmojiSmileFill,
  BsFillBellFill,
  BsImages,
  BsSliders,
} from "react-icons/bs";
import { BiSolidMicrophone } from "react-icons/bi";
import { IoMdPaperPlane } from "react-icons/io";
import { LuDot } from "react-icons/lu";
import "./style.css";

export default function Mychat() {
  const userimage = "./images/userimage.webp";
  const [sidebarstate, setSidebarstate] = useState(false);
  const thumnail = "./images/thumnail.jpg";
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
        <div
          className={
            sidebarstate ? "chating w-[80%] bg-blue" : "chating w-[60%] bg-blue"
          }
        >
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
              <div className="flex justify-center items-center w-[40px] h-[40px] bg-[#e2e8f0] rounded-lg hover:bg-[#DBEAFE] cursor-pointer text-[#475569] hover:text-[blue]">
                <BsFillTelephoneFill />
              </div>
              <div className="flex justify-center items-center w-[40px] h-[40px] bg-[#e2e8f0] rounded-lg hover:bg-[#DBEAFE] cursor-pointer text-[#475569] hover:text-[blue]">
                <BsCameraVideoFill />
              </div>
              <div className="flex justify-center items-center w-[40px] h-[40px] bg-[#e2e8f0] rounded-lg hover:bg-[#DBEAFE] cursor-pointer text-[#475569] hover:text-[blue]">
                <BsSearch />
              </div>
              <div
                onClick={() => setSidebarstate(!sidebarstate)}
                className="flex justify-center items-center w-[40px] h-[40px] bg-[#e2e8f0] rounded-lg hover:bg-[#DBEAFE] cursor-pointer text-[#475569] hover:text-[blue]"
              >
                <BsReverseLayoutSidebarInsetReverse />
              </div>
            </div>
          </div>
          <div className="bg-[#DBEAFE] px-5 py-3 w-[100%] h-[490px] shadow overflow-y-auto">
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
          <div className="p-7 shadow flex justify-between">
            <div
              className={
                sidebarstate
                  ? "flex items-center gap-3 w-[10%]"
                  : "flex items-center gap-3 w-[15%]"
              }
            >
              <div className="flex justify-center items-center w-[32px] h-[32px] bg-[#e2e8f0] rounded-full hover:bg-[#DBEAFE] cursor-pointer text-[#475569] hover:text-[blue]">
                <BsPlusLg fontSize={14} />
              </div>
              <div className="flex justify-center items-center w-[32px] h-[32px] bg-[#e2e8f0] rounded-full hover:bg-[#DBEAFE] cursor-pointer text-[#475569] hover:text-[blue]">
                <BsFillImageFill fontSize={14} />
              </div>
              <div className="flex justify-center items-center w-[32px] h-[32px] bg-[#e2e8f0] rounded-full hover:bg-[#DBEAFE] cursor-pointer text-[#475569] hover:text-[blue]">
                <BsFillEmojiSmileFill fontSize={14} />
              </div>
            </div>
            <div className={sidebarstate ? "w-[80%]" : "w-[70%]"}>
              <input
                type="text"
                className="grow overflow-auto bg-[#e2e8f0] py-[0.5rem] px-[0.875rem] text-[0.875rem] leading-6 rounded-[0.5rem] w-[100%] outline-none"
              />
            </div>
            <div
              className={
                sidebarstate
                  ? "flex items-center gap-3 w-[7%] "
                  : "flex items-center gap-3 w-[10%] "
              }
            >
              <div className="flex justify-center items-center w-[32px] h-[32px] bg-[#e2e8f0] rounded-full hover:bg-[#DBEAFE] cursor-pointer text-[#475569] hover:text-[blue]">
                <BiSolidMicrophone fontSize={14} />
              </div>
              <div className="flex justify-center items-center w-[32px] h-[32px] bg-[#e2e8f0] rounded-full hover:bg-[#DBEAFE] cursor-pointer text-[#475569] hover:text-[blue]">
                <IoMdPaperPlane fontSize={14} />
              </div>
            </div>
          </div>
        </div>
        <div className={sidebarstate ? "w-0 hidden" : "w-[20%]"}>
          <div className="relative">
            <div className="coverImage w-[305px] h-[auto] overflow-hidden ">
              <img src={thumnail} className="w-[100%] h-[100%]" alt="" />
            </div>
            <div className="chatImage block w-[56.8px] h-[56.8px] border-2 border-[#fff] mt-[-25px] mx-auto">
              <img
                className="w-[100%] h-[100%] rounded-md"
                src={userimage}
                alt="userimage"
              />
            </div>
            <h5 className="flex justify-center text-[#64748b] font-bold mt-4">
              Jasmine Thampson
            </h5>
            <div className="flex justify-center">
              <p className="meta text-[0.625rem] text-[#94a3b8] mt-1">
                Active Now
              </p>
            </div>
            <div className="flex justify-center gap-5 mt-6">
              <div className="flex justify-center flex-col items-center w-[70px] h-[62px] bg-[#e2e8f0] hover:bg-[#DBEAFE] cursor-pointer text-[#475569] hover:text-[blue] rounded-lg">
                <BsFillBellFill />
                <h6 className="text-[12px] font-medium mt-1">Mute</h6>
              </div>
              <div className="flex justify-center flex-col items-center w-[70px] h-[62px] bg-[#e2e8f0] hover:bg-[#DBEAFE] cursor-pointer text-[#475569] hover:text-[blue] rounded-lg">
                <BsImages />
                <h6 className="text-[12px] font-medium mt-1">Media</h6>
              </div>
              <div className="flex justify-center flex-col items-center w-[70px] h-[62px] bg-[#e2e8f0] hover:bg-[#DBEAFE] cursor-pointer text-[#475569] hover:text-[blue] rounded-lg">
                <BsSliders />
                <h6 className="text-[12px] font-medium mt-1">Options</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
