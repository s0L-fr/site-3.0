export{}
{/*import Container from "../../container";
import ProjectCard, { ProjectCardProps } from "./project-card";

import classes from "./project-card.module.css";
import { useCallback, useEffect, useState } from "react";
import ProjectCardPlaceHolder from "./project-card-placeholder";
import { AnimatePresence, motion } from "framer-motion";

const PROJECTS: ProjectCardProps[] = [
  {
    id: 0,
    title: "Keylime - Recreating React",
    image: "/assets/projects/particle_index_lut.png",
    link: "",
    description:
      "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. ",
  },
  {
    id: 1,
    title: "Persévérance et Passion Triomphantes",
    image: "/assets/projects/lut.png",
    link: "",
    description:
      "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. ",
  },
  {
    id: 2,
    title: "Koi UI - Mobile UI Library",
    image: "/assets/projects/koi-ui.png",
    link: "",
    description: "My UI Library",
  },
  {
    id: 3,
    title: "Koi UI - Mobile UI Library",
    image: "/assets/projects/koi-ui.png",
    link: "",
    description: "My UI Library",
  },

];

const variants = {
  enter: () => {
    return {
      x: 50,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: () => {
    return {
      zIndex: 0,
      x: -50,
      opacity: 0,
    };
  },
};

let rotate_id = null;
export const ProjectCarousel = () => {
  const [currSlide, setCurrSlide] = useState({
    locked: false,
    slide: 0,
  });
  const [rotating, setRotating] = useState(true);
  const timeout = useCallback(() => {
    setCurrSlide((prev) => {
      if (prev.locked) return prev;
      if (prev.slide == PROJECTS.length - 1)
        return {
          locked: false,
          slide: 0,
        };
      return {
        locked: false,
        slide: prev.slide + 1,
      };
    });
  }, []);

  useEffect(() => {
    const rotate = setInterval(timeout, 5000);
    rotate_id = rotate;

    return () => {
      clearInterval(rotate);
    };
  }, []);

  useEffect(() => {
    if (!rotating) clearInterval(rotate_id);
  }, [rotating]);
{/*
  const onClickSelector = useCallback((i: number) => {
    if (rotating) setRotating(false);
    if (!currSlide.locked) {
      setCurrSlide({
        slide: i,
        locked: false,
      });
    }
  }, []);

  return (
    <>
      <Container>
        <h2 className="text-xl font-bold text-white mb-2">Builds</h2>
      </Container>
      <div className="relative w-full max-w-[800px] mx-auto">
        <div className="w-full h-[300px]"/>
        <AnimatePresence mode="sync">
          <motion.div
            key={currSlide.slide}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
               duration: 0.7
            }}
            className={classes.carouselContainer}
          >
            <ProjectCardPlaceHolder />
            <ProjectCard {...PROJECTS[currSlide.slide]} />
            <ProjectCardPlaceHolder />
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
};

export default ProjectCarousel;*/}
