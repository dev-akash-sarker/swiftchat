import React from "react";
import { useSelector } from "react-redux";
import { GoUnverified, GoVerified } from "react-icons/go";
import { getData } from "country-list";
// import { Country, State, City } from "country-state-city";

export default function MyEdit() {
  const user = useSelector((state) => state.login.loggedIn);
  const allcountry = getData();

  return (
    <>
      <div className="mt-12 ml-3 mr-2 text-[#2563eb] text-[12px] font-bold border-b-2 border-[#2563eb] inline-block">
        Edit Profile
      </div>
      <div className="ml-3 mr-2 p-7 bg-white">
        <div className="flex">
          <div className="personal-info-label mr-[150px]">
            <h6 className="text-[#475569] text-[14px] font-bold">
              Personal Information
            </h6>
            <p className="text-[#94a3b8] text-[12px] font-semibold mt-3">
              Edit Your personal Info
            </p>
          </div>
          <div>
            <div className="flex gap-8">
              <label className="flex flex-col gap-2 text-[#475569] text-[14px] font-[500]">
                First Name
                <input
                  type="text"
                  className="border-2 border-gray-300 w-[380px] h-[39.6px] focus:border-[#6999ff] rounded-lg outline-none indent-3"
                  onChange={(e) => console.log(e.target.value)}
                />
              </label>
              <label className="flex flex-col gap-2 text-[#475569] text-[14px] font-[500]">
                Last Name
                <input
                  type="text"
                  className="border-2 border-gray-300 w-[380px] h-[39.6px] focus:border-[#6999ff] rounded-lg outline-none indent-3"
                />
              </label>
            </div>
            <div>
              <label className="flex flex-col gap-2 mt-6 text-[#475569] text-[14px] font-[500]">
                <h6 className="flex gap-3">
                  Email
                  <span>
                    {user.emailVerified ? (
                      <>
                        <div className="flex items-center gap-2 text-[12px] text-[#10B981] font-bold">
                          <GoVerified />
                          Verified
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="flex items-center gap-2 text-[13px] text-[#b91010] font-bold">
                          <GoUnverified />
                          UnVerified
                        </div>
                      </>
                    )}
                  </span>
                </h6>
                <input
                  type="text"
                  className="border-2 bg-gray-200 border-gray-300 w-[790px] h-[39.6px] rounded-lg outline-none indent-3 placeholder:font-normal"
                  value={user.email}
                />
              </label>
              <p className="text-gray-300 text-[14px] font-bold mt-2">
                You need to have at least one email connected with your account
              </p>
            </div>
            <div></div>
            <div className="flex gap-8 mt-6">
              <label className="flex flex-col gap-2 text-[#475569] text-[14px] font-[500]">
                Country
                <select
                  id="countries"
                  class="bg-gray-50 border border-gray-300 h-[39.6px] outline-none text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option selected>Choose a country</option>
                  {allcountry.map((item, i) => (
                    <>
                      <option value={item.code} key={i}>
                        {item.name}
                      </option>
                    </>
                  ))}
                </select>
              </label>
              <label className="flex flex-col gap-2 text-[#475569] text-[14px] font-[500]">
                Country
                <select
                  id="countries"
                  class="bg-gray-50 border border-gray-300 h-[39.6px] outline-none text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option selected>Choose a country</option>
                  {allcountry.map((item, i) => (
                    <>
                      <option value={item.code} key={i}>
                        {item.name}
                      </option>
                    </>
                  ))}
                </select>
              </label>

              {/* <label className="flex flex-col gap-2 text-[#475569] text-[14px] font-[500]">
                Last Name
                <input
                  type="text"
                  className="border-2 border-gray-300 w-[380px] h-[39.6px] focus:border-[#6999ff] rounded-lg outline-none indent-3"
                />
              </label> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
