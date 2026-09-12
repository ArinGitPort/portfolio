import type { IconType } from "react-icons"
import { SiCss, SiHtml5, SiNextdotjs, SiReact, SiSupabase, SiTailwindcss, SiTypescript } from "react-icons/si"
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

export function Technologies() {
  return (
    <section className="mb-12 animate-[fade-in_1.2s_ease-out]" aria-labelledby="technologies-heading">
      <h2 id="technologies-heading" className="mb-2 text-sm font-normal text-muted transition-colors duration-500">TECHNOLOGIES</h2>
      <div className="mt-4 grid grid-cols-[repeat(auto-fill,minmax(80px,1fr))] gap-4 md:grid-cols-7">
        {technologies.map(({ name, Icon }) => (
          <Tooltip key={name}>
            <TooltipTrigger asChild>
              <button
                type="button"
                className="group flex animate-[fade-in_1.6s_ease-out] cursor-pointer appearance-none flex-col items-center gap-2 border-0 bg-transparent p-0 font-[inherit] text-muted transition-[transform,color] duration-300 hover:-translate-y-[5px] hover:text-foreground focus-visible:rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground"
                aria-label={name}
              >
                <span className="flex size-12 items-center justify-center rounded-lg bg-icon transition-[background-color,transform,box-shadow] duration-300 group-hover:scale-110 group-hover:bg-hover group-hover:shadow-[0_0_15px_var(--shadow)]">
                  <Icon className="size-6 shrink-0 text-foreground" aria-hidden="true" focusable="false" />
                </span>
                <span className="block w-full text-center text-xs leading-4 text-muted transition-colors duration-500 group-hover:text-foreground">{name}</span>
              </button>
            </TooltipTrigger>
            <TooltipContent side="top">{name}</TooltipContent>
          </Tooltip>
        ))}
      </div>
    </section>
  )
}

