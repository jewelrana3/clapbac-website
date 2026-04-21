"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import toast from "react-hot-toast";
import { myFetch } from "@/utils/myFetch";

export default function ChangePassword() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState({
    currentPassword: false,
    newPassword: false,
    confirmPassword: false,
  });

  const toggleVisibility = (field: keyof typeof showPassword) => {
    setShowPassword((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.loading("Submitting...", { id: "change-password" });

    const formData = new FormData(e.currentTarget);
    const currentPassword = formData.get("currentPassword") as string;
    const newPassword = formData.get("newPassword") as string;
    const confirmPassword = formData.get("confirmPassword") as string;

    if (newPassword !== confirmPassword) {
      toast.error("New password and confirm password do not matched", {
        id: "change-password",
      });
      return;
    }
    
    try {
      setIsSubmitting(true);
      const res = await myFetch("/auth/change-password", {
        method: "POST",
        body: {
          currentPassword,
          newPassword,
          confirmPassword,
        },
      });

      if (res.success) {
        toast.success("Password changed successfully", {
          id: "change-password",
        });
        // reset the form
        (e.target as HTMLFormElement).reset();
      } else {
        toast.error(res.message || "Password change failed", {
          id: "change-password",
        });
      }
    } catch (err) {
      toast.error("Something went wrong", { id: "change-password" });
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-[#F6F6F6] p-4">
      <div className="w-full md:max-w-lg mx-auto bg-white p-6 md:p-8 rounded-md shadow-md space-y-6">
        <h2 className="text-center text-2xl font-semibold">Change Password</h2>

        <form onSubmit={handleSubmit}>
          {/* Old Password */}
          <div>
            <Label className="block text-sm  mb-1">Current Password</Label>
            <div className="relative">
              <Input
                type={showPassword.currentPassword ? "text" : "password"}
                name="currentPassword"
                placeholder="Enter Old Password"
                className="w-full px-4 py-2 rounded border  focus:outline-none"
                required
              />
              <button
                type="button"
                onClick={() => toggleVisibility("currentPassword")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer"
              >
                {showPassword.currentPassword ? (
                  <Eye className="w-5 h-5" />
                ) : (
                  <EyeOff className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>

          {/* New Password */}
          <div className="my-4">
            <Label className="block text-sm  mb-1">New Password</Label>
            <div className="relative">
              <Input
                type={showPassword.newPassword ? "text" : "password"}
                name="newPassword"
                placeholder="Enter New Password"
                className="w-full px-4 py-2 rounded border  focus:outline-none"
                required
              />
              <button
                type="button"
                onClick={() => toggleVisibility("newPassword")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer"
              >
                {showPassword.newPassword ? (
                  <Eye className="w-5 h-5" />
                ) : (
                  <EyeOff className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>

          {/* Confirm New Password */}
          <div className="my-4">
            <Label className="block text-sm  mb-1">Confirm New Password</Label>
            <div className="relative">
              <Input
                type={showPassword.confirmPassword ? "text" : "password"}
                name="confirmPassword"
                placeholder="Confirm New Password"
                className="w-full px-4 py-2 rounded border  focus:outline-none "
                required
              />
              <button
                type="button"
                onClick={() => toggleVisibility("confirmPassword")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer"
              >
                {showPassword.confirmPassword ? (
                  <Eye className="w-5 h-5" />
                ) : (
                  <EyeOff className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>

          {/* Confirm Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#E95022] text-white font-semibold py-2 rounded mt-7 cursor-pointer disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Submitting..." : "Confirm"}
          </button>
        </form>
      </div>
    </div>
  );
}
