"use server"

import Email from "@/models/Email"
import { connectDB } from "@/shared/libs/db"

export const getEmails = async ({
  newsletterOwnerId,
}: {
  newsletterOwnerId: string
}) => {
  try {
    await connectDB()
    const emails = await Email.find({
      newsletterOwnerId,
    })
    return JSON.parse(JSON.stringify(emails))
  } catch (error) {
    console.log(error)
  }
}
