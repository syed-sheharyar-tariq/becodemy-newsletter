import { ICONS } from "@/shared/utils/icons"
import { Button } from "@nextui-org/react"
import Link from "next/link"
import { useState } from "react"
import { useUser } from "@clerk/nextjs"

export default function Resources({ hidden, onlyHelp }: { hidden?: boolean, onlyHelp?: boolean }) {
  const { user } = useUser()
  const [copied, setCopied] = useState(false)

  const handleCopyClick = () => {
    const smallText = document.querySelector(".copy-text") as HTMLElement
    if (smallText) {
      const textToCopy = smallText.innerText
      navigator.clipboard.writeText(textToCopy).then(() => {
        setCopied(true)
        // toast.success("Copied")
        setTimeout(() => {
          setCopied(false)
        }, 2000)
      })
    }
  }
  return (
    <div className={`p-5 ${hidden ? "hidden md:block w-[35%]" : ""}`}>
      {/* resources */}
      {!onlyHelp && <div>
        <h5 className="text-xl font-medium">Resources</h5>
        <div className="w-full bg-white border rounded p-5 my-3">
          {/* home page url */}
          <div>
            <h4 className="font-medium">Home page</h4>
            <div className="w-full px-2 my-1 h-[38px] bg-transparent border rounded-lg relative flex items-center cursor-pointer">
              <small
                className={`w-[70%] text-sm overflow-hidden overflow-ellipsis whitespace-nowrap copy-text ${
                  copied ? "bg-blue-200" : "bg-transparent"
                }`}>
                {process.env.NEXT_PUBLIC_WEBSITE_URL}/subscribe?username=
                {user?.username}
              </small>
              <Button
                startContent={!copied && ICONS.copy}
                endContent={copied && ICONS.right}
                radius="none"
                color={copied ? "success" : "default"}
                className="absolute h-[38px] w-[90px] rounded-r-lg right-0 flex items-center justify-center"
                onClick={handleCopyClick}>
                <span className="pl-1">copy</span>
              </Button>
            </div>
          </div>
        </div>
      </div>}

      {/* tutorials */}
      {!onlyHelp && <div className="w-full bg-white border rounded p-5 my-3">
        <h5 className="font-medium">Tutorials</h5>
        <p className="text-sm opacity-[.7]">
          Learn how to get started on becodemy and utilize all our features,
          directly from the becodemy team.
        </p>
        <br />
        <Button className="bg-[#FBCFE8] text-[#831743] rounded-lg h-[35px] flex items-center">
          Tutorials <span>{ICONS.link}</span>
        </Button>
      </div>}

      {/* Need help? */}
      <div className="w-full bg-white border rounded p-5 my-3">
        <h5 className="font-medium">Need help?</h5>
        <Link href={"/"}>
          <div className="w-max px-3 my-2 h-[33px] bg-transparent border rounded-lg flex items-center">
            <span className="text-sm">Knowledge base</span>
            <span className="ml-1">{ICONS.link}</span>
          </div>
        </Link>
        <Link href={"/"}>
          <div className="w-max px-3 my-2 h-[33px] bg-transparent border rounded-lg flex items-center">
            <span className="text-sm">API Documentation</span>
            <span className="ml-1">{ICONS.link}</span>
          </div>
        </Link>
        <Link href={"/"}>
          <div className="w-max px-3 my-2 h-[33px] bg-transparent border rounded-lg flex items-center">
            <span className="text-sm">Blog</span>
            <span className="ml-1">{ICONS.link}</span>
          </div>
        </Link>
        <Link href={"/"}>
          <div className="w-max px-3 my-2 h-[33px] bg-transparent border rounded-lg flex items-center">
            <span className="text-sm">FAQ</span>
            <span className="ml-1">{ICONS.link}</span>
          </div>
        </Link>
      </div>
    </div>
  )
}
