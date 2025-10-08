import UserDetails from "@/components/dashboard/users/UserDetails";
import React from "react";

export default function id({ params }: any) {
  const { id } = params;
  console.log(id);
  return (
    <div>
      <UserDetails />
    </div>
  );
}
