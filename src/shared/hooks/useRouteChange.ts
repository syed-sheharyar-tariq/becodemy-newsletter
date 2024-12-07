import { sideBarActiveItem } from "@/app/configs/constants"
import { useAtom } from "jotai"

const useRouteChange = () => {
  const [ activeRoute, setActiveRoute ] = useAtom(sideBarActiveItem)
  return { activeRoute, setActiveRoute }
}

export default useRouteChange