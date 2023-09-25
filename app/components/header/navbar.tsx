"use client";
import { signOut, useSession } from "next-auth/react";
import React from "react";
import Avatar from "@mui/material/Avatar";
import Link from "next/link";
import { Button } from "@mui/material";

export default function Navbar() {
  const { data: session } = useSession();
  if (session === undefined) return null;
  return (
    <nav className="">
      <ul className="flex justify-evenly items-center font-bold gap-5">
        {!session?.user ? (
          <>
            <li>
              <Link
                href="/register"
                className="text-white no-underline font-normal"
              >
                Register
              </Link>
            </li>
            <li>
              <Link href="/auth/signin" passHref>
                <Button variant="contained">Login</Button>
              </Link>
            </li>
          </>
        ) : (
          <li className="ml-auto flex gap-2 items-center">
            <>
              <p className="hidden sm:block text-sky-600">
                {session.user.name}
              </p>
              <Avatar
                src={session.user?.image || undefined}
                sx={{ height: 40, width: 40 }}
                alt="user image"
              />
              <button
                className="text-red-300 no-underline bg-inherit cursor-pointer"
                onClick={() => signOut()}
              >
                Sair
              </button>
            </>
          </li>
        )}
      </ul>
    </nav>
  );
}
