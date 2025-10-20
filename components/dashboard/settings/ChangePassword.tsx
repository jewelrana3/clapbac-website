"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import toast from "react-hot-toast";
import { myFetch } from "@/utils/myFetch";

export default function ChangePassword() {
  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

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

    try {
      const res = await myFetch("/auth/change-password", {
        method: "POST",
        body: formData,
      });

      if (res.success) {
        toast.success("Password changed successfully");
        setFormData({
          currentPassword: "",
          newPassword: "",
          confirmPassword: "",
        });
      } else {
        toast.error(res.message || "Password change failed");
      }
    } catch (err: any) {
      toast.error("Something went wrong");
    }
  };

  return (
    <div
      className="flex items-center justify-center bg-[#F6F6F6] px-4 mb-5"
      style={{ height: "calc(100vh - 120px)" }}
    >
      <div className="min-w-md w-[50%] mx-auto bg-white p-8 rounded-md shadow-md space-y-6">
        <h2 className="text-center text-2xl font-semibold">Change Password</h2>

        <form onSubmit={handleSubmit}>
          {/* Old Password */}
          <div>
            <Label className="block text-sm  mb-1">Old Password</Label>
            <div className="relative">
              <Input
                type={showPassword.currentPassword ? "text" : "password"}
                name="oldPassword"
                placeholder="Enter Old Password"
                value={formData.currentPassword}
                onChange={(e) =>
                  setFormData({ ...formData, currentPassword: e.target.value })
                }
                className="w-full px-4 py-2 rounded border bg-orange-50 focus:outline-none"
              />
              <button
                type="button"
                onClick={() => toggleVisibility("currentPassword")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
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
                value={formData.newPassword}
                onChange={(e) =>
                  setFormData({ ...formData, newPassword: e.target.value })
                }
                className="w-full px-4 py-2 rounded border bg-orange-50 focus:outline-none"
              />
              <button
                type="button"
                onClick={() => toggleVisibility("newPassword")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
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
                value={formData.confirmPassword}
                onChange={(e) =>
                  setFormData({ ...formData, confirmPassword: e.target.value })
                }
                className="w-full px-4 py-2 rounded border bg-orange-50 focus:outline-none"
              />
              <button
                type="button"
                onClick={() => toggleVisibility("confirmPassword")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
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
          <button className="w-full bg-yellow-400 text-black font-semibold py-2 rounded cursor-pointer mt-7">
            Confirm
          </button>
        </form>
      </div>
    </div>
  );
}
