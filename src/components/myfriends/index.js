import React, { useEffect, useState } from "react";
import Navbar from "../navbar";
import { AiOutlinePlus } from "react-icons/ai";
import { ImBlocked } from "react-icons/im";
import { LuDot } from "react-icons/lu";
import { BlockData } from "./data";
import { BsSearch } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import { FaUserPlus } from "react-icons/fa";
import { getDatabase, onValue, ref } from "firebase/database";
import { useSelector } from "react-redux";

export default function Myfriends() {
  const defaultCover = "./images/defaulcover.jpg";
  const user = useSelector((state) => state.login.loggedIn);
  // eslint-disable-next-line no-unused-vars
  const db = getDatabase();
  const userimage = "./images/userimage.webp";
  const defaultprofile = "./images/defaultprofile.jpg";
  const [myaccount, setMyaccount] = useState();
  const [swiftusers, setSwiftusers] = useState({});
  const [newfriends, setNewfriends] = useState(false);
  const [allfriends, setAllfriends] = useState(false);
  const [favoritefriend, setFavoritefriend] = useState(false);
  const [blockedfriend, setBlockedfriend] = useState(false);

  const [addFriends, setAddFriends] = useState(false);
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

  useEffect(() => {
    const starCountRef = ref(db, "users/");
    onValue(starCountRef, (snapshot) => {
      const myusers = [];
      const myaccount = [];
      snapshot.forEach((item) => {
        if (item.key !== user.uid) {
          myusers.push({
            ...item.val(),
            id: item.key,
          });
        }
        if (item.key === user.uid) {
          myaccount.push(...item.val());
        }
      });
      setSwiftusers(myusers);
      setMyaccount(myaccount);
    });
  }, [db, user.uid]);
  console.log(swiftusers);
  console.log(myaccount);
  return (
    <>
      <Navbar />
      {addFriends ? (
        <div className="absolute w-[100%] top-0 h-[100vh] bg-[#0000003f] z-10"></div>
      ) : (
        ""
      )}
      <div className="relative flex">
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
                <button
                  onClick={() => setAddFriends(true)}
                  className="flex justify-center items-center gap-1 font-semibold w-[32px] h-[32px] text-[12px] hover:bg-[#9db4ff92] hover:text-[blue] bg-[#e2e8f0] text-[#64748b] rounded-full"
                >
                  <AiOutlinePlus fontSize={14} />
                </button>
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
        <div className="w-[80%] rounded-sm shadow bg-[#DBEAFE]">
          <div className="py-[32px] px-[20px]">
            <div className="px-[12px] ">
              <div className="bg-white rounded-xl">
                <div className="chatImage block w-[100%] h-[500px]">
                  <img
                    className="w-[100%] h-[100%] rounded-xl object-cover"
                    src={defaultCover}
                    alt="userimage"
                  />
                </div>
                <div className="px-[28px] py-[28px] flex">
                  <div className="w-[140.08px] h-[140.08px] border-2 border-[#fff] rounded-md  mt-[-60px]">
                    <img
                      className="w-[100%] h-[100%] rounded-md"
                      src={defaultprofile}
                      alt="profilePicture"
                    />
                  </div>
                  <div>
                    {/* {myaccount.map((item, i) => (
                      <div>
                        <div className="profilename"></div>
                        <div className="contact_count"></div>
                        <div className="friends"></div>
                      </div>
                    ))} */}
                    <div>
                      <div className="profilename"></div>
                      <div className="contact_count"></div>
                      <div className="friends"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {addFriends ? (
          <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-30">
            <div className="p-6 bg-white">
              <div className="relative">
                <h6 className="pb-[0.5rem] text-[#475569] text-[18px] font-medium">
                  Search by UserName
                </h6>
                <button
                  onClick={() => setAddFriends(false)}
                  className="absolute right-[-35px] top-[-40px] shadow-md rounded-full "
                >
                  <div className="flex justify-center items-center w-[32px] h-[32px] rounded-full  hover:bg-[#9db4ff92] hover:text-[blue] text-[15.5px] bg-white ">
                    <RxCross2 />
                  </div>
                </button>
              </div>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Enter Username"
                  className="bg-[#e2e8f0] outline-0 w-[272px] py-2 rounded-md indent-10"
                />
                <BsSearch className="absolute z-[60] top-[50%] text-[14px] text-[#979a9e] translate-y-[-50%] left-3 " />
              </div>
              <div className="mt-4 h-[260px] overflow-y-auto">
                {/* one */}
                {Object.values(swiftusers).map((item, i) => (
                  <>
                    <div key={i} className="chatuser flex gap-4 mb-3">
                      <div className="chatImage block w-[40px] h-[40px]">
                        <img
                          className="w-[100%] h-[100%] rounded-md"
                          src={userimage}
                          alt="userimage"
                        />
                      </div>
                      <div className="imageDetail whitespace-nowrap">
                        <h6 className="font-bold text-[14px] text-[#64748b] ">
                          {item.username}
                        </h6>
                        <div className="relative flex items-center">
                          <p className="text-[0.75rem] text-[#64748b] mb-0 w-[170px] overflow-hidden text-ellipsis">
                            {item.swiftname}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <button className="text-[#475569] w-[40px] h-[40px] flex items-center justify-center bg-white hover:bg-[#9db4ff92] hover:text-[#2563eb] rounded-full">
                          <FaUserPlus className="block" fontSize={16} />
                        </button>
                      </div>
                    </div>
                  </>
                ))}
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
}
