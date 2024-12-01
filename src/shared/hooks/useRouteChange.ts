import { sideBarActiveItem } from "@/app/configs/constants"
import { useAtom } from "jotai"

export default function useRouteChange() {
  const [ activeRoute, setActiveRoute ] = useAtom(sideBarActiveItem)
  return { activeRoute, setActiveRoute }
}
