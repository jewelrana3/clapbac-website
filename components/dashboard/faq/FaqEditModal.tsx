"use client";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { handleUpdateFaq } from "./CreateFaq";
import { useState } from "react";

export default function FaqEditModal({
  faq,
  trigger,
}: {
  faq?: any;
  trigger: React.ReactNode;
}) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      _id: faq?._id || "",
      question: faq?.question || "",
      answer: faq?.answer || "",
    },
  });
  const [open, setOpen] = useState(false);

  const onSubmit = async (data: any) => {
    const formData = new FormData();
    formData.append("_id", data._id);
    formData.append("question", data.question);
    formData.append("answer", data.answer);

    await handleUpdateFaq(formData);
    reset(); // ✅ reset form after submit
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>

      <DialogContent className="!min-w-2xl">
        <h1 className="font-semibold text-lg">
          {faq?._id ? "Update Faq" : "Create Faq"}
        </h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <input type="hidden" {...register("_id")} />

          <div>
            <Label>Question</Label>
            <Input
              type="text"
              {...register("question", { required: "Question is required" })}
              className="!text-base mb-1 rounded"
            />
            {errors.question && (
              <p className="text-sm text-red-500">
                {errors.question.message as string}
              </p>
            )}
          </div>

          <div>
            <Label>Answer</Label>
            <Textarea
              {...register("answer", { required: "Answer is required" })}
              className="text-gray-700 rounded !text-base"
            />
            {errors.answer && (
              <p className="text-sm text-red-500">
                {errors.answer.message as string}
              </p>
            )}
          </div>

          <div className="flex justify-end">
            <Button
              type="submit"
              className="bg-[#F05223] mb-3"
              disabled={isSubmitting}
            >
              {faq?._id ? "Update" : "Create"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
