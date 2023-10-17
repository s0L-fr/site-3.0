import Container from "../../container";
import ResearchCard, { ResearchCardProps } from "./research-card";

const Publications: ResearchCardProps[] = [
  {
    title: "The Impact of AI on Modern Industries",
    description: "A comprehensive analysis of AI applications in various sectors.",
    link: "https://link-to-publication.com/",
  },
  // ... Add more items as needed
];

export const Research = () => {
  return (
    <Container>
      <h2 className="text-xl font-bold text-white mb-5">Publications</h2>
      <div className="flex flex-col gap-4">
        {Publications.map((publication, index) => (
          <ResearchCard key={index} {...publication} />
        ))}
      </div>
    </Container>
  );
};

export default Research;
