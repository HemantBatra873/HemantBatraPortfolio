import React from "react";
import { motion as m } from "framer-motion";
import { Link } from "react-router-dom";
import { useCursorContext } from "../../context/CursorContext";

const WorkPage = () => {
  const { mouseOverEvent, mouseOutEvent } = useCursorContext();

  return (
    <div className="bg-black text-white w-full h-screen flex flex-col xl1100:flex-row pt-28 md:pt-60 xl1100:pt-0 justify-start xl1100:justify-between items-center gap-8 sm500:gap-12 md:gap-12 xl1100:gap-20 px-8 md:px-20">
      <div className="w-full xl1100:w-[35%] h-auto xl1100:h-full flex justify-start md:justify-center xl1100:justify-end items-end xl1100:items-center">
        <div className="w-full sm350:w-3/4 h-auto flex flex-col justify-center items-start gap-4 mt-0 xl1100:mt-[50%]">
          <div className="overflow-hidden mb-2">
            <m.div
              initial={{ transform: "translateY(100%)" }}
              animate={{ transform: "translateY(0%)" }}
              transition={{
                duration: 0.5,
                delay: 0.5,
              }}
              className="uppercase font-medium tracking-wider text-sm sm500:text-base"
            >
              WORK
            </m.div>
          </div>
          <div className="overflow-hidden">
            <m.div
              initial={{ transform: "translateY(100%)" }}
              animate={{ transform: "translateY(0%)" }}
              transition={{
                duration: 0.5,
                delay: 0.75,
              }}
              className="text-[12px] leading-5 sm500:text-[14px] sm500:leading-7"
            >
              This is showcase of my best work in a variaty of projects
              including Real Estate website, AI powered LMS and API driven SaaS
              AI application.
            </m.div>
          </div>
          <div className="overflow-hidden">
            <m.div
              initial={{ transform: "translateY(100%)" }}
              animate={{ transform: "translateY(0%)" }}
              transition={{
                duration: 0.5,
                delay: 0.75,
              }}
              className="text-[12px] leading-5 sm500:text-[14px] sm500:leading-7"
            >
              The world of web development is constantly evolving and so are my
              skills over the last 2 years. I'm still learning and gaining new
              skills every day.
            </m.div>
          </div>
        </div>
      </div>
      <m.div
        initial={{ filter: "blur(50px)", opacity: 0 }}
        animate={{ filter: "blur(0px)", opacity: 1 }}
        transition={{
          duration: 1,
          delay: 0.25,
          ease: "easeOut",
        }}
        className="w-full xl1100:w-[55%] h-auto xl1100:h-full flex justify-center items-start xl1100:items-center"
      >
        <div className="w-full md:w-3/4 xl1100:w-full flex flex-col justify-center items-start gap-8">
          <Link
            to="/gruham"
            title="Gruham"
            onMouseOver={mouseOverEvent}
            onMouseOut={mouseOutEvent}
            className="w-full md:w-[90%] flex flex-col gap-2 hover:opacity-50 duration-300 ease-in-out"
          >
            <div className="uppercase text-[12vw] sm500:text-[9vw] xl1100:text-[6vw] tracking-tighter">
              <div className="Avegas-Royale-Regular leading-[100%] pl-[5%]">
                Gruham
              </div>
            </div>
            <div className="flex justify-start items-center gap-2 md:gap-4 ml-[2%]">
              <div className="w-2 h-[1px] bg-white"></div>
              <div className="text-[11px] md:text-xs font-medium uppercase">
                real estate website
              </div>
            </div>
          </Link>
          <Link
            to="/radius"
            title="Radius"
            onMouseOver={mouseOverEvent}
            onMouseOut={mouseOutEvent}
            className="w-full md:w-[90%] flex flex-col gap-2  hover:opacity-50 duration-300 ease-in-out"
          >
            <div className="uppercase text-[12vw] sm500:text-[9vw] xl1100:text-[6vw] tracking-tighter">
              <div className="Avegas-Royale-Regular leading-[100%] pl-[5%]">
                Radius
              </div>
            </div>
            <div className="flex justify-start items-center gap-2 md:gap-4 ml-[2%]">
              <div className="w-2 h-[1px] bg-white"></div>
              <div className="text-[11px] md:text-xs font-medium uppercase">
                AI powered LMS
              </div>
              <div className="bg-white text-black px-4 pt-1.5 pb-[5px] text-[11px] md:text-xs uppercase rounded-2xl font-semibold">
                Just Dropped
              </div>
            </div>
          </Link>
          <Link
            to="/cooperative"
            title="Cooperative"
            onMouseOver={mouseOverEvent}
            onMouseOut={mouseOutEvent}
            className="w-full md:w-[90%] flex flex-col gap-2 hover:opacity-50 duration-300 ease-in-out"
          >
            <div className="uppercase text-[12vw] sm500:text-[9vw] xl1100:text-[6vw] tracking-tighter">
              <div className="Avegas-Royale-Regular leading-[100%] pl-[5%]">
                Cooperative
              </div>
            </div>
            <div className="flex justify-start items-center gap-2 md:gap-4 ml-[2%]">
              <div className="w-2 h-[1px] bg-white"></div>
              <div className="text-[11px] md:text-xs font-medium uppercase">
                Api driven SaaS Application
              </div>
              <div className="bg-white text-black px-4 py-1.5 pb-[5px] text-[11px] md:text-xs uppercase rounded-2xl font-semibold">
                v.2.0.1
              </div>
            </div>
          </Link>
        </div>
      </m.div>
    </div>
  );
};

export default WorkPage;
