import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const users = [
  {
    username: "arabian1423",
    name: "Pete Wells",
    bussinessName: "Arabica Coffee",
    profileImage: "https://example.com/profile.jpg", // Replace with actual image URL
    brandLogo: "https://example.com/arabica-logo.png", // Replace with actual logo URL
    email: "petewells1423@gmail.com",
    category: "Food & Drink",
    date: "21/03/23",
    brand: "Arabica Coffee",
  },
];

export default function Users() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">User Name</TableHead>
          <TableHead>Display Name</TableHead>
          <TableHead>Bussiness Name</TableHead>
          <TableHead className="">Email</TableHead>
          <TableHead className="">Bussiness Category</TableHead>
          <TableHead className="">Join Date</TableHead>
          <TableHead className="">Status</TableHead>
          <TableHead className="">View</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.map((invoice) => (
          <TableRow key={invoice.username}>
            <TableCell className="font-medium">{invoice.username}</TableCell>
            <TableCell>{invoice.name}</TableCell>
            <TableCell>{invoice.bussinessName}</TableCell>
            <TableCell>{invoice.email}</TableCell>
            <TableCell className="">{invoice.category}</TableCell>
            <TableCell className="">{invoice.date}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
