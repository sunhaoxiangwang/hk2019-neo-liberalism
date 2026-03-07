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
    pullQuote: "Dramatic/Impactful Quote from an article/news source",
    image: "https://images.pexels.com/photos/6295359/pexels-photo-6295359.jpeg",
  },
  {
    heading: "Subsection Title",
    body: [
      "Subsection Text",
      "Subsection Text",
    ],
    pullQuote: "Dramatic/Impactful Quote from an article/news source",
    reversed: true,
    image: "https://images.pexels.com/photos/6752828/pexels-photo-6752828.jpeg",
  },
];

export default function Context() {
  return (
    <>
      <PageHero
        label="Historical Context"
        title="The Roots of Discontent"
        subtitle=""
        backgroundImage="/images/hero-context.jpg"
      />
      <PageContent sections={sections} />
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>
      <StatsGrid />
    </>
  );
}
