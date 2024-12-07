"use client"
import { ICONS } from "@/shared/utils/Icons"
import { useUser } from "@clerk/nextjs"
import DashboardItems from "./DashboardItems"
import UserPlan from "./UserPlan"

export default function DashboardSidebar() {
  const { user } = useUser()
  return (
    <div className="p-2">
      <div className="p-2 flex items-center bg-[#F5F5F5] rounded">
        <span className="text-2xl">{ICONS.home}</span>
        <h5 className="pl-2 pt-1 capitalize">{user?.username} Newsletter</h5>
      </div>
      <div>
        <DashboardItems />
        <UserPlan />
        <DashboardItems bottomContent={true} />
      </div>
    </div>
  )
}
