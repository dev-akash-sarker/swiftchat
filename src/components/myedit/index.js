import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GoUnverified, GoVerified } from "react-icons/go";
import { RxReload } from "react-icons/rx";
import { getData } from "country-list";

import {
  getAuth,
  sendEmailVerification,
  signOut,
  updateProfile,
} from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import { useFormik } from "formik";
import { getDatabase, ref, update } from "firebase/database";
import { useNavigate } from "react-router-dom";
import { loginUsers } from "../../feature/slice/loginSlice";
import { City, Country, State } from "country-state-city";

export default function MyEdit() {
  let countryData = Country.getAllCountries();
  const [countryname, setCountryname] = useState("");
  const [country, setCountry] = useState(countryData[18]);

  // console.log("countr", countryData[0].isoCode);
  const [stateData, setStateData] = useState();
  const auth = getAuth();
  const [islogout, setIslogout] = useState(false);
  const user = useSelector((state) => state.login.loggedIn);

  const db = getDatabase();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const mineuser = auth.currentUser;
  const allcountry = getData();

  const formik = useFormik({
    initialValues: {
      firstname: user.displayName.split(" ")[0],
      lastname: user.displayName.split(" ")[1],
    },

    onSubmit: (e) => {
      updateProfile(mineuser, {
        displayName: e.firstname + " " + e.lastname,
        country: countryname.split(" ")[0],
        isocode: countryname.split(" ")[1],
      })
        .then(() => {
          update(ref(db, `${"users/" + user.uid}`), {
            username: e.firstname + " " + e.lastname,
          })
            .then(() => setIslogout(true))
            .catch((error) => console.log(error));
          toast.success(
            "You will be automaticaly logout for changes! please login",
            {
              position: "top-right",
              autoClose: 1500,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            }
          );
        })
        .catch((error) => {
          // An error occurred
          // ...
        });
    },
  });

  const handleVerifiedAgain = () => {
    sendEmailVerification(auth.currentUser).then(() => {
      toast("🦄 Email verification send! Check your mail", {
        position: "bottom-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      // Email verification sent!
      // ...
    });
  };

  if (islogout === true) {
    setTimeout(() => {
      signOut(auth)
        .then(() => {
          localStorage.removeItem("users");
          dispatch(loginUsers(null));
          navigate("/signin");
        })
        .catch((error) => {
          console.log(error.code);
          console.log(error.message);
        });
    }, 1800);
  }

  const handleSelect = (e) => {
    setCountryname(e.target.value);
    if (countryname !== "") {
      setCountry(countryname.split(" ")[2]);
    }
  };

  useEffect(() => {
    // setStateData(State.getStateOfCountry(country?.isoCode));
    setStateData(State.getStatesOfCountry(countryData[country]?.isoCode));
  }, [country, country.isoCode, countryData, countryname]);
  console.log("mula", stateData);
  console.log("gajor", countryname.split(" ")[2]);
  console.log("helo myla", country);
  return (
    <>
      <ToastContainer />
      {countryname}
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
            <form onSubmit={formik.handleSubmit}>
              <div className="flex gap-8">
                <label className="flex flex-col gap-2 text-[#475569] text-[14px] font-[500]">
                  First Name
                  <input
                    type="text"
                    name="firstname"
                    className="border-2 border-gray-300 w-[380px] h-[39.6px] focus:border-[#6999ff] rounded-lg outline-none indent-3"
                    onChange={formik.handleChange}
                    value={formik.values.firstname}
                  />
                </label>
                <label className="flex flex-col gap-2 text-[#475569] text-[14px] font-[500]">
                  Last Name
                  <input
                    name="lastname"
                    type="text"
                    className="border-2 border-gray-300 w-[380px] h-[39.6px] focus:border-[#6999ff] rounded-lg outline-none indent-3"
                    onChange={formik.handleChange}
                    value={formik.values.lastname}
                  />
                </label>
              </div>
              <div>
                <label className="relative flex flex-col gap-2 mt-6 text-[#475569] text-[14px] font-[500]">
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
                  {user.emailVerified ? (
                    <input
                      type="text"
                      className="border-2 bg-gray-200 border-gray-300 w-[790px] h-[39.6px] rounded-lg outline-none indent-3 placeholder:font-normal"
                      value={user.email}
                      disabled
                    />
                  ) : (
                    <>
                      <input
                        type="text"
                        className="border-2 bg-gray-200 border-gray-300 w-[790px] h-[39.6px] rounded-lg outline-none indent-3 placeholder:font-normal"
                        value={user.email}
                      />
                      <button className="absolute top-10 right-10">
                        <RxReload onClick={handleVerifiedAgain} fontSize={18} />
                      </button>
                    </>
                  )}
                </label>
                <p className="text-gray-300 text-[14px] font-bold mt-2">
                  You need to have at least one email connected with your
                  account
                </p>
              </div>
              <div></div>
              <div className="flex gap-8 mt-6">
                <label className="flex flex-col gap-2 text-[#475569] text-[14px] font-[500]">
                  Country
                  <select
                    onChange={handleSelect}
                    id="countries"
                    class="bg-gray-50 border border-gray-300 h-[39.6px] outline-none text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option selected>Choose a country</option>

                    {Object.entries(countryData).map((item, key) => (
                      <>
                        <option
                          value={
                            item[1].name + " " + item[1].isoCode + " " + item[0]
                          }
                        >
                          <span>{item[1].name}</span>
                        </option>
                        {/* {console.log("hello", key)} */}
                      </>
                    ))}
                    {/* {countryData.map((item, i) => (
                      <option
                        onChange={mycodeiso}
                        value={item.name}
                        data={item.isoCode}
                        key={i}
                      >
                        <span>{item.name}</span>
                      </option>
                    ))} */}
                  </select>
                </label>

                <label className="flex flex-col gap-2 text-[#475569] text-[14px] font-[500]">
                  State
                  <select
                    id="countries"
                    class="bg-gray-50 border border-gray-300 h-[39.6px] outline-none text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option selected>Choose a state</option>
                    {/* {allcountry.map((item, i) => (
                      <>
                        <option value={item.code} key={i}>
                          {item.name}
                        </option>
                      </>
                    ))} */}
                    {stateData?.map((item) => (
                      <option value={item.name}>{item.name}</option>
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
              <div>
                <button type="submit">save</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
