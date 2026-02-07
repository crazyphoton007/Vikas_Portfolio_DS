import { data } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="card p-6 md:p-8">
      <div className="mb-6 flex items-center gap-4">
        <h2 className="text-lg font-semibold tracking-tight">Projects</h2>
        <div className="h-px flex-1 bg-zinc-800" />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {data.projects.map((project) => (
          <div
            key={project.name}
            className="spark-card rounded-2xl border border-zinc-800 bg-zinc-950/60 p-5"
          >
            <h3 className="mb-2 font-semibold">{project.name}</h3>

            {/* Tech stack pills */}
            <div className="mb-3 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="pill-spark rounded-full border border-zinc-800 bg-zinc-950/60 px-3 py-1 text-xs text-zinc-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            <ul className="mb-4 list-disc space-y-1 pl-5 text-sm text-zinc-400">
              {project.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>

            {/* Links */}
            <div className="flex gap-3">
              {project.links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-medium text-amber-400 hover:underline"
                >
                  {l.label} →
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
