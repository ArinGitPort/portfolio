import type { IconType } from "react-icons"
import { FaWindows } from "react-icons/fa"
import { SiCisco, SiCss, SiGit, SiGithub, SiHtml5, SiLinux, SiNextdotjs, SiPowers, SiReact, SiSupabase, SiTailwindcss, SiTypescript, SiWireshark } from "react-icons/si"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"

const technologies: { name: string; Icon: IconType }[] = [
  { name: "Next.js", Icon: SiNextdotjs },
  { name: "HTML 5", Icon: SiHtml5 },
  { name: "CSS 3", Icon: SiCss },
  { name: "TypeScript", Icon: SiTypescript },
  { name: "TailwindCSS", Icon: SiTailwindcss },
  { name: "Supabase", Icon: SiSupabase },
  { name: "React", Icon: SiReact },
]

const networkingTools: { name: string; Icon: IconType }[] = [
  { name: "Packet Tracer", Icon: SiCisco },
  { name: "Wireshark", Icon: SiWireshark },
]

const sysadminTools: { name: string; Icon: IconType }[] = [
  { name: "Windows Server", Icon: FaWindows },
  { name: "PowerShell", Icon: SiPowers },
  { name: "Linux", Icon: SiLinux },
  { name: "Git", Icon: SiGit },
  { name: "GitHub", Icon: SiGithub },
]

const tools = [...networkingTools, ...sysadminTools]

function ToolGrid({ tools }: { tools: { name: string; Icon: IconType }[] }) {
  return (
    <div className="grid grid-cols-4 gap-3 sm:grid-cols-7">
      {tools.map(({ name, Icon }) => (
        <Tooltip key={name}>
          <TooltipTrigger asChild>
            <button
              type="button"
              className="group flex min-w-0 animate-[fade-in_1.6s_ease-out] cursor-pointer appearance-none flex-col items-center gap-2 border-0 bg-transparent p-0 font-[inherit] text-muted transition-[transform,color] duration-300 hover:-translate-y-[5px] hover:text-foreground focus-visible:rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground"
              aria-label={name}
            >
              <span className="flex size-12 items-center justify-center rounded-lg bg-icon transition-[background-color,transform,box-shadow] duration-300 group-hover:scale-110 group-hover:bg-hover group-hover:shadow-[0_0_15px_var(--shadow)]">
                <Icon className="size-[1.375rem] shrink-0 text-foreground" aria-hidden="true" focusable="false" />
              </span>
              <span className="flex min-h-8 w-full items-start justify-center text-center text-[11px] leading-4 text-muted transition-colors duration-500 group-hover:text-foreground">{name}</span>
            </button>
          </TooltipTrigger>
          <TooltipContent side="top">{name}</TooltipContent>
        </Tooltip>
      ))}
    </div>
  )
}

export function Technologies() {
  return (
    <section className="mb-8 animate-[fade-in_1.2s_ease-out]" aria-labelledby="technologies-heading">
      <div className="space-y-8">
        <div>
          <h2 id="technologies-heading" className="mb-3 text-[0.74rem] font-normal uppercase tracking-[0.12em] text-muted transition-colors duration-500">Technologies</h2>
          <div className="grid grid-cols-4 gap-3 sm:grid-cols-7">
            {technologies.map(({ name, Icon }) => (
              <Tooltip key={name}>
                <TooltipTrigger asChild>
                  <button
                    type="button"
                    className="group flex animate-[fade-in_1.6s_ease-out] cursor-pointer appearance-none flex-col items-center gap-2 border-0 bg-transparent p-0 font-[inherit] text-muted transition-[transform,color] duration-300 hover:-translate-y-[5px] hover:text-foreground focus-visible:rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground"
                    aria-label={name}
                  >
                    <span className="flex size-12 items-center justify-center rounded-lg bg-icon transition-[background-color,transform,box-shadow] duration-300 group-hover:scale-110 group-hover:bg-hover group-hover:shadow-[0_0_15px_var(--shadow)]">
                      <Icon className="size-[1.375rem] shrink-0 text-foreground" aria-hidden="true" focusable="false" />
                    </span>
                    <span className="block w-full text-center text-[11px] leading-4 text-muted transition-colors duration-500 group-hover:text-foreground">{name}</span>
                  </button>
                </TooltipTrigger>
                <TooltipContent side="top">{name}</TooltipContent>
              </Tooltip>
            ))}
          </div>
        </div>

        <div>
          <h2 className="mb-3 text-[0.74rem] font-normal uppercase tracking-[0.12em] text-muted transition-colors duration-500">Tools</h2>
          <ToolGrid tools={tools} />
        </div>
      </div>
    </section>
  )
}

