import PageHero from "../components/PageHero";
import PageContent from "../components/PageContent";
import StatsGrid from "../components/StatsGrid";

const sections = [
  {
    heading: "Aftermath & the National Security Law",
    body: [
      "The movement's immediate political outcomes were sobering. While the extradition bill was formally withdrawn in September 2019, the remaining four demands went unmet. The subsequent imposition of the National Security Law in June 2020 fundamentally reshaped Hong Kong's political landscape.",
      "The law criminalized secession, subversion, terrorism, and collusion with foreign forces—broadly defined terms that critics said could apply to almost any form of dissent. Dozens of pro-democracy figures were arrested, media outlets shuttered, and civil society organizations dissolved.",
    ],
    pullQuote:
      "The streets fell quiet, but the questions the movement raised about autonomy, identity, and resistance echo still.",
    image: "https://images.pexels.com/photos/5343099/pexels-photo-5343099.jpeg",
  },
  {
    heading: "A Legacy Beyond Legislation",
    body: [
      "Yet the legacy of 2019 extends far beyond legislation. It demonstrated the power of decentralized organizing, inspired solidarity movements worldwide, and indelibly altered the political consciousness of an entire generation of Hong Kongers.",
      "The diaspora that formed in the wake of the crackdown carried the movement's spirit to new shores—London, Toronto, Taipei, Melbourne. In exile and at home, the memory of those months when a city demanded its voice be heard continues to shape how people think about resistance, freedom, and the cost of both.",
    ],
    pullQuote:
      "The movement ended, but its questions—about who holds power, who deserves freedom, and what people will risk to defend it—remain unanswered.",
    reversed: true,
    image: "https://images.pexels.com/photos/11302458/pexels-photo-11302458.jpeg",
  },
];

export default function Outcome() {
  return (
    <>
      <PageHero
        label="Protest Outcome"
        title="Aftermath & Legacy"
        subtitle="The National Security Law, the global diaspora, and why the echoes of 2019 refuse to fade."
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
