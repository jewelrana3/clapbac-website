// "use client";
// import { useState } from "react";
// import { useForm, Controller } from "react-hook-form";
// import { Button } from "@/components/ui/button";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { Label } from "@/components/ui/label";
// import { Checkbox } from "@/components/ui/checkbox";
// import { reviewerTypes } from "@/demoData/reviewPage";
// import RatingHeader from "./RatingHeader";
// import { StarRating } from "react-flexible-star-rating";
// import { myFetch } from "@/utils/myFetch";
// import toast from "react-hot-toast";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { revalidate } from "@/utils/revalidateTags";
// import { useRouter } from "next/navigation";

// type FormValues = {
//   reviewerName: string;
//   reviewerAddress: string;
//   reviewMessage: string;
//   reviewSource: string;
//   sourceLink: string;
//   experienceDate: string;
//   clapbacTitle: string;
//   clapbacMessage: string;
//   reviewerType: string;
//   reviewerConsequence: string;
// };

// type Rating = {
//   yourRating: number;
//   bussinessRating: number;
// };

// export default function ReviewerRatingForm() {
//   const [isOtherType, setIsOtherType] = useState(false);
//   const [isOtherConsequence, setIsOtherConsequence] = useState(false);

//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const router = useRouter();

//   const {
//     register,
//     handleSubmit,
//     control,
//     setValue,
//     reset,
//     watch,
//     formState: { errors },
//   } = useForm<FormValues>();

//   const [rating, setRating] = useState<Rating>({
//     yourRating: 1,
//     bussinessRating: 1,
//   });

//   const onSubmit = async (data: FormValues) => {
//     setIsSubmitting(true);
//     toast.loading("Submitting...", { id: "review" });

//     const payload = {
//       ...data,
//       clapbacRating: rating.bussinessRating,
//       reviewRating: rating.yourRating,
//     };

//     console.log("✅ Submitting Payload:", payload);

//     // ===> Real API call example (commented)
//     try {
//       const res = await myFetch("/reviews/create", {
//         method: "POST",
//         body: payload,
//       });

//       console.log(res);

//       if (res?.success) {
//         toast.success("Review submitted successfully!", { id: "review" });
//         reset();
//         revalidate("reviews");
//         setRating({ yourRating: 0, bussinessRating: 0 });
//         router.push(`/clapbac-reviews/${res?.data?.company}`);
//       } else {
//         toast.error(res?.message || "Review submission failed.");
//       }
//     } catch (err) {
//       console.error("Error submitting review:", err);
//       toast.error("Something went wrong.", { id: "review" });
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <section className="my-14">
//       <form
//         onSubmit={handleSubmit(onSubmit)}
//         className="max-w-3xl mx-auto space-y-6 p-6 border rounded-lg shadow-sm"
//       >
//         <RatingHeader rating={rating} setRating={setRating} />

//         {/* Reviewer Name */}
//         <div>
//           <Label htmlFor="reviewerName">
//             Name of Reviewer that you are Rating
//           </Label>
//           <Input
//             id="reviewerName"
//             placeholder="e.g. Sarah M."
//             {...register("reviewerName", {
//               required: "Reviewer name is required.",
//             })}
//           />
//           {errors.reviewerName && (
//             <p className="text-sm text-red-500">
//               {errors.reviewerName.message}
//             </p>
//           )}
//         </div>

//         {/* Reviewer Address */}
//         <div>
//           <Label htmlFor="reviewerAddress">
//             Address of Reviewer that you are Rating
//           </Label>
//           <Input
//             id="reviewerAddress"
//             placeholder="e.g. 123 Main St, Anytown, USA"
//             {...register("reviewerAddress", {
//               required: "Reviewer address is required.",
//             })}
//           />
//           {errors.reviewerAddress && (
//             <p className="text-sm text-red-500">
//               {errors.reviewerAddress.message}
//             </p>
//           )}
//         </div>

//         {/* Review Excerpt */}
//         <div>
//           <Label htmlFor="reviewMessage">
//             Paste Excerpt from Original Review Here
//           </Label>
//           <Textarea
//             style={{ height: "130px" }}
//             id="reviewMessage"
//             {...register("reviewMessage", {
//               required: "Review excerpt is required.",
//             })}
//           />
//           {errors.reviewMessage && (
//             <p className="text-sm text-red-500">
//               {errors.reviewMessage.message}
//             </p>
//           )}
//         </div>

