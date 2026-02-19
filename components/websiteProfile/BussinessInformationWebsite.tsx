"use client";
import { useForm, SubmitHandler, Controller } from "react-hook-form";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Edit } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { myFetch } from "@/utils/myFetch";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

import { Label } from "../ui/label";

type Inputs = {
  name: string;
  address: string;
  phone: string;
  email: string;
  website?: string;
  about?: string;
  category: string;
};

export default function BusinessInformationForm({
  company,
  categories,
}: {
  company: any;
  categories: any;
}) {
  console.log("company", company?.category?._id);
  console.log("categories", categories);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      name: "",
      address: "",
      phone: "",
      email: "",
      website: "",
      about: "",
      category: company?.category?._id || "",
    },
  });

  useEffect(() => {
    if (company) {
      reset({
        name: company.name || "",
        address: company.address || "",
        phone: company.phone || "",
        email: company.email || "",
        website: company.website || "",
        about: company.about || "",
        category: company?.category?._id || "",
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

      return;
    }

    if (file) {
      setPreviewImage(URL.createObjectURL(file));
      setImageFile(file);
    }
  };

  const onSubmit: SubmitHandler<Inputs> = async (values) => {
    const formData = new FormData();

    formData.append("name", values.name);
    formData.append("category", values.category);
    formData.append("address", values.address);
    formData.append("phone", values.phone);
    formData.append("email", values.email);
    formData.append("website", values.website || "");
    formData.append("about", values.about || "");

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
      toast.error("Something went wrong.");
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
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div className="flex items-center gap-6">
          <Label className="w-36 font-medium text-[#A0A0A0]">Name :</Label>

          <Input
            {...register("name")}
            type="text"
            placeholder="Company Name"
            className="flex-1 ml-6 text-[#3D454E]"
          />
        </div>

        {/* Business Category */}
        <div className="flex items-center gap-6">
          <Label className="w-52 font-medium text-[#A0A0A0]">Category</Label>
          <Controller
            name="category"
            control={control}
            render={({ field }) => (
              <Select value={field.value} onValueChange={field.onChange}>
                <SelectTrigger className="w-full border h-12!">
                  <SelectValue placeholder="Select Category Level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {categories?.map((sub: any, index: number) => (
                      <SelectItem key={`${index}`} value={sub?._id}>
                        <span className="text-lg"> {sub?.name}</span>
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            )}
          />
          {errors?.category && (
            <span className="text-red-400">{errors.category.message}</span>
          )}
        </div>

        {/** Address */}
        <div>
          <div className="flex items-center gap-6">
            <Label className="w-36 font-medium text-[#A0A0A0]">Address:</Label>

            <Input
              {...register("address")}
              type="text"
              placeholder="123 Main St"
              className="flex-1 ml-6 text-[#3D454E]"
            />
          </div>
          {/* <div className="ml-48 mt-1">
            <FormMessage />
          </div> */}
        </div>
        {/** Phone */}
        <div className="flex items-center gap-6">
          <Label className="w-36 font-medium text-[#A0A0A0]">Phone:</Label>

          <Input
            {...register("phone")}
            type="text"
            placeholder="Phone"
            className="flex-1 ml-6 text-[#3D454E]"
          />
        </div>
        {/** Email */}
        <div className="flex items-center gap-6">
          <Label className="w-36 font-medium text-[#A0A0A0]">Email:</Label>
          <Input
            {...register("email")}
            type="email"
            placeholder="company@gmail.com"
            className="flex-1 ml-6 text-[#3D454E]"
          />
        </div>

        {/** Website */}
        <div className="flex items-center gap-6">
          <Label className="w-36 font-medium text-[#A0A0A0]">Website:</Label>
          <Input
            {...register("website")}
            type="text"
            placeholder="https://company.com"
            className="flex-1 ml-6 text-[#3D454E]"
          />
        </div>

        {/** About */}
        <div className="flex items-center gap-6">
          <Label className="w-36 font-medium text-[#A0A0A0]">About:</Label>
          <Textarea
            {...register("about")}
            placeholder="Describe your company..."
            className="flex-1 ml-6 text-[#3D454E]"
          />
        </div>
        {/** Submit */}
        <div className="flex justify-end">
          <Button
            type="submit"
            className="w-[77.5%] bg-[#F05223] hover:bg-[#d3441f] h-12! font-semibold text-lg"
          >
            Save Changes
          </Button>
        </div>
      </form>
    </>
  );
}
