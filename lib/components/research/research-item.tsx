import React from 'react';
import CoverImage from '../blog/cover-image'; // Adjust the path as needed

export type ResearchItemProps = {
  title: string;
  description: string;
  coverImage: string;
  link: string;
};

export const ResearchItem = ({ title, description, coverImage, link }: ResearchItemProps) => {
  return (
    <a
      className="flex justify-between hover:bg-white/10 hover:backdrop-blur rounded-md p-2 transition-colors duration-300 items-center"
      href={link}
      target="_blank"
      rel="noreferrer"
    >
      <div className="flex gap-3 items-center">
        <CoverImage title={title} src={coverImage} />
        <div>
          <h3 className="text-white text-sm font-bold">{title}</h3>
          <p className="text-white text-sm">{description}</p>
        </div>
      </div>
    </a>
  );
};

export default ResearchItem;