//         {/* Review Source */}
//         <div>
//           <Label htmlFor="reviewSource">
//             Review Source (e.g. Yelp, Google)
//           </Label>
//           <Input
//             id="reviewSource"
//             placeholder="e.g. Yelp"
//             {...register("reviewSource", {
//               required: "Review source is required.",
//             })}
//           />
//           {errors.reviewSource && (
//             <p className="text-sm text-red-500">
//               {errors.reviewSource.message}
//             </p>
//           )}
//         </div>

//         {/* Source Link */}
//         <div>
//           <Label htmlFor="sourceLink">Paste Review Source Link Here</Label>
//           <Input
//             id="sourceLink"
//             placeholder="https://..."
//             {...register("sourceLink", {
//               required: "Source link is required.",
//               pattern: {
//                 value: /^(https?:\/\/[^\s$.?#].[^\s]*)$/i,
//                 message: "Please enter a valid URL.",
//               },
//             })}
//           />
//           {errors.sourceLink && (
//             <p className="text-sm text-red-500">{errors.sourceLink.message}</p>
//           )}
//         </div>

//         {/* Experience Date */}
//         <div>
//           <Label htmlFor="experienceDate">Date of Experience</Label>
//           <Input
//             id="experienceDate"
//             type="date"
//             {...register("experienceDate", { required: "Date is required." })}
//           />
//           {errors.experienceDate && (
//             <p className="text-sm text-red-500">
//               {errors.experienceDate.message}
//             </p>
//           )}
//         </div>

//         {/* Title of Your Review */}
//         <div>
//           <Label htmlFor="clapbacTitle">Title of Your Review</Label>
//           <Input
//             id="clapbacTitle"
//             {...register("clapbacTitle", { required: "Title is required." })}
//           />
//           {errors.clapbacTitle && (
//             <p className="text-sm text-red-500">
//               {errors.clapbacTitle.message}
//             </p>
//           )}
//         </div>

//         {/* Your Review */}
//         <div>
//           <Label htmlFor="clapbacMessage">Your Review</Label>
//           <Textarea
//             id="clapbacMessage"
//             {...register("clapbacMessage", {
//               required: "Review is required.",
//               minLength: {
//                 value: 50,
//                 message: "Review must be at least 50 characters.",
//               },
//             })}
//           />
//           {errors.clapbacMessage && (
//             <p className="text-sm text-red-500">
//               {errors.clapbacMessage.message}
//             </p>
//           )}
//         </div>

//         {/* Reviewer Type */}
//         {/* Reviewer Type */}
//         <div className="space-y-2">
//           <Label>Reviewer Type</Label>
//           {/* <Controller
//             control={control}
//             name="reviewerType"
//             rules={{ required: "Reviewer type is required." }}
//             render={({ field }) => (
//               <>
//                 <Select
//                   onValueChange={(value) => {
//                     if (value !== "Others") {
//                       field.onChange(value);
//                     } else {
//                       // temporarily set to "Others" to show input
//                       field.onChange("Others");
//                     }
//                   }}
//                   value={field.value}
//                 >
//                   <SelectTrigger className="w-full rounded-none !h-14">
//                     <SelectValue placeholder="Select Reviewer Type" />
//                   </SelectTrigger>
//                   <SelectContent>
//                     {reviewerTypes.map((item) => (
//                       <SelectItem key={item.label} value={item.label}>
//                         {item.label}
//                       </SelectItem>
//                     ))}
//                   </SelectContent>
//                 </Select>

//                 {field.value === "Others" && (
//                   <Input
//                     placeholder="Type your custom reviewer type"
//                     onChange={(e) => {
//                       const val = e.target.value;
//                       // Set same field value dynamically
//                       setValue("reviewerType", val, { shouldValidate: true });
//                     }}
//                   />
//                 )}
//               </>
//             )}
//           /> */}
//           <Controller
//             control={control}
//             name="reviewerType"
//             rules={{ required: "Reviewer type is required." }}
//             render={({ field }) => (
//               <>
//                 <Select
//                   onValueChange={(value) => {
//                     if (value === "Others") {
//                       setIsOtherType(true);
//                       field.onChange(""); // clear so user can type freely
//                     } else {
//                       setIsOtherType(false);
//                       field.onChange(value);
//                     }
//                   }}
//                   value={isOtherType ? "Others" : field.value}
//                 >
//                   <SelectTrigger className="w-full rounded-none !h-14">
//                     <SelectValue placeholder="Select Reviewer Type" />
//                   </SelectTrigger>
//                   <SelectContent>
//                     {reviewerTypes.map((item) => (
//                       <SelectItem key={item.label} value={item.label}>
//                         {item.label}
//                       </SelectItem>
//                     ))}
//                   </SelectContent>
//                 </Select>

