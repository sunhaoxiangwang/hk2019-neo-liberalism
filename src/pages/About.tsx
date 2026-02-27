import PageHero from "../components/PageHero";
import PageContent from "../components/PageContent";
import StatsGrid from "../components/StatsGrid";

const sections = [
  {
    heading: "A City's Defining Moment",
    body: [
      "In the summer of 2019, Hong Kong witnessed one of the largest and most sustained protest movements in its history. What began as opposition to a proposed extradition bill evolved into a broad pro-democracy movement that would define a generation.",
      "The movement drew participants from all walks of life—students, professionals, retirees, and families—united by a shared conviction that their freedoms were under threat. Their methods ranged from peaceful marches of millions to creative acts of civil disobedience that captured global attention.",
    ],
    pullQuote:
      '"Be water"—the movement\'s defining philosophy of fluid, decentralized resistance that kept authorities perpetually off-balance.',
  },
  {
    heading: "From Bill to Broad Movement",
    body: [
      "The proposed extradition bill, which would have allowed suspects to be sent to mainland China for trial, struck at the heart of Hong Kong's legal independence. Critics warned it would expose anyone in Hong Kong—citizens, visitors, and business travelers alike—to China's opaque judicial system.",
      "As the government refused to back down, the protests expanded in scope. What started as a single-issue campaign became a referendum on Hong Kong's future relationship with Beijing, its democratic aspirations, and the very meaning of the 'One Country, Two Systems' framework.",
    ],
    pullQuote:
      "A single bill became the catalyst for a city to confront the fundamental question: what does autonomy mean when power is not your own?",
    reversed: true,
  },
];

export default function About() {
  return (
    <>
      <PageHero
        label="About the Movement"
        title="A City's Defining Moment"
        subtitle="How a proposed extradition bill ignited the largest protest movement in Hong Kong's history and reshaped its political landscape."
        backgroundImage="/images/hero-about.jpg"
      />
      <PageContent sections={sections} />
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>
      <StatsGrid />
    </>
  );
}
