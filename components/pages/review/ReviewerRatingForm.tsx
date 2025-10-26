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
import { consequenceOptions, reviewerTypes } from "@/demoData/reviewPage";
import RatingHeader from "./RatingHeader";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { myFetch } from "@/utils/myFetch";
import toast from "react-hot-toast";
import { revalidate } from "@/utils/revalidateTags";
import { useRouter } from "next/navigation";

type FormValues = {
  reviewerName: string;
  reviewerAddress: string;
  reviewMessage: string;
  reviewSource: string;
  sourceLink: string;
  experienceDate: string;
  clapbacTitle: string;
  clapbacMessage: string;
  reviewerType: string;
  reviewerConsequence: string;
};

type Rating = { yourRating: number; bussinessRating: number };

export default function ReviewerRatingForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isOtherType, setIsOtherType] = useState(false);
  const [isOtherConsequence, setIsOtherConsequence] = useState(false);
  const [rating, setRating] = useState<Rating>({
    yourRating: 1,
    bussinessRating: 1,
  });
  const router = useRouter();

  const {
    register,
    handleSubmit,
    control,
    setValue,
    reset,
    formState: { errors },
  } = useForm<FormValues>();

  const FieldError = ({ name }: { name: keyof FormValues }) =>
    errors[name] && (
      <p className="text-sm text-red-500">{errors[name]?.message}</p>
    );

  const InputField = ({ id, label, ...rest }: any) => (
    <div>
      <Label htmlFor={id}>{label}</Label>
      <Input
        id={id}
        {...register(id as keyof FormValues, rest.rules)}
        placeholder={rest.placeholder}
        type={rest.type || "text"}
      />
      <FieldError name={id} />
    </div>
  );

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    toast.loading("Submitting...", { id: "review" });
    try {
      const res = await myFetch("/reviews/create", {
        method: "POST",
        body: {
          ...data,
          clapbacRating: rating.bussinessRating,
          reviewRating: rating.yourRating,
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

  return (
    <section className="my-14">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-3xl mx-auto space-y-6 p-6 border rounded-lg shadow-sm"
      >
        <RatingHeader rating={rating} setRating={setRating} />

        <InputField
          id="reviewerName"
          label="Name of Reviewer that you are Rating"
          rules={{ required: "Reviewer name is required." }}
          placeholder="e.g. Sarah M."
        />
        <InputField
          id="reviewerAddress"
          label="Address of Reviewer that you are Rating"
          rules={{ required: "Reviewer address is required." }}
          placeholder="123 Main St, Anytown"
        />

        <div>
          <Label>Paste Excerpt from Original Review Here</Label>
          <Textarea
            id="reviewMessage"
            {...register("reviewMessage", {
              required: "Review excerpt is required.",
            })}
            style={{ height: 130 }}
          />
          <FieldError name="reviewMessage" />
        </div>

        <InputField
          id="reviewSource"
          label="Review Source (e.g. Yelp, Google)"
          rules={{ required: "Review source is required." }}
          placeholder="Yelp"
        />
        <InputField
          id="sourceLink"
          label="Paste Review Source Link Here"
          rules={{
            required: "Source link is required.",
            pattern: {
              value: /^(https?:\/\/[^\s$.?#].[^\s]*)$/i,
              message: "Enter a valid URL.",
            },
          }}
          placeholder="https://..."
        />
        <InputField
          id="experienceDate"
          label="Date of Experience"
          type="date"
          rules={{ required: "Date is required." }}
        />
        <InputField
          id="clapbacTitle"
          label="Title of Your Review"
          rules={{ required: "Title is required." }}
        />
        <div>
          <Label>Your Review</Label>
          <Textarea
            id="clapbacMessage"
            {...register("clapbacMessage", {
              required: "Review is required.",
              minLength: { value: 50, message: "At least 50 characters." },
            })}
          />
          <FieldError name="clapbacMessage" />
        </div>

        {/* Reviewer Type */}
        <div className="space-y-2">
          <Label>Reviewer Type</Label>
          <Controller
            control={control}
            name="reviewerType"
            rules={{ required: "Reviewer type is required." }}
            render={({ field }) => (
              <>
                <Select
                  onValueChange={(val) => {
                    setIsOtherType(val === "Others");
                    field.onChange(val === "Others" ? "" : val);
                  }}
                  value={isOtherType ? "Others" : field.value}
                >
                  <SelectTrigger className="w-full !h-14">
                    <SelectValue placeholder="Select Reviewer Type" />
                  </SelectTrigger>
                  <SelectContent>
                    {reviewerTypes.map(({ label }) => (
                      <SelectItem key={label} value={label}>
                        {label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {isOtherType && (
                  <Input
                    placeholder="Reviewer Type"
                    value={field.value}
                    onChange={(e) =>
                      setValue("reviewerType", e.target.value, {
                        shouldValidate: true,
                      })
                    }
                  />
                )}
              </>
            )}
          />
          <FieldError name="reviewerType" />
        </div>

        {/* Reviewer Consequence */}
        <div className="space-y-2">
          <Label>Reviewer Consequence</Label>
          <Controller
            control={control}
            name="reviewerConsequence"
            rules={{ required: "Reviewer consequence is required." }}
            render={({ field }) => (
              <>
                <Select
                  onValueChange={(val) => {
                    setIsOtherConsequence(val === "Others");
                    field.onChange(val === "Others" ? "" : val);
                  }}
                  value={isOtherConsequence ? "Others" : field.value}
                >
                  <SelectTrigger className="w-full !h-14">
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
                  <Input
                    placeholder="Consequence type"
                    value={field.value}
                    onChange={(e) =>
                      setValue("reviewerConsequence", e.target.value, {
                        shouldValidate: true,
                      })
                    }
                  />
                )}
              </>
            )}
          />
          <FieldError name="reviewerConsequence" />
        </div>

        {/* Certification */}
        <div className="flex items-start space-x-3">
          <Checkbox id="certify" />
          <label
            htmlFor="certify"
            className="text-sm text-muted-foreground leading-snug"
          >
            You certify this review reflects your genuine, unbiased experience.
          </label>
        </div>

        <Button disabled={isSubmitting} type="submit" className="bg-[#F05223]">
          Submit Your Review
        </Button>
      </form>
    </section>
  );
}
