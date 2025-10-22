"use client";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { useRef, useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
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
  name_6092856238: z.array(z.string()).min(1, {
    message: "Please select at least one item",
  }),
});

export default function CategoryEdit({
  item,
  trigger,
  title,
}: {
  item?: any;
  trigger: React.ReactNode;
  title: string;
}) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [preview, setPreview] = useState<string | null>(item?.image || null);
  const [file, setFile] = useState<File | null>(null);
  const [items] = useState([
    { _id: "1", name: "Category A" },
    { _id: "2", name: "Category B" },
    { _id: "3", name: "Category C" },
  ]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: item?.name || "",
      name_6092856238: item?.name_6092856238 || [],
    },
  });

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
      setFile(file);
    }
  };

  const handleClick = () => {
    inputRef?.current?.click();
  };

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log("Form submitted!");
    console.log("Form values:", values);
    // Here you can handle file upload, API call, etc.
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

            {/* Image */}
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
                    height={200}
                    className="mt-2 object-cover"
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
            <FormField
              control={form.control}
              name="name_6092856238"
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
                          {items.map((cat) => (
                            <MultiSelectorItem key={cat._id} value={cat._id}>
                              {cat.name}
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
