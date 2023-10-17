import Container from "../container";
import ResearchItem, { ResearchItemProps } from "./research-item";

const Publications: ResearchItemProps[] = [
  {
    title: "Assessing The Impact of Climate Change on Agriculture in India",
    description: "Employing statistical and climate modeling, the study assesses the economic & ecological ramifications of altered weather patterns on India's agrarian-dependent economy and proposes adaptive agricultural strategies.",
    coverImage: "/assets/publications/cover.jpg",
    link: "https://link-to-publication.com/",
  },
  // ...other publications
];

export const Research = () => {
  return (
    <Container>
      <h2 className="text-xl font-bold text-white mb-5">Publications</h2>
      <div className="flex flex-col gap-4">
        {Publications.map((publication, index) => (
          <ResearchItem key={index} {...publication} />
        ))}
      </div>
    </Container>
  );
};

export default Research;
