import Link from "next/link";
import { motion } from "framer-motion";
import classes from "./navbar.module.css";

type Link = {
  label: string;
  link: string;
};
const LINKS: Link[] = [
  {
    label: "Home",
    link: "/",
  },
  {
    label: "Research",
    link: "/research",
  },
  {
    label: "Blog",
    link: "/writing",
  },
];

const INITIAL = { opacity: 0 };
const END = { opacity: 1 };
const TRANSITION = { delay: 0.5, duration: 1 };

export const NavBar = () => {
  return (
    <motion.div
      initial={INITIAL}
      animate={END}
      transition={TRANSITION}
      className={`w-full flex gap-3 justify-end px-12 py-4 ${classes.navbar}`}
    >
      {LINKS.map((link) => (
        <Link
          key={link.label}
          href={link.link}
          className="text-white hover:bg-white/20 rounded-md transition-colors duration-100 px-2 py-1"
        >
          {link.label}
        </Link>
      ))}
    </motion.div>
  );
};

export default NavBar;