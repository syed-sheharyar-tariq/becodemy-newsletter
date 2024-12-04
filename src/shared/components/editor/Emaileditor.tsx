"use client"
import EmailEditor, { EditorRef, EmailEditorProps } from "react-email-editor"
import { DefaultJsonData } from "@/assets/mails/default"
import { useClerk } from "@clerk/nextjs"
import { useRouter } from "next/navigation"
import { useEffect, useRef, useState } from "react"
import { Button } from "@nextui-org/react"
import { toast } from "sonner"
import { saveEmail } from "@/actions/SaveEmail"
import { GetEmailDetails } from "@/actions/GetEmailDetails"

export default function Emaileditor({
  subjectTitle,
}: {
  subjectTitle: string
}) {
  const [loading, setLoading] = useState(true)
  const [jsonData, setJsonData] = useState<any | null>(DefaultJsonData)
  const { user } = useClerk()
  const emailEditorRef = useRef<EditorRef>(null)
  const history = useRouter()

  useEffect(() => {
    getEmailDetails()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user])

  const exportHtml = () => {
    const unlayer = emailEditorRef.current?.editor

    unlayer?.exportHtml(async (data) => {
      const { design, html } = data
      setJsonData(design)
    })
  }

  const onReady: EmailEditorProps["onReady"] = () => {
    const unlayer = emailEditorRef.current?.editor
    unlayer?.loadDesign(jsonData)
  }

  const saveDraft = async () => {
    if (!user) return
    const unlayer = emailEditorRef.current?.editor

    unlayer?.exportHtml(async (data) => {
      const { design } = data
      await saveEmail({
        title: subjectTitle,
        content: JSON.stringify(design),
        newsletterOwnerId: user.id,
      }).then((res) => {
        toast.success(res?.message)
        history.push("/dashboard/write")
      })
    })
  }

  const getEmailDetails = async () => {
    if (!user) return
    await GetEmailDetails({
      title: subjectTitle,
      newsletterOwnerId: user.id,
    }).then((res) => {
      if (res) {
        setJsonData(JSON.parse(res?.content))
      }
      setLoading(false)
    })
  }
  return (
    <>
      {!loading && (
        <div className="w-full h-[90vh] relative">
          <EmailEditor
            ref={emailEditorRef}
            minHeight="80vh"
            onReady={onReady}
          />
          <div className="absolute bottom-0 flex items-center justify-end gap-4 right-0 w-full border-t p-3">
            <Button
              className="bg-transparent cursor-pointer flex items-center gap-1 text-black border border-[#00000048] text-lg rounded-lg"
              onClick={saveDraft}>
              <span className="opacity-[.7]">Save Draft</span>
            </Button>
            <Button
              className="bg-[#000] text-white cursor-pointer flex items-center gap-1 border text-lg rounded-lg"
              onClick={exportHtml}>
              <span>Send</span>
            </Button>
          </div>
        </div>
      )}
    </>
  )
}
