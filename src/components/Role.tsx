import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import githubLogo from "../../assets/github.png"
import linkedinLogo from "../../assets/linkedin.png"

const socialLinks = [
  { label: "GitHub", href: "https://github.com/ArinGitPort", image: githubLogo },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/allen-lazatin-834710279/", image: linkedinLogo },
  { label: "X", href: "https://x.com/rndmflour" },
]

export function Role({ onExperience }: { onExperience: () => void }) {
  return (
    <section className="mb-9 animate-[fade-in_1.2s_ease-out]" aria-labelledby="role-heading">
      <div className="mb-3 flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
        <h2 id="role-heading" className="text-[1.36rem] font-bold text-foreground transition-colors duration-500">Aspiring Network Engineer</h2>
        <div className="flex shrink-0 items-center gap-1.5 rounded border border-line bg-surface px-2.5 py-1.5 text-[10.5px] transition-colors duration-500">
          <span className="size-2.5 animate-[pulse-status_2s_infinite] rounded-xs bg-green-500" aria-hidden="true" />
          <span>NU Baliwag</span>
          <span className="text-muted">BSIT</span>
        </div>
      </div>
      <p className="mb-3 text-[10px] uppercase tracking-[0.12em] text-muted transition-colors duration-500">INTERNSHIP AVAILABILITY · NOVEMBER 2026</p>
      <p className="mb-4 text-[0.9rem] leading-5 text-subtle transition-colors duration-500">
        Building and troubleshooting practical network labs involving VLANs, routing, IPv4 and IPv6, DHCP, NAT, and network services.
      </p>

      <div className="mb-4 flex animate-[fade-in_1.4s_ease-out] gap-2">
        {socialLinks.map((link) => (
          <Tooltip key={link.label}>
            <TooltipTrigger asChild>
              <a
                href={link.href}
                className="flex size-6 items-center justify-center rounded-full bg-icon text-foreground transition-all duration-200 ease-out hover:-translate-y-[3px] hover:bg-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
              >
                {link.image ? (
                  <img className="size-3 object-contain brightness-0 invert [[data-theme=light]_&]:brightness-100 [[data-theme=light]_&]:invert-0" src={link.image} alt="" aria-hidden="true" />
                ) : (
                  <svg className="size-3" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                )}
              </a>
            </TooltipTrigger>
            <TooltipContent side="top">{link.label}</TooltipContent>
          </Tooltip>
        ))}
      </div>

      <Button className="animate-[fade-in_1.5s_ease-out] px-0 py-1 text-[11px]" onClick={onExperience}>
        <svg className="size-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="m6 9 6 6 6-6" />
        </svg>
        <span>Previous experience</span>
      </Button>
    </section>
  )
}
