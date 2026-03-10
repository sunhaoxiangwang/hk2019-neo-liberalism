import PageHero from "../components/PageHero";
import PageContent from "../components/PageContent";

const sections = [
  {
    heading: "Full Withdrawal of the Extradition Bill",
    body: [
      "Proposed by the Hong Kong government in early 2019, the Extradition Bill, formally known as the Fugitive Offenders and Mutual Legal Assistance in Criminal Matters Legislation (Amendment) Bill, would have allowed criminal suspects in Hong Kong to be extradited to jurisdictions with which the city did not have formal agreements, including mainland China. Critics feared that the bill would expose Hong Kong residents, among them journalists and political activists, to the mainland Chinese legal system, which lacks the same protections for civil liberties and judicial independence that exist in Hong Kong. Many residents believed the law threatened the \"one country, two systems\" framework established after the 1997 handover, which was meant to preserve Hong Kong's autonomy and rule of law.",
      "Opposition to the bill quickly sparked mass demonstrations, as protesters took to the streets demanding the government fully withdraw the extradition bill rather than merely amend it. Protesters argued that allowing extraditions to mainland China could enable politically motivated prosecutions and undermine Hong Kong's legal safeguards. As a result, the movement's first and most immediate demand was the complete withdrawal of the legislation rather than merely suspending or delaying it. This demand later became one of the movement's \"five demands,\" a set of goals that structured the broader protest campaign.",
    ],
    pullQuote:
      "\"We don't need more explanation [...] We want this to be scrapped completely.\" — Claudia Mo, pro-democracy legislator",
    image: "/images/we_dont_need.png",
  },
  {
    heading: "Independent Inquiry into Police Behavior",
    body: [
      "The demand for an Independent Commission of Inquiry (COI) under the Commissions of Inquiry Ordinance (Cap. 86) was a central movement goal of the 2019 Hong Kong protests. It aimed to establish a judge-led body with the specific subpoena powers necessary to compel police testimony and access confidential internal records. This goal was fueled by widespread and documented patterns of \"reckless and indiscriminate\" tactics, including brutal beatings and torture in detention that occurred without internal reprimand. Beyond the use of active force, the inquiry sought to investigate allegations of police collusion during the July 21 Yuen Long subway attacks, where officers were accused of intentional inaction while civilians were assaulted.",
      "Protesters argued that the existing Independent Police Complaints Council (IPCC) was \"impotent and biased,\" a sentiment corroborated by an International Expert Panel that resigned after determining the body lacked the \"investigatory capability\" to meet global standards. The High Court later ruled that the police's failure to display unique identification violated the Bill of Rights, reinforcing the structural need for a neutral body to bypass police anonymity. The government's refusal to establish this commission created a profound \"accountability gap\" and widespread social instability, leaving zero officers prosecuted for excessive force years after the movement began while over 10,000 protesters faced legal consequences. This refusal was seen as a failure of executive accountability that prevented a thorough investigation into the root causes of the unrest and the documented patterns of police misconduct.",
    ],
    pullQuote:
      "\"Intense crackdowns on protesters in Hong Kong were filled with violent assault.\"",
    reversed: true,
    image: "/images/intense_crackdown.jpg",
  },
  {
    heading: "Retraction of Riot Characterization of Protests",
    body: [
      "The classification of protests as \"riots\" by the government of the People's Republic of China was a political tool used to misinform the public while also allowing authorities to impose harsher legal penalties on demonstrators. Hong Kong activists included the characterization of the protests as riots to be retracted in their five demands as it related to the wellbeing of the protesters and the perception of the movement abroad. Already, Hong Kong's movement had been predated by dissatisfaction with Beijing's governance in other Chinese territories as seen in Tibet and Xinjiang. Worried that dissent in Hong Kong could lead to additional scuffles throughout the country, Beijing launched a misinformation campaign that would stir up the mainland's nationalism. China's \"Great Firewall\" censorship system and various Beijing government backed news outlets were the predominant method of creating misinformation.",
      "Outside of the mainland, China pushed on social media to reverse the pro-Hong Kong protest sentiment by creating state-linked accounts that would support the Beijing government. One of the narratives formed was that the American government was secretly supporting the Hong Kong protesters with supplies such as American grenade launchers so as to incite chaos within the region. Beijing's government would also amplify incidents of protesters behaving violently to further delegitimize the movement, as seen when protesters were videotaped to have attacked two mainlander men. Hong Kong citizens apologizing and admonishing the attack online were censored and reinforced nationalist sentiment. Classifying these protests as riots led to the implication of significantly higher jail times and the most common charge amongst the 10,000 Hong Kong citizens arrested and 3,000 prosecuted was unlawful assembly and rioting.",
    ],
    pullQuote:
      "\"Social media has played a significant role in shaping public perception of the protests, though their filtered posts show a small part of reality.\"",
    image: "/images/social_media.jpg",
  },
  {
    heading: "Implementation of Genuine Universal Suffrage",
    body: [
      "Universal suffrage was one of the central demands of the Hong Kong protests in 2019. As the definition indicates, Hong Kong protestors wanted a fully democratic political system where every adult citizen could directly vote for their leaders (One vote, one person). Protestors referred to this demand as \"double universal suffrage\" because they deemed both the Chief Executive (president) and the Legislative Council of Hong Kong to not uphold the democratic values that represent them. Under their existing political system, their Chief Executive was elected by a body of 1,200 member Election Committee composed of both political and business elites. Protestors argued that these elites were supportive of Beijing and that the existing system limits the public's influence and allows the central government to hold significant power over Hong Kong.",
      "In addition, the seats in Hong Kong's Legislative Council were chosen through elections by the public, however, other officials were chosen through \"functional constituencies\", which represented specific industries. These seats were elected by small organizations rather than the entire population, as well most of these sectors \"usually elected pro-Beijing lawmakers\". As a result, this also led to a disproportionate amount of power to certain economic sectors. Protestors argued that this government structure undermines democratic representation and they demanded to shift away from the existing system and have all government leaders and legislators be chosen through direct popular vote.",
    ],
    pullQuote:
      "\"[Hong Kong citizens] rose up on Sunday in one of the largest demonstrations in Hong Kong's history to protest a proposed extradition law that many fear would finally break the dam holding back China's surging influence over the political haven.\"",
    reversed: true,
    image: "/images/rose_up.jpg",
  },
  {
    heading: "Release and Exoneration of Arrested Protesters",
    body: [
      "An essential component of the Hong Kong Protests' goals was to exonerate all protestors who had been incriminated for advocating for democracy. The protesters primarily sought to exonerate those involved in prior movements like the 2014 Umbrella Movement, which also aimed to protect free elections in Hong Kong. By the end of the 2014 protests, authorities had arrested more than 955 protesters. Similarly, authorities arrested over 10,000 individuals involved in the 2019 Hong Kong protests, despite the Hong Kong Basic Law preserving the right for Hong Kongers to protest freely.",
      "Beijing-controlled Hong Kong courts have handed down long sentences up to life in prison for pro-democracy leaders and protestors, accusing them of violence despite the majority of the protests having been peaceful. This increase in those arrested is alarming, as data from Georgetown Law finds, \"People committing non-violent crimes in 2019 were still far more likely to be sentenced to prison than in 2014.\" Because of China's increasing overreach into Hong Kong's government and courts, the civil rights promised for Hong Kongers to peacefully petition are increasingly eroded. In order to assert their independent legal system, Hong Kongers wish to free those wrongfully imprisoned for practicing their basic rights. The 2019 Hong Kong protestors demanded the release of protestors arrested for lawful, peaceful protesting.",
    ],
    pullQuote:
      "\"Still no Accountability for Hong Kong's Police Force\" — Human Rights Watch",
    image: "/images/no_accountability.jpg",
  },
];

export default function Goals() {
  return (
    <>
      <PageHero
        label="Movement Goals"
        title="Five Demands, Not One Less"
        subtitle="The key political motivators of government accountability and autonomy"
        backgroundImage="/images/hero-goals.jpg"
      />
      <PageContent sections={sections} />
    </>
  );
}
