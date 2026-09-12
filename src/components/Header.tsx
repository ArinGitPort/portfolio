import { Button } from "@/components/ui/button"

function UserIcon() {
  return (
    <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}

interface HeaderProps {
  onContact: () => void
  onTheme: () => void
}

export function Header({ onContact, onTheme }: HeaderProps) {
  return (
    <header className="mb-12 flex animate-[fade-in_600ms_ease-out] items-center justify-between">
      <div className="flex items-center gap-2">
        <h1 className="text-xl font-bold tracking-tight text-foreground transition-colors duration-500">ArinGitPort</h1>
      </div>

      <div className="flex items-center gap-2 text-sm text-muted">
        <Button
          className="animate-[shine_10s_linear_infinite] whitespace-nowrap bg-[linear-gradient(to_right,rgb(159_159_159/90%)_0%,white_10%,white_20%,rgb(159_159_159/90%)_30%,rgb(159_159_159/90%)_100%)] bg-[length:300%_auto] bg-clip-text font-normal text-transparent [[data-theme=light]_&]:bg-[linear-gradient(to_right,rgb(90_90_90/90%)_0%,#111_10%,#111_20%,rgb(90_90_90/90%)_30%,rgb(90_90_90/90%)_100%)]"
          onClick={onContact}
        >
          Contact Me
        </Button>
        <Button
          className="size-10 justify-center overflow-hidden rounded-xl p-0 hover:bg-hover"
          onClick={onTheme}
          aria-label="Toggle dark mode"
        >
          <svg className="size-4 transition-[transform,opacity] duration-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
          </svg>
        </Button>
        <span className="hidden min-[480px]:inline">EN</span>
        <Button className="hidden size-10 justify-center rounded-xl p-0 hover:bg-hover min-[480px]:inline-flex" aria-label="Profile">
          <UserIcon />
        </Button>
      </div>
    </header>
  )
}
