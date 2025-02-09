import React from "react";
import { motion as m } from "framer-motion";
import { useCursorContext } from "../../context/CursorContext";
import { Link } from "react-router-dom";
import myCV from "../../CV/hemantBatra.pdf";

const AboutPage = () => {
  const { mouseOverEvent, mouseOutEvent } = useCursorContext();

  return (
    <div className="relative w-full h-auto flex justify-start items-start md:items-center pt-28 md:pt-0 px-8 md:px-20">
      <div className="w-full xl1100:w-[60%] h-auto flex flex-col justify-start md:justify-start items-start md:ml-20 xl1100:ml-60 pb-20 md:pt-20">
        <div className="overflow-hidden w-full xl1100:-mb-10">
          <m.div
            initial={{ transform: "translateY(100%)" }}
            animate={{ transform: "translateY(0%)" }}
            transition={{
              duration: 0.5,
              delay: 0.75,
            }}
            className="Avegas-Royale-Regular text-[20vw] sm500:text-[22vw] md:text-[15vw]"
          >
            About
          </m.div>
        </div>
        <div className="z-40 relative w-full bg-white">
          <div className="w-full md:w-3/5 flex flex-col justify-center items-start gap-8">
            <div className="Avegas-Royale-Regular ml-[5%] text-[5vw] md:text-[2.5vw] leading-6 sm350:leading-8 sm500:leading-10 xl:leading-[3rem]">
              I'm Hemant Batra. A Full Stack developer and DSA practitioner.
            </div>
            <div className="w-[85%] text-xs leading-5 sm500:text-sm sm500:leading-7 mt-4">
              I have a deep passion for technology, always eager to explore and
              innovate in the ever-evolving digital landscape. My fascination
              with the Full stack web developement allows me to create dynamic
              and robust web applications, blending my love for both development
              and cutting-edge tech.
            </div>
            <div className="w-[85%] text-xs leading-5 sm500:text-sm sm500:leading-7">
              What excites me most about being a Web Developer is the
              opportunity to design impactful solutions that address real-world
              challenges. It’s more than just creating buttons and websites;
              it’s about developing experiences that truly assist people,
              whether it’s in online marketing or e-commerce. By understanding
              customer needs and identifying the right problems to solve, I can
              quickly deliver effective solutions and refine them over time.
              This cycle of continuous learning and improvement is essential to
              outstanding web development. My passion for technology fuels my
              drive to innovate and enhance the digital experiences I create.
            </div>
            <div className="w-[85%] Avegas-Royale-Regular uppercase text-xl sm500:text-2xl sm500 mt-4 ml-[4%]">
              skills
            </div>
            <div className="w-[85%] text-xs leading-5 sm500:text-sm sm500:leading-7">
              React / NextJS / Python / JavaScript / Github / Git / Tailwind /
              CSS3 / HTML5 / Java / NodeJS / MongoDB / ExpressJS / C++ /
              Bootstrap / MUI / Shadcn / Vercel / Postman / Insomnia / Operating
              Systems / Computer Networks / DBMS / OOPS / Data Structures /
              Algorithms / SQL / PostgreSQL / MongoDB / Firebase
            </div>
            <a
              onMouseOver={mouseOverEvent}
              onMouseOut={mouseOutEvent}
              href={myCV}
              target="_blank"
              rel="noreferrer"
            >
              <div className="w-auto py-2 px-10 bg-black text-white Avegas-Royale-Regular text-[3vw] md:text-[1.5vw] text-center rounded-full hover:opacity-50 duration-300 ease-in-out">
                My CV
              </div>
            </a>
            <div className="w-[85%] Avegas-Royale-Regular uppercase text-xl sm500:text-2xl sm500 mt-4 ml-[4%]">
              education
            </div>
            <div className="w-[85%] flex flex-col gap-4 text-xs leading-5 sm500:text-sm sm500:leading-7">
              <div className="flex flex-col">
                <div>Maharaja Surajmal Institute of Technology</div>
                <div>Bachelor of Technology , Computer Science</div>
                <div>(2022 - 2026)</div>
                <div>CGPA - 9.15</div>
              </div>
            </div>
            <Link
              to="mailto:hemantbatra567@gmail.com"
              onMouseOver={mouseOverEvent}
              onMouseOut={mouseOutEvent}
              className="w-auto py-2 px-10 bg-black text-white Avegas-Royale-Regular text-[3vw] md:text-[1.5vw] text-center rounded-full hover:opacity-50 duration-300 ease-in-out"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
