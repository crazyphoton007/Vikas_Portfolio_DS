import { data } from "../data";

export default function Education() {
  return (
    <section id="education" className="card p-6 md:p-8">
      <div className="mb-6 flex items-center gap-4">
        <h2 className="text-lg font-semibold tracking-tight">Education</h2>
        <div className="h-px flex-1 bg-zinc-800" />
      </div>

      <div className="space-y-5">
        {data.education.map((e) => (
          <div
            key={`${e.school}-${e.degree}`}
            className="spark-card rounded-2xl border border-zinc-800 bg-zinc-950/60 p-5"
          >
            <div className="flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
              <div>
                <div className="font-semibold">{e.school}</div>
                <div className="text-sm text-zinc-400">{e.degree}</div>
              </div>
              <div className="text-xs text-zinc-500">{e.dates}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
