import { data } from "../data";

export default function About() {
  return (
    <section id="about" className="card p-6 md:p-8">
      <div className="mb-5 flex items-center gap-4">
        <h2 className="text-lg font-semibold tracking-tight">About</h2>
        <div className="h-px flex-1 bg-zinc-800" />
      </div>

      <p className="max-w-3xl text-sm leading-relaxed text-zinc-400">
        {data.about}
      </p>
    </section>
  );
}
