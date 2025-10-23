"use client";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { myFetch } from "@/utils/myFetch";
import toast from "react-hot-toast";
import { revalidate } from "@/utils/revalidateTags";
import {
  MultiSelector,
  MultiSelectorContent,
  MultiSelectorInput,
  MultiSelectorItem,
  MultiSelectorList,
  MultiSelectorTrigger,
} from "@/components/ui/multi-select";

// Schema
const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  categories: z.array(z.string()).min(1, "Select at least one category"),
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

const items = [
  { value: "category1", label: "Category 1" },
  { value: "category2", label: "Category 2" },
  { value: "category3", label: "Category 3" },
];

export default function CategoryEdit({
  item,
  trigger,
  category,
  categoryEdit,
}: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [relatedTo, setRelatedTo] = useState(category || []);

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
    if (selected) {
      setFile(selected);
      setPreview(URL.createObjectURL(selected));
    }
  };

  const handleClick = () => inputRef.current?.click();

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values);
    const formData = new FormData();
    formData.append("name", values.name);
    if (file) formData.append("image", file);

    // if (relatedTo) formData.append("relatedTo", relatedTo);
    if (
      values.categories &&
      values.categories.length > 0 &&
      Array.isArray(values.categories)
    ) {
      values.categories.forEach((id) => {
        formData.append("relatedTo", id);
      });
    }

    const method = item?._id ? "PATCH" : "POST";
    const url = item?._id ? `/categories/${item._id}` : `/categories/create`;

    try {
      const res = await myFetch(url, {
        method,
        body: formData,
      });

      console.log(res);
      if (res.success) {
        toast.success("Category updated successfully.");
        revalidate("categories");
      } else {
        toast.error("Category failed.");
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
                    height={100}
                    className="mt-2 object-cover h-40"
                  />
                ) : (
                  <span className="text-center">No Image</span>
                )}
                <Input
                  className="hidden"
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  ref={inputRef}
                />
              </div>
            </div>
            {/* Multi-select */}

            {category ? (
              <FormField
                control={form.control}
                name="categories"
                render={({ field }) => (
                  <FormItem>
                    <label className="block mt-3 font-semibold">
                      Select Category
                    </label>
                    <FormControl>
                      <MultiSelector
                        values={field.value}
                        onValuesChange={field.onChange}
                        loop
                        className="w-full"
                      >
                        <MultiSelectorTrigger>
                          <MultiSelectorInput placeholder="Select Item(s)" />
                        </MultiSelectorTrigger>
                        <MultiSelectorContent>
                          <MultiSelectorList>
                            {category?.data?.map((item: any) => (
                              <MultiSelectorItem
                                key={item._id}
                                value={item._id}
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
            ) : (
              <FormField
                control={form.control}
                name="categories"
                render={({ field }) => (
                  <FormItem>
                    <label className="block mt-3 font-semibold">
                      Select Category
                    </label>
                    <FormControl>
                      <MultiSelector
                        values={field.value}
                        onValuesChange={field.onChange}
                        loop
                        className="w-full"
                      >
                        <MultiSelectorTrigger>
                          <MultiSelectorInput placeholder="Select Item(s)" />
                        </MultiSelectorTrigger>
                        <MultiSelectorContent>
                          <MultiSelectorList>
                            {categoryEdit?.data?.map((item: any) => (
                              <MultiSelectorItem
                                key={item._id}
                                value={item._id}
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
            )}
            {/* Submit */}
            <div className="flex justify-end">
              <Button className="bg-[#F05223]" type="submit">
                {item ? "Update" : "Add"}
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
