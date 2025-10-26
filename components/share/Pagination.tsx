"use client";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useRouter, useSearchParams } from "next/navigation";

export default function TablePagination({ total }: { total?: any }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const activePage = searchParams.get("page") || "1";
  console.log(activePage);

  let pageCalculate = 1;
  if (total > 10) {
    pageCalculate = total / 10;
  } else {
    pageCalculate = 1;
  }

  const length = Math.ceil(pageCalculate);

  const goToPage = (page: number) => {
    if (page < 1 || page > length) {
      return;
    }
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", page.toString());
    router.push(`?${params.toString()}`);
  };

  const pageNumbers = [];
  for (let i = 1; i <= length; i++) {
    pageNumbers.push(i);
  }

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            className={`${
              length === 1
                ? "text-[#8A8A8A] hover:text-[#8A8A8A] cursor-default"
                : ""
            }`}
            href="#"
            onClick={(e) => {
              e.preventDefault();

              goToPage(Number(activePage) - 1);
            }}
          />
        </PaginationItem>

        {pageNumbers?.map((page) => (
          <PaginationItem key={page}>
            <PaginationLink
              className={`${
                Number(activePage) === page ? "bg-[#F05223] text-white" : ""
              }`}
              href="#"
              isActive={page === Number(activePage)}
              onClick={(e) => {
                e.preventDefault();
                goToPage(page);
              }}
            >
              {page}
            </PaginationLink>
          </PaginationItem>
        ))}

        <PaginationItem>
          <PaginationNext
            href="#"
            onClick={(e) => {
              e.preventDefault();
              goToPage(Number(activePage) + 1);
            }}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
