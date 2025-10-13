"use client";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { reviewerTypes } from "@/demoData/reviewPage";
import RatingHeader from "./RatingHeader";
import { StarRating } from "react-flexible-star-rating";
import { myFetch } from "@/utils/myFetch";
import toast from "react-hot-toast";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type FormValues = {
  reviewerName: string;
  reviewMessage: string;
  reviewSource: string;
  sourceLink: string;
  experienceDate: string;
  clapbacTitle: string;
  clapbacMessage: string;
  reviewerType: string;
  reviewerConsequence: string;
  // certify: boolean;
};

type Rating = {
  yourRating: number;
  bussinessRating: number;
};

export default function ReviewerRatingForm() {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<FormValues>();

  const [rating, setRating] = useState<Rating>({
    yourRating: 0,
    bussinessRating: 0,
  });

  const [reviewTypes, setReviewTypes] = useState({
    reviewType: "",
    reviewerConsequence: "",
  });

  const handleReviews = (name: string, value: string) => {
    setReviewTypes((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onSubmit = async (data: any) => {
    const payload = {
      ...data,
      reviewerType: reviewTypes.reviewType,
      reviewerConsequence: reviewTypes.reviewerConsequence,
      clapbacRating: rating.bussinessRating,
      reviewRating: rating.yourRating,
    };

    if (rating?.yourRating === 0 || rating?.yourRating === 0) {
      return toast.error("Please provide your rating.");
    }

    console.log(payload);

    try {
      const res = await myFetch("/reviews/create", {
        method: "POST",
        body: payload,
      });

      console.log(res);

      if (res?.success) {
        toast.success("Review submitted successfully!");
        reset();
        setRating({ yourRating: 0, bussinessRating: 0 });
      } else {
        toast.error(res?.message || "Review submission failed.");
      }
    } catch (err) {
      console.error("Error submitting review:", err);
      toast.error("Something went wrong.");
    }
  };

  return (
    <section className="my-14">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-2xl mx-auto space-y-6 p-6 border rounded-lg shadow-sm"
      >
        <RatingHeader setRating={setRating} />

        {/* Reviewer Name */}
        <div>
          <Label htmlFor="reviewerName">
            Name of Reviewer that you are Rating
          </Label>
          <Input
            id="reviewerName"
            placeholder="e.g. Sarah M."
            {...register("reviewerName", {
              required: "Reviewer name is required.",
            })}
          />
          {errors.reviewerName && (
            <p className="text-sm text-red-500">
              {errors.reviewerName.message}
            </p>
          )}
        </div>

        {/* Review Excerpt */}
        <div>
          <Label htmlFor="reviewMessage">
            Paste Excerpt from Original Review Here
          </Label>
          <Textarea
            id="reviewMessage"
            {...register("reviewMessage", {
              required: "Review excerpt is required.",
            })}
          />
          {errors.reviewMessage && (
            <p className="text-sm text-red-500">
              {errors.reviewMessage.message}
            </p>
          )}
        </div>

        {/* Review Source */}
        <div>
          <Label htmlFor="reviewSource">
            Review Source (e.g. Yelp, Google)
          </Label>
          <Input
            id="reviewSource"
            placeholder="e.g. Yelp"
            {...register("reviewSource", {
              required: "Review source is required.",
            })}
          />
          {errors.reviewSource && (
            <p className="text-sm text-red-500">
              {errors.reviewSource.message}
            </p>
          )}
        </div>

        {/* Source Link */}
        <div>
          <Label htmlFor="sourceLink">Paste Review Source Link Here</Label>
          <Input
            id="sourceLink"
            placeholder="https://..."
            {...register("sourceLink", {
              required: "Source link is required.",
              pattern: {
                value: /^(https?:\/\/[^\s$.?#].[^\s]*)$/i,
                message: "Please enter a valid URL.",
              },
            })}
          />
          {errors.sourceLink && (
            <p className="text-sm text-red-500">{errors.sourceLink.message}</p>
          )}
        </div>

        {/* Experience Date */}
        <div>
          <Label htmlFor="experienceDate">Date of Experience</Label>
          <Input
            id="experienceDate"
            type="date"
            {...register("experienceDate", { required: "Date is required." })}
          />
          {errors.experienceDate && (
            <p className="text-sm text-red-500">
              {errors.experienceDate.message}
            </p>
          )}
        </div>

        {/* Star Rating from Reviewer */}
        <div>
          <Label>How the Original Reviewer Rated Your Business</Label>
          <div className="flex items-center space-x-1 mt-1">
            <StarRating
              starsLength={5}
              dimension={10}
              isHalfRatingEnabled={true}
              onRatingChange={(ratingValue) =>
                setRating((prev) => ({ ...prev, bussinessRating: ratingValue }))
              }
            />
          </div>
        </div>

        {/* Title of Your Review */}
        <div>
          <Label htmlFor="clapbacTitle">Title of Your Review</Label>
          <Input
            id="clapbacTitle"
            {...register("clapbacTitle", { required: "Title is required." })}
          />
          {errors.clapbacTitle && (
            <p className="text-sm text-red-500">
              {errors.clapbacTitle.message}
            </p>
          )}
        </div>

        {/* Your Review Message */}
        <div>
          <Label htmlFor="clapbacMessage">Your Review</Label>
          <Textarea
            id="clapbacMessage"
            {...register("clapbacMessage", {
              required: "Review is required.",
              minLength: {
                value: 10,
                message: "Review must be at least 100 characters.",
              },
            })}
          />
          {errors.clapbacMessage && (
            <p className="text-sm text-red-500">
              {errors.clapbacMessage.message}
            </p>
          )}
        </div>

        {/* Reviewer Type */}
        <div className="space-y-2">
          <Label>Reviewer Type</Label>
          <Controller
            control={control}
            name="reviewerType"
            rules={{ required: "Reviewer type is required." }}
            render={({ field }) => (
              <Select
                onValueChange={(value) => {
                  field.onChange(value);
                  handleReviews("reviewType", value);
                }}
                value={field.value}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select Reviewer Type" />
                </SelectTrigger>
                <SelectContent>
                  {reviewerTypes.map((item) => (
                    <SelectItem key={item.label} value={item.label}>
                      {item.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
          {errors.reviewerType && (
            <p className="text-sm text-red-500">
              {errors.reviewerType.message}
            </p>
          )}
        </div>

        {/* Reviewer Consequence */}
        <div className="space-y-2">
          <Label>Reviewer Consequence</Label>
          <Controller
            control={control}
            name="reviewerConsequence"
            rules={{ required: "Reviewer consequence is required." }}
            render={({ field }) => (
              <Select
                onValueChange={(value) => {
                  field.onChange(value);
                  handleReviews("reviewerConsequence", value);
                }}
                value={field.value}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select Consequence" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="banned">Banned for Life</SelectItem>
                  <SelectItem value="warned">Issued a Warning</SelectItem>
                  <SelectItem value="ignored">Ignored</SelectItem>
                </SelectContent>
              </Select>
            )}
          />
          {errors.reviewerConsequence && (
            <p className="text-sm text-red-500">
              {errors.reviewerConsequence.message}
            </p>
          )}
        </div>

        {/* Certification Checkbox */}
        <div className="flex items-start space-x-3">
          <>
            <Checkbox />
            <label
              htmlFor="certify"
              className="text-sm font-normal text-muted-foreground leading-snug"
            >
              You certify this review reflects your genuine, unbiased
              experience, and wasn’t influenced by compensation or perks.
            </label>
          </>
        </div>
        {/* {errors.certify && (
          <p className="text-sm text-red-500">{errors.certify.message}</p>
        )} */}

        {/* Submit Button */}
        <Button type="submit" className="bg-[#F05223]">
          Submit Your Review
        </Button>
      </form>
    </section>
  );
}
