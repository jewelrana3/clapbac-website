import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Eye } from "lucide-react";
import DropDownDashboard from "@/components/share/DropDownDashboard";
import Link from "next/link";
import LogoImage from "@/components/share/customImageHandle/UserImage";
import CompanyImage from "@/components/share/customImageHandle/CompanyImage";

export default function OwnerUsers({ users }: any) {
  return (
    <>
      <DropDownDashboard
        title="Business Owners"
        data={[
          { title: "Active", value: "Active" },
          { title: "Suspended", value: "Suspended" },
          { title: "Banned", value: "Banned" },
        ]}
      />
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
          {users?.map((invoice: any, index: number) => {
            return (
              <TableRow key={index}>
                <TableCell className="font-medium">
                  {invoice?.username}
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <div>
                      {/* <Image
                        src={
                          invoice.image
                            ? process.env.NEXT_PUBLIC_BASE_URL + invoice.image
                            : share
                        }
                        width={40}
                        height={40}
                        alt={`${invoice.firstName}'s profile`}
                        className=" rounded-full object-cover"
                      /> */}
                      <LogoImage item={invoice.image} />
                    </div>
                    <p>{invoice.lastName}</p>
                  </div>
                </TableCell>

                <TableCell className="">
                  <div className="flex items-center gap-2">
                    <div>
                      {/* <Image
                        src={
                          invoice?.company?.logo
                            ? process.env.NEXT_PUBLIC_BASE_URL +
                              invoice?.company?.logo
                            : logo
                        }
                        width={60}
                        height={60}
                        alt={`${invoice.company?.name} logo`}
                        className=" rounded-full object-cover"
                      /> */}
                      <CompanyImage item={invoice?.company?.logo} />
                    </div>

                    <p>{invoice.company?.name}</p>
                  </div>
                </TableCell>
                <TableCell>{invoice.email}</TableCell>
                <TableCell className="">{invoice?.title}</TableCell>
                <TableCell className="">
                  {invoice.createdAt.slice(0, 10)}
                </TableCell>
                <TableCell className="">
                  <Badge
                    className={`w-20 ${
                      invoice.status === "Active"
                        ? "bg-[#C5D92D] text-[#3D454E]"
                        : invoice.status === "Banned"
                          ? "bg-[#000000] text-white"
                          : "bg-[#F05223]"
                    }`}
                  >
                    {invoice.status}
                  </Badge>
                </TableCell>
                <TableCell className="">
                  <Link href={`/dashboard/user-details/${invoice._id}`}>
                    <Eye className="text-[#3D454E] cursor-pointer" />
                  </Link>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </>
  );
}
