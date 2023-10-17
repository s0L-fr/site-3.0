import Container from "../container";
import Footer from "../layout/footer";
{/*import Experience from "./experience/experience";
import Research from "./research/research";
import ProjectCarousel from "./project/project-card-carousel";*/}
import { motion } from "framer-motion";
import Image from "next/image";

import { useState } from "react";

const FADE_INITIAL = { opacity: 0 };
const FADE_ANIMATE = { opacity: 1 };

const DURATION1 = { duration: 0.8 };
const DURATION2 = {
  delay: 0.25,
  duration: 0.8,
};
const DURATION3 = {
  delay: 0.5,
  duration: 0.8,
};
const DURATION4 = { delay: 0.75, duration: 0.8 };

export const Home = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const fadeIn = () => {
    setImageLoaded(true);
  };

  return (
    <>
      <Image
        src={"/assets/bg/blob1.png"}
        alt=""
        width={500}
        height={200}
        unoptimized={true}
        priority
        className={`${
          imageLoaded ? "opacity-100" : "opacity-0"
        } transition-opacity duration-500 absolute z-[0] top-[-30px] left-1/2 transform -translate-x-1/2
        w-[1000px] h-[1000px] object-cover
    }
        `}
        onLoadingComplete={fadeIn}
      />
      <div className="w-full h-screen overflow-scroll hide-scrollbar fixed snap-mandatory snap-y flex flex-col gap-[100px]">
        <Container className="my-16">
          <div className="flex flex-col snap-center">
            <motion.div
              initial={FADE_INITIAL}
              animate={FADE_ANIMATE}
              transition={DURATION1}
              className="relative"
            >
              <h1 className="text-3xl font-bold text-white mb-8 mt-32">
                Bhoomika Angira ϟ
              </h1>
            </motion.div>
            <p className="text-white mb-4">
              <motion.span
                initial={FADE_INITIAL}
                animate={FADE_ANIMATE}
                transition={DURATION2}
              >
                <>
                  {
                    "Focusing on translating complex data into meaningful insights for policy and business decisions. I'm studying "
                  }
                  <a
                    target="_blank"
                    className="underline hover:text-[#00ffcc] transition-all"
                    href="https://iisuniv.ac.in/"
                    rel="noreferrer"
                  >
                    {"Economics & Statistics @IIs University"}
                  </a>
                     {"."}
                </>
              </motion.span>
              <br />
              <br />
              <motion.span
                initial={FADE_INITIAL}
                animate={FADE_ANIMATE}
                transition={DURATION3}
              >
                Rediscovering my French from middle school, I&apos;m now embracing it more seriously in college, enjoying the process of reconnecting with the language.
              </motion.span>
            </p>
          </div>
        </Container>{/*
        <motion.div
          className="mb-16 snap-center"
          initial={FADE_INITIAL}
          animate={FADE_ANIMATE}
          transition={DURATION4}
        >
          <ProjectCarousel />
        </motion.div>*/}
        <motion.div
          className="mb-24 snap-center"
          initial={FADE_INITIAL}
          animate={FADE_ANIMATE}
          transition={DURATION4}
        >
        </motion.div>
        <div className="snap-center">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
