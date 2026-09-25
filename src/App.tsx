import { useEffect, useState } from "react"
import type { IconType } from "react-icons"
import { FaLinkedin } from "react-icons/fa"
import { FiArrowUpRight } from "react-icons/fi"
import { SiFacebook, SiGithub, SiX } from "react-icons/si"
import { ContactForm } from "@/components/ContactForm"
import { ExperienceTree } from "@/components/ExperienceTree"
import { Header } from "@/components/Header"
import { Modal } from "@/components/Modal"
import { Profile } from "@/components/Profile"
import { Projects } from "@/components/Projects"
import { Role } from "@/components/Role"
import { Stars } from "@/components/Stars"
import { Technologies } from "@/components/Technologies"

const socialProfiles: { name: string; handle: string; url: string; Icon: IconType }[] = [
  { name: "GitHub", handle: "@ArinGitPort", url: "https://github.com/ArinGitPort", Icon: SiGithub },
  { name: "LinkedIn", handle: "Allen Lazatin", url: "https://www.linkedin.com/in/allen-lazatin-834710279/", Icon: FaLinkedin },
  { name: "X", handle: "@rndmflour", url: "https://x.com/rndmflour", Icon: SiX },
  { name: "Facebook", handle: "Allen Lazatin", url: "https://web.facebook.com/inkanraiko", Icon: SiFacebook },
]

type Theme = "light" | "dark"

export default function App() {
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem("theme")
    if (saved === "light" || saved === "dark") return saved
    return matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
  })
  const [contactOpen, setContactOpen] = useState(false)
  const [experienceOpen, setExperienceOpen] = useState(false)
  const [socialsOpen, setSocialsOpen] = useState(false)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem("theme", theme)
  }, [theme])

  useEffect(() => {
    const modalOpen = contactOpen || experienceOpen || socialsOpen
    document.body.style.overflow = modalOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [contactOpen, experienceOpen, socialsOpen])

  useEffect(() => {
    const closeModals = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return
      setContactOpen(false)
      setExperienceOpen(false)
      setSocialsOpen(false)
    }
    addEventListener("keydown", closeModals)
    return () => removeEventListener("keydown", closeModals)
  }, [])

  return (
    <>
      <Stars />
      <div className="relative z-1 mx-auto flex min-h-screen max-w-[680px] flex-col px-4 py-7 sm:px-5 sm:py-8">
        <Header onContact={() => setContactOpen(true)} onTheme={() => setTheme(theme === "dark" ? "light" : "dark")} />
        <main className="flex-1">
          <Profile />
          <Role onExperience={() => setExperienceOpen(true)} />
          <Projects />
          <Technologies />
        </main>
        <footer className="mt-auto flex animate-[fade-in_1.8s_ease-out] justify-center pt-2">
          <button
            className="inline-flex cursor-pointer items-center gap-2 rounded-md px-2 py-1 text-xs text-muted transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
            onClick={() => setSocialsOpen(true)}
          >
            <FiArrowUpRight className="size-4" aria-hidden="true" />
            <span>my socials</span>
          </button>
        </footer>
      </div>

      <Modal open={experienceOpen} title="Previous Experience" onClose={() => setExperienceOpen(false)}>
        <ExperienceTree />
      </Modal>
      <Modal open={contactOpen} title="Contact Me" onClose={() => setContactOpen(false)}>
        <ContactForm onSent={() => setContactOpen(false)} />
      </Modal>
      <Modal open={socialsOpen} title="Connect With Me" onClose={() => setSocialsOpen(false)}>
        <div className="mt-4 grid grid-cols-2 gap-6 md:grid-cols-4">
          {socialProfiles.map(({ name, handle, url, Icon }) => (
            <a
              className="flex animate-[fade-in_600ms_ease-out] flex-col items-center rounded-lg p-4 text-center text-foreground no-underline transition-[transform,background-color] duration-300 hover:-translate-y-[5px] hover:bg-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              key={name}
            >
              <span className="mb-2 flex size-12 items-center justify-center">
                <Icon className="size-8" aria-hidden="true" />
              </span>
              <span className="text-sm">{name}</span>
              <span className="mt-1 max-w-full truncate text-xs text-muted">{handle}</span>
            </a>
          ))}
        </div>
      </Modal>
    </>
  )
}
