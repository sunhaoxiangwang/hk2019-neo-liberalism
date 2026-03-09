import PageHero from "../components/PageHero";
import PageContent from "../components/PageContent";

const sections = [
  {
    heading: "Subsection Title",
    body: [
      "Subsection Text",
      "Subsection Text",
    ],
    pullQuote: "Impactful quote/phrase from article or news source",
    image: "https://images.pexels.com/photos/5343099/pexels-photo-5343099.jpeg",
  },
  {
    heading: "Subsection Title",
    body: [
      "Subsection Text",
      "Subsection Text",
    ],
    pullQuote: "Impactful quote/phrase from article or news source",
    reversed: true,
    image: "https://images.pexels.com/photos/11302458/pexels-photo-11302458.jpeg",
  },
];

export default function Outcome() {
  return (
    <>
      <PageHero
        label="Protest Outcomes"
        title="Aftermath & Legacy"
        subtitle=""
        backgroundImage="/images/hero-outcome.jpg"
      />
      <PageContent sections={sections} />
    </>
  );
}
