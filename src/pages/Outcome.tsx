import PageHero from "../components/PageHero";
import PageContent from "../components/PageContent";

const sections = [
  {
    heading: "Economic Impact",
    body: [
      "Through 2019, as protests began to intensify, Hong Kong’s economy slowed sharply and entered its first recession in a decade.Additionally, according to a research paper, long period of protest made real GDP per capita significantly decrease. The decrease is larger than some other past crisis.[2]",
    ],
    pullQuote: "Hong Kong’s GDP declined sharply and went into recession.[1]",
    image: "https://cdn.builder.io/api/v1/image/assets%2Fd701d1deef3448218324fe57b8da5cda%2Fc1f50e6e02c244789d527b6e2ae210b8?format=webp&width=800&height=1200",
  },
  {
    heading: "Subsection Title",
    body: [
      "Subsection Text",
      "Subsection Text",
    ],
    pullQuote: "Impactful quote/phrase from article or news source",
    reversed: true,
    image: "https://cdn.builder.io/api/v1/image/assets%2Fd701d1deef3448218324fe57b8da5cda%2F503adba370d34432bca82718e7c738a1?format=webp&width=800&height=1200",
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
