import classes from "./project-card.module.css";
import { twMerge } from "tailwind-merge";

export const ProjectCardPlaceHolder = () => {
  return (
    <div className={twMerge(classes.projectCardPlaceholder, "w-0 md:w-[400px] shadow-lg p-4 rounded-lg")}>
      <div className="w-full h-[200px] bg-gradient-to-r from-gray-300 to-gray-100 rounded-md mb-4" />
      <div className="w-full h-[24px] bg-gray-200 rounded-md mb-2" />
      <div className="w-3/4 h-[14px] bg-gray-200 rounded-md mb-2" />
      <div className="w-1/2 h-[14px] bg-gray-200 rounded-md" />
    </div>
  );
};

export default ProjectCardPlaceHolder;
