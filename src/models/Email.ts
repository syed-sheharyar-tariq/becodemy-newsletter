import mongoose, { Schema, Model } from "mongoose"

const emailSchema = new Schema<EmailSchema, Model<EmailSchema>>(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    newsletterOwnerId: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
)

const Emails: Model<EmailSchema> =
  mongoose.models.Emails || mongoose.model<EmailSchema>("Emails", emailSchema)

export default Emails
