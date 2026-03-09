import PageHero from "../components/PageHero";
import PageContent from "../components/PageContent";

const sections = [
  {
    heading: "Subsection Title",
    body: [
      "Subsection Text",
      "Subsection Text",
    ],
    pullQuote: "Dramatic/Impactful Quote from an article/news source",
    image: "https://images.pexels.com/photos/8898666/pexels-photo-8898666.jpeg",
  },
  {
    heading: "Subsection Title",
    body: [
      "Subsection Text",
      "Subsection Text",
    ],
    pullQuote: "Dramatic/Impactful Quote from an article/news source",
    reversed: true,
    image: "https://images.pexels.com/photos/9751016/pexels-photo-9751016.jpeg",
  },
];

export default function Goals() {
  return (
    <>
      <PageHero
        label="Movement Goals"
        title="Five Demands, Not One Less"
        subtitle=""
        backgroundImage="/images/hero-goals.jpg"
      />
      <PageContent sections={sections} />
    </>
  );
}
