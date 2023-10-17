import Image from "next/image";
import classes from "./project-card.module.css";
import Skeleton from "react-loading-skeleton";
import { useCallback, useState } from "react";

export type ProjectCardProps = {
  id: number;
  title: string;
  image: string;
  link: string;
  description: string;
};

export const ProjectCard = (props: ProjectCardProps) => {
  const { title, link, description, image } = props;

  const [imageLoaded, setImageLoaded] = useState(false);

  const onLoad = useCallback(() => {
    setImageLoaded(true);
  }, []);

  return (
    <a className={classes.projectCard} href={link}>
      <div className="absolute w-full h-full max-w-[800px] hover:bg-black/50 transition-colors duration-200 top-0 left-0 rounded-md" />
      <div className="relative [&>span]:absolute [&>span]:w-full">
        {!imageLoaded && (
          <Skeleton
            className="mb-2 rounded-sm opacity-5 w-full"
            height={200}
            baseColor="#adb8ff"
            highlightColor="#fff"
          />
        )}
        <Image
          className={`w-full h-[200px] object-cover object-top mb-2 rounded-sm  ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
          src={image}
          alt={""}
          width={300}
          height={200}
          placeholder="empty"
          onLoadingComplete={onLoad}
        />
      </div>
      <h3 className="text-white text-lg font-bold">{title}</h3>
      <p className="text-white text-sm h-10 overflow-hidden text-ellipsis">
        {description}
      </p>
    </a>
  );
};

export default ProjectCard;
