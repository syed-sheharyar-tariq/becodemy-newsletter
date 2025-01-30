"use server"

import Emails from "@/models/Email"
import { connectDB } from "@/shared/libs/db"

export const deleteEmail = async ({ emailId }: { emailId: string }) => {
  try {
    await connectDB()
    await Emails.findByIdAndDelete(emailId)
    return { message: "Email Deleted Successfully!" }
  } catch {
    return { error: "An error occurred while saving the email." }
  }
}
