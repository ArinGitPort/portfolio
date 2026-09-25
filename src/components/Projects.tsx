import { useMemo, useState } from "react"
import { FiArrowUpRight } from "react-icons/fi"
import { initialProjects } from "@/data/projects"

export function Projects() {
  const [query, setQuery] = useState("")
  const projects = useMemo(
    () => initialProjects.filter((project) => (project.title + project.description).toLowerCase().includes(query.toLowerCase())),
    [query],
  )

  return (
    <section className="mb-9 animate-[fade-in_1.2s_ease-out]" aria-labelledby="projects-heading">
      <h2 id="projects-heading" className="mb-2 text-[0.78rem] font-normal uppercase tracking-[0.12em] text-muted transition-colors duration-500">Recent Projects</h2>
      <div className="mb-3 flex animate-[fade-in_1.3s_ease-out] items-center justify-between">
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          type="search"
          placeholder="Filter projects..."
          className="min-w-0 flex-1 rounded-md border border-line bg-icon px-3 py-2 text-[0.8rem] text-foreground outline-none transition-[border-color,box-shadow,background-color,color] duration-200 placeholder:text-muted focus:border-foreground focus:shadow-[0_0_0_2px_var(--shadow)]"
          aria-label="Filter projects"
        />
        <div className="ml-3 flex gap-2">
          <a
            href="https://github.com/ArinGitPort"
            target="_blank"
            rel="noopener noreferrer"
            className="flex size-8 items-center justify-center rounded-full bg-icon text-base text-muted transition-colors hover:bg-hover hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
            aria-label="View more GitHub projects"
          >
            +
          </a>
        </div>
      </div>

      <div className="grid min-w-0 grid-cols-1 gap-3 md:grid-cols-3">
        {projects.map((project) => (
          <article
            className="group min-w-0 overflow-hidden rounded-lg border border-line bg-surface animate-[fade-in_1.4s_ease-out] transition-all duration-300 ease-out hover:-translate-y-[5px] hover:shadow-[0_5px_15px_var(--shadow)]"
            key={project.title}
          >
            <div className="relative h-[7.5rem] overflow-hidden">
              {project.image ? (
                <img className="size-full max-w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105" src={project.image} alt="" />
              ) : (
                <div className="flex h-full items-center justify-center text-[1rem] font-bold" style={{ background: project.cover }}>
                  {project.title}
                </div>
              )}
              <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100 group-focus-within:opacity-100">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex size-7 items-center justify-center rounded-xl text-base text-muted transition-colors hover:bg-hover hover:text-foreground focus-visible:outline-2 focus-visible:outline-white"
                  aria-label={`Open ${project.title}`}
                >
                  <FiArrowUpRight className="size-4" aria-hidden="true" />
                </a>
              </div>
            </div>
            <div className="p-3">
              <div className="mb-1 flex w-full items-center justify-start gap-2">
                <h3 className="text-left text-[0.96rem] font-bold text-foreground transition-colors duration-500">{project.title}</h3>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded px-1 py-0.5 text-sm text-muted transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-foreground"
                  aria-label={`Open ${project.title} repository`}
                >
                  <FiArrowUpRight className="size-3.5" aria-hidden="true" />
                </a>
              </div>
              <p className="mb-2.5 text-left text-[0.76rem] leading-4 text-subtle transition-colors duration-500">{project.description}</p>
              <div className="flex flex-wrap justify-start gap-1.5">
                {project.technologies.map((technology) => (
                  <span className="rounded-full border border-line bg-chip px-2 py-0.75 text-[10px] text-subtle transition-all duration-200 ease-out hover:-translate-y-0.5 hover:bg-hover" key={technology}>
                    {technology}
                  </span>
                ))}
                <span className="rounded-full border border-line bg-chip px-2 py-0.75 text-[10px] text-subtle">{project.year}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
