import { useState, type FormEvent } from "react"
import { Button } from "@/components/ui/button"

const endpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT?.trim() ?? ""
const inputClassName = "w-full rounded border border-line bg-[var(--form-background)] px-4 py-3 text-base text-foreground outline-none transition-[border-color,box-shadow] duration-300 placeholder:text-muted focus:border-foreground focus:shadow-[0_0_0_2px_var(--shadow)]"

type SubmissionStatus = { type: "success" | "error"; message: string } | null

export function ContactForm({ onSent }: { onSent: () => void }) {
  const [status, setStatus] = useState<SubmissionStatus>(null)
  const [sending, setSending] = useState(false)

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget

    if (!form.checkValidity()) {
      form.reportValidity()
      return
    }

    if (!endpoint || endpoint.includes("your-form-id")) {
      setStatus({ type: "error", message: "Contact form setup is pending." })
      return
    }

    const data = Object.fromEntries(new FormData(form))
    if (data.website) return

    setSending(true)
    setStatus(null)

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      })
      if (!response.ok) throw new Error("Submission failed")

      form.reset()
      setStatus({ type: "success", message: "Message sent. Thank you." })
      window.setTimeout(onSent, 1200)
    } catch {
      setStatus({ type: "error", message: "Message could not be sent. Please try again." })
    } finally {
      setSending(false)
    }
  }

  return (
    <form onSubmit={submit}>
      <div className="relative mb-6">
        <label htmlFor="name" className="mb-2 block text-sm font-medium text-subtle">Name</label>
        <input name="name" minLength={2} maxLength={80} className={inputClassName} id="name" placeholder="Please enter your name" required />
      </div>
      <div className="relative mb-6">
        <label htmlFor="email" className="mb-2 block text-sm font-medium text-subtle">Email</label>
        <input name="email" type="email" maxLength={254} className={inputClassName} id="email" placeholder="Please enter a valid email address" required />
      </div>
      <div className="relative mb-6">
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-subtle">Message</label>
        <textarea name="message" minLength={10} maxLength={2000} className={`${inputClassName} min-h-25 resize-y`} id="message" rows={5} placeholder="Please enter your message" required />
      </div>

      <div className="sr-only" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input name="website" id="website" tabIndex={-1} autoComplete="off" />
      </div>

      <Button type="submit" disabled={sending} className="group mt-4 w-full rounded-[.75em] bg-black p-0 text-[17px] font-bold shadow-[0_0_10px_var(--shadow)]">
        <span className="relative block w-full -translate-y-[.2em] rounded-[.75em] border-2 border-black bg-[#e8e8e8] px-6 py-3 text-black transition-transform duration-100 group-hover:-translate-y-[.33em] group-active:translate-y-0">
          {sending ? "Sending..." : "Send Message"}
        </span>
      </Button>

      {status && (
        <div
          aria-live="polite"
          className={`mt-4 animate-[alert-down_300ms_ease-out] rounded px-4 py-3 text-sm ${
            status.type === "success"
              ? "border border-green-500/40 bg-green-500/15 text-green-400"
              : "border border-rose-500/40 bg-rose-500/15 text-rose-400"
          }`}
        >
          {status.message}
        </div>
      )}
    </form>
  )
}

