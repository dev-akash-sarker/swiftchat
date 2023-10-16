import React from "react";
import { FaGoogle, FaFacebookF } from "react-icons/fa";

export default function Registration() {
  const logo = "./images/logo.svg";
  return (
    <>
      <div className="relative bg-[#DBEAFE] h-[100vh]">
        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <div className="swiftlogo flex justify-center">
            <img src={logo} alt="swiftlogo" width={200} height={200} />
          </div>
          <div className="swiftform">
            <form className="px-6 py-6 bg-white rounded-sm mt-5 w-[570px]">
              <h4 className="font-bold text-[22px] text-[#475569]">
                Create Account
              </h4>
              <div className="grid grid-cols-2 gap-4 mt-3">
                <label className="text-[#475569] text-[14px] font-medium">
                  Your Name
                  <input
                    type="text"
                    className="border-[1px] rounded-md indent-4 w-[250px] h-[40px] mt-2  outline-none"
                    placeholder="yourname"
                  />
                </label>
                <label className="text-[#475569] font-medium text-[14px]">
                  Email Address
                  <input
                    type="email"
                    className="border-[1px] rounded-md indent-4 w-[250px] h-[40px] mt-2 outline-none"
                    placeholder="youremail@example.com"
                  />
                </label>
                <label className="text-[#475569] font-medium text-[14px]">
                  Password
                  <input
                    type="password"
                    className="border-[1px] rounded-md indent-4 w-[250px] h-[40px] mt-2 outline-none"
                    placeholder="password"
                  />
                </label>
                <label className="text-[#475569] font-medium text-[14px]">
                  Password Repeat
                  <input
                    type="password"
                    className="border-[1px] rounded-md indent-4 w-[250px] h-[40px] mt-2 outline-none"
                    placeholder="password again"
                  />
                </label>
              </div>
              <label className="flex items-center gap-3 mt-5 text-[14px] font-medium">
                <input type="checkbox" />I agree with
                <span className="text-[#2563EB] ">privacy policy & terms</span>
              </label>
              <button className="w-full bg-[#2563EB] text-white rounded-md py-2 font-medium mt-3">
                Account Register
              </button>
              <hr className="mt-6 mb-6" />
              <h4 className="uppercase font-bold text-[12.5px] text-center text-[#aca2a2]">
                or signup with
              </h4>
              <div className="thirdAuthbtn flex justify-center gap-4 mt-4">
                <button className="flex items-center gap-3 px-5 py-2 rounded-md bg-[#dddcdc]">
                  <FaGoogle />
                  <span className="font-medium">Google</span>
                </button>
                <button className="flex items-center gap-3 px-5 py-2 rounded-md bg-[#dddcdc]">
                  <FaFacebookF />{" "}
                  <span className="text-[20px] font-medium">Facebook</span>
                </button>
              </div>
            </form>
            <p className="text-center mt-6 text-[#696464] text-[14px]">
              Already have an account?{" "}
              <span className="text-[blue]">Login</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
