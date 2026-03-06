import PageHero from "../components/PageHero";
import PageContent from "../components/PageContent";
import StatsGrid from "../components/StatsGrid";

const sections = [
  {
    heading: "Neoliberalism & the Roots of Discontent",
    body: [
      "Hong Kong's trajectory as a global financial hub was inseparable from its embrace of neoliberal economic policy. Decades of market-first governance produced staggering wealth alongside deepening inequality—sky-high property prices, stagnant wages, and a fraying social safety net.",
      "The 2019 uprising cannot be understood solely as a political crisis. It was also an eruption of socioeconomic frustration, decades in the making, where neoliberal governance had hollowed out the promise of prosperity for ordinary citizens while concentrating power among elites.",
    ],
    pullQuote:
      "Behind the political demands lay decades of economic anxiety—a city where prosperity was visible everywhere yet out of reach for many.",
    image: "https://images.pexels.com/photos/6295359/pexels-photo-6295359.jpeg",
  },
  {
    heading: "The Price of the Free Market",
    body: [
      "Hong Kong consistently ranked as the world's freest economy, yet this freedom came at a cost. Housing prices soared to among the highest globally, with young people facing the prospect of never owning a home. The Gini coefficient placed Hong Kong among the most unequal developed economies on Earth.",
      "The government's laissez-faire approach meant minimal public housing investment, limited labor protections, and a tax system that favored capital over wages. By 2019, the gap between the ultra-wealthy and the working class had become a chasm that no amount of GDP growth could bridge.",
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
