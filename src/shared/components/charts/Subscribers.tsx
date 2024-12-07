"use client"

import useSubscribersAnalytics, { SubscribersAnalyticsData } from "@/shared/hooks/useSubscribersAnalytics"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts"

export default function Subscribers() {
  const { subscribersData, loading } = useSubscribersAnalytics()

  const data: SubscribersAnalyticsData[] = []

  if (subscribersData) {
    subscribersData.last12Months?.forEach((item) => {
      data.push({
        month: item?.month,
        count: item?.count,
      })
    })
  }
  return (
    <div className="my-5 p-5 border rounded bg-white w-full md:h-[55vh] xl:h-[60vh]">
      <div className="w-full flex">
        <h3 className="font-medium">Active Subscribers</h3>
      </div>
      <div className="flex w-full items-center justify-between">
        <p className="opacity-[.5]">Shows all active subscribers</p>
        <div className="flex items-center">
          <div className="w-2 h-2 rounded-full bg-[#EB4898]" />
          <span className="pl-2 text-sm opacity-[.7]">Subscribers</span>
        </div>
      </div>
      {loading ? (
        <div className="h-[85%] flex items-center justify-center w-full">
          <h5>Loading...</h5>
        </div>
      ) : (
        <ResponsiveContainer
          width="100%"
          height={"85%"}
          className={"mt-5"}>
          <LineChart
            width={500}
            height={200}
            data={data}
            syncId="anyId"
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="count"
              stroke="#EB4898"
              fill="#EB4898"
            />
          </LineChart>
        </ResponsiveContainer>
      )}
    </div>
  )
}
