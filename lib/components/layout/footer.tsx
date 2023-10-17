import Image from "next/image";

const LINKS = [
  {
    name: "Mail",
    link: "mailto:bhoomikaangira8@gmail.com",
    icon: "assets/svg/mail.svg",
  },
  {
    name: "Reddit",
    link: "https://reddit.com/",
    icon: "assets/svg/reddit.svg",
  },
  {
    name: "Github",
    link: "https://github.com/s0L-fr",
    icon: "assets/svg/github.svg",
  },
];

const Footer = () => {
  {/*const currentYear = new Date().getFullYear();*/}
  return (
    <footer className="max-w-3xl w-full m-auto px-4 mb-12">
      {/* Retaining content but removing box styling */}
      <div className="w-full h-full p-6">
        <div className="flex justify-between">
          <div>
            <h4 className="text-white inline-block">{"Connect With Me!"}</h4>
            <h4 className="text-white text-xl inline-block">💼</h4>
          </div>
          <div className="flex gap-2">
            {LINKS.map((link) => (
              <a key={link.name} href={link.link} target="_blank" rel="noreferrer">
                <Image
                  className="[&_svg]:fill-white"
                  src={link.icon}
                  width={24}
                  height={24}
                  alt={link.name}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="text-center text-white mt-4">
        <p>© {"2023"} s0L-fr. All Rights Reserved.</p>
        {/* If you have a logo, you can include it here */}
        {/* <Image src="/path-to-your-logo.svg" alt="Bhoomika Logo" width={50} height={50} /> */}
      </div>
    </footer>
  );
};

export default Footer;
