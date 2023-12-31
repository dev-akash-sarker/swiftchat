import React, { useState } from "react";
import Navbar from "../navbar";
import { AiOutlinePlus } from "react-icons/ai";
import { ImBlocked } from "react-icons/im";
import { LuDot } from "react-icons/lu";
import { BlockData } from "./data";

export default function Myfriends() {
  const userimage = "./images/userimage.webp";
  const [newfriends, setNewfriends] = useState(false);
  const [allfriends, setAllfriends] = useState(false);
  const [favoritefriend, setFavoritefriend] = useState(false);
  const [blockedfriend, setBlockedfriend] = useState(false);
  const handleNewFriend = () => {
    setBlockedfriend(false);
    setFavoritefriend(false);
    setAllfriends(false);
    setNewfriends(true);
  };

  const handleAllFriends = () => {
    setBlockedfriend(false);
    setFavoritefriend(false);
    setAllfriends(true);
    setNewfriends(false);
  };

  const handleFavoriteFriends = () => {
    setBlockedfriend(false);
    setFavoritefriend(true);
    setAllfriends(false);
    setNewfriends(false);
  };

  const handleBlockedFriends = () => {
    setBlockedfriend(true);
    setFavoritefriend(false);
    setAllfriends(false);
    setNewfriends(false);
  };

  return (
    <>
      <Navbar />

      <div className="flex">
        <div className="chatlist w-[20%] rounded-sm shadow">
          <div className="p-3 px-5 bg-white ">
            <div className="flex justify-between bg-white">
              <div>
                <h4 className="font-bold">Friends</h4>
                <p className="text-[0.75rem] font-[500] text-[#94a3b8] mt-2">
                  127 Friends
                </p>
              </div>
              <div className="flex items-center">
                <div className="flex justify-center items-center gap-1 font-semibold w-[32px] h-[32px] text-[12px] hover:bg-[#9db4ff92] hover:text-[blue] bg-[#e2e8f0] text-[#64748b] rounded-full">
                  <AiOutlinePlus fontSize={14} />
                </div>
              </div>
            </div>
          </div>
          <div className="relative search pt-3 px-5">
            <nav>
              <ul className="flex text-[12px] font-[600] leading-[24px] text-[#64748b] gap-3 ">
                <li>
                  <button
                    onClick={handleAllFriends}
                    className={
                      allfriends
                        ? "border-b-[3px] rounded-sm border-[blue] text-[blue]"
                        : !newfriends &&
                          !favoritefriend &&
                          !blockedfriend &&
                          !allfriends
                        ? "border-b-[3px] rounded-sm border-[blue] text-[blue]"
                        : ""
                    }
                  >
                    All
                  </button>
                </li>
                <li>
                  <button
                    onClick={handleNewFriend}
                    className={
                      newfriends &&
                      "border-b-[3px] rounded-sm border-[blue] text-[blue]"
                    }
                  >
                    New
                  </button>
                </li>
                <li>
                  <button
                    onClick={handleFavoriteFriends}
                    className={
                      favoritefriend &&
                      "border-b-[3px] rounded-sm border-[blue] text-[blue]"
                    }
                  >
                    Favorites
                  </button>
                </li>
                <li>
                  <button
                    onClick={handleBlockedFriends}
                    className={
                      blockedfriend &&
                      "border-b-[3px] rounded-sm border-[blue] text-[blue]"
                    }
                  >
                    Blocked
                  </button>
                </li>
              </ul>
            </nav>
          </div>
          <hr className="mb-2 mt-0" />
          <div className="p-3 pt-0 px-5 h-[573px] overflow-y-auto">
            {!newfriends && !favoritefriend && !blockedfriend && !allfriends ? (
              <>
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
                        Had they visited rome before Had they visited rome
                        before
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
                        Had they visited rome before Had they visited rome
                        before
                      </p>
                    </div>
                    <div className=" flex items-center text-[#94a3b8] text-[0.55rem]">
                      <LuDot fontSize={10} /> 45 min
                    </div>
                  </div>
                </div>
              </>
            ) : allfriends ? (
              <>
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
                        Had they visited rome before Had they visited rome
                        before
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
                        Had they visited rome before Had they visited rome
                        before
                      </p>
                    </div>
                    <div className=" flex items-center text-[#94a3b8] text-[0.55rem]">
                      <LuDot fontSize={10} /> 45 min
                    </div>
                  </div>
                </div>
              </>
            ) : (
              ""
            )}

            {newfriends && (
              <>
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
                      Ashlay Thampson{" "}
                      <span className="ml-1 font-normal text-[#cbd5e1] text-[0.625rem]">
                        typing ...
                      </span>
                    </h6>
                    <div className="relative flex items-center">
                      <p className="text-[0.75rem] text-[#64748b] mb-0 w-[170px] overflow-hidden text-ellipsis">
                        Had they visited rome before Had they visited rome
                        before
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
                      Robert Thampson{" "}
                      <span className="ml-1 font-normal text-[#cbd5e1] text-[0.625rem]">
                        typing ...
                      </span>
                    </h6>
                    <div className="relative flex items-center">
                      <p className="text-[0.75rem] text-[#64748b] mb-0 w-[170px] overflow-hidden text-ellipsis">
                        Had they visited rome before Had they visited rome
                        before
                      </p>
                    </div>
                    <div className=" flex items-center text-[#94a3b8] text-[0.55rem]">
                      <LuDot fontSize={10} /> 45 min
                    </div>
                  </div>
                </div>
              </>
            )}
            {favoritefriend && (
              <>
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
                      Drack Thampson{" "}
                      <span className="ml-1 font-normal text-[#cbd5e1] text-[0.625rem]">
                        typing ...
                      </span>
                    </h6>
                    <div className="relative flex items-center">
                      <p className="text-[0.75rem] text-[#64748b] mb-0 w-[170px] overflow-hidden text-ellipsis">
                        Had they visited rome before Had they visited rome
                        before
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
                      Andriew Thomas{" "}
                      <span className="ml-1 font-normal text-[#cbd5e1] text-[0.625rem]">
                        typing ...
                      </span>
                    </h6>
                    <div className="relative flex items-center">
                      <p className="text-[0.75rem] text-[#64748b] mb-0 w-[170px] overflow-hidden text-ellipsis">
                        Had they visited rome before Had they visited rome
                        before
                      </p>
                    </div>
                    <div className=" flex items-center text-[#94a3b8] text-[0.55rem]">
                      <LuDot fontSize={10} /> 45 min
                    </div>
                  </div>
                </div>
              </>
            )}

            {blockedfriend && (
              <>
                <div>
                  {BlockData.length > 0 ? (
                    "dekhi"
                  ) : (
                    <>
                      <div className="flex justify-center items-center w-[100%] h-[100%] relative">
                        <ImBlocked
                          fontSize={150}
                          className="text-[#80808049] block absolute top-[50%] translate-y-[80%]"
                        />
                      </div>
                    </>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
