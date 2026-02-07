import { data } from "../data";

export default function Contact() {
  return (
    <section id="contact" className="card p-6 md:p-8">
      <div className="mb-6 flex items-center gap-4">
        <h2 className="text-lg font-semibold tracking-tight">Contact</h2>
        <div className="h-px flex-1 bg-zinc-800" />
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {/* Email */}
        <div className="spark-card rounded-2xl border border-zinc-800 bg-zinc-950/60 p-5">
          <div className="text-sm font-semibold">Email</div>
          <div className="mt-1 text-xs text-zinc-400 break-all">
            {data.email}
          </div>
        </div>

        {/* GitHub */}
        <div className="spark-card rounded-2xl border border-zinc-800 bg-zinc-950/60 p-5">
          <div className="text-sm font-semibold">GitHub</div>
          <a
            href={`https://github.com/${data.github}`}
            target="_blank"
            rel="noreferrer"
            className="mt-1 block text-xs text-amber-400 hover:underline"
          >
            github.com/{data.github}
          </a>
        </div>

        {/* LinkedIn */}
        <div className="spark-card rounded-2xl border border-zinc-800 bg-zinc-950/60 p-5">
          <div className="text-sm font-semibold">LinkedIn</div>
          <a
            href={`https://www.linkedin.com/in/${data.linkedin}`}
            target="_blank"
            rel="noreferrer"
            className="mt-1 block text-xs text-amber-400 hover:underline"
          >
            linkedin.com/in/{data.linkedin}
          </a>
        </div>
      </div>
    </section>
  );
}
