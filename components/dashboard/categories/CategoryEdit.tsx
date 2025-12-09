"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  MultiSelector,
  MultiSelectorContent,
  MultiSelectorInput,
  MultiSelectorItem,
  MultiSelectorList,
  MultiSelectorTrigger,
} from "@/components/ui/multi-select";

import { myFetch } from "@/utils/myFetch";
import { revalidate } from "@/utils/revalidateTags";

// Schema
const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  categories: z.array(z.string()).optional(),
});

type Props = {
  item?: {
    _id?: string;
    name?: string;
    icon?: string;
    categories?: string[];
  };
  trigger: React.ReactNode;
  title: string;
  category?: any;
  categoryEdit?: any;
};

export default function CategoryEdit({
  item,
  trigger,
  category,
  categoryEdit,
}: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [error, setError] = useState<string | null>("");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: item?.name || "",
      categories: item?.categories || [],
    },
  });

  useEffect(() => {
    if (item?.icon) {
      const url = item.icon.startsWith("http")
        ? item.icon
        : `${process.env.NEXT_PUBLIC_BASE_URL}${item.icon}`;
      setPreview(url);
    }
  }, [item]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0];
    if (!selected) return;

    const validTypes = ["image/png", "image/jpeg", "image/jpg"];
    if (!validTypes.includes(selected.type)) {
      setError("Only PNG, JPG and JPEG images are allowed.");
      setPreview(null);
      return;
    }

    setFile(selected);
    setPreview(URL.createObjectURL(selected));
    setError(null);
  };

  const handleClick = () => inputRef.current?.click();

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const formData = new FormData();
    formData.append("name", values.name);
    if (!item?._id && !file) {
      setError("Image is required.");
      return;
    }
    if (file) formData.append("image", file);

    const selectedCategories = category?.data || categoryEdit?.data || [];

    selectedCategories
      .filter((cat: any) => values?.categories?.includes(cat._id))
      .forEach((cat: any) => {
        formData.append("relatedTo", cat._id);
      });

    const method = item?._id ? "PATCH" : "POST";
    const url = item?._id ? `/categories/${item._id}` : `/categories/create`;

    try {
      const res = await myFetch(url, { method, body: formData });

      if (res.success) {
        toast.success("Category updated successfully.");
        revalidate("categories");
        window.location.reload();
      } else {
        toast.error(res.message || "Category failed.");
      }
    } catch (err) {
      console.error("Submit error:", err);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="flex justify-end cursor-pointer">{trigger}</div>
      </DialogTrigger>
      <DialogContent className="space-y-4">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            {/* Name */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <label className="block mb-1 font-semibold">
                    Category Name
                  </label>
                  <FormControl>
                    <Input {...field} placeholder="Enter category name" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Image Upload */}
            <div>
              <label className="block mt-3 font-semibold">Category Image</label>
              <div
                onClick={handleClick}
                className="border rounded text-center p-2 cursor-pointer"
              >
                {preview ? (
                  <Image
                    src={preview}
                    alt="Preview"
                    width={200}
                    height={160}
                    sizes="100vh"
                    className="mt-2 object-cover"
                  />
                ) : (
                  <span className="text-center">No Image</span>
                )}
                <Input
                  className="hidden"
                  type="file"
                  accept="image/png, image/jpeg, image/jpg"
                  onChange={handleImageChange}
                  ref={inputRef}
                />
              </div>
              {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
            </div>

            {/* Multi-select */}
            <FormField
              control={form.control}
              name="categories"
              render={({ field }) => (
                <FormItem>
                  <label className="block mt-3 font-semibold">
                    Select Categories
                  </label>
                  <FormControl>
                    <MultiSelector
                      values={field.value || []}
                      onValuesChange={field.onChange}
                      loop
                      className="w-full"
                    >
                      <MultiSelectorTrigger>
                        <MultiSelectorInput placeholder="Select Categories" />
                      </MultiSelectorTrigger>
                      <MultiSelectorContent>
                        <MultiSelectorList>
                          {(category?.data || categoryEdit?.data || [])
                            .filter((cat: any) => cat?._id !== item?._id)
                            .map((item: any) => (
                              <MultiSelectorItem
                                key={item._id}
                                value={item.name}
                              >
                                {item.name}
                              </MultiSelectorItem>
                            ))}
                        </MultiSelectorList>
                      </MultiSelectorContent>
                    </MultiSelector>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Submit */}
            <div className="flex justify-end">
              <Button
                disabled={item ? file : !file}
                className="bg-[#F05223]"
                type="submit"
              >
                {item ? "Update" : "Add"}
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
