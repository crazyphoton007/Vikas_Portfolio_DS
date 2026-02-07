import { data } from "../data";

function SkillCard({ title, items }) {
  return (
    <div className="spark-card rounded-2xl border border-zinc-800 bg-zinc-950/60 p-5">
      <h3 className="mb-3 text-sm font-semibold">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {items.map((s) => (
          <span
            key={s}
            className="pill-spark rounded-full border border-zinc-800 bg-zinc-950/60 px-3 py-1 text-xs text-zinc-300"
          >
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  const { languages, tools, frameworks } = data.skills;

  return (
    <section id="skills" className="card p-6 md:p-8">
      <div className="mb-6 flex items-center gap-4">
        <h2 className="text-lg font-semibold tracking-tight">Skills</h2>
        <div className="h-px flex-1 bg-zinc-800" />
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <SkillCard title="Languages" items={languages} />
        <SkillCard title="Developer Tools" items={tools} />
        <SkillCard title="Frameworks & Concepts" items={frameworks} />
      </div>
    </section>
  );
}
