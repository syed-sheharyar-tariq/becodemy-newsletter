"use server"

import { connectDB } from "@/shared/libs/db"
import Email from "@/models/Email"

export const GetEmailDetails = async ({
  title,
  newsletterOwnerId,
}: {
  title: string
  newsletterOwnerId: string
}) => {
  try {
    await connectDB()
    const email = await Email.findOne({
      title,
      newsletterOwnerId,
    })
    return JSON.parse(JSON.stringify(email))
  } catch (error) {
    console.log(error)
  }
}