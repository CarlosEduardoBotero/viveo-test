import React from "react";
import { UserCardProps } from "./user-card.interface";
import Image from "next/image";

export default function UserCard({
  gender,
  name,
  nat,
  email,
  city,
  picture,
  state,
}: UserCardProps) {
  return (
    <div className="w-72 sm:w-80 bg-white rounded-xl p-4 flex gap-4 flex-col">
      <div className="flex items-center justify-between">
        <Image
          src={picture}
          alt="UserImage"
          className="rounded-[50%] w-16 object-cover"
          height="64"
          width="64"
        />
        <Image
          alt={`${nat} flag`}
          src={`https://flagsapi.com/${nat}/flat/64.png`}
          className="w-16"
          height="64"
          width="64"
        />
      </div>
      <div className="flex flex-col justify-between min-w-0 gap-3">
        <div>
          <p className="truncate text-lg border-b border-gray-200">
            {name.first + " " + name.last}
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="truncate text-gray-400">
            {gender} {gender === "male" ? "🧔‍♂️" : "👩"}
          </p>
          <p className="truncate text-gray-400">
            {city}, {state}
          </p>
          <p className="truncate text-gray-400">{email}</p>
        </div>
      </div>
    </div>
  );
}
