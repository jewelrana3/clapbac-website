/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { Controller, useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { reviewerTypes, consequenceOptions } from "@/demoData/reviewPage";
import RenderStars from "@/components/share/rating/RenderStars";
import { useState } from "react";
import Link from "next/link";
import toast from "react-hot-toast";
import { myFetch } from "@/utils/myFetch";
import { revalidate } from "@/utils/revalidateTags";
import { useRouter } from "next/navigation";
import { Textarea } from "@/components/ui/textarea";
import { BotIcon, Loader2 } from "lucide-react";
import CustomModal from "@/modal/CustomModal";
import AIReviewGenerator from "./AIGenerateForm";
type Rating = { yourRating: number; bussinessRating: number };

export default function DublicateReviewerRatingForm() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isAIAutoFillLoading, setIsAIAutoFillLoading] = useState(false);
  const [rating, setRating] = useState<Rating>({
    yourRating: 0.5,
    bussinessRating: 0.5,
  });
  const [isOtherType, setIsOtherType] = useState(false);
  const [isOtherConsequence, setIsOtherConsequence] = useState(false);
  const [isAIModalOpen, setIsAIModalOpen] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      reviewerName: "",
      reviewerAddress: "",
      reviewMessage: "",
      reviewSource: "",
      sourceLink: "",
      experienceDate: "",
      clapbacTitle: "",
      clapbacMessage: "",
      reviewerType: "",
      reviewerConsequence: "",
    },
  });

  const onSubmit = async (data: any) => {
    setIsSubmitting(true);
    toast.loading("Submitting...", { id: "review" });

    try {
      const res = await myFetch("/reviews/create", {
        method: "POST",
        body: {
          ...data,
          reviewRating: rating.yourRating,
          clapbacRating: rating.bussinessRating,
        },
      });

      if (res?.success) {
        toast.success("Review submitted successfully!", { id: "review" });
        reset();
        revalidate("reviews");
        setRating({ yourRating: 0, bussinessRating: 0 });
        router.push(`/clapbac-reviews/${res?.data?.company}`);
      } else toast.error(res?.message || "Review submission failed.");
    } catch {
      toast.error("Something went wrong.", { id: "review" });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleAIAutoFill = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsAIAutoFillLoading(true);

    const formData = new FormData(e.currentTarget);
    const payload = formData.get("yelp");

    try {
      const res = await myFetch("/reviews/extract", {
        method: "POST",
        body: { text: payload },
      });

      if (res?.success) {
        setValue("reviewerName", res?.data.reviewerName);
        setValue("reviewerAddress", res?.data.reviewerAddress);
        setValue("experienceDate", res?.data.experienceDate);
        setValue("reviewMessage", res?.data.reviewMessage);
      }
    } catch (err: any) {
      toast.error(err?.message);
    } finally {
      setIsAIAutoFillLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white space-y-6">
      <form onSubmit={handleAIAutoFill}>
        <div className="p-6">
          <Label>Auto Fill with AI</Label>
          <Textarea
            name="yelp"
            className="border p-2 w-full h-24"
            placeholder="Copy your review from yelp then paste here"
          />

          <Button type="submit" className="bg-[#F05223] w-[150px] mt-2">
            {isAIAutoFillLoading ? (
              <Loader2 className="animate-spin" />
            ) : (
              "Start Auto Fill"
            )}
          </Button>
        </div>
      </form>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-3xl mx-auto p-6 bg-white space-y-6"
      >
        {/* Your Rating */}
        <div className="flex justify-between">
          <div className="flex items-center gap-5">
            <RenderStars
              initialRating={rating.yourRating}
              onRatingChange={(newRating: number) =>
                setRating((prev) => ({ ...prev, yourRating: newRating }))
              }
            />
            <div className="inline-block bg-[#c6db24] text-black font-semibold px-4 py-3 rounded-md text-sm relative clip-tag mt-2 md:mt-0">
              Choose Your Rating
            </div>
          </div>
          <div className="flex items-end mt-2 md:mt-0">
            <Link
              href="/review-guildliness"
              className="text-sm text-[#3D454E] font-semibold hover:underline"
            >
              Read Our Review Guidelines
            </Link>
          </div>
        </div>

        {/* Name */}
        <div>
          <Label>Name of Reviewer that you are Rating</Label>
          <input
            className="border p-2 w-full"
            {...register("reviewerName", {
              required: "Reviewer name is required",
            })}
            placeholder="Enter name"
          />
          {errors.reviewerName && (
            <p className="text-red-500 text-sm">
              {errors.reviewerName.message}
            </p>
          )}
          <p className="italic text-[#3D454E]">
            Please use first name and last initial only (e.g., Sarah M.) to
            respect privacy and comply with Fair Use.
          </p>
        </div>

        {/* Address */}
        <div>
          <Label>City and State of Reviewer you are Rating</Label>
          <input
            className="border p-2 w-full"
            {...register("reviewerAddress", {
              required: "Reviewer address is required",
            })}
            placeholder="Enter address"
          />
          {errors.reviewerAddress && (
            <p className="text-red-500 text-sm">
              {errors.reviewerAddress.message}
            </p>
          )}
        </div>

        {/* Review Excerpt */}
        <div>
          <Label>Paste Excerpt from Original Review Here</Label>
          <textarea
            {...register("reviewMessage", {
              required: "Review excerpt is required",
            })}
            placeholder="Paste excerpt..."
            className="border w-full p-3"
          />
          {errors.reviewMessage && (
            <p className="text-red-500 text-sm">
              {errors.reviewMessage.message}
            </p>
          )}
          <p className="italic text-[#3D454E]">
            Review needs to be short excerpts from original review to comply
            with the Fair Use.
          </p>
        </div>

        {/* Review Source */}
        <div>
          <Label>Review Source (e.g. Yelp, Google)</Label>
          <input
            className="border p-2 w-full"
            {...register("reviewSource", {
              required: "Review source is required",
            })}
            placeholder="Yelp"
          />
          {errors.reviewSource && (
            <p className="text-red-500 text-sm">
              {errors.reviewSource.message}
            </p>
          )}
        </div>

        {/* Source Link */}
        <div>
          <Label>Paste Review Source Link Here</Label>
          <input
            className="border p-2 w-full"
            {...register("sourceLink", {
              required: "Source link is required.",
              pattern: {
                value: /^(https?:\/\/[^\s$.?#].[^\s]*)$/i,
                message: "Enter a valid URL.",
              },
            })}
            placeholder="https://..."
          />
          {errors.sourceLink && (
            <p className="text-red-500 text-sm">{errors.sourceLink.message}</p>
          )}
        </div>

        {/* Experience Date */}
        <div>
          <Label>Date of Experience</Label>
          <input
            className="border p-2 w-full"
            {...register("experienceDate", {
              required: "Experience date is required",
            })}
            type="date"
          />
          {errors.experienceDate && (
            <p className="text-red-500 text-sm">
              {errors.experienceDate.message}
            </p>
          )}
        </div>

        {/* Original Reviewer Rating */}
        <div>
          <p className="text-[#3D454E] font-semibold mb-1">
            How the Original Reviewer Rated Your Business
          </p>
          <RenderStars
            initialRating={rating.bussinessRating}
            onRatingChange={(val: number) =>
              setRating((prev) => ({ ...prev, bussinessRating: val }))
            }
          />
        </div>

        {/* Clapback Title */}
        <div>
          <Label>Title of Your Review</Label>
          <input
            placeholder="Enter your review title"
            className="border p-2 w-full"
            {...register("clapbacTitle", { required: "Title is required" })}
            type="text"
          />
          {errors.clapbacTitle && (
            <p className="text-red-500 text-sm">
              {errors.clapbacTitle.message}
            </p>
          )}
        </div>

        {/* Your Review */}
        <div>
          <Label>Your Review</Label>
          <div className="relative">
            <Textarea
              placeholder="Enter your review"
              className="border p-2 w-full h-24"
              {...register("clapbacMessage", {
                required: "Review is required.",
                minLength: { value: 20, message: "At least 20 characters" },
              })}
            />
            <CustomModal
              dialogTrigger={
                <Button
                  type="button"
                  className="absolute bottom-4 right-2 bg-primary rounded-full hover:shadow-md hover:shadow-orange-400 transition-all duration-300 ease-in-out"
                >
                  <BotIcon /> AI Generate
                </Button>
              }
              className="w-[70vw] overflow-y-scroll scroll-hidden p-6"
            >
              <AIReviewGenerator />
            </CustomModal>
          </div>
          {errors.clapbacMessage && (
            <p className="text-red-500 text-sm">
              {errors.clapbacMessage.message}
            </p>
          )}
        </div>

        {/* Reviewer Type */}
        <div>
          <Label>Reviewer Type</Label>
          <Controller
            control={control}
            name="reviewerType"
            rules={{ required: "Reviewer type is required" }}
            render={({ field }) => (
              <>
                <Select
                  value={isOtherType ? "Other" : field.value}
                  onValueChange={(val) => {
                    setIsOtherType(val === "Other");
                    field.onChange(val === "Other" ? "" : val);
                  }}
                >
                  <SelectTrigger className="w-full rounded-none">
                    <SelectValue placeholder="Select Reviewer Type" />
                  </SelectTrigger>
                  <SelectContent>
                    {reviewerTypes?.map(({ label }) => (
                      <SelectItem key={label} value={label}>
                        {label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {isOtherType && (
                  <input
                    className="border p-2 w-full"
                    placeholder="Other Type"
                    value={field.value}
                    onChange={(e) => setValue("reviewerType", e.target.value)}
                  />
                )}
                {errors.reviewerType && (
                  <p className="text-red-500 text-sm">
                    {errors.reviewerType.message}
                  </p>
                )}
              </>
            )}
          />
        </div>

        {/* Reviewer Consequence */}
        <div>
          <Label>Reviewer Consequence</Label>
          <Controller
            control={control}
            name="reviewerConsequence"
            rules={{ required: "Reviewer consequence is required" }}
            render={({ field }) => (
              <>
                <Select
                  value={isOtherConsequence ? "Other" : field.value}
                  onValueChange={(val) => {
                    setIsOtherConsequence(val === "Other");
                    field.onChange(val === "Other" ? "" : val);
                  }}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Consequence" />
                  </SelectTrigger>
                  <SelectContent>
                    {consequenceOptions?.map((label) => (
                      <SelectItem key={label} value={label}>
                        {label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {isOtherConsequence && (
                  <input
                    className="border p-2 w-full"
                    placeholder="Other Consequence"
                    value={field.value}
                    onChange={(e) =>
                      setValue("reviewerConsequence", e.target.value)
                    }
                  />
                )}
                {errors.reviewerConsequence && (
                  <p className="text-red-500 text-sm">
                    {errors.reviewerConsequence.message}
                  </p>
                )}
              </>
            )}
          />
        </div>

        {/* Submit Button */}
        <Button disabled={isSubmitting} type="submit" className="bg-[#F05223]">
          Submit Your Review
        </Button>
      </form>
    </div>
  );
}
