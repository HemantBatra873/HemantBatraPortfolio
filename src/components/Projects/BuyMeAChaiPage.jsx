import React, { useEffect } from "react";
import { motion as m } from "framer-motion";
import { Link } from "react-router-dom";
import { useCursorContext } from "../../context/CursorContext";
import Lenis from "@studio-freight/lenis";

const BuyMeAChaiPage = () => {
  const { mouseOverEvent, mouseOutEvent } = useCursorContext();

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
              className="Avegas-Royale-Regular text-[13vw] md:text-[11vw] flex justify-center items-center flex-col"
            >
              <div className="Avegas-Royale-Regular">Radius</div>
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
            RadiusLMS – AI-Powered Learning Management System built with NextJS,
            PostgreSQL, Drizzle ORM, Innjest serverless and more.
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
                Structure & Design / Frontend / Backend / Authentication /
                Database Management / Deployment
              </div>
            </div>
          </div>
          <div className="w-full sm500:w-[85%] md:w-[75%] xl1100:w-1/2 flex justify-between gap-4 sm500:gap-12">
            <div className="w-1/2 flex flex-col gap-4">
              <div className="font-semibold underline underline-offset-4">
                GitHub
              </div>
              <Link
                to="https://github.com/HemantBatra873/Radius-LMS"
                target="_blank"
                onMouseOver={mouseOverEvent}
                onMouseOut={mouseOutEvent}
                className="hover:opacity-50 duration-300 ease-in-out"
              >
                HemantBatra873/Radius-LMS
              </Link>
            </div>
            <div className="w-1/2 flex flex-col gap-4">
              <div className="font-semibold underline underline-offset-4">
                URL
              </div>
              <Link
                to="https://radius-lms.vercel.app/"
                target="_blank"
                onMouseOver={mouseOverEvent}
                onMouseOut={mouseOutEvent}
                className="hover:opacity-50 duration-300 ease-in-out"
              >
                https://radius-lms.vercel.app/
              </Link>
            </div>
          </div>
        </div>
        {/* First Mockup */}
        <div className="w-full sm500:w-[85%] md:w-[65%] h-[12.5rem] sm350:h-[15rem] sm500:h-[20rem] sm:h-[25rem] lg:h-[30rem] xl1100:h-[40rem] xxl:h-[50rem] rounded-[1vw] overflow-hidden">
          <img
            src="./radiusMockup.png"
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
            Students struggle to find relevant study materials efficiently.
          </div>
          <div className="text-[10px] sm500:text-xs xl1100:text-sm xl:text-base">
            Manual note-taking, flashcard creation, and quiz preparation are
            time-consuming.
          </div>
          <div className="text-[10px] sm500:text-xs xl1100:text-sm xl:text-base">
            Existing learning platforms lack real-time AI-driven customization.
          </div>
          <div className="text-[10px] sm500:text-xs xl1100:text-sm xl:text-base">
            Managing user authentication and secure access to study materials is
            complex.
          </div>
          <div className="text-[10px] sm500:text-xs xl1100:text-sm xl:text-base">
            Ensuring seamless performance while handling dynamic content
            generation.
          </div>
        </div>
        {/* Process */}
        <div className="w-full sm350:w-[85%] md:w-[60%] xl1100:w-1/2 xl:w-[40%] flex flex-col gap-8">
          <div className="Avegas-Royale-Regular ml-[5%] text-[6vw] sm350:text-[4.5vw] sm500:text-[3.5vw] md:text-[2.5vw]">
            Process
          </div>
          <div className="text-[10px] sm500:text-xs xl1100:text-sm xl:text-base">
            Built the frontend using Next.js, Tailwind CSS, and Shadcn UI for a
            smooth user experience.
          </div>
          <div className="text-[10px] sm500:text-xs xl1100:text-sm xl:text-base">
            Integrated Gemini 2.0 Flash API to generate study materials
            instantly.
          </div>
          <div className="text-[10px] sm500:text-xs xl1100:text-sm xl:text-base">
            Utilized Inngest serverless functions for real-time AI-powered
            automation.
          </div>
          <div className="text-[10px] sm500:text-xs xl1100:text-sm xl:text-base">
            Implemented PostgreSQL (NeonDB) with Drizzle ORM for efficient data
            management.
          </div>
          <div className="text-[10px] sm500:text-xs xl1100:text-sm xl:text-base">
            Secured authentication with Clerk and enabled seamless payments via
            Stripe.
          </div>
        </div>
        <div className="w-full sm350:w-[85%] md:w-[60%] xl1100:w-1/2 xl:w-[40%] flex flex-col gap-8">
          <div className="Avegas-Royale-Regular ml-[5%] text-[6vw] sm350:text-[4.5vw] sm500:text-[3.5vw] md:text-[2.5vw]">
            Outcome
          </div>
          <div className="text-[10px] sm500:text-xs xl1100:text-sm xl:text-base">
            Instant Study Material Generation – Users receive customized notes,
            flashcards, and quizzes in seconds.
          </div>
          <div className="text-[10px] sm500:text-xs xl1100:text-sm xl:text-base">
            Scalable & Efficient – Optimized database and serverless
            architecture ensure high performance.
          </div>
          <div className="text-[10px] sm500:text-xs xl1100:text-sm xl:text-base">
            Secure & Hassle-Free Access – Authentication and payments are
            streamlined for a seamless experience.
          </div>
          <div className="text-[10px] sm500:text-xs xl1100:text-sm xl:text-base">
            User-Friendly Interface – Modern UI ensures intuitive navigation and
            accessibility.
          </div>
          <div className="text-[10px] sm500:text-xs xl1100:text-sm xl:text-base">
            Live & Open-Source – Deployed successfully with an accessible
            codebase for further improvements.
          </div>
        </div>
        {/* Check it out button */}
        <div className="w-full flex flex-col justify-center items-center gap-8 sm:gap-12">
          <div className="Avegas-Royale-Regular text-[6vw] sm350:text-[4.5vw] sm500:text-[3.5vw] md:text-[2.5vw]">
            Check it out.
          </div>
          <Link
            to="https://radius-lms.vercel.app/"
            target="_blank"
            onMouseOver={mouseOverEvent}
            onMouseOut={mouseOutEvent}
            className="bg-black text-white w-auto py-4 px-8 md:px-10 Avegas-Royale-Regular text-[2.5vw] md:text-[1vw] text-center rounded-full tracking-wider hover:opacity-50 duration-300 ease-in-out"
          >
            Radius
          </Link>
        </div>
      </div>
    </>
  );
};

export default BuyMeAChaiPage;
