import SectionTitle from "@/components/share/SectionTitle";
import Container from "@/layout/Container";
import Image from "next/image";
import React from "react";

export default function AboutBody() {
  return (
    <>
      {" "}
      <SectionTitle
        title="About Clapbac"
        subTitle="Turning the tables on the critics—because someone’s gotta rate the raters."
      />
      <Container className="w-[70%] my-14">
        <div className="">
          <Image
            src="/about-banner.png"
            alt="Person using phone"
            width={1000}
            height={700}
            className="w-full h-[70%] object-cover"
          />
        </div>

        <p className="mt-10">
          Clapbac is a fierce, mobile-friendly platform that flips the script on
          reviews, letting business owners rate customers, fire back at unfair
          critiques, and cheer their best patrons. Sick of Yelp’s one-way slams?
          Clapbac hands businesses the mic. <br /> <br /> The heart of Clapbac
          is simple: owners assign 1-5 star ratings to customers, tied to their
          public Yelp or Google usernames, and craft sharp “clapback” replies to
          bad behavior. To tackle nasty reviews, businesses can pull brief
          snippets from public Yelp posts (e.g., a line or two, credited to Yelp
          and the reviewer’s username) and respond with their truth—like quoting
          “Horrible staff!” and countering, “This user demanded free food. 1
          star.” These clapbacks spark on Clapbac’s dynamic feed, where users
          swipe to hype bold responses or uplift loyal customers. <br /> <br />{" "}
          Legally, Clapbac plays smart. Owners use short, attributed Yelp
          excerpts or rephrase reviews to dodge copyright or terms-of-service
          issues. Our Yelp/Google API setup (pending developer confirmation)
          ensures proper credit and links to original posts, keeping things
          clean. Owners can ping rated customers via API with a nudge: “See your
          Clapbac rating!”—driving buzz safely. <br />
          <br /> Clapbac also honors great customers. Owners give 5-star ratings
          and shoutouts to “VIPs,” who earn badges like “Star Legend” and perks
          like discounts. With features like “Cheers Chain” and “Troll
          Takedown,” Clapbac blends roasting complainers with praising champs,
          creating a bold, fair space for businesses. <br /> <br /> Clapbac
          isn’t just a platform—it’s a comeback. Rate, respond, reward, and own
          the narrative.
        </p>
      </Container>
    </>
  );
}
