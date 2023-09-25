"use client";
import { Pagination } from "@mui/material";
import React, { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { updateQueryParams } from "@/app/utils/updateQueryParams";

export default function UsersPagination() {
  const searchParams = useSearchParams();
  const pageQuery = searchParams.get("page");
  const [paginationPage, setpaginationPage] = useState(Number(pageQuery) || 1);
  const router = useRouter();

  const handleChangePagination = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setpaginationPage(value);
    const updatedQueryParams = updateQueryParams(
      searchParams.entries(),
      "nat",
      value.toString() as string
    );
    router.push(`/users?${updatedQueryParams}`);
  };

  return (
    <Pagination
      count={10}
      page={paginationPage}
      onChange={handleChangePagination}
    />
  );
}
