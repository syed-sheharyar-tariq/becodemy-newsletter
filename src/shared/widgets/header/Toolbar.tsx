"use client"
import { Button } from "@nextui-org/react"
import Link from "next/link"
import Image from "next/image"
import { useUser,
  //  UserButton
   } from "@clerk/nextjs"

export default function Toolbar() {
  const { user } = useUser()
  return (
    <>
      <Button
        color="primary"
        className="text-lg">
        Start Trial
      </Button>
      {user ? (
        <>
          <Link href={"/dashboard"}>
            <Image
              src={user?.imageUrl}
              alt=""
              width={40}
              height={40}
              className="rounded-full"
            />
          </Link>
          {/* <UserButton/> */}
        </>
      ) : (
          <Link href={"/sign-in"}>Login</Link>
      )}
    </>
  )
}
