export{}
{/*import Image from "next/image";
import { useCallback, useState } from "react";
import Skeleton from "react-loading-skeleton";

export type ExperienceCardProps = {
  company: string;
  term: string;
  description: string;
  logo: string | null;
  link: string;
};

export const ExperienceCard = (props: ExperienceCardProps) => {
  const { company, description, logo, link, term } = props;
  const [imageLoaded, setImageLoaded] = useState(false);

  const onLoad = useCallback(() => {
    setImageLoaded(true)
  }, []);

  return (
    <a
      className="flex justify-between hover:bg-white/10 hover:backdrop-blur rounded-md p-2 transition-colors duration-300 items-center"
      href={link}
      target="_blank"
      rel="noreferrer"
    >
      <div className="flex gap-3 items-center">
        <div>
          {logo ? (
            <div className="relative [&>span]:absolute [&>span]:w-full">
              {!imageLoaded && (
                <Skeleton
                  className="mb-2 rounded-sm opacity-80 w-full"
                  height={40}
                  width={40}
                  baseColor="#282434"
                  highlightColor="#353045"
                />
              )}
              <Image
                src={logo}
                alt={""}
                width={40}
                height={40}
                className={`rounded-md ${
                  imageLoaded ? "opacity-100" : "opacity-0"
                }`}
                onLoadingComplete={onLoad}
              />
            </div>
          ) : (
            <div className="h-10 w-10 rounded-md bg-shadeLight" />
          )}
        </div>
        <div>
          <h3 className="text-white text-sm font-bold">{company}</h3>
          <p className="text-white text-sm">{description}</p>
        </div>
      </div>
      <p className="text-white text-sm">{term}</p>
    </a>
  );
};

export default ExperienceCard;*/}
