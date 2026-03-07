import PageHero from "../components/PageHero";
import PageContent from "../components/PageContent";
import StatsGrid from "../components/StatsGrid";

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
        title="Placeholder phrase - PO Group Decides"
        subtitle="Section Summary/Description"
        backgroundImage="/images/hero-outcome.jpg"
      />
      <PageContent sections={sections} />
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>
      <StatsGrid />
    </>
  );
}
