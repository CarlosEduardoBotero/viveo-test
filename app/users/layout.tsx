import React from "react";
import UsersFilters from "../components/users-filter";
import UsersPagination from "../components/users-pagination";

export default function UsersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="my-5 md:my-10 px-4 lg:px-14 flex flex-col gap-5 items-center">
      <UsersFilters />
      {children}
      <UsersPagination />
    </div>
  );
}
