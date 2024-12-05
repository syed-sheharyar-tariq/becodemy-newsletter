import mongoose from "mongoose"

export const connectDB = async () => {
  try {
    if (mongoose.connection.readyState !== 0) {
      await mongoose.disconnect()
    }

    if (!process.env.DB_CONNECTION_STRING) {
      throw Error("Missing DB Connection String")
    }
    await mongoose
      .connect(process.env.DB_CONNECTION_STRING)
      .then(() => {
        console.log("Connected to DB")
      })
      .catch((e) => console.log(e))
  } catch (error) {
    console.log(error)
  }
}
