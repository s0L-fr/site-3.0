import React from 'react';

export type ResearchCardProps = {
  title: string;
  description: string;
  link: string;
};

export const ResearchCard = ({ title, description, link }: ResearchCardProps) => {
  return (
    <a
      className="flex flex-col hover:bg-white/10 hover:backdrop-blur rounded-md p-4 transition-colors duration-300"
      href={link}
      target="_blank"
      rel="noreferrer"
    >
      <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
      <p className="text-white text-sm">{description}</p>
    </a>
  );
};

export default ResearchCard;
