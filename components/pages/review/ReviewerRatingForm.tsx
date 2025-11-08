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
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { myFetch } from "@/utils/myFetch";
import toast from "react-hot-toast";
import { revalidate } from "@/utils/revalidateTags";
import { useRouter } from "next/navigation";
import { StarRating } from "react-flexible-star-rating";
import RenderStars from "@/components/share/rating/RenderStars";
import Link from "next/link";

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

    console.log(data);

    // try {
    //   const res = await myFetch("/reviews/create", {
    //     method: "POST",
    //     body: {
    //       ...data,
    //       reviewRating: rating.yourRating,
    //       clapbacRating: rating.bussinessRating,
    //     },
    //   });

    //   if (res?.success) {
    //     toast.success("Review submitted successfully!", { id: "review" });
    //     reset();
    //     revalidate("reviews");
    //     setRating({ yourRating: 0, bussinessRating: 0 });
    //     router.push(`/clapbac-reviews/${res?.data?.company}`);
    //   } else toast.error(res?.message || "Review submission failed.");
    // } catch {
    //   toast.error("Something went wrong.", { id: "review" });
    // } finally {
    //   setIsSubmitting(false);
    // }
  };

  return (
    <section className="my-14">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-3xl mx-auto space-y-6 p-6 border rounded-lg shadow-sm"
      >
        <div className="flex justify-between">
          <div className="flex items-center gap-5">
            <RenderStars
              initialRating={rating.bussinessRating}
              onRatingChange={(newRating: number) =>
                setRating((prev) => ({ ...prev, yourRating: newRating }))
              }
            />
            <div className="inline-block bg-[#c6db24] text-black font-semibold px-4 py-3 rounded-md text-sm relative  clip-tag mt-2 md:mt-0">
              Choose Your Rating
            </div>
          </div>
          <div className="flex items-end mt-2 md:mt-0">
            <Link
              target="_blank"
              href="/review-guildliness"
              className="text-sm text-[#3D454E] font-semibold hover:underline"
            >
              Read Our Review Guidelines
            </Link>
          </div>
        </div>

        <div>
          <InputField
            id="reviewerName"
            label="Name of Reviewer that you are Rating"
            rules={{ required: "Reviewer name is required." }}
            placeholder="e.g. Sarah M."
          />
          <p className="italic text-[#3D454E]">
            Please use first name and last initial only (e.g., Sarah M.) to
            respect privacy and comply with Fair Use.
          </p>
        </div>
        <InputField
          id="reviewerAddress"
          label="City and State of Reviewer you are Rating"
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
          <p className="italic text-[#3D454E]">
            Review needs to be short excerpts from original review to comply
            with the Fair Use.
          </p>
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
        {/* date and rating */}
        <div>
          <InputField
            id="experienceDate"
            label="Date of Experience"
            type="date"
            rules={{ required: "Date is required." }}
          />
          <div className="mt-5">
            <p className="text-[#3D454E] font-semibold mb-1">
              How the Original Reviewer Rated Your Business
            </p>
            <RenderStars
              initialRating={rating.bussinessRating}
              onRatingChange={(newRating: number) =>
                setRating((prev) => ({ ...prev, bussinessRating: newRating }))
              }
            />
          </div>
        </div>

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
                    setIsOtherType(val === "Other");
                    field.onChange(val === "Other" ? "" : val);
                  }}
                  value={isOtherType ? "Other" : field.value}
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
                    setIsOtherConsequence(val === "Other");
                    field.onChange(val === "Other" ? "" : val);
                  }}
                  value={isOtherConsequence ? "Other" : field.value}
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
