import Post from "../../interfaces/post";
import Link from "next/link";
import DateFormatter from "../blog/date-formatter";
import { motion } from "framer-motion";

export type WritingItemProps = {
  post: Post;
  delay: number;
};

const INITIAL = { y: 50, opacity: 0 };
const ANIMATE = { y: 0, opacity: 1 };

export const WritingItem = ({ post, delay }: WritingItemProps) => {
  return (
    <motion.div
      initial={INITIAL}
      animate={ANIMATE}
      transition={{ delay: delay / 10 }}
    >
      <Link
        className="flex justify-between items-start"
        href={`writing/${post.slug}`}
      >
        <div className="flex gap-3 items-start">
          <div>
            <h3 className="text-white text-md font-bold">{post.title}</h3>
            <DateFormatter className="text-xs" dateString={post.date} />
            <p className="text-white/70 text-sm">
              {post.excerpt.slice(0, 100)}
            </p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default WritingItem;
