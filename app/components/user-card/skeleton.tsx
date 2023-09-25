import React from "react";
import { Skeleton } from "@mui/material";

export default async function UserCardSkeleton() {
  return (
    <div className="w-72 sm:w-80 bg-white rounded-xl p-4 flex gap-4 flex-col">
      <div className="flex items-center justify-between">
        <Skeleton variant="circular" height={64} width={64} />
        <Skeleton variant="rectangular" height={42} width={64} />
      </div>
      <div className="flex flex-col justify-between min-w-0 gap-3">
        <div className="border-b border-gray-200">
          <Skeleton variant="text" sx={{ fontSize: 26 }} />
        </div>
        <div className="flex flex-col gap-2">
          <Skeleton variant="text" />
          <Skeleton variant="text" />
          <Skeleton variant="text" />
        </div>
      </div>
    </div>
  );
}
