import PageHero from "../components/PageHero";
import PageContent from "../components/PageContent";

const sections = [
  {
    heading: "Extradition Bill",
    body: [
      "The main reason the 2019 extradition bill caused mass protests to erupt in Hong Kong was because the people believed that it would expose them to mainland China's legal system and in return, remove the protections that they had always relied on. Because no formal extradition agreement existed at the time, a Hong Kong murder suspect was not sent to Taiwan, leading the government to propose a legislation to permit case by case transfers to places including mainland China, Taiwan, and Macau. Even though the bill was meant to be a legal fix, many Hong Kong residents feared extradition to Mainland China would mean unfair trials, arbitrary detention, torture, and weak access to legal protection. According to Jeff Li in the “Hong Kong-China extradition plans explained” article (BBC News), “No one will be safe, including activists, human rights lawyers, journalists, and social workers”, this proves that the general public greatly rejected the idea of the extradition bill being passed on.",
      "In late March 2019, protests against the bill started emerging, and by mid June, about 2 million people were marching peacefully to show their opposition to the bill. Police response, however, was that of brutality, as they used tear gas, pepper spray, rubber bullets, and other aggressive methods to attempt to stop the protests. Instead of putting an end to the protests, the police brutality increased public anger causing a protest for just one law to erupt into a wider pro democracy protest. Therefore, the extradition bill was the tipping point that caused the 2019 protests, as the people of Hong Kong saw it as more than just a legal reform, but rather saw it as a threat to their way of life and democratic freedom.",
    ],
    pullQuote: "\"No one will be safe\"",
    image: "https://images.pexels.com/photos/6295359/pexels-photo-6295359.jpeg",
  },
  {
    heading: "One Country, Two Systems",
    body: [
      "Another reason that the extradition bill was met with such strong resistance was because Hong Kong had long operated under a “one country,  two systems” framework, and this ensured the people that they had protection in Hong Kong, which they feared was starting to fade away because of China. In 1997, sovereignty over Hong Kong was returned from Britain to China, with the rule that Hong Kong would have a separate legal and economic system and a high degree of autonomy under the Basic Law. This rule was made to allow Hong Kong to keep its own capitalist economy, independent judiciary, civil liberties, and legal protections, which differentiated it from Mainland China, hence came the “one country two system” framework. Because of this system, many Hong Kong residents believed that the extradition bill was not just one law being changed, but the beginning of Beijing's interference with matters in Hong Kong. This resulted in residents believing that some of them could be sent to mainland China for trials, so they wouldn’t be protected by their legal system. For many residents, protecting the “one country, two systems” framework was about more than just the law, it was about protecting Hong Kong’s identity, freedom, and ultimately its ability to shape its own future.",
      "The slogan “Today’s Hong Kong, Tomorrow’s Taiwan” gained much attention in light of Taiwan’s fear that the civil unrest in Hong Kong would occur in Taiwan in the near future. The concept is that if China continues to exert pressure on Hong Kong, which could result in Hong Kong losing its current autonomy, then Taiwan may also face a similar threat in the future. Many people in Taiwan believed that China’s “one country, two systems” promise to Hong Kong could not be trusted, which is why they saw Hong Kong’s protests as closely tied to Taiwan’s own future. Because many Taiwanese sympathized with the protesters in Hong Kong and feared that Taiwan could face the same pressure from China in the future, Taiwan became an important source of political support for the movement. In light of this, the “Today’s Hong Kong, Tomorrow’s Taiwan” slogan holds great significance. The support of the people of Taiwan towards the protesters in Hong Kong is rooted in both feelings of sympathy for the protesters as well as fear for Taiwan’s own future if China exerts the same amount of pressure on Taiwan as it is on Hong Kong.",
    ],
    pullQuote: "\"Today's Hong Kong, Tomorrow's Taiwan\"",
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
    </>
  );
}
