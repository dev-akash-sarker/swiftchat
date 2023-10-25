import React, { useState } from "react";
import { AiTwotoneMail } from "react-icons/ai";
import {
  BiLogoFacebookCircle,
  BiLogoInstagram,
  BiLogoTwitter,
  BiWorld,
} from "react-icons/bi";
import { BsFillTelephoneFill, BsGenderMale, BsTiktok } from "react-icons/bs";
import { FaBirthdayCake } from "react-icons/fa";
import { LiaCitySolid } from "react-icons/lia";
import { useSelector } from "react-redux";

export default function AboutDescription() {
  const user = useSelector((state) => state.login.loggedIn);
  const [about, setAbout] = useState(true);
  const [mutualfriend, setMutualfriend] = useState(false);
  const [gallery, setGallery] = useState(false);
  const [stories, setStories] = useState(false);
  const handleAbout = () => {
    setAbout(true);
    setMutualfriend(false);
    setGallery(false);
    setStories(false);
  };
  const handleMutualfriend = () => {
    setMutualfriend(true);
    setAbout(false);
    setGallery(false);
    setStories(false);
  };
  const handleGallery = () => {
    setAbout(false);
    setMutualfriend(false);
    setGallery(true);
    setStories(false);
  };
  const handleStories = () => {
    setAbout(false);
    setMutualfriend(false);
    setGallery(false);
    setStories(true);
  };

  return (
    <div>
      <nav className="mt-[32px] ml-4">
        <ul className="flex text-[12px] font-[600] text-[#64748b] gap-3">
          <li>
            <button
              onClick={handleAbout}
              className={
                about
                  ? "py-2 border-b-[3px] border-[blue] rounded-sm"
                  : "py-2 border-b-[3px] border-[transparent] rounded-sm"
              }
            >
              About
            </button>
          </li>
          <li>
            <button
              onClick={handleMutualfriend}
              className={
                mutualfriend
                  ? "py-2 border-b-[3px] border-[blue] rounded-sm"
                  : "py-2 border-b-[3px] border-[transparent] rounded-sm"
              }
            >
              Mutual Friends
            </button>
          </li>
          <li>
            <button
              onClick={handleGallery}
              className={
                gallery
                  ? "py-2 border-b-[3px] border-[blue] rounded-sm"
                  : "py-2 border-b-[3px] border-[transparent] rounded-sm"
              }
            >
              Gallery
            </button>
          </li>
          <li>
            <button
              onClick={handleStories}
              className={
                stories
                  ? "py-2 border-b-[3px] border-[blue] rounded-sm"
                  : "py-2 border-b-[3px] border-[transparent] rounded-sm"
              }
            >
              Stories
            </button>
          </li>
        </ul>
      </nav>
      <div className="p-[30px">
        <div className="mx-[12px] bg-white rounded-md">
          <div className="p-[30px]">
            {about ? (
              <>
                <div className="w-[41.6666%]">
                  <h5 className="text-[#475569] text-[16px] font-[600] leading-[22.4px] mb-[8px] text-start">
                    About {user.displayName.split(" ")[0]}
                  </h5>
                  <p className="text-[#64748b] text-[16px] font-[400] leading-[24px] mb-[12px]">
                    If you set your goals ridiculously high and it's a failure,
                    you will fail above everyone else's success
                  </p>
                  <div>
                    <nav>
                      <ul className="flex gap-3">
                        <li className="w-[40px] h-[40px] rounded-md  text-[#64748b] flex justify-center items-center  bg-[#e2e8f0] hover:text-[#1BA8F0] hover:bg-[#9db4ff92]">
                          <button className="text-[16px] ">
                            <BiLogoFacebookCircle />
                          </button>
                        </li>
                        <li className="w-[40px] h-[40px] rounded-md  text-[#64748b] flex justify-center items-center  bg-[#e2e8f0] hover:text-[#1BA8F0] hover:bg-[#9db4ff92]">
                          <button className="text-[16px] ">
                            <BiLogoTwitter />
                          </button>
                        </li>
                        <li className="w-[40px] h-[40px] rounded-md  text-[#64748b] flex justify-center items-center  bg-[#e2e8f0] hover:text-[#1BA8F0] hover:bg-[#9db4ff92]">
                          <button className="text-[16px] ">
                            <BiLogoInstagram />
                          </button>
                        </li>
                        <li className="w-[40px] h-[40px] rounded-md  text-[#64748b] flex justify-center items-center  bg-[#e2e8f0] hover:text-[#1BA8F0] hover:bg-[#9db4ff92]">
                          <button className="text-[16px] ">
                            <BsTiktok />
                          </button>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
                <div>
                  <h5 className="mt-6 text-[#475569] text-[16px] font-[600] leading-[22.4px] mb-[8px] text-start">
                    Basic Info
                  </h5>
                  <div className="flex gap-12 mt-4">
                    <div>
                      <div className="text-[#475569]">
                        <FaBirthdayCake fontSize={24} />
                      </div>
                      <div className="text-[#94a3b8] text-[0.75rem] font-[500] mt-2">
                        Birth day
                      </div>
                      <h5 className="text-[#475569] text-[16px] font-[600] leading-[22.4px] text-left">
                        June 26
                      </h5>
                    </div>
                    <div>
                      <div className="text-[#475569]">
                        <BsGenderMale fontSize={24} />
                      </div>
                      <div className="text-[#94a3b8] text-[0.75rem] font-[500] mt-2">
                        Gender
                      </div>
                      <h5 className="text-[#475569] text-[16px] font-[600] leading-[22.4px] text-left">
                        Male
                      </h5>
                    </div>
                    <div>
                      <div className="text-[#475569]">
                        <BiWorld fontSize={24} />
                      </div>
                      <div className="text-[#94a3b8] text-[0.75rem] font-[500] mt-2">
                        Language
                      </div>
                      <h5 className="text-[#475569] text-[16px] font-[600] leading-[22.4px] text-left">
                        English, French
                      </h5>
                    </div>
                    <div>
                      <div className="text-[#475569]">
                        <LiaCitySolid fontSize={24} />
                      </div>
                      <div className="text-[#94a3b8] text-[0.75rem] font-[500] mt-2">
                        City
                      </div>
                      <h5 className="text-[#475569] text-[16px] font-[600] leading-[22.4px] text-left">
                        Paris , France
                      </h5>
                    </div>
                    <div>
                      <div className="text-[#475569]">
                        <BsFillTelephoneFill fontSize={24} />
                      </div>
                      <div className="text-[#94a3b8] text-[0.75rem] font-[500] mt-2">
                        Phone No
                      </div>
                      <h5 className="text-[#475569] text-[16px] font-[600] leading-[22.4px] text-left">
                        +98 257 6985
                      </h5>
                    </div>
                    <div>
                      <div className="text-[#475569]">
                        <AiTwotoneMail fontSize={24} />
                      </div>
                      <div className="text-[#94a3b8] text-[0.75rem] font-[500] mt-2">
                        Email
                      </div>
                      <h5 className="text-[#475569] text-[16px] font-[600] leading-[22.4px] text-left">
                        example@gmail.com
                      </h5>
                    </div>
                  </div>
                </div>
              </>
            ) : mutualfriend ? (
              <>
                <div className="flex flex-wrap gap-9">
                  <div className="py-[1.5rem] px-[1rem] flex flex-col items-center justify-center text-center border-2 border-gray-100 w-[152px]">
                    <div className="w-[72px] h-[72px] mb-3 rounded-full overflow-hidden">
                      <img
                        src="https://source.unsplash.com/random/?person"
                        alt="mutualfriend"
                        className="w-[100%] h-[100%] object-cover"
                      />
                    </div>
                    <span className="text-[#94a3b8] text-[0.75rem] font-[500] mb-[0.25rem]">
                      @konstatain_nk
                    </span>
                    <h6 className="text-[#475569] text-[14px] font-bold leading-[19.6px] text-center ">
                      Konstantin Frank
                    </h6>
                  </div>
                </div>
              </>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
