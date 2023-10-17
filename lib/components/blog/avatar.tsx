import Image from 'next/image';

type Props = {
  name: string;
  picture: string;
};

const Avatar = ({ name, picture }: Props) => {
  return (
    <div className="flex items-center">
      <Image 
        src={picture} 
        alt={name} 
        width={32} // Same as w-8 in TailwindCSS
        height={32} // Same as h-8 in TailwindCSS
        className="rounded-full mr-4" 
      />
      <div className="text-md font-bold text-white">{name}</div>
    </div>
  );
};

export default Avatar;
