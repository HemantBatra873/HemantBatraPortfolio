import React from "react";
import { motion as m } from "framer-motion";
import { Link } from "react-router-dom";
import { useCursorContext } from "../../context/CursorContext";

const AgraserPage = () => {
  const { mouseOverEvent, mouseOutEvent } = useCursorContext();

  return (
    <>
      <div className="bg-white text-black w-full h-screen flex justify-center items-center -mb-72 md:-mb-20">
        {/* Title */}
        <div className="relative z-50 w-full h-[15%] sm350:h-1/2 sm:h-[80%] md:h-[70%] flex justify-center items-end text-white">
          <div className="w-full text-center overflow-hidden px-4 -mt-[5%]">
            <m.div
              initial={{ transform: "translateY(100%)" }}
              animate={{ transform: "translateY(0%)" }}
              transition={{
                duration: 0.5,
                delay: 1,
                ease: "easeOut",
              }}
              className="Avegas-Royale-Regular text-[13vw] md:text-[11vw] flex justify-center items-center"
            >
              Cooperative
            </m.div>
          </div>
        </div>
      </div>
      <div className="bg-white text-black w-full h-full flex flex-col justify-center items-center gap-16 sm350:gap-24 xl1100:gap-32 xxl:gap-48 pb-20 px-8 mt-0 sm350:mt-48 sm:mt-80 md:mt-16 xl1100:mt-24 ">
        {/* About the project */}
        <div className="overflow-hidden w-full flex justify-center items-center text-center">
          <m.div
            initial={{ transform: "translateY(100%)" }}
            animate={{ transform: "translateY(0%)" }}
            transition={{
              duration: 0.5,
              delay: 1.5,
              ease: "easeOut",
            }}
            className="w-[100%] sm500:w-[70%] md:w-[45%] Avegas-Royale-Regular text-[5vw] sm350:text-[4vw] sm500:text-[3.25vw] sm:text-[3vw] md:text-[2.5vw] leading-[120%]"
          >
            Cooperative is an API driven MERN stack AI chat assistant .
          </m.div>
        </div>
        {/* Role / Responsibilities / GitHub / URL */}
        <div className="w-full md:w-[85%] xl1100:w-[65%] flex flex-col xl1100:flex-row justify-center items-center xl1100:items-start gap-4 sm500:gap-12 text-[8px] sm350:text-[10px] sm500:text-xs xl1100:text-sm xl:text-base">
          <div className="w-full sm500:w-[85%] md:w-[75%] xl1100:w-1/2 flex justify-between gap-4 sm500:gap-12">
            <div className="w-1/2 flex flex-col gap-4">
              <div className="font-semibold underline underline-offset-4">
                ROLE
              </div>
              <div>Web Developer</div>
            </div>
            <div className="w-1/2 flex flex-col gap-4">
              <div className="font-semibold underline underline-offset-4">
                RESPONSIBILITIES
              </div>
              <div>
                API Integration / React Development / Backend Developement /
                Authentication
              </div>
            </div>
          </div>
          <div className="w-full sm500:w-[85%] md:w-[75%] xl1100:w-1/2 flex justify-between gap-4 sm500:gap-12">
            <div className="w-1/2 flex flex-col gap-4">
              <div className="font-semibold underline underline-offset-4">
                GitHub
              </div>
              <Link
                to="https://github.com/HemantBatra873/Cooperative_Client"
                target="_blank"
                onMouseOver={mouseOverEvent}
                onMouseOut={mouseOutEvent}
                className="hover:opacity-50 duration-300 ease-in-out "
              >
                Cooperative_Client
              </Link>
            </div>
            <div className="w-1/2 flex flex-col gap-4">
              <div className="font-semibold underline underline-offset-4">
                URL
              </div>
              <Link
                to="https://cooperativeai.vercel.app/"
                target="_blank"
                onMouseOver={mouseOverEvent}
                onMouseOut={mouseOutEvent}
                className="hover:opacity-50 duration-300 ease-in-out"
              >
                https://cooperativeai.vercel.app/
              </Link>
            </div>
          </div>
        </div>
        {/* First Mockup */}
        <div className="w-full sm500:w-[85%] md:w-[65%] h-[18.5rem] sm350:h-[20rem] sm500:h-[25rem] sm:h-[25rem] lg:h-[30rem] xl1100:h-[40rem] xxl:h-[50rem] rounded-[1vw] overflow-hidden">
          <img
            src="./cooperativeMockup.png"
            alt=""
            className="w-full h-full object-cover animate-panImage2 hover:scale-150 sm500:hover:scale-125 duration-300 ease-in-out"
          />
        </div>
        {/* Challenge */}
        <div className="w-full sm350:w-[85%] md:w-[60%] xl1100:w-1/2 xl:w-[40%] flex flex-col gap-8">
          <div className="Avegas-Royale-Regular ml-[5%] text-[6vw] sm350:text-[4.5vw] sm500:text-[3.5vw] md:text-[2.5vw]">
            Challenge
          </div>
          <div className="text-[10px] sm500:text-xs xl1100:text-sm xl:text-base">
            Complex User Interaction: Needed to create an application that
            provides insightful and accurate responses to user queries.
            <br />
            <br />
            Data Security: Ensuring that user data is secure and access is
            restricted to authenticated users
            <br />
            <br />
            Cross-Device Compatibility: Developing a fully responsive design
            that works seamlessly across desktops, tablets, and smartphones.
            <br />
            <br />
            Scalability: Building a robust and scalable full-stack application
            to handle growth and increasing user interactions.
          </div>
        </div>
        {/* Process */}
        <div className="w-full sm350:w-[85%] md:w-[60%] xl1100:w-1/2 xl:w-[40%] flex flex-col gap-8">
          <div className="Avegas-Royale-Regular ml-[5%] text-[6vw] sm350:text-[4.5vw] sm500:text-[3.5vw] md:text-[2.5vw]">
            Process
          </div>
          <div className="text-[10px] sm500:text-xs xl1100:text-sm xl:text-base">
            Leveraged Google Gemini AI to generate intelligent responses,
            enhancing user engagement. Integrated the AI with the backend to
            handle and process user queries efficiently.
            <br />
            <br />
            Implemented JSON Web Token (JWT) authentication to ensure secure
            access. Used bcrypt for password encryption to protect user data.
            <br />
            <br />
            Designed a fully responsive user interface with React. Ensured
            consistent and smooth user experiences across all devices, including
            desktops, tablets, and smartphones.
            <br />
            <br />
            Utilized MongoDB for efficient and scalable data management.
            Developed the backend with Express and Node.js for robust
            server-side operations. Built the frontend with React, CSS3, HTML5,
            and JavaScript for dynamic and interactive user interfaces.
          </div>
        </div>
        <div className="w-full sm350:w-[85%] md:w-[60%] xl1100:w-1/2 xl:w-[40%] flex flex-col gap-8">
          <div className="Avegas-Royale-Regular ml-[5%] text-[6vw] sm350:text-[4.5vw] sm500:text-[3.5vw] md:text-[2.5vw]">
            Outcome
          </div>
          <div className="text-[10px] sm500:text-xs xl1100:text-sm xl:text-base">
            Achieved high user engagement through insightful and accurate
            AI-generated responses. Ensured user data protection and secure
            access with JWT authentication and bcrypt encryption.
            <br />
            <br />
            Provided a consistent and smooth experience across all devices,
            enhancing accessibility and usability.
          </div>
        </div>
        {/* Check it out button */}
        <div className="w-full flex flex-col justify-center items-center gap-8 sm:gap-12">
          <div className="Avegas-Royale-Regular text-[6vw] sm350:text-[4.5vw] sm500:text-[3.5vw] md:text-[2.5vw]">
            Check it out.
          </div>
          <Link
            to="https://cooperativeai.vercel.app/"
            target="_blank"
            onMouseOver={mouseOverEvent}
            onMouseOut={mouseOutEvent}
            className="bg-black text-white w-auto py-4 px-8 md:px-10 Avegas-Royale-Regular text-[2.5vw] md:text-[1vw] text-center rounded-full tracking-wider hover:opacity-50 duration-300 ease-in-out"
          >
            Cooperative
          </Link>
        </div>
      </div>
    </>
  );
};

export default AgraserPage;
