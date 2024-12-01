"use client"
import DashboardOverview from "@/shared/components/cards/DashboardOverview"
import Subscribers from "@/shared/components/charts/Subscribers"
import { useUser } from "@clerk/nextjs"
import Resources from "./Resources"
import FloatingToolbar from "@/shared/widgets/toolbar/FloatingToolbar"

export default function Main() {
  const { user } = useUser()

  return (
    <div className="p-5 py-10 w-full h-screen bg-[#F9FAFB]">
      <h1 className="text-2xl text-surface-900 font-medium">
        Hi, {user?.fullName} 👋
      </h1>
      <p className="opacity-[.7] text-sm pt-2">
        Here&apos;s how your publication is doing
      </p>
      <div className="w-full flex">
        <div className="w-full md:w-[65%] min-h-[88vh] pr-5">
          <br />
          <DashboardOverview />
          <Subscribers />
        </div>
        <Resources hidden={true} />
      </div>
      <FloatingToolbar/>
    </div>
  )
}
