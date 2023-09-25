"use client";
import { getProviders, signIn } from "next-auth/react";
import React from "react";
import Image from "next/image";

export default function GithubOAuthButton() {
  const handleGitHubSignIn = async () => {
    const provider = await getProviders();
    signIn(provider?.github.id);
  };
  return (
    <button
      onClick={handleGitHubSignIn}
      className="flex items-center py-3 px-4 w-full bg-gray-800 hover:bg-gray-900 rounded-md cursor-pointer"
    >
      <span>
        <Image
          alt="github icon"
          loading="lazy"
          className="w-6"
          width={24}
          height={24}
          src="https://authjs.dev/img/providers/github-dark.svg"
        />
      </span>
      <span className="flex-grow text-white">GITHUB</span>
    </button>
  );
}
