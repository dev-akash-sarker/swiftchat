import React, { useEffect, useState } from "react";
import Navbar from "../navbar";
import AboutDescription from "../profiledescription";
import { getDatabase, onValue, ref } from "firebase/database";
import { useSelector } from "react-redux";

export default function MyProfile() {
  const user = useSelector((state) => state.login.loggedIn);
  const db = getDatabase();
  const defaultprofile = "./images/defaultprofile.jpg";
  const defaultCover = "./images/defaulcover.jpg";
  const [myaccount, setMyaccount] = useState();
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
          myaccount.push({ ...item.val() });
        }
      });
      //   setSwiftusers(myusers);
      setMyaccount(myaccount);
    });
  }, [db, user.uid]);
  return (
    <div>
      <Navbar />
      <div className="w-[100%] rounded-sm shadow bg-[#DBEAFE] py-[64px]">
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
              <div className="px-[28px] py-[28px] flex gap-4">
                <div className="w-[140.08px] h-[140.08px] border-2 border-[#fff] rounded-md  mt-[-60px]">
                  <img
                    className="w-[100%] h-[100%] rounded-md"
                    src={defaultprofile}
                    alt="profilePicture"
                  />
                </div>
                <div>
                  {myaccount === undefined
                    ? ""
                    : Object.values(myaccount).map((item, i) => (
                        <div key={i}>
                          <div className="profilename text-[#64748b] text-[18px] font-[600] leading-[25.2px]">
                            {item.username}
                            <span className="text-[#94a3b8] text-[12.6px] font-[400] text-start text">
                              {item.swiftname}
                            </span>
                          </div>
                          <div className="contact_count text-[#64748b] text-[0.75rem] overflow-hidden text-ellipsis whitespace-nowrap">
                            0 Friends | 0 Mutual
                          </div>
                          <div className="friends flex pt-[8px]">
                            <div className="w-[32px] h-[32px] bg-[red] rounded-full border-2 border-[#fff]"></div>
                            <div className="w-[32px] h-[32px] bg-[red] rounded-full border-2 border-[#fff] ml-[-12px]"></div>
                            <div className="w-[32px] h-[32px] bg-[red] rounded-full border-2 border-[#fff] ml-[-12px]"></div>
                          </div>
                        </div>
                      ))}
                </div>
              </div>
            </div>
          </div>
          <div>
            <AboutDescription />
          </div>
        </div>
      </div>
    </div>
  );
}
