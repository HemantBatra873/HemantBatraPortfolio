import React from "react";
import GoodGroceriesPage from "../components/Projects/GoodGroceriesPage";
import ProjectsAnimation from "../components/Projects/ProjectsAnimation";

const GoodGroceries = () => {
  return (
    <div className="z-30 relative">
      <ProjectsAnimation />
      <GoodGroceriesPage />
    </div>
  );
};

export default GoodGroceries;