//                 {isOtherType && (
//                   <Input
//                     placeholder="Type your custom reviewer type"
//                     value={field.value}
//                     onChange={(e) =>
//                       setValue("reviewerType", e.target.value, {
//                         shouldValidate: true,
//                       })
//                     }
//                   />
//                 )}
//               </>
//             )}
//           />

//           {errors.reviewerType && (
//             <p className="text-sm text-red-500">
//               {errors.reviewerType.message}
//             </p>
//           )}
//         </div>

//         {/* Reviewer Consequence */}
//         <div className="space-y-2">
//           <Label>Reviewer Consequence</Label>
//           <Controller
//             control={control}
//             name="reviewerConsequence"
//             rules={{ required: "Reviewer consequence is required." }}
//             render={({ field }) => (
//               <>
//                 <Select
//                   onValueChange={(value) => {
//                     if (value === "Others") {
//                       setIsOtherConsequence(true);
//                       field.onChange("");
//                     } else {
//                       setIsOtherConsequence(false);
//                       field.onChange(value);
//                     }
//                   }}
//                   value={isOtherConsequence ? "Others" : field.value}
//                 >
//                   <SelectTrigger className="w-full rounded-none !h-14">
//                     <SelectValue placeholder="Select Consequence" />
//                   </SelectTrigger>
//                   <SelectContent>
//                     <SelectItem value="banned">Banned for Life</SelectItem>
//                     <SelectItem value="warned">Issued a Warning</SelectItem>
//                     <SelectItem value="ignored">Ignored</SelectItem>
//                     <SelectItem value="VIP Star Legend Badge">
//                       VIP Star Legend Badge
//                     </SelectItem>
//                     <SelectItem value="Owners Choice: Custom Consequence">
//                       Owners Choice: Custom Consequence
//                     </SelectItem>
//                     <SelectItem value="One-Month Cooling-Off Period">
//                       One-Month Cooling-Off Period
//                     </SelectItem>
//                     <SelectItem value="Free Dessert on Us">
//                       Free Dessert on Us
//                     </SelectItem>
//                     <SelectItem value="Name on the Wall of Shame">
//                       Name on the Wall of Shame
//                     </SelectItem>
//                     <SelectItem value="Loyalty Upgrade: 20% Off Next Order">
//                       Loyalty Upgrade: 20% Off Next Order
//                     </SelectItem>
//                     <SelectItem value="Others">Others</SelectItem>
//                   </SelectContent>
//                 </Select>

//                 {isOtherConsequence && (
//                   <Input
//                     placeholder="Type your custom consequence"
//                     value={field.value}
//                     onChange={(e) =>
//                       setValue("reviewerConsequence", e.target.value, {
//                         shouldValidate: true,
//                       })
//                     }
//                   />
//                 )}
//               </>
//             )}
//           />

//           {errors.reviewerConsequence && (
//             <p className="text-sm text-red-500">
//               {errors.reviewerConsequence.message}
//             </p>
//           )}
//         </div>

//         {/* Certification Checkbox */}
//         <div className="flex items-start space-x-3">
//           <Checkbox id="certify" />
//           <label
//             htmlFor="certify"
//             className="text-sm font-normal text-muted-foreground leading-snug"
//           >
//             You certify this review reflects your genuine, unbiased experience,
//             and wasn’t influenced by compensation or perks.
//           </label>
//         </div>

//         {/* Submit */}
//         <Button disabled={isSubmitting} type="submit" className="bg-[#F05223]">
//           Submit Your Review
//         </Button>
//       </form>
//     </section>
//   );
// }

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

const consequenceOptions = [
  "Banned for Life",
  "Issued a Warning",
  "Ignored",
  "VIP Star Legend Badge",
  "Owners Choice: Custom Consequence",
  "Cooling-Off Period",
  "Free Dessert",
  "Wall of Shame",
  "20% Off Next Order",
  "Others",
];

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
                    <SelectItem value="Others">Others</SelectItem>
                  </SelectContent>
                </Select>
                {isOtherType && (
                  <Input
                    placeholder="Custom reviewer type"
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
                    placeholder="Custom consequence"
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
