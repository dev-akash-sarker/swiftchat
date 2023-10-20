import { useFormik } from "formik";
import React from "react";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { forgetSchema } from "../../validations/validations";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

export default function ForgetPassPage() {
  const logo = "./images/logo.svg";
  const auth = getAuth();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: forgetSchema,
    onSubmit: () => {
      sendPasswordResetEmail(auth, formik.values.email)
        .then((e) => {
          // Password reset email sent!
          // ..
          // formik.resetForm();
          toast.success("Password reset email sent!", {
            position: "bottom-center",
            autoClose: 1500,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
          });

          setTimeout(() => {
            navigate("/signin");
          }, 1600);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log("code", errorCode);
          console.log("message", errorMessage);

          // ..
        });
    },
  });

  const navigateLogin = () => {
    navigate("/signin");
  };
  return (
    <>
      <ToastContainer />
      <div className="relative bg-[#DBEAFE] h-[100vh]">
        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <div className="swiftlogo flex justify-center">
            <img src={logo} alt="swiftlogo" width={200} height={200} />
          </div>
          <div className="px-6 py-6 bg-white rounded-sm mt-5 w-[376px]">
            <h4 className="text-[18px] font-bold text-[#475569]">
              Recovery Password
            </h4>
            <form onSubmit={formik.handleSubmit}>
              <div className="relative grid grid-cols-1 gap-3 mt-3 bg-[white] rounded-md">
                <label className="text-[#475569] text-[14px] font-medium">
                  Email Address
                  <input
                    type="email"
                    name="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    placeholder="youremail@example.com"
                    className="border-[1px] rounded-md indent-4 w-[100%] h-[40px] mt-2  outline-none"
                  />
                </label>
                <button
                  type="submit"
                  className="w-full bg-[#2563EB] text-white rounded-md py-2 font-medium"
                >
                  Reset Password
                </button>
              </div>
            </form>
          </div>
          <p className="text-left mt-2 text-[#696464] text-[14px] cursor-pointer">
            Some how remembered?{" "}
            <button className="text-[blue]" onClick={navigateLogin}>
              Login
            </button>
          </p>
        </div>
      </div>
    </>
  );
}
