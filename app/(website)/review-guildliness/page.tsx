const reviewGuidelines = [
  {
    title: "Focus on the Reviewer, Not the Business",
    description:
      "Clapbac is designed to evaluate reviewers—their credibility, tone, consistency, and fairness—not to re-review the business itself. Keep your feedback centered on the reviewer’s approach and behavior.",
  },
  {
    title: "Use Short Excerpts Only (Fair Use)",
    description:
      "You may include brief excerpts from public reviews for context. Do not post full reviews, screenshots, or paywalled content. Excerpts should be no longer than necessary to support your commentary.",
  },
  {
    title: "Be Honest, Specific, and Constructive",
    description:
      "Thoughtful critique is encouraged. Personal attacks, harassment, threats, hate speech, or abusive language are not allowed. Critique ideas, patterns, and behavior—not personal traits.",
  },
  {
    title: "No Defamation or False Claims",
    description:
      "Do not make unverified allegations or state speculation as fact. If something is an opinion, keep it framed as such. Content that is misleading or intentionally harmful may be removed.",
  },
  {
    title: "No Doxxing or Personal Information",
    description:
      "Do not share private, sensitive, or identifying information about reviewers or third parties. This includes addresses, phone numbers, workplaces, or social media accounts not already public within the review context.",
  },
  {
    title: "Stay Relevant",
    description:
      "Ratings and commentary should directly relate to the review excerpt provided. Off-topic posts, spam, promotional content, or unrelated commentary may be removed.",
  },
  {
    title: "One Voice, One Account",
    description:
      "Multiple accounts, coordinated manipulation, or attempts to artificially influence ratings are not permitted.",
  },
  {
    title: "Moderation & Enforcement",
    description:
      "Clapbac reserves the right to review, moderate, remove, or restrict content or accounts that violate these guidelines or our Terms of Service—at our discretion.",
  },
];

const feedbackNotes = [
  "When Auto Fill is applied, users can paste full Yelp reviews even though we request short excerpts. How do we fix this?",
  "There’s a “Date of Experience” section, but Yelp doesn’t provide one. Maybe this should be removed.",
  "Title of Your Review – feedback needed on how this is displayed on the Reviewers page.",
  "Your Review – this field needs to be taller, like a text box.",
  "The Reviewer Consequence section disappeared. Please bring it back.",
];

export default function ReviewGuidelines() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-10 text-sm text-black">
      <h1 className="font-semibold mb-4 text-2xl">Review Guidelines</h1>

      <p className="mb-6 leading-relaxed text-lg">
        Clapbac exists to promote fairness, accountability, and thoughtful
        conversation around online reviews. To keep the platform constructive
        and useful for everyone, we ask that all users follow these guidelines
        when submitting ratings or commentary.
      </p>

      <ol className="space-y-4  list-inside">
        {reviewGuidelines.map((item, index) => (
          <li key={index}>
            <span className="font-semibold text-xl">
              {index + 1}. {item.title}
            </span>
            <p className="ml-5 mt-1 leading-relaxed text-lg">
              {item.description}
            </p>
          </li>
        ))}
      </ol>

      <p className="mt-6 leading-relaxed text-xl">
        Our goal is not censorship, but clarity and fairness. By participating
        on Clapbac, you help create a more transparent, accountable review
        ecosystem.
      </p>

      {/* <ol className="mt-6 space-y-2 list-decimal list-inside">
        {feedbackNotes.map((note, index) => (
          <li key={index} className="leading-relaxed">
            {note}
          </li>
        ))}
      </ol> */}
    </div>
  );
}
