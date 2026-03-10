import PageHero from "../components/PageHero";
import PageContent from "../components/PageContent";

const sections = [
  {
    heading: "Economic Impact",
    body: [
      "Through 2019, as protests began to intensify, Hong Kong’s economy slowed sharply and entered its first recession in a decade.Additionally, according to a research paper, long period of protest made real GDP per capita significantly decrease. The decrease is larger than some other past crisis.[2]",
    ],
    pullQuote: "Hong Kong’s GDP declined sharply and went into recession.[1]",
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
