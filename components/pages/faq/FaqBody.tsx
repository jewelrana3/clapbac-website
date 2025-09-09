import SectionTitle from "@/components/share/SectionTitle";
import Container from "@/layout/Container";
import Image from "next/image";

const faqs = [
  {
    question: "What is the Clapbac site all about?",
    answer: `Clapbac is a mobile-first platform where business owners reclaim their reputation by rating customers 1-5 stars and clapping back at unfair reviews.\n\nIt’s your turn to rate the raters, reward loyal patrons, or address legit complaints—on your terms.`,
  },
  {
    question: "Who can leave a review on Clapbac?",
    answer: `Only business owners can leave reviews on Clapbac, rating customers with 1-5 stars tied to their public Yelp or Google usernames. This exclusive setup empowers businesses to control the narrative and balance the scales.`,
  },
  {
    question: "Why can reviewers be rated on Clapbac?",
    answer: `Reviewers can be rated to give business owners a voice to counter unfair reviews and highlight great customers.\nIt’s about reclaiming your reputation by rating the real situation—trolls get called out, champs get cheered.`,
  },
  {
    question: "How are reviewers’ ratings calculated?",
    answer: `Ratings are calculated based on the real situation as judged by the business owner, reflecting customer behavior.\nOwners assign 1–5 stars. From toxic complainers to loyal VIPs—on their terms.`,
  },
  {
    question: "What happens if a review or reply violates the rules?",
    answer: `We have clear community guidelines. Reviews or replies that include harassment, hate speech, false claims, or confidential info will be removed. Repeat violations may lead to account suspension or banning.`,
  },
  {
    question: "Can I trust the reviews on Clapbac?",
    answer: `Yes, reviews are trustworthy because they’re written by verified business owners based on real experiences.\nThey’re not anonymous—owners use aliases or their business name for accountability.`,
  },
  {
    question: "What makes Clapbac different from Yelp or Google Reviews?",
    answer: `Clapbac flips the script, letting only business owners rate customers, unlike Yelp or Google’s customer-driven reviews. It’s a bold platform for businesses to reclaim their narrative, roast trolls, and reward loyal fans.`,
  },
];

export default function FaqBody() {
  return (
    <>
      <SectionTitle
        title="FAQs"
        subTitle="Find out how to leave a review, respond to one, and what makes ? our platform different — including why reviewers get rated too!"
      />
      <Container className="md:w-[60%] mx-auto px-4 py-10 text-sm">
        <div>
          <Image
            src="/faq-banner.png"
            alt="faq"
            width={1000}
            height={700}
            className="w-full h-auto object-cover"
          />
        </div>

        {faqs.map((faq, index) => (
          <div key={index} className="my-9">
            <h3 className="font-semibold text-xl md:text-2xl text-[#F05325] mb-2">
              {faq.question}
            </h3>
            {faq.answer.split("\n").map((line, i) => (
              <p
                key={i}
                className="text-gray-800 mb-2 leading-relaxed text-base font-medium"
              >
                {line}
              </p>
            ))}
          </div>
        ))}
      </Container>
    </>
  );
}
