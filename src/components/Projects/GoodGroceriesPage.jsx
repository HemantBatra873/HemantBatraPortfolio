import { motion as m } from "framer-motion";
import { Link } from "react-router-dom";
import { useCursorContext } from "../../context/CursorContext";


const GoodGroceriesPage = () => {
  const { mouseOverEvent, mouseOutEvent } = useCursorContext();
  return (
    <>
      <div className="bg-white text-black w-full h-screen flex justify-center items-center -mb-72 md:-mb-20">
        {/* Title */}
        <div className="relative z-50 w-full h-[15%] sm350:h-1/2 sm:h-[80%] md:h-[70%] flex justify-center items-end text-white">
          <div className="w-full text-center overflow-hidden px-4">
            <m.div
              initial={{ transform: "translateY(100%)" }}
              animate={{ transform: "translateY(0%)" }}
              transition={{
                duration: 0.5,
                delay: 1,
                ease: "easeOut",
              }}
              className="text-[13vw] md:text-[11vw] flex flex-col justify-center items-center"
            >
              <div className="Avegas-Royale-Regular">Gruham</div>
            </m.div>
          </div>
        </div>
      </div>
      <div className="bg-white text-black w-full h-full flex flex-col justify-center items-center gap-16 sm350:gap-24 xl1100:gap-32 xxl:gap-48 mb-20 px-8 mt-0 sm350:mt-48 sm:mt-80 md:mt-16 xl1100:mt-24 ">
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
            Gruham is a MERN stack based Real estate platform.
          </m.div>
        </div>
        {/* Role / Responsibilities / GitHub / URL */}
        <div className="w-full md:w-[85%] xl1100:w-[65%] flex flex-col xl1100:flex-row justify-center items-center xl1100:items-start gap-4 sm500:gap-12 text-[8px] sm350:text-[10px] sm500:text-xs xl1100:text-sm xl:text-base">
          <div className="w-full sm500:w-[85%] md:w-[75%] xl1100:w-1/2 flex justify-between gap-4 sm500:gap-12">
            <div className="w-1/2 flex flex-col gap-4">
              <div className="font-semibold underline underline-offset-4">
                ROLE
              </div>
              <div>MERN stack developer</div>
            </div>
            <div className="w-1/2 flex flex-col gap-4">
              <div className="font-semibold underline underline-offset-4">
                RESPONSIBILITIES
              </div>
              <div>
                Frontend Development / Backend developement / Authentication /
                SEO Optimisation
              </div>
            </div>
          </div>
          <div className="w-full sm500:w-[85%] md:w-[75%] xl1100:w-1/2 flex justify-between gap-4 sm500:gap-12">
            <div className="w-1/2 flex flex-col gap-4">
              <div className="font-semibold underline underline-offset-4">
                GitHub
              </div>
              <Link
                to="https://github.com/HemantBatra873/Gruham"
                target="_blank"
                onMouseOver={mouseOverEvent}
                onMouseOut={mouseOutEvent}
                className="hover:opacity-50 duration-300 ease-in-out"
              >
                github/HemantBatra873
              </Link>
            </div>
            <div className="w-1/2 flex flex-col gap-4">
              <div className="font-semibold underline underline-offset-4">
                URL
              </div>
              <Link
                to="https://gruham-theta.vercel.app/"
                target="_blank"
                onMouseOver={mouseOverEvent}
                onMouseOut={mouseOutEvent}
                className="hover:opacity-50 duration-300 ease-in-out"
              >
                gruham-theta.vercel.app/
              </Link>
            </div>
          </div>
        </div>
        {/* First Mockup */}
        <div className="w-full sm500:w-[85%] md:w-[65%] h-[12.5rem] sm350:h-[15rem] sm500:h-[20rem] sm:h-[25rem] lg:h-[30rem] xl1100:h-[40rem] xxl:h-[50rem] rounded-[1vw] overflow-hidden">
          <img
            src="./gruhamMockup.png"
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
            Complex Listings Management: Needed to create a platform where
            homeowners can list properties with various amenities, and buyers
            can explore these listings seamlessly. <br />
            <br />
            Data Security and Authorization: Ensuring secure access and
            protecting user data with robust authentication mechanisms.
            <br />
            <br /> User-Friendly Interface: Developing a user-friendly and
            intuitive interface that works smoothly across different devices.{" "}
            <br />
            <br />
            Advanced Search Functionality: Providing users with powerful search
            tools to find the most relevant property listings based on their
            preferences.
          </div>
        </div>
       
        {/* Process */}
        <div className="w-full sm350:w-[85%] md:w-[60%] xl1100:w-1/2 xl:w-[40%] flex flex-col gap-8">
          <div className="Avegas-Royale-Regular ml-[5%] text-[6vw] sm350:text-[4.5vw] sm500:text-[3.5vw] md:text-[2.5vw]">
            Process
          </div>
          <div className="text-[10px] sm500:text-xs xl1100:text-sm xl:text-base">
            Built the platform using the MERN stack (MongoDB, Express.js, React,
            Node.js) for a robust and efficient backend and frontend.
            <br />
            <br />
            Utilized MongoDB for scalable and efficient data management.
            <br />
            <br />
            Enabled homeowners to list their properties, highlighting amenities
            like parking and furnished spaces. Provided authorized buyers with
            access to explore listings and directly connect with landlords.
            <br />
            <br />
            Offered users the ability to list properties for sale or rent,
            providing flexibility for different needs. Implemented features for
            users to manage their listings - create, update, and delete as
            needed.
            <br />
            <br />
            Utilized JWT and bcryptJS for secure authorization and user data
            protection. Integrated Google Auth for easy and secure login.
            <br />
            <br />
            Enabled users to view and update their profile information,
            including name, email, and password. Provided features to manage
            listings directly from the user profile.
            <br />
            <br />
            Developed a powerful search tool that matches users with the most
            relevant listings based on their input. Designed a dynamic home page
            with the latest listings displayed at the top, neatly categorized by
            sale or rent.
            <br />
            <br />
            Ensured the platform is fully responsive, providing a seamless
            experience across all devices and screen sizes. Designed an
            intuitive and user-friendly interface to enhance the overall user
            experience.
          </div>
        </div>
        {/* Second Mockup */}
        <div className="w-full sm500:w-[85%] md:w-[65%] h-auto rounded-[1vw] overflow-hidden">
          <img
            src="../gruhamMockup2.png"
            alt=""
            className="w-full h-full object-cover object-center animate-scaleImage duration-300 ease-in-out"
          />
        </div>
        <div className="w-full sm350:w-[85%] md:w-[60%] xl1100:w-1/2 xl:w-[40%] flex flex-col gap-8">
          <div className="Avegas-Royale-Regular ml-[5%] text-[6vw] sm350:text-[4.5vw] sm500:text-[3.5vw] md:text-[2.5vw]">
            Outcome
          </div>
          <div className="text-[10px] sm500:text-xs xl1100:text-sm xl:text-base">
            Facilitated effortless property listings for homeowners, making it
            easy to highlight key amenities. Enabled buyers to explore and
            connect with landlords directly through the platform.
            <br />
            <br />
            Delivered a fully responsive and intuitive interface, ensuring a
            seamless experience across all devices. Improved user engagement
            with advanced search functionality and dynamic home page features.
            <br />
            <br />
            <span className="font-medium">
              The link to the deployed app is provided below .
            </span>
          </div>
        </div>
        {/* Check it out button */}
        <div className="w-full flex flex-col justify-center items-center gap-8 sm:gap-12">
          <div className="Avegas-Royale-Regular text-[6vw] sm350:text-[4.5vw] sm500:text-[3.5vw] md:text-[2.5vw]">
            Check it out.
          </div>
          <Link
            to="https://gruham-theta.vercel.app/"
            target="_blank"
            onMouseOver={mouseOverEvent}
            onMouseOut={mouseOutEvent}
            className="bg-black text-white w-auto py-4 px-8 md:px-10 Avegas-Royale-Regular text-[2.5vw] md:text-[1vw] text-center rounded-full hover:opacity-50 duration-300 ease-in-out"
          >
            Gruham
          </Link>
        </div>
      </div>
    </>
  );
};

export default GoodGroceriesPage;
