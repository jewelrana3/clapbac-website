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
import { useSearchParams } from "next/navigation";

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

export default function SignupPageUser() {
  const searchParams = useSearchParams();
  const [passwordVisible, setPasswordVisible] = useState(false);

  const form = useForm<FormValues>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
  });

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = form;

  const onSubmit = async (data: FormValues) => {
    // const email = data.email;

    try {
      const res = await myFetch("/users/create-user", {
        method: "POST",
        body: data,
      });

      if (res.success) {
        toast.success("Signup User successful!");
        form.reset();
        const currentParams = new URLSearchParams(searchParams);
        currentParams.set("email", res?.data?.email);
        window.location.replace(`/verify-otp?${currentParams}`);
      } else {
        toast.error(res.message || "Signup User failed.");
      }
    } catch (err: any) {
      toast.error("Error during sign up");
      console.error(err);
    }
  };

  return (
    <div className="max-w-xl mx-auto py-12 px-8 md:px-16 shadow-xl bg-[#E8E8E8] rounded my-10 mt-0 border-r-2">
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
              minLength: { value: 8, message: "Min 8 characters" },
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

          {/* Terms (checkbox) */}
          <div className="flex items-start my-4 text-sm">
            <input type="checkbox" className="mt-1 bg-white" />
            <label className="text-md text-[#3D454E] ml-3 leading-6">
              I have read and agree to Clapbac’s{" "}
              <a
                target="_blank"
                href="/privacy-policy"
                rel="noopener noreferrer"
                className="text-[#F05223]"
              >
                Terms of Service
              </a>
              and{" "}
              <a
                target="_blank"
                href="/privacy-policy"
                rel="noopener noreferrer"
                className="text-[#F05223]"
              >
                Privacy Policy
              </a>
              .
            </label>
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            className="bg-[#E95022] w-full text-white font-bold py-2 rounded-xl cursor-pointer"
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
