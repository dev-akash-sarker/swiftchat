import { useFormik } from "formik";
import React, { useState } from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { loginSchema } from "../../validations/validations";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUsers } from "../../feature/slice/loginSlice";

export default function LoginPage() {
  const logo = "./images/logo.svg";
  const auth = getAuth();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [passwordme, setPasswordme] = useState(false);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: (e) => {
      signInWithEmailAndPassword(
        auth,
        formik.values.email,
        formik.values.password
      )
        .then(({ user }) => {
          // Signed in
          // const user = userCredential.user;
          dispatch(loginUsers(user));
          localStorage.setItem("users", JSON.stringify(user));
          setTimeout(() => {
            navigate("/home");
          }, 500);
          // ...
        })
        .catch((error) => {
          console.log("error", error);
        });
    },
  });

  const handleForget = () => {
    navigate("/forgetpass");
  };

  const navigateToRegister = () => {
    navigate("/register");
  };
  return (
    <div className="relative bg-[#DBEAFE] h-[100vh]">
      <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <div className="swiftlogo flex justify-center">
          <img src={logo} alt="swiftlogo" width={200} height={200} />
        </div>
        <div className="swiftform">
          <div className="px-6 py-6 bg-white rounded-sm mt-5 w-[376px]">
            <h4 className="text-[18px] font-bold text-[#475569]">Login</h4>
            <form onSubmit={formik.handleSubmit}>
              <div className="relative grid grid-cols-1 gap-4 mt-3 bg-[white] rounded-md">
                <label className="text-[#475569] text-[14px] font-medium">
                  Email Address
                  <input
                    className="border-[1px] rounded-md indent-4 w-[100%] h-[40px] mt-2  outline-none"
                    type="email"
                    name="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    placeholder="youremail@example.com"
                  />
                  {formik.touched.email && formik.errors.email ? (
                    <div className="py-1 text-[red] ml-1">
                      {formik.errors.email}
                    </div>
                  ) : null}
                </label>
                <label className="relative text-[#475569] text-[14px] font-medium">
                  Password
                  <button
                    type="button"
                    onClick={handleForget}
                    className="absolute right-0 font-semibold hover:text-[#475569] text-[#2563eb]"
                  >
                    Forget Password?
                  </button>
                  <input
                    className="border-[1px] rounded-md indent-4 w-[100%] h-[40px] mt-2  outline-none"
                    type={passwordme ? "text" : "password"}
                    name="password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    placeholder="password"
                  />
                  {formik.touched.password && formik.errors.password ? (
                    <div className="py-1 text-[red] ml-1">
                      {formik.errors.password}
                    </div>
                  ) : null}
                  {passwordme ? (
                    <div
                      onClick={() => setPasswordme(false)}
                      className="absolute top-[41px] left-[296px]"
                    >
                      <AiFillEye fontSize={16} />
                    </div>
                  ) : (
                    <div
                      onClick={() => setPasswordme(true)}
                      className="absolute top-[41px] left-[296px]"
                    >
                      <AiFillEyeInvisible fontSize={16} />
                    </div>
                  )}
                </label>
                <button
                  type="submit"
                  className="w-full bg-[#2563EB] text-white rounded-md py-2 font-medium mt-3"
                >
                  Account Login
                </button>
                <hr />
                <h4 className="uppercase font-bold text-[12.5px] text-center text-[#aca2a2]">
                  or signup with
                </h4>
                <div className="thirdAuthbtn flex justify-center gap-4">
                  <button className="flex items-center gap-3 px-5 py-2 rounded-md hover:text-[#2563eb] bg-[#e2e8f0] hover:bg-[#bfdbfe]">
                    <FaGoogle fontSize={16} />
                    <span className="text-[15.008px] font-medium">Google</span>
                  </button>
                  <button className="flex items-center gap-3 px-5 py-2 rounded-md hover:text-[#2563eb] bg-[#e2e8f0] hover:bg-[#bfdbfe]">
                    <FaFacebook fontSize={16} />
                    <span className="text-[15.008px] font-medium">
                      Facebook
                    </span>
                  </button>
                </div>
              </div>
            </form>
            <p className="text-center mt-6 text-[#696464] text-[14px] cursor-pointer">
              Already have an account?{" "}
              <span
                className="text-[blue] cursor-pointer"
                onClick={navigateToRegister}
              >
                Register
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
