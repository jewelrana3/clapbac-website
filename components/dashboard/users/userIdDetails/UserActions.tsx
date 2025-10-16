"use client";

import { Textarea } from "@/components/ui/textarea";
import { myFetch } from "@/utils/myFetch";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";

export function UserActions({ findUser }: any) {
  const router = useRouter();
  const [value, setValue] = useState("");

  const handleDeleteUser = async (id: string) => {
    try {
      const userDelete = await myFetch(`/users/${findUser?._id}`, {
        method: "DELETE",
      });

      console.log(userDelete);

      if (userDelete.success) {
        toast.success("User deleted successfully");

        setTimeout(() => {
          history.go(-1);
        }, 1000);
      } else {
        toast.error(userDelete.message || "User delete failed");
      }
    } catch (error) {
      console.log("Delete error:", error);
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

        setTimeout(() => {
          history.go(-1);
        }, 1000);
      } else {
        toast.error(userUpdate.message || "User update failed");
      }
    } catch (error) {
      console.log("Update error:", error);
    }
  };

  return (
    <form onSubmit={handleUpdateUser}>
      {/* user notes */}
      <div className="max-w-2xl p-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Notes About This User:
        </label>

        <Textarea
          name="adminNotes"
          className="w-full h-28 p-4 bg-white shadow-sm resize-none border-none rounded-sm"
          placeholder=""
          aria-label="Notes about this user"
        />

        <p className="mt-3 text-sm italic text-gray-500">
          If you feel the user is fake in any way, you can block or delete the
          user from here.
        </p>
      </div>

      {/* user actions */}
      <div className="flex gap-4 ml-4">
        <button
          disabled={findUser?.status === "Suspended"}
          type="submit"
          name="action"
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
          name="action"
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
