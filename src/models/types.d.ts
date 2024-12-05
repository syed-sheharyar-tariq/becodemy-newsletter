type EmailSchema = {
  title: string
  content: string
  newsletterOwnerId: string
  createdAt: Date
  updatedAt: Date
}

type SubscriberSchema = {
  email: string
  newsletterOwnerId: string
  source: string
  status: string
  createdAt: Date
  updatedAt: Date
}
