import Resources from "@/modules/dashboard/elements/Resources"
import { ICONS } from "@/shared/utils/Icons"
import {
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@nextui-org/react"

export default function FloatingToolbar() {
  return (
    <div className="fixed bottom-10 right-10 text-3xl flex gap-4 flex-col">
      <Button
        isIconOnly
        color="primary"
        className="text-xl">
        {ICONS.write}
      </Button>
      <Popover
        placement="top-end"
        backdrop="blur">
        <PopoverTrigger>
          <Button
            isIconOnly
            color="primary"
            className="text-xl">
            {ICONS.resources}
          </Button>
        </PopoverTrigger>
        <PopoverContent>
          <Resources />
        </PopoverContent>
      </Popover>
      <Popover
        placement="top-end"
        showArrow>
        <PopoverTrigger>
          <Button
            isIconOnly
            color="primary"
            className="text-xl">
            {ICONS.help}
          </Button>
        </PopoverTrigger>
        <PopoverContent>
          <Resources onlyHelp={true} />
        </PopoverContent>
      </Popover>
    </div>
  )
}
