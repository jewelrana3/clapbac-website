import React from "react";

import CommentsSection from "./CommentsSection";
import ReviewCommentDetails from "./ReviewCommentDetails";
export default function ReviewAndComment({ reviews }: { reviews: any[] }) {
  console.log(reviews, "reviews");
  return (
    <div className=" px-6 bg-white">
      {/* ReviewCommentDetails */}
      <div className=" pl-4 space-y-6">
        {reviews?.map((reply: any) => {
          return (
            <div key={reply._id}>
              {reply?.comments?.map((comment: any, idx: number) => (
                <ReviewCommentDetails key={idx} reply={comment} index={idx} />
              ))}
            </div>
          );
        })}
      </div>

      <CommentsSection reviews={reviews} />
    </div>
  );
}

//  <div className="space-y-10">
//       {reviews.map((review) => {
//         return (
//           <div key={review.id} className=" p-6 bg-white">
//             {/* ReviewCommentDetails */}
//             <div className=" pl-4 space-y-6">
//               {review.replies.map((reply: any, index: number) => {
//                 return (
//                   <ReviewCommentDetails
//                     key={index}
//                     reply={reply}
//                     index={index}
//                   />
//                 );
//               })}
//             </div>

//             <CommentsSection />
//           </div>
//         );
//       })}
//     </div>
