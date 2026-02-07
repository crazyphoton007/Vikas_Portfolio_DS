import { data } from "../data";

export default function Experience() {
  return (
    <section id="experience" className="card p-6 md:p-8">
      <div className="mb-6 flex items-center gap-4">
        <h2 className="text-lg font-semibold tracking-tight">Experience</h2>
        <div className="h-px flex-1 bg-zinc-800" />
      </div>

      <div className="space-y-8">
        {data.experience.map((job) => (
          <div key={`${job.company}-${job.title}`} className="space-y-3">
            <div className="flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="font-semibold">{job.title}</h3>
                <p className="text-sm text-zinc-400">
                  {job.company} • {job.location}
                </p>
              </div>
              <div className="text-xs text-zinc-500">{job.dates}</div>
            </div>

            <ul className="list-disc space-y-1 pl-5 text-sm text-zinc-400">
              {job.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
