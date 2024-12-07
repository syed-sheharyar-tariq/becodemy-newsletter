"use server"

import Subscriber from "@/models/Subscriber"
import { generateAnalyticsData } from "@/shared/utils/AnalyticsGenerator"

export const subscribersAnalytics = async () => {
  try {
    const subscribers = await generateAnalyticsData(Subscriber)
    return subscribers
  } catch (error) {
    console.log(error)
  }
}
