import { getSubscribers } from "@/actions/GetSubscribers"
import { useClerk } from "@clerk/nextjs"
import { useState, useEffect } from "react"

const useSubscribersData = () => {
  const [data, setData] = useState<subscribersDataTypes[]>([])
  const [loading, setLoading] = useState(true)
  const { user } = useClerk()

  useEffect(() => {
    GetSubscribers()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user])

  const GetSubscribers = async () => {
    if (!user) return
    await getSubscribers({ newsletterOwnerId: user.id })
      .then((res) => {
        setData(res)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }

  return { data, loading }
}

export default useSubscribersData
