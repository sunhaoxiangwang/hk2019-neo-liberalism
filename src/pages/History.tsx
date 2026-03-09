import PageHero from "../components/PageHero";
import PageContent from "../components/PageContent";

const sections = [
  {
    heading: "Incorporation into China",
    body: [
      "Hong Kong’s expansive history began with its incorporation into Imperial China during the Qin Dynasty, usually dated at 214 BCE. For much of the next 2,000 years, it remained under Chinese rule, serving as a coastal outpost focused on farming, fishing, salt production, and small-scale trade.",
    ],
    pullQuote: "Two thousand years of history established on a coastal society",
    image: "https://images.pexels.com/photos/5403291/pexels-photo-5403291.jpeg",
  },
  {
    heading: "Opium Wars and British Control",
    body: [
      "In the 19th century, Hong Kong was gradually transferred to the British Empire. The British-led opium trade massively escalated at this time, as they sourced the drugs from British India and shipped them into China against their will. Opium addiction in China created widespread social and economic harms, so in an attempt to quell its smuggling, the Qing Dynasty confiscated and destroyed 20,000 chests of Opium. The British responded with their own military force at the Pearl River estuary, kicking off the First Opium War. After 3 years of fighting, Britain’s decisive victory was highlighted by the Treaty of Nanjing, where Hong Kong Island was officially ceded to the British Empire.",
      "The British Empire began to further consolidate its power in 1856, the beginning of the Second Opium War. Britain’s triumph was manifested in the Convention of Peking in 1860, in which the Kowloon Peninsula, south of a dividing line known as Boundary Street, was ceded to Britain in perpetuity.",
      "As the 1800s went on, China was subject to further pressure from European powers. In 1898, Britain negotiated the consequential Second Convention of Peking, where the New Territories were leased to the British Empire for 99 years. Set to expire on July 1, 1997, the contract was significant in being the last step in the British Empire gaining control over the entirety of modern-day Hong Kong.",
    ],
    pullQuote: "Treaties and conflict gradually reshaped the territory over time",
    reversed: true,
    image: "https://images.pexels.com/photos/7117112/pexels-photo-7117112.jpeg",
  },
  {
    heading: "Japanese Invasion and 1984 Sino-British Joint Declaration",
    body: [
      "Almost 50 years after the Second Convention of Peking, during World War II, Japanese forces invaded and occupied Hong Kong for a brief 4-year period between 1941 and 1945, before Britain resumed control. Unlike many other decolonizing regions of the world during this period, Hong Kong remained a British colony.",
      "Approaching the end of the 99-year lease, Britain and China negotiated the 1984 Sino-British Joint Declaration. Due to the immense interconnection between the different Hong Kong regions, in addition to the New Territories that were the only region originally denoted in the Convention, Hong Kong Island and the Kowloon Peninsula were also transferred to China on July 1, 1997. As part of the declaration, Hong Kong would become a Special Administrative Region of China; Hong Kong would be “one country, two systems” - in return for civil and political liberties, Hong Kong would be annexed into China under a continuing capitalist economy.",
    ],
    pullQuote: "The 1984 declaration brought autonomy to the city with the 'One Country, Two Systems' framework.",
    image: "https://images.pexels.com/photos/35486705/pexels-photo-35486705.jpeg",
  },
  {
    heading: "Impact on Hong Kong Today",
    body: [
      "Hong Kong’s long, winding history of being colonized, traded, and occupied has instilled a sense of pride in its citizens who value their hard-fought political and social rights. As a result, all infringements of these rights, specifically those involving a potential loss of sovereignty, are taken extremely seriously - a large factor contributing to the 2019 Hong Kong Protests.",
    ],
    pullQuote: "Over 150 years of history is represented in the voices and actions of modern Hong Kong citizens.",
    reversed: true,
    image: "https://images.pexels.com/photos/9751023/pexels-photo-9751023.jpeg",
  },
];

export default function History() {
  return (
    <>
      <PageHero
        label="History of Hong Kong"
        title="From Empire to Empire"
        subtitle=""
        backgroundImage="https://images.pexels.com/photos/19856888/pexels-photo-19856888.jpeg"
      />
      <PageContent sections={sections} />
    </>
  );
}
