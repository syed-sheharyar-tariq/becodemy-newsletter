"use server"

import Subscriber from "@/models/Subscriber"
import { connectDB } from "@/shared/libs/db"

export const getSubscribers = async ({
  newsletterOwnerId,
}: {
  newsletterOwnerId: string
}) => {
  try {
    await connectDB()

    const subscribers = await Subscriber.find({
      newsletterOwnerId,
    })
    return JSON.parse(JSON.stringify(subscribers))
  } catch (error) {
    console.log(error)
  }
}
