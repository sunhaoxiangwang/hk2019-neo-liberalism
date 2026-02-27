import PageHero from "../components/PageHero";
import PageContent from "../components/PageContent";
import StatsGrid from "../components/StatsGrid";

const sections = [
  {
    heading: "The Five Demands",
    body: [
      "The protest movement crystallized around five core demands: full withdrawal of the extradition bill, an independent investigation into police conduct, release of arrested protesters, retraction of the classification of protests as 'riots,' and genuine universal suffrage.",
      'The rallying cry "Five demands, not one less" reflected an uncompromising stance born from years of broken promises. Protesters understood that partial concessions without structural reform would leave the underlying power imbalance intact.',
    ],
    pullQuote:
      '"Five demands, not one less"—a generation\'s refusal to accept half-measures or symbolic gestures.',
  },
  {
    heading: "Decentralized by Design",
    body: [
      "Unlike previous movements, the 2019 protests had no single leader, no central organization, and no fixed hierarchy. Decisions were made collectively through online forums and encrypted messaging apps. Roles shifted fluidly—someone who supplied first aid one day might lead chants the next.",
      'This "be water" philosophy, inspired by Bruce Lee, made the movement extraordinarily resilient. When authorities targeted one gathering, protesters would disperse and reappear elsewhere. When one communication channel was blocked, another emerged within hours.',
    ],
    pullQuote:
      "Without leaders to arrest or organizations to ban, the movement became something authorities had never faced—a protest that was everywhere and nowhere at once.",
    reversed: true,
  },
];

export default function Goals() {
  return (
    <>
      <PageHero
        label="Movement Goals"
        title="Five Demands, Not One Less"
        subtitle='The uncompromising demands that defined a movement and the decentralized strategy behind "be water."'
        backgroundImage="/images/hero-goals.jpg"
      />
      <PageContent sections={sections} />
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>
      <StatsGrid />
    </>
  );
}
