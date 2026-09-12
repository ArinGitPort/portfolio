import { useMemo, useState } from "react"
import { initialProjects } from "@/data/projects"

export function Projects() {
  const [query, setQuery] = useState("")
  const projects = useMemo(
    () => initialProjects.filter((project) => (project.title + project.description).toLowerCase().includes(query.toLowerCase())),
    [query],
  )

  return (
    <section className="mb-12 animate-[fade-in_1.2s_ease-out]" aria-labelledby="projects-heading">
      <h2 id="projects-heading" className="mb-2 text-sm font-normal text-muted transition-colors duration-500">RECENT PROJECTS</h2>
      <div className="mb-6 flex animate-[fade-in_1.3s_ease-out] items-center justify-between">
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          type="search"
          placeholder="Filter projects..."
          className="min-w-0 flex-1 rounded-md border border-line bg-icon px-3 py-2 text-sm text-foreground outline-none transition-[border-color,box-shadow,background-color,color] duration-200 placeholder:text-muted focus:border-foreground focus:shadow-[0_0_0_2px_var(--shadow)]"
          aria-label="Filter projects"
        />
        <div className="ml-4 flex gap-2">
          <a
            href="https://github.com/ArinGitPort"
            target="_blank"
            rel="noopener noreferrer"
            className="flex size-10 items-center justify-center rounded-full bg-icon text-sm text-muted transition-colors hover:bg-hover hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
            aria-label="View more GitHub projects"
          >
            +
          </a>
        </div>
      </div>

      <div className="grid min-w-0 grid-cols-1 gap-4 md:grid-cols-3">
        {projects.map((project) => (
          <article
            className="group min-w-0 overflow-hidden rounded-lg border border-line bg-surface animate-[fade-in_1.4s_ease-out] transition-[transform,box-shadow,background-color,border-color] duration-300 hover:-translate-y-[5px] hover:shadow-[0_5px_15px_var(--shadow)]"
            key={project.title}
          >
            <div className="relative h-40 overflow-hidden">
              {project.image ? (
                <img className="size-full max-w-full object-cover transition-transform duration-500 group-hover:scale-105" src={project.image} alt="" />
              ) : (
                <div className="flex h-full items-center justify-center text-[1.4rem] font-bold" style={{ background: project.cover }}>
                  {project.title}
                </div>
              )}
              <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex size-10 items-center justify-center rounded-xl text-muted transition-colors hover:bg-hover hover:text-foreground focus-visible:outline-2 focus-visible:outline-white"
                  aria-label={`Open ${project.title}`}
                >
                  ↗
                </a>
              </div>
            </div>
            <div className="p-4">
              <div className="mb-1 flex w-full items-center justify-start gap-2">
                <h3 className="text-left font-bold text-foreground transition-colors duration-500">{project.title}</h3>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded px-2 py-1 text-xs text-muted transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-foreground"
                  aria-label={`Open ${project.title} repository`}
                >
                  ↗
                </a>
              </div>
              <p className="mb-4 text-left text-sm text-subtle transition-colors duration-500">{project.description}</p>
              <div className="flex flex-wrap justify-start gap-2">
                {project.technologies.map((technology) => (
                  <span className="rounded-full border border-line bg-chip px-2 py-0.5 text-xs text-subtle transition-[transform,background-color] duration-200 hover:-translate-y-0.5 hover:bg-hover" key={technology}>
                    {technology}
                  </span>
                ))}
                <span className="rounded-full border border-line bg-chip px-2 py-0.5 text-xs text-subtle">{project.year}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
