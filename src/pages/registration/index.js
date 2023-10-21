import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { registerSchema } from "../../validations/validations";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  sendEmailVerification,
} from "firebase/auth";
import { getDatabase, ref, set, onValue } from "firebase/database";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

export default function Registration() {
  const [passwordme, setPasswordme] = useState(false);
  const [passwordmeAgain, setPasswordmeAgain] = useState(false);
  const [myswiftusername, setMyswift] = useState("");
  const logo = "./images/logo.svg";
  const navigate = useNavigate();
  const auth = getAuth();
  const db = getDatabase();
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      passwordAgain: "",
    },

    validationSchema: registerSchema,

    onSubmit: (e) => {
      createUserWithEmailAndPassword(
        auth,
        formik.values.email,
        formik.values.password
      )
        .then(({ user }) => {
          updateProfile(auth.currentUser, {
            displayName: formik.values.name,
          })
            .then(() => {
              sendEmailVerification(auth.currentUser)
                .then(() => {
                  const gusername = formik.values.name;
                  const swiftusername = "@" + gusername.replace(/ /g, "_");

                  set(ref(db, "users/" + user.uid), {
                    username: formik.values.name,
                    email: formik.values.email,
                  })
                    .then(() => {
                      toast.success(
                        "Registration Successfully Complete! Please Check your mail",
                        {
                          position: "bottom-center",
                          autoClose: 1500,
                          hideProgressBar: true,
                          closeOnClick: true,
                          pauseOnHover: false,
                        }
                      );
                      formik.resetForm();
                      setTimeout(() => {
                        navigate("/signin");
                      }, 1600);
                    })
                    .catch((error) => {
                      toast.error("Registration Failled! Please try again", {
                        position: "bottom-center",
                        autoClose: 1500,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: false,
                      });
                      console.log(error);
                    });
                })
                .catch((error) => {
                  console.log("Email verification failled", error);
                });
            })
            .catch((error) => {
              console.log("update profile failled", error);
            });
        })
        .catch((error) => {
          console.log("Account Registerd Failled", error);
        });
    },
  });

  const navigateToLogin = () => {
    navigate("/signin");
  };
  useEffect(() => {
    const starCountRef = ref(db, "username/");
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      console.log(data);
    });
  }, []);
  return (
    <>
      <ToastContainer />
      <div className="relative bg-[#DBEAFE] h-[100vh]">
        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <div className="swiftlogo flex justify-center">
            <img src={logo} alt="swiftlogo" width={200} height={200} />
          </div>
          <div className="swiftform">
            <form
              onSubmit={formik.handleSubmit}
              className="px-6 py-6 bg-white rounded-sm mt-5 w-[570px]"
            >
              <h4 className="font-bold text-[22px] text-[#475569]">
                Create Account
              </h4>
              <div className="grid grid-cols-2 gap-4 mt-3">
                <label className="text-[#475569] text-[14px] font-medium">
                  Your Name
                  <input
                    id="name"
                    name="name"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                    type="text"
                    className="border-[1px] rounded-md indent-4 w-[250px] h-[40px] mt-2  outline-none"
                    placeholder="yourname"
                  />
                  {formik.touched.name && formik.errors.name ? (
                    <div className="py-1 text-[red] ml-1">
                      {formik.errors.name}
                    </div>
                  ) : null}
                </label>

                <label className="text-[#475569] font-medium text-[14px]">
                  Email Address
                  <input
                    id="email"
                    name="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    type="email"
                    className="border-[1px] rounded-md indent-4 w-[250px] h-[40px] mt-2 outline-none"
                    placeholder="youremail@example.com"
                  />
                  {formik.touched.email && formik.errors.email ? (
                    <div className="py-1 text-[red] ml-1">
                      {formik.errors.email}
                    </div>
                  ) : null}
                </label>
                <label className="relative text-[#475569] font-medium text-[14px]">
                  Password
                  <input
                    id="password"
                    name="password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    type={passwordme ? "text" : "password"}
                    className="border-[1px] rounded-md indent-4 w-[250px] h-[40px] mt-2 outline-none"
                    placeholder="password"
                  />
                  {passwordme ? (
                    <button
                      onClick={() => setPasswordme(false)}
                      className="absolute top-[41px] left-[218px]"
                    >
                      <AiFillEye fontSize={16} />
                    </button>
                  ) : (
                    <button
                      onClick={() => setPasswordme(true)}
                      className="absolute top-[41px] left-[218px]"
                    >
                      <AiFillEyeInvisible fontSize={16} />
                    </button>
                  )}
                  {formik.touched.password && formik.errors.password ? (
                    <div className="py-1 text-[red] ml-1">
                      {formik.errors.password}
                    </div>
                  ) : null}
                </label>
                <label className="relative text-[#475569] font-medium text-[14px]">
                  Password Repeat
                  <input
                    id="passwordAgain"
                    name="passwordAgain"
                    onChange={formik.handleChange}
                    value={formik.values.passwordAgain}
                    type="password"
                    className="border-[1px] rounded-md indent-4 w-[250px] h-[40px] mt-2 outline-none"
                    placeholder="password again"
                  />
                  {passwordmeAgain ? (
                    <button
                      onClick={() => setPasswordmeAgain(false)}
                      className="absolute top-[41px] left-[218px]"
                    >
                      <AiFillEye fontSize={16} />
                    </button>
                  ) : (
                    <button
                      onClick={() => setPasswordmeAgain(true)}
                      className="absolute top-[41px] left-[218px]"
                    >
                      <AiFillEyeInvisible fontSize={16} />
                    </button>
                  )}
                  {formik.touched.passwordAgain &&
                  formik.errors.passwordAgain ? (
                    <div className="py-1 text-[red] ml-1">
                      {formik.errors.passwordAgain}
                    </div>
                  ) : null}
                </label>
              </div>
              <label className="flex items-center gap-3 mt-5 text-[14px] font-medium">
                <input type="checkbox" required />I agree with
                <span className="text-[#2563EB] ">privacy policy & terms</span>
              </label>
              <button
                type="submit"
                className="w-full bg-[#2563EB] text-white rounded-md py-2 font-medium mt-3"
              >
                Account Register
              </button>
              <hr className="mt-6 mb-6" />
              <h4 className="uppercase font-bold text-[12.5px] text-center text-[#aca2a2]">
                or signup with
              </h4>
              <div className="thirdAuthbtn flex justify-center gap-4 mt-4">
                <button className="flex items-center gap-3 px-5 py-2 rounded-md hover:text-[#2563eb] bg-[#e2e8f0] hover:bg-[#bfdbfe]">
                  <FaGoogle fontSize={16} />
                  <span className="text-[15.008px] font-medium">Google</span>
                </button>
                <button className="flex items-center gap-3 px-5 py-2 rounded-md hover:text-[#2563eb] bg-[#e2e8f0] hover:bg-[#bfdbfe]">
                  <FaFacebook fontSize={16} />
                  <span className="text-[15.008px] font-medium">Facebook</span>
                </button>
              </div>
            </form>
            <p className="text-center mt-6 text-[#696464] text-[14px] cursor-pointer">
              Already have an account?{" "}
              <span
                className="text-[blue] cursor-pointer"
                onClick={navigateToLogin}
              >
                Login
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
