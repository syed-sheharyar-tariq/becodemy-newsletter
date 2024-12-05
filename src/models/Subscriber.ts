import mongoose, { Schema, Model } from "mongoose"

const subscriberSchema = new Schema<SubscriberSchema, Model<SubscriberSchema>>(
  {
    email: {
      type: String,
      required: true,
    },
    newsletterOwnerId: {
      type: String,
      required: true,
    },
    source: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
)

const Subscribers: Model<SubscriberSchema> =
  mongoose.models.Subscribers ||
  mongoose.model<SubscriberSchema>("Subscribers", subscriberSchema)

export default Subscribers
