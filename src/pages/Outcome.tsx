import PageHero from "../components/PageHero";
import PageContent from "../components/PageContent";

const sections = [
  {
    heading: "Economic Impact",
    body: [
      "Through 2019, as protests began to intensify, Hong Kong’s economy slowed sharply and entered its first recession in a decade. Additionally, according to a research paper, the long period of protest made real GDP per capita significantly decrease, a decline larger than some other past crises.[2]",
      "The protests also led to new patterns of spending for consumers and new locations for the operation of businesses. This included the development of politically affiliated dining/retail groups such as the \"yellow economic circle,\" where consumers patronize certain businesses based on political sympathies, although this did not impact the macroeconomic environment significantly.",
      "One of the reasons for such a sharp decline in GDP was a significant drop in tourism; arrivals in August 2019 went down 40% year-on-year.[3] Total retail sales also declined the sharpest since 1998, with a double-digit fall in some quarters of 2019.[4]",
      "Long-term economic impact includes capital flight, which could reach almost $76 billion by 2025 as individuals seek to move to other locations. This analysis by Bank of America focused on the migration of private clients in relation to political uncertainties.[5] Even after the protests, Hong Kong faced slower economic normalization, with tourism and retail taking time to fully recover.[6]",
    ],
    pullQuote: "Hong Kong’s GDP declined sharply and went into recession, driven by a 40% drop in tourism arrivals.[1]",
    image: "/images/gdp.png",
    imageContain: true,
  },
  {
    heading: "International Outcomes",
    body: [
      "Although the 2019 Hong Kong protests did not lead to democratic reforms from Beijing, they still had major international effects. The protests brought global attention to Hong Kong’s political situation and increased tensions between the United States and China. As a result, Hong Kong became an important symbol in the larger global debate between democratic values and authoritarian government systems [7].",
      "The movement transformed local opposition into a major international conflict. As images of mass demonstrations and police crackdowns circulated worldwide, foreign governments increasingly framed Hong Kong not simply as an internal Chinese issue but as a test of Beijing’s commitment to the “One Country, Two Systems” framework [7].",
      "The United States responded by passing the Hong Kong Human Rights and Democracy Act of 2019, which required annual assessments of autonomy and authorized sanctions. The U.S. government later imposed sanctions on several officials and ended Hong Kong’s special trade status [8]. Governments worldwide raised concerns about civil liberties, turning Hong Kong into an important issue in broader global debates about democracy and authoritarian rule.",
    ],
    pullQuote: "“Protestors rallying outside in opposition to the extradition bill ahead of the G20 Summit”",
    reversed: true,
    image: "https://cdn.builder.io/api/v1/image/assets%2Fd701d1deef3448218324fe57b8da5cda%2F503adba370d34432bca82718e7c738a1?format=webp&width=800&height=1200",
  },
  {
    heading: "Social Outcomes",
    body: [
      "Increased levels of PTSD, depression, and polarization were major social outcomes. A study in The Lancet found that 2 million adults—roughly a third of the population—experienced PTSD symptoms. Probable depression was identified in over 590,000 adults, a vast increase from 2009. Researchers noted that the actual numbers, including youth, are likely higher.",
      "The movement created a deep division in society, split into the ‘blue camp’ (supporting the government) and the ‘yellow camp’ (supporting the protests). This polarization affected relationships in streets, social media, and families.",
      "In response, many engaged in 'expressive suppression'—repressing their emotions to maintain social cohesion. Researchers Tsang and Wong assessed that this suppression often leads to increased stress, anxiety, and depression as individuals ruminate on their emotions rather than expressing them.",
    ],
    pullQuote: "(Figure 1 - Shows the Effects of Expressive Suppression)",
    image: "/images/figure1.png",
    imageContain: true,
  },
  {
    heading: "Political Outcomes",
    body: [
      "The protests produced major political and legal consequences that resulted in a significant reduction of autonomy. Chief Executive Carrie Lam, despite massive opposition, pushed for the 2019 Fugitive Offenders bill and refused to engage with protesters [9]. After months of demonstrations, the bill was formally withdrawn in September 2019 [10].",
      "However, the protests led to the introduction of stronger government control. Authorities introduced emergency measures such as a face mask ban to limit anonymous demonstration [10]. Long-term, the political system shifted toward mainland China's control through the National Security Law, which criminalized secession, subversion, and collusion [10].",
      "The disqualification of democratic candidates from legislative elections further limited political opposition [11]. Altogether, the protests led to a major reconstruction of Hong Kong’s political and legal institutions, strengthening central state authority and diminishing democratic opposition.",
    ],
    pullQuote: "“Masked Hong Kong protesters, which were later banned by city government”",
    reversed: true,
    image: "/images/masked_hongkong.jpg",
  },
  {
    heading: "Media and Cultural Outcomes",
    body: [
      "Regarded as the \"first fully digital protest movement,\" technology and creativity merged to redefine Hong Kong’s identity. This \"leaderless\" and \"decentralized\" struggle used LIHKG and Telegram to coordinate crowds and shape global narratives in real-time.",
      "Protesters adopted the \"Be Water\" philosophy inspired by Bruce Lee, remaining fluid and adaptable. Citizens used AirDrop to share \"protest art\" and digital posters, bypassing surveillance. Visually, the city was transformed by \"Lennon Walls\"—massive mosaics of colorful sticky notes that turned public spaces into community message boards.",
      "The cultural climate has since shifted toward soft resistance. Because overt protest is now restricted, subtle symbols or music are used to express identity. However, this has also led to increased censorship, with libraries removing \"politically sensitive\" books and film laws tightening to ban content that might \"endanger national security\".",
    ],
    pullQuote: "\"Be Water\"—the movement's philosophy of fluidity and digital coordination.",
    image: "https://cdn.builder.io/api/v1/image/assets%2Fd701d1deef3448218324fe57b8da5cda%2F938fbba688a54379a6be25e313272232?format=webp&width=800&height=1200",
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
