import Users from "@/components/dashboard/users/Users";
import { myFetch } from "@/utils/myFetch";
import React from "react";

export default async function page({
  searchParams,
}: {
  searchParams: { status: string };
}) {
  const { status } = await searchParams;

  const res = await myFetch(`${status ? `/users?status=${status}` : `/users`}`);

  return (
    <div>
      <Users users={res?.data} />
    </div>
  );
}
