import React, { useEffect, useRef } from "react";
import { motion as m, useTransform, useScroll } from "framer-motion";
import { Link } from "react-router-dom";
import { useCursorContext } from "../../context/CursorContext";
import Lenis from "@studio-freight/lenis";
import useDimension from "../../hooks/useDimension";

const BuyMeAChaiPage = () => {
  const { mouseOverEvent, mouseOutEvent } = useCursorContext();

  // On Scroll Animation/Functionallity
  const container = useRef(null);
  const dimension = useDimension();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const y1 = useTransform(
    scrollYProgress,
    [0, 1],
    [0, dimension.width < 768 ? dimension.height * 2 : dimension.height * 2.5]
  );
  const y2 = useTransform(
    scrollYProgress,
    [0, 1],
    [
      0,
      dimension.width < 640
        ? dimension.height * 1.8
        : dimension.width < 768
        ? dimension.height * 2.4
        : dimension.width < 1100
        ? dimension.height * 2.7
        : dimension.width < 1280
        ? dimension.height * 3
        : dimension.height * 3.3,
    ]
  );
  const y3 = useTransform(
    scrollYProgress,
    [0, 1],
    [0, dimension.height * 1.25]
  );
  const y4 = useTransform(
    scrollYProgress,
    [0, 1],
    [
      0,
      dimension.width < 640
        ? dimension.height * 1.8
        : dimension.width < 768
        ? dimension.height * 2.4
        : dimension.width < 1280
        ? dimension.height * 2.7
        : dimension.height * 3,
    ]
  );

  // Smooth Scrolling
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

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
              Buy me a Chai
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
            Buy me a chai is a full-stack micro-patronage website . Built with NodeJS , ExpressJs , 
            NextJS , MongoDB
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
                Structure & Design / Frontend / Backend /
                Authentication / Database Management /
                Deployment
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
                URL will come here soon
              </Link>
            </div>
          </div>
        </div>
        {/* First Mockup */}
        <div className="w-full sm500:w-[85%] md:w-[65%] h-[12.5rem] sm350:h-[15rem] sm500:h-[20rem] sm:h-[25rem] lg:h-[30rem] xl1100:h-[40rem] xxl:h-[50rem] rounded-[1vw] overflow-hidden">
          <img
            src="./coming_soon_landscape.jpg"
            alt=""
            className="w-full h-full object-cover animate-panImage hover:scale-125 duration-300 ease-in-out"
          />
        </div>
        {/* Challenge */}
        <div className="w-full sm350:w-[85%] md:w-[60%] xl1100:w-1/2 xl:w-[40%] flex flex-col gap-8">
          <div className="Avegas-Royale-Regular ml-[5%] text-[6vw] sm350:text-[4.5vw] sm500:text-[3.5vw] md:text-[2.5vw]">
            Challenge
          </div>
          <div className="text-[10px] sm500:text-xs xl1100:text-sm xl:text-base">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt, eligendi?
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, accusamus.
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus maiores corrupti 
            eius. Nemo, facere natus.
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, quisquam quidem.
             Incidunt maiores sint ipsam ducimus quae distinctio, nesciunt debitis?
          </div>
        </div>
        {/* On Scroll Gallery */}
        <div className="w-full sm500:w-[85%] md:w-[65%]">
          <div
            ref={container}
            className="h-screen sm:h-[125vh] md:h-[150vh] xl:h-[175vh] flex gap-[2vw] rounded-[1vw] overflow-hidden"
          >
            {dimension.width < 640 ? null : (
              <m.div
                style={{ y: y1 }}
                className="w-1/4 h-full flex flex-col gap-[2vw] relative -top-[70%] xl:-top-[50%]"
              >
                <div className="w-full h-full relative rounded-[1vw] overflow-hidden">
                  <img
                    src="./coming_soon_potrait.jpg"
                    alt=""
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="w-full h-full relative rounded-[1vw] overflow-hidden">
                  <img
                    src="./coming_soon_potrait.jpg"
                    alt=""
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="w-full h-full relative rounded-[1vw] overflow-hidden">
                  <img
                    src="./coming_soon_potrait.jpg"
                    alt=""
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="w-full h-full relative rounded-[1vw] overflow-hidden">
                  <img
                    src="./coming_soon_potrait.jpg"
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
              </m.div>
            )}
            <m.div
              style={{ y: y2 }}
              className="w-1/2 sm500:w-1/3 sm:w-1/4 h-full flex flex-col gap-[2vw] relative -top-[90%] sm:-top-[95%]"
            >
              <div className="w-full h-full relative rounded-[1vw] overflow-hidden">
                <img
                  src="./coming_soon_potrait.jpg"
                  alt=""
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="w-full h-full relative rounded-[1vw] overflow-hidden">
                <img
                  src="./coming_soon_potrait.jpg"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full h-full relative rounded-[1vw] overflow-hidden">
                <img
                  src="./coming_soon_potrait.jpg"
                  alt=""
                  className="w-full h-full object-cover object-bottom"
                />
              </div>
              <div className="w-full h-full relative rounded-[1vw] overflow-hidden">
                <img
                  src="./coming_soon_potrait.jpg"
                  alt=""
                  className="w-full h-full object-cover object-bottom"
                />
              </div>
            </m.div>
            <m.div
              style={{ y: y3 }}
              className="w-1/2 sm500:w-1/3 sm:w-1/4 h-full flex flex-col gap-[2vw] relative -top-[60%] sm:-top-[40%] xl:-top-[25%]"
            >
              <div className="w-full h-full relative rounded-[1vw] overflow-hidden">
                <img
                  src="./coming_soon_potrait.jpg"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full h-full relative rounded-[1vw] overflow-hidden">
                <img
                  src="./coming_soon_potrait.jpg"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full h-full relative rounded-[1vw] overflow-hidden">
                <img
                  src="./coming_soon_potrait.jpg"
                  alt=""
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="w-full h-full relative rounded-[1vw] overflow-hidden">
                <img
                  src="./coming_soon_potrait.jpg"
                  alt=""
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </m.div>
            {dimension.width < 500 ? null : (
              <m.div
                style={{ y: y4 }}
                className="w-1/3 sm:w-1/4 h-full flex flex-col gap-[2vw] relative -top-[90%] sm:-top-[100%]"
              >
                <div className="w-full h-full relative rounded-[1vw] overflow-hidden">
                  <img
                    src="./coming_soon_potrait.jpg"
                    alt=""
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="w-full h-full relative rounded-[1vw] overflow-hidden">
                  <img
                    src="./coming_soon_potrait.jpg"
                    alt=""
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="w-full h-full relative rounded-[1vw] overflow-hidden">
                  <img
                    src="./coming_soon_potrait.jpg"
                    alt=""
                    className="w-full h-full object-cover object-bottom"
                  />
                </div>
                <div className="w-full h-full relative rounded-[1vw] overflow-hidden">
                  <img
                    src="./coming_soon_potrait.jpg"
                    alt=""
                    className="w-full h-full object-cover object-bottom"
                  />
                </div>
              </m.div>
            )}
          </div>
        </div>
        {/* Process */}
        <div className="w-full sm350:w-[85%] md:w-[60%] xl1100:w-1/2 xl:w-[40%] flex flex-col gap-8">
          <div className="Avegas-Royale-Regular ml-[5%] text-[6vw] sm350:text-[4.5vw] sm500:text-[3.5vw] md:text-[2.5vw]">
            Process
          </div>
          <div className="text-[10px] sm500:text-xs xl1100:text-sm xl:text-base">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda eos, vel dolorum,
             laudantium voluptatem molestiae, aperiam animi molestias soluta voluptates tempora!
              Nobis rem eligendi animi dicta nemo illo dolor in?
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, saepe.
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, vel!
            <br />
            <br />
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur quaerat sint eligendi 
            itaque nihil aut!
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur dolor maiores tempora.
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, nostrum?
          </div>
        </div>
        <div className="w-full sm350:w-[85%] md:w-[60%] xl1100:w-1/2 xl:w-[40%] flex flex-col gap-8">
          <div className="Avegas-Royale-Regular ml-[5%] text-[6vw] sm350:text-[4.5vw] sm500:text-[3.5vw] md:text-[2.5vw]">
            Outcome
          </div>
          <div className="text-[10px] sm500:text-xs xl1100:text-sm xl:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, quidem.
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam modi qui molestias
             repellat excepturi repudiandae quidem aspernatur eaque, vitae animi illo minima? Illum 
             fugit dolorem harum veniam unde sint illo.
            <br />
            <br />
            <span className="font-medium">
              A fully functional demo/testing version of the application is
              deployed.
            </span>
          </div>
        </div>
        {/* Check it out button */}
        <div className="w-full flex flex-col justify-center items-center gap-8 sm:gap-12">
          <div className="Avegas-Royale-Regular text-[6vw] sm350:text-[4.5vw] sm500:text-[3.5vw] md:text-[2.5vw]">
            Check it out.
          </div>
          <Link
            to="https://github.com/HemantBatra873"
            target="_blank"
            onMouseOver={mouseOverEvent}
            onMouseOut={mouseOutEvent}
            className="bg-[#1a1818] text-[#ece7e1] w-auto py-4 px-8 md:px-10 Avegas-Royale-Regular text-[2.5vw] md:text-[1vw] text-center rounded-full tracking-wider hover:opacity-50 duration-300 ease-in-out"
          >
            Buy me a chai
          </Link>
        </div>
      </div>
    </>
  );
};

export default BuyMeAChaiPage;