import React from "react";
import UserCardSkeleton from "../components/user-card/skeleton";

export default function Loading() {
  const SKELETONQUANTITY = Array(10).fill(0);
  return (
    <div className="flex flex-wrap gap-4 justify-center items-center">
      {SKELETONQUANTITY.map((_, i) => (
        <UserCardSkeleton key={i} />
      ))}
    </div>
  );
}
