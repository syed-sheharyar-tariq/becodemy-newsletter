"use server"

import Emails from "@/models/Email"
import { connectDB } from "@/shared/libs/db"

export const saveEmail = async ({
  title,
  content,
  newsletterOwnerId,
}: {
  title: string
  content: string
  newsletterOwnerId: string
}) => {
  try {
    await connectDB()
    const email = await Emails.findOne({
      title,
      newsletterOwnerId,
    })

    if (email) {
      await Emails.findByIdAndUpdate(email._id, {
        content,
      })
      return { message: "Email updated successfully!" }
    } else {
      await Emails.create({
        title,
        content,
        newsletterOwnerId,
      })
      return { message: "Email saved successfully!" }
    }
  } catch (error) {
    console.log(error)
  }
}
