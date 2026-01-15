import SectionTitle from "@/components/share/SectionTitle";
import Container from "@/layout/Container";
import { myFetch } from "@/utils/myFetch";
import Image from "next/image";

export default async function FaqBody() {
  const faqs = await myFetch("/faqs");
  return (
    <>
      <SectionTitle
        title="FAQs"
        subTitle={
          <>
            Find out how to leave a review, respond to one, and what makes{" "}
            <br />
            our platform different — including why reviewers get rated too!
          </>
        }
      />
      <Container className="md:w-[60%] mx-auto px-4 py-10 text-sm">
        <div className="flex justify-center">
          <Image
            src="/faq.png"
            alt="faq"
            width={826}
            height={541}
            className=" object-cover"
          />
        </div>

        {faqs?.data?.map((faq: any, index: number) => (
          <div key={index} className="my-9">
            <h3 className="font-semibold text-xl md:text-2xl text-[#F05325] mb-2">
              {faq.question}
            </h3>

            <p className="text-gray-800 mb-2 leading-relaxed text-base font-medium whitespace-pre-line">
              {faq.answer}
            </p>
          </div>
        ))}
      </Container>
    </>
  );
}
