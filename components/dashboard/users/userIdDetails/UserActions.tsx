"use client";

import { Textarea } from "@/components/ui/textarea";
import { myFetch } from "@/utils/myFetch";
import { revalidate } from "@/utils/revalidateTags";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";

export function UserActions({ findUser }: any) {
  const router = useRouter();
  const [value, setValue] = useState("");

  const handleDeleteUser = async (id: string) => {
    try {
      const userDelete = await myFetch(`/users/${id}`, {
        method: "DELETE",
      });

      if (userDelete.success) {
        toast.success("User deleted successfully");
        revalidate("users");
        setTimeout(() => {
          history.go(-1);
        }, 1000);
      } else {
        toast.error(userDelete.message || "User delete failed");
      }
    } catch (error) {
      console.error("Delete error:", error);
    }
  };

  const handleUpdateUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);
    const notes = data.get("adminNotes") as string;

    const payload = {
      status: value,
      adminNotes: notes,
    };

    try {
      const userUpdate = await myFetch(`/users/${findUser?._id}`, {
        method: "PATCH",
        body: payload,
      });

      if (userUpdate.success) {
        toast.success("User updated successfully");
        revalidate("users");
        router.refresh();

        history.go(-1);
      } else {
        toast.error("User update failed");
      }
    } catch (error) {
      console.error("Update error:", error);
    }
  };

  return (
    <form onSubmit={handleUpdateUser}>
      {/* user notes */}
      <div className="max-w-2xl p-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Notes About This User:
        </label>

        <div>
          <Textarea
            name="adminNotes"
            className="w-full h-28 p-4 bg-white shadow-sm resize-none border-none rounded-sm"
            placeholder=""
            aria-label="Notes about this user"
          />

          <button
            type="button"
            className="bg-[#F05223] py-2 px-4  rounded font-bold text-white cursor-pointer"
          >
            Update
          </button>
        </div>

        <p className="mt-3 text-sm italic text-gray-500">
          If you feel the user is fake in any way, you can block or delete the
          user from here.
        </p>
      </div>

      {/* user actions */}
      <div className="flex gap-4 ml-4">
        <button
          disabled={findUser?.status === "Active"}
          type="submit"
          value="suspend"
          className={`bg-[#F05223] text-white p-2 rounded-xl font-bold w-24  ${
            findUser?.status === "Active"
              ? "opacity-50 cursor-not-allowed"
              : "cursor-pointer"
          }`}
          onClick={() => setValue("Active")}
        >
          Active
        </button>
        <button
          disabled={findUser?.status === "Suspended"}
          type="submit"
          value="suspend"
          className={`bg-[#F05223] text-white p-2 rounded-xl font-bold w-24  ${
            findUser?.status === "Suspended"
              ? "opacity-50 cursor-not-allowed"
              : "cursor-pointer"
          }`}
          onClick={() => setValue("Suspended")}
        >
          Suspend
        </button>
        <button
          disabled={findUser?.status === "Banned"}
          type="submit"
          value="ban"
          className={`bg-[#F05223] text-white p-2 rounded-xl font-bold w-24  ${
            findUser?.status === "Banned"
              ? "opacity-50 cursor-not-allowed"
              : "cursor-pointer"
          }`}
          onClick={() => setValue("Banned")}
        >
          Ban
        </button>
        <button
          onClick={() => handleDeleteUser(findUser?._id)}
          type="button"
          className="bg-[#000000] text-white p-2 rounded-xl font-bold w-24 cursor-pointer"
        >
          Delete
        </button>
      </div>
    </form>
  );
}
