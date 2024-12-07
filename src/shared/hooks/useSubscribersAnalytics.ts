"use client"

import { subscribersAnalytics } from "@/actions/SubscribersAnalytics"
import { useEffect, useState } from "react"

export interface SubscribersAnalyticsData {
  month: string
  count: number
}

type Last12MonthsAnalytics = {
  last12Months: SubscribersAnalyticsData[]
}
const useSubscribersAnalytics = () => {
  const [subscribersData, setSubscribersData] =
    useState<Last12MonthsAnalytics>()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    SubscribersAnalytics()
  }, [])

  const SubscribersAnalytics = async () => {
    await subscribersAnalytics().then((res: any) => {
      setSubscribersData(res)
      setLoading(false)
    })
  }

  return { subscribersData, loading }
}

export default useSubscribersAnalytics
