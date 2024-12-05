"use server"

import Emails from "@/models/Email"
import { connectDB } from "@/shared/libs/db"

export const getEmails = async ({
  newsletterOwnerId,
}: {
  newsletterOwnerId: string
}) => {
  try {
    await connectDB()
    const emails = await Emails.find({
      newsletterOwnerId,
    })
    return JSON.parse(JSON.stringify(emails))
  } catch (error) {
    console.log(error)
  }
}
