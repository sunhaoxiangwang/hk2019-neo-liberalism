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
    pullQuote:
      "Behind the political demands lay decades of economic anxiety—a city where prosperity was visible everywhere yet out of reach for many.",
    image: "https://images.pexels.com/photos/6295359/pexels-photo-6295359.jpeg",
  },
  {
    heading: "Subsection Title",
    body: [
      "Subsection Text",
      "Subsection Text",
    ],
    pullQuote:
      'The world\'s "freest economy" produced a generation who could not afford to live in the city they called home.',
    reversed: true,
    image: "https://images.pexels.com/photos/6752828/pexels-photo-6752828.jpeg",
  },
];

export default function Context() {
  return (
    <>
      <PageHero
        label="Historical Context"
        title="Placeholder phrase - HC Group Decides"
        subtitle="Section Summary/Description"
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
