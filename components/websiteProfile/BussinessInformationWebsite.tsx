"use client";

import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Edit } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { myFetch } from "@/utils/myFetch";

// Define schema
const formSchema = z.object({
  name: z.string().min(1),
  address: z.string().min(1),
  phone: z.string().min(1),
  email: z.string().email(),
  website: z.string().url().optional(),
  about: z.string().min(1).optional(),
});

type FormValues = z.infer<typeof formSchema>;

export default function BusinessInformationForm({ company }: { company: any }) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>("");

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      address: "",
      phone: "",
      email: "",
      website: "",
      about: "",
    },
  });

  useEffect(() => {
    if (company) {
      form.reset({
        name: company.name || "",
        address: company.address || "",
        phone: company.phone || "",
        email: company.email || "",
        website: company.website || "",
        about: company.about || "",
      });

      const logo = company?.logo;
      if (logo) {
        const imageUrl = logo.startsWith("http")
          ? logo
          : process.env.NEXT_PUBLIC_BASE_URL + logo;
        setPreviewImage(imageUrl);
      }
    }
  }, [company]);

  const onSubmit = async (values: FormValues) => {
    const formData = new FormData();

    Object.entries(values).forEach(([key, value]) => {
      formData.append(key, value || "");
    });

    if (imageFile) {
      formData.append("image", imageFile);
    }

    try {
      const res = await myFetch(`/companies/${company._id}`, {
        method: "PATCH",
        body: formData,
      });

      if (res.success) {
        toast.success("Business updated successfully.");
      } else {
        toast.error(res.message || "Business update failed.");
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong.");
    }
  };

  const handleEditClick = () => {
    fileInputRef.current?.click();
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) return;

    const validTypes = ["image/png", "image/jpeg", "image/jpg"];
    if (!validTypes.includes(file.type)) {
      toast.error("Only PNG, JPG and JPEG images are allowed.");
      setPreviewImage(null);
      setImageFile(null);
      return;
    }

    if (file.size > 1 * 1024 * 1024) {
      toast.error(`Please upload a file smaller than 1 MB`);
      setError("Please upload a file smaller than 1 MB");
      return;
    }

    if (file) {
      setPreviewImage(URL.createObjectURL(file));
      setImageFile(file);
    }
  };

  return (
    <>
      {/* Image upload section */}
      <div className="relative w-max mb-6">
        <div className="border border-gray-300 rounded-full w-[150px] h-[150px] overflow-hidden">
          {previewImage ? (
            <Image
              src={previewImage}
              alt="Profile"
              width={150}
              height={150}
              className="rounded-full object-cover"
            />
          ) : (
            <span className="flex items-center justify-center h-full text-gray-500">
              No Image
            </span>
          )}
        </div>

        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          onChange={handleImageChange}
          className="hidden"
        />

        <span
          className="absolute left-28 top-28 cursor-pointer text-gray-700 hover:text-gray-900"
          onClick={handleEditClick}
          title="Change profile picture"
        >
          <Edit size={22} />
        </span>

        {error && (
          <p className="text-sm text-red-500 mt-2">
            Please upload a file smaller than 1 MB
          </p>
        )}
      </div>

      {/* Form */}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          {/** Company Name */}
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <div className="flex items-center gap-6">
                  <FormLabel className="w-36 font-medium text-[#A0A0A0]">
                    Company Name:
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="text"
                      placeholder="Company Name"
                      className="flex-1 ml-6 text-[#3D454E]"
                    />
                  </FormControl>
                </div>
                <div className="ml-[12rem] mt-1">
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />

          {/** Address */}
          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <div className="flex items-center gap-6">
                  <FormLabel className="w-36 font-medium text-[#A0A0A0]">
                    Address:
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="text"
                      placeholder="123 Main St"
                      className="flex-1 ml-6 text-[#3D454E]"
                    />
                  </FormControl>
                </div>
                <div className="ml-[12rem] mt-1">
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />

          {/** Phone */}
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <div className="flex items-center gap-6">
                  <FormLabel className="w-36 font-medium text-[#A0A0A0]">
                    Phone:
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="text"
                      placeholder="Phone"
                      className="flex-1 ml-6 text-[#3D454E]"
                    />
                  </FormControl>
                </div>
                <div className="ml-[12rem] mt-1">
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />

          {/** Email */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <div className="flex items-center gap-6">
                  <FormLabel className="w-36 font-medium text-[#A0A0A0]">
                    Company Email:
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="email"
                      placeholder="company@gmail.com"
                      className="flex-1 ml-6 text-[#3D454E]"
                    />
                  </FormControl>
                </div>
                <div className="ml-[12rem] mt-1">
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />

          {/** Website */}
          <FormField
            control={form.control}
            name="website"
            render={({ field }) => (
              <FormItem>
                <div className="flex items-center gap-6">
                  <FormLabel className="w-36 font-medium text-[#A0A0A0]">
                    Website:
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="text"
                      placeholder="https://company.com"
                      className="flex-1 ml-6 text-[#3D454E]"
                    />
                  </FormControl>
                </div>
                <div className="ml-[12rem] mt-1">
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />

          {/** About */}
          <FormField
            control={form.control}
            name="about"
            render={({ field }) => (
              <FormItem>
                <div className="flex items-center gap-6">
                  <FormLabel className="w-36 font-medium text-[#A0A0A0]">
                    Company Details:
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      {...field}
                      placeholder="Describe your company..."
                      className="flex-1 ml-6 text-[#3D454E]"
                    />
                  </FormControl>
                </div>
                <div className="ml-[12rem] mt-1">
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />

          {/** Submit */}
          <div className="flex justify-end">
            <Button
              type="submit"
              className="w-[77.5%] bg-[#F05223] hover:bg-[#d3441f]"
            >
              Save Changes
            </Button>
          </div>
        </form>
      </Form>
    </>
  );
}
