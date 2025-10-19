"use client";

import { Input } from "@/components/ui/input";
import {
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form"; // adjust path if needed
import { useForm, Controller } from "react-hook-form";

import Link from "next/link";
import toast from "react-hot-toast";
import { myFetch } from "@/utils/myFetch";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

type FormValues = {
  firstName: string;
  lastName: string;
  companyName: string;
  email: string;
  password: string;
  phone: string;
  website: string;
  title: string;
  businessCategory: string;
};

export default function SignupPageOwner({ categories }: any) {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const form = useForm<FormValues>({
    defaultValues: {
      firstName: "",
      lastName: "",
      companyName: "",
      email: "",
      password: "",
      phone: "",
      website: "",
      title: "",
      businessCategory: "",
    },
  });

  const {
    handleSubmit,
    control,
    setError,
    formState: { errors },
  } = form;

  const onSubmit = async (data: FormValues) => {
    try {
      const res = await myFetch("/users/create-owner", {
        method: "POST",
        body: data,
      });

      if (res.success) {
        toast.success("Sign up successful!");

        // setTimeout(() => {
        //   window.location.replace("/");
        // }, 500);
      } else {
        toast.error("Sign up failed: " + res.message);
      }
    } catch (err: any) {
      toast.error("Error during sign up");
      console.error(err);
    }
  };

  return (
    <div className="max-w-xl mx-auto py-12 px-8 md:px-16 shadow-xl bg-[#E8E8E8] rounded my-10 border-r-2">
      {/* Social Buttons */}
      {/* <SocialLogin /> */}
      {/* Divider */}

      {/* Form wrapper with form state passed in */}
      <Form {...form}>
        <form className="space-y-3" onSubmit={handleSubmit(onSubmit)}>
          {/* First Name */}
          <Controller
            control={control}
            name="firstName"
            rules={{ required: "First name is required" }}
            render={({ field }) => (
              <FormItem>
                <FormLabel>First Name</FormLabel>
                <FormControl>
                  <Input placeholder="First Name" {...field} />
                </FormControl>
                <FormMessage>
                  {errors.firstName
                    ? (errors.firstName.message as string)
                    : null}
                </FormMessage>
              </FormItem>
            )}
          />
          {/* Last Name */}
          <Controller
            control={control}
            name="lastName"
            rules={{ required: "Last name is required" }}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Last Name</FormLabel>
                <FormControl>
                  <Input placeholder="Last Name" {...field} />
                </FormControl>
                <FormMessage>
                  {errors.lastName ? (errors.lastName.message as string) : null}
                </FormMessage>
              </FormItem>
            )}
          />
          {/* Company Name */}
          <Controller
            control={control}
            name="companyName"
            rules={{ required: "Company name is required" }}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Company Name</FormLabel>
                <FormControl>
                  <Input placeholder="Company Name" {...field} />
                </FormControl>
                <FormMessage>
                  {errors.companyName
                    ? (errors.companyName.message as string)
                    : null}
                </FormMessage>
              </FormItem>
            )}
          />
          {/* Title */}
          <Controller
            control={control}
            name="title"
            rules={{ required: "Title is required" }}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder="Title" {...field} />
                </FormControl>
                <FormMessage>
                  {errors.title ? (errors.title.message as string) : null}
                </FormMessage>
              </FormItem>
            )}
          />
          {/* Business Category */}
          <Controller
            control={control}
            name="businessCategory"
            rules={{
              required: "Business category is required",
            }}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Business Category</FormLabel>
                <FormControl>
                  <select
                    {...field}
                    className="w-full px-3 py-2 border-none rounded bg-white "
                  >
                    {categories.map((category: any) => (
                      <option key={category._id} value={category._id}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                </FormControl>

                {errors.businessCategory && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.businessCategory.message as string}
                  </p>
                )}
              </FormItem>
            )}
          />

          {/* Email */}
          <Controller
            control={control}
            name="email"
            rules={{
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email",
              },
            }}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="Email" {...field} />
                </FormControl>
                <FormMessage>
                  {errors.email ? (errors.email.message as string) : null}
                </FormMessage>
              </FormItem>
            )}
          />
          {/* Password */}
          <Controller
            control={control}
            name="password"
            rules={{
              required: "Password is required",
              minLength: { value: 6, message: "Min 6 characters" },
            }}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      type={passwordVisible ? "text" : "password"}
                      placeholder="Password"
                      {...field}
                      className="pr-16" // space for toggle button
                    />
                    <button
                      type="button"
                      onClick={() => setPasswordVisible(!passwordVisible)}
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 text-sm cursor-pointer"
                    >
                      {passwordVisible ? <EyeOff /> : <Eye />}
                    </button>
                  </div>
                </FormControl>
                <FormMessage>
                  {errors.password ? (errors.password.message as string) : null}
                </FormMessage>
              </FormItem>
            )}
          />

          {/* Phone */}
          <Controller
            control={control}
            name="phone"
            rules={{
              required: "Phone number is required",
              pattern: {
                // allow 10-15 digits; adjust to your locale rules
                value: /^[0-9]{10,15}$/,
                message: "Phone must be 10–15 digits",
              },
            }}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone</FormLabel>
                <FormControl>
                  <Input type="tel" placeholder="Phone Number" {...field} />
                </FormControl>
                <FormMessage>
                  {errors.phone ? (errors.phone.message as string) : null}
                </FormMessage>
              </FormItem>
            )}
          />
          {/* Website */}
          <Controller
            control={control}
            name="website"
            rules={{ required: "Website is required" }}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Website</FormLabel>
                <FormControl>
                  <Input type="url" placeholder="Website" {...field} />
                </FormControl>
                <FormMessage>
                  {errors.website ? (errors.website.message as string) : null}
                </FormMessage>
              </FormItem>
            )}
          />
          {/* Terms (checkbox) */}
          <div className="flex items-start my-4 text-sm">
            <input type="checkbox" className="mt-1 bg-white" />
            <label className="text-md text-[#3D454E] ml-3 leading-6">
              I have read and agree to Clapbac’s{" "}
              <Link href="/privacy-policy" className="text-[#F05223]">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link href="/privacy-policy" className="text-[#F05223]">
                Privacy Policy
              </Link>
              .
            </label>
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            className="bg-[#E95022] w-full text-white font-bold py-2 rounded-xl"
          >
            Create My Account
          </button>
          {/* Login link */}
          <p className="text-md text-[#3D454E] font-semibold">
            Already have an account?{" "}
            <Link href="/login" className="text-[#E95022] font-medium">
              Log In
            </Link>
          </p>
        </form>
      </Form>
    </div>
  );
}
