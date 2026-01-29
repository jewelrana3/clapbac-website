import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Eye } from "lucide-react";
import ReviewersDetailsInfo from "./ReviewersDetailsInfo";
import { ratingCaculate } from "@/components/share/rating/ratingCaculate";

export default function ReviewersDetails({ data }: any) {
  const userInfo = [
    { label: "Display Name", value: data?.reviewerName },
    { label: "Location", value: data?.reviewerAddress },
  ];

  const bottomSection = [
    { label: "Original Reviews:", value: "3" },
    { label: "Number of Responses:", value: data?.helpfulCount },
    {
      label: "Avg Rating:",
      value: (
        <>
          <div className="text-[#F05223] text-xl flex">
            {ratingCaculate(data?.reviewRating)}
          </div>
        </>
      ),
    },

    { label: "Reviewer Type:", value: data?.reviewerType },
    { label: "Reviewer Consequence:", value: data?.reviewerConsequence },
  ];
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Eye className="text-[#3D454E] cursor-pointer" />
      </DialogTrigger>
      <DialogContent className=" sm:max-w-[800px] mx-auto bg-[#F5F5F5]">
        <div className="flex bg-[#F5F5F5] p-9 gap-14">
          <div className="">
            <h1 className="font-bold text-2xl ">{data?.reviewerName}</h1>
            <p className="text-md">{data?.reviewerAddress || "N/A"}</p>
          </div>
          <div className="flex-1">
            <ReviewersDetailsInfo
              userInfo={userInfo}
              bottomSection={bottomSection}
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
