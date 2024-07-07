import React from "react";
import { motion as m } from "framer-motion";
import { Link } from "react-router-dom";
import { useCursorContext } from "../../context/CursorContext";

const AgraserPage = () => {
  const { mouseOverEvent, mouseOutEvent } = useCursorContext();

  return (
    <>
      <div className="bg-[#ece7e1] text-[#1a1818] w-full h-screen flex justify-center items-center -mb-72 md:-mb-20">
        {/* Title */}
        <div className="relative z-50 w-full h-[15%] sm350:h-1/2 sm:h-[80%] md:h-[70%] flex justify-center items-end text-[#ece7e1]">
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
              Agraser
            </m.div>
          </div>
        </div>
      </div>
      <div className="bg-[#ece7e1] text-[#1a1818] w-full h-full flex flex-col justify-center items-center gap-16 sm350:gap-24 xl1100:gap-32 xxl:gap-48 mb-20 px-8 mt-0 sm350:mt-48 sm:mt-80 md:mt-16 xl1100:mt-24 ">
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
            Agraser is an api based mern stack AI assistant website .
          </m.div>
        </div>
        {/* Role / Responsibilities / GitHub / URL */}
        <div className="w-full md:w-[85%] xl1100:w-[65%] flex flex-col xl1100:flex-row justify-center items-center xl1100:items-start gap-4 sm500:gap-12 text-[8px] sm350:text-[10px] sm500:text-xs xl1100:text-sm xl:text-base">
          <div className="w-full sm500:w-[85%] md:w-[75%] xl1100:w-1/2 flex justify-between gap-4 sm500:gap-12">
            <div className="w-1/2 flex flex-col gap-4">
              <div className="font-semibold underline underline-offset-4">
                ROLE
              </div>
              <div>Web Development</div>
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
                to="https://github.com/HemantBatra873"
                target="_blank"
                onMouseOver={mouseOverEvent}
                onMouseOut={mouseOutEvent}
                className="hover:opacity-50 duration-300 ease-in-out"
              >
                https://github.com/HemantBatra873
              </Link>
            </div>
            <div className="w-1/2 flex flex-col gap-4">
              <div className="font-semibold underline underline-offset-4">
                URL
              </div>
              <Link
                to="https://github.com/HemantBatra873"
                target="_blank"
                onMouseOver={mouseOverEvent}
                onMouseOut={mouseOutEvent}
                className="hover:opacity-50 duration-300 ease-in-out"
              >
                url will be added here soon
              </Link>
            </div>
          </div>
        </div>
        {/* First Mockup */}
        <div className="w-full sm500:w-[85%] md:w-[65%] h-[18.5rem] sm350:h-[20rem] sm500:h-[25rem] sm:h-[25rem] lg:h-[30rem] xl1100:h-[40rem] xxl:h-[50rem] rounded-[1vw] overflow-hidden">
          <img
            src="./coming_soon_landscape.jpg"
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
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis, aliquam!
            <br />
            <br />
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, voluptatem.
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, saepe.
          </div>
        </div>
        {/* Process */}
        <div className="w-full sm350:w-[85%] md:w-[60%] xl1100:w-1/2 xl:w-[40%] flex flex-col gap-8">
          <div className="Avegas-Royale-Regular ml-[5%] text-[6vw] sm350:text-[4.5vw] sm500:text-[3.5vw] md:text-[2.5vw]">
            Process
          </div>
          <div className="text-[10px] sm500:text-xs xl1100:text-sm xl:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, veritatis.
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic voluptatum vitae, quisquam ab 
            officia tempore error quidem. Corporis, atque?
            <br />
            <br />
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste amet magnam suscipit sunt
             sapiente aliquam alias praesentium aliquid?
          </div>
        </div>
        <div className="w-full sm350:w-[85%] md:w-[60%] xl1100:w-1/2 xl:w-[40%] flex flex-col gap-8">
          <div className="Avegas-Royale-Regular ml-[5%] text-[6vw] sm350:text-[4.5vw] sm500:text-[3.5vw] md:text-[2.5vw]">
            Outcome
          </div>
          <div className="text-[10px] sm500:text-xs xl1100:text-sm xl:text-base">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium, esse?
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae esse cum,
             eaque incidunt nesciunt blanditiis?
          </div>
        </div>
        {/* Check it out button */}
        <div className="w-full flex flex-col justify-center items-center gap-8 sm:gap-12">
          <div className="Avegas-Royale-Regular text-[6vw] sm350:text-[4.5vw] sm500:text-[3.5vw] md:text-[2.5vw]">
            Check it out.
          </div>
          <Link
            to="https://github.com/HemantBatra873?tab=repositories"
            target="_blank"
            onMouseOver={mouseOverEvent}
            onMouseOut={mouseOutEvent}
            className="bg-[#1a1818] text-[#ece7e1] w-auto py-4 px-8 md:px-10 Avegas-Royale-Regular text-[2.5vw] md:text-[1vw] text-center rounded-full tracking-wider hover:opacity-50 duration-300 ease-in-out"
          >
            Agraser
          </Link>
        </div>
      </div>
    </>
  );
};

export default AgraserPage;
