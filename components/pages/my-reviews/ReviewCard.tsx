import { FaRegStar, FaRegStarHalfStroke, FaStar } from "react-icons/fa6";
import { truncateText } from "@/utils/truncateText";
import UserImage from "@/components/share/customImageHandle/UserImage";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import toast from "react-hot-toast";
import { revalidate } from "@/utils/revalidateTags";
import { myFetch } from "@/utils/myFetch";
import CustomModal from "@/modal/CustomModal";
import { DialogClose } from "@/components/ui/dialog";

export default function ReviewCard({ item }: { item: any }) {
  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalf = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0);

    return (
      <>
        {[...Array(fullStars)].map((_, i) => (
          <FaStar key={`full-${i}`} className="text-[#F05223] text-2xl" />
        ))}

        {hasHalf && <FaRegStarHalfStroke className="text-[#F05223] text-2xl" />}

        {[...Array(emptyStars)].map((_, i) => (
          <FaRegStar key={`empty-${i}`} className="text-gray-400 text-2xl" />
        ))}
      </>
    );
  };

  // handle delete
  const handleDelete = async (id: string) => {
    try {
      toast.loading("Deleting...", { id: "delete" });
      const response = await myFetch(`/reviews/${id}`, {
        method: "DELETE",
      });
      if (response.success) {
        toast.success("Review deleted successfully", { id: "delete" });
        revalidate("reviews");
      } else {
        toast.error("Failed to delete review", { id: "delete" });
      }
    } catch (error) {
      console.error("Error deleting review:", error);
    }
  };

  return (
    <section className="border-[#C5D92D] border-8 p-2 md:p-4">
      <div className="bg-white flex flex-col md:flex-row lg:items-center gap-6 md:gap-10 p-4">
        <div className="flex flex-col ">
          <h2 className="text-lg md:text-xl font-bold text-gray-800">
            {item?.reviewerName}
          </h2>
          <p className="text-sm text-gray-600 mb-2">{item?.reviewerAddress}</p>

          <div className="flex items-center text-orange-400 text-sm">
            {renderStars(item.clapbacRating)}
          </div>
        </div>

        {/* Middle: Logo + Reviewer From */}
        <div className="flex gap-3 ">
          <div>
            <div className="flex gap-3 ">
              <UserImage
                item={item?.company?.logo}
                name="Arabica Coffee"
                className="w-14 h-14 rounded-full object-contain"
              />
              <div>
                <p className="text-xs text-gray-600 uppercase">
                  {item?.clapbacRating >= 3 ? "Props from…" : "Clapbac from…"}
                </p>
                <p className="text-sm font-bold text-gray-800">
                  {item.user?.firstName} {item.user?.lastName}
                  <span className="font-normal">, {item?.user?.title}</span>
                </p>
                <p className="text-sm text-gray-700">{item?.company?.name}</p>
                <p className="text-sm text-gray-500">
                  {new Date(item?.createdAt).toLocaleDateString()}
                </p>
              </div>
            </div>
            <div className="w-full mt-2 text-sm text-gray-700">
              {truncateText(item?.clapbacMessage, 60)}
            </div>
          </div>
        </div>

        {/* actions */}
        <div className="flex md:flex-col items-center gap-2">
          <Link href={`/edit-review/${item?._id}`}>
            <Button variant={"outline"} className="min-w-20">
              Edit
            </Button>
          </Link>
          <CustomModal
            dialogTrigger={
              <Button
                variant={"outline"}
                className="min-w-20 border-red-500 bg-red-50 text-red-500 hover:bg-red-500 hover:text-white"
              >
                Delete
              </Button>
            }
          >
            <div>
              <h1 className="font-semibold text-xl md:text-2xl text-center p-3">
                Are you sure you want to delete?
              </h1>

              <div className="grid grid-cols-2 gap-2 max-w-44 mx-auto py-4">
                <DialogClose asChild>
                  <Button variant={"outline"}>No</Button>
                </DialogClose>
                <Button
                  variant={"destructive"}
                  onClick={() => handleDelete(item?._id)}
                >
                  Yes
                </Button>
              </div>
            </div>
          </CustomModal>
        </div>
      </div>
    </section>
  );
}
