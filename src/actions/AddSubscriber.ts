"use server"
import Subscribers from "@/models/Subscriber"
import { connectDB } from "@/shared/libs/db"
import { validateEmail } from "@/shared/utils/ZeroBounceAPI"
import { clerkClient } from "@clerk/nextjs/server"

export const subscribe = async ({
  email,
  username,
}: {
  email: string
  username: string
}) => {
  try {
    await connectDB()
    const client = await clerkClient()

    const {
      data: [newsletterOwner],
    } = await client.users.getUserList({ username: [username] })

    if (!newsletterOwner) {
      throw Error("Username is not vaild!")
    }

    // check if subscribers already exists
    const isSubscriberExist = await Subscribers.findOne({
      email,
      newsletterOwnerId: newsletterOwner?.id,
    })

    if (isSubscriberExist) {
      return { error: "Email already exists!" }
    }

    // Validate email
    const validatedResponse = await validateEmail({ email })
    if (validatedResponse.status === "invalid") {
      return { error: "Email not valid!" }
    }

    // Create new subscriber
    const subscriber = await Subscribers.create({
      email,
      newsletterOwnerId: newsletterOwner?.id,
      source: "By Syed Sheharyar Website",
      status: "Subscribed",
    })

    return JSON.parse(JSON.stringify(subscriber))
  } catch (error) {
    console.error(error)
    return { error: "An error occurred while subscribing." }
  }
}
