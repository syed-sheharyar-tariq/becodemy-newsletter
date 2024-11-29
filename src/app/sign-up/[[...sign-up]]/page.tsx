import { SignUp } from "@clerk/nextjs"

export default function Page() {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <SignUp signInUrl="/sign-in" />
    </div>
  )
}
