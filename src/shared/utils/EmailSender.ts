"use server"
import AWS from "aws-sdk"
import nodemailer from "nodemailer"

interface Props {
  userEmail: string[]
  subject: string
  content: string
}

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_KEY,
  region: "ap-south-1",
})

AWS.config.getCredentials((err) => {
  if (err) console.log(err.stack)
})

const ses = new AWS.SES({ apiVersion: "2010-12-01" })
const adminMail = "syedsheharyarprofessional@gmail.com"

// Create a nodemailer transporter using the SES configuration
const transporter = nodemailer.createTransport({
  SES: ses,
})

export const sendEmail = async ({ userEmail, subject, content }: Props) => {
  try {
    const response = transporter.sendMail({
      from: adminMail,
      to: userEmail,
      subject,
      html: content,
    })

    return response
  } catch (err) {
    console.log(err)
    throw err
  }
}
