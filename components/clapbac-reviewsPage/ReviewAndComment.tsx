import React from "react";

import CommentsSection from "./CommentsSection";
import ReviewCommentDetails from "./ReviewCommentDetails";
export default function ReviewAndComment({ reviews }: { reviews: any[] }) {
  return (
    <div className=" p-6 bg-white">
      {/* ReviewCommentDetails */}
      <div className=" pl-4 space-y-6">
        {reviews?.map((reply: any, index: number) => {
          if (index >= 1) return null;
          return (
            <ReviewCommentDetails key={index} reply={reply} index={index} />
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
