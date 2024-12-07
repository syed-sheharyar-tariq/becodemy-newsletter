"use client"
import useSubscribersAnalytics from "@/shared/hooks/useSubscribersAnalytics"
import { ICONS } from "@/shared/utils/Icons"

export default function DashboardOverview() {
  const { subscribersData, loading } = useSubscribersAnalytics()

  const lastMonthSubscribers =
    !loading &&
    subscribersData?.last12Months[subscribersData?.last12Months?.length - 1]

  const previousLastMonthSubscribers =
    !loading &&
    subscribersData?.last12Months[subscribersData?.last12Months?.length - 2]

  let comparePercentage = 0

  if (
    lastMonthSubscribers &&
    previousLastMonthSubscribers &&
    previousLastMonthSubscribers.count > 0
  ) {
    comparePercentage =
      ((lastMonthSubscribers.count - previousLastMonthSubscribers.count) /
        previousLastMonthSubscribers.count) *
      100
  } else {
    comparePercentage = 100
  }

  return (
    <div className="w-full xl:py-4 flex bg-white border flex-col md:flex-row rounded">
      {/* subscribers */}
      <div className="w-full md:w-[33.33%] border-b md:border-r p-5 text-lg">
        <h5 className="text-lg">Subscribers</h5>
        <div className="w-full flex items-center justify-between">
          <span className="font-medium pt-2">
            {loading
              ? "..."
              : lastMonthSubscribers && lastMonthSubscribers.count}
          </span>
          <div className="h-[30px] flex p-2 items-center bg-[#DCFCE6] rounded-full">
            <span className="text-[#21C55D]">{ICONS.topArrow}</span>
            <span className="text-sm pl-1">{comparePercentage}%</span>
          </div>
        </div>
        <small className="block text-sm opacity-[.7] pt-2">
          from 0 (last 4 weeks)
        </small>
      </div>
      {/* Open Rate */}
      <div className="w-full md:w-[33.33%] border-b md:border-r p-5 text-lg">
        <h5 className="text-lg">Open Rate</h5>
        <div className="w-full flex items-center justify-between">
          <span className="font-medium pt-2">0</span>
          <div className="h-[30px] flex p-3 items-center bg-[#F3F4F6] rounded-full">
            <span className="text-xl">-</span>
            <span className="text-sm pl-1">0%</span>
          </div>
        </div>
        <small className="block text-sm opacity-[.7] pt-2">
          from 0 (last 4 weeks)
        </small>
      </div>
      {/* Click Rate */}
      <div className="w-full md:w-[33.33%] md:border-r p-5 text-lg">
        <h5 className="text-lg">Click Rate</h5>
        <div className="w-full flex items-center justify-between">
          <span className="font-medium pt-2">0</span>
          <div className="h-[30px] flex p-3 items-center bg-[#F3F4F6] rounded-full">
            <span className="text-xl">-</span>
            <span className="text-sm pl-1">0%</span>
          </div>
        </div>
        <small className="block text-sm opacity-[.7] pt-2">
          from 0 (last 4 weeks)
        </small>
      </div>
    </div>
  )
}
