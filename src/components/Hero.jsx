import { data } from "../data";

export default function Hero({
  photoUrl,
  resumeUrl,
  githubUrl,
  linkedinUrl,
  onOpenEmail,
}) {
  return (
    <section className="card spark-card p-6 md:p-8">
      <div className="grid gap-8 md:grid-cols-[auto,1fr] md:items-center">
        {/* Avatar */}
        <div className="flex justify-center md:justify-start">
          <div className="avatar-pop">
            <img
              src={photoUrl}
              alt={data.name}
              className="h-40 w-40 rounded-2xl border border-zinc-800 object-cover"
            />
          </div>
        </div>

        {/* Content */}
        <div className="space-y-6 text-center md:text-left">
          <div>
            <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
              {data.name}
            </h1>

            {/*  FINAL: white "A", bigger, aligned */}
            <div className="mt-2 flex items-center justify-center md:justify-start gap-3">
              <span className="text-3xl font-bold text-white">
                A
              </span>

              <div className="role-mask">
                <div className="role-track">
                  {data.roles.map((r) => (
                    <span
                      key={r}
                      className="text-2xl font-bold text-amber-400"
                    >
                      {r}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <p className="max-w-2xl text-sm leading-relaxed text-zinc-400">
            {data.headline}
          </p>

          {/* CTA tiles */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            <a
              href={resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="cta-btn spark-card flex flex-col items-center justify-center gap-1 rounded-2xl border border-zinc-800 bg-zinc-950/60 p-4"
            >
              <span className="cta-ic">📄</span>
              <span className="text-xs font-medium">Resume</span>
            </a>

            <button
              type="button"
              onClick={onOpenEmail}
              className="cta-btn spark-card flex flex-col items-center justify-center gap-1 rounded-2xl border border-zinc-800 bg-zinc-950/60 p-4"
            >
              <span className="cta-ic">✉️</span>
              <span className="text-xs font-medium">Email</span>
            </button>

            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              className="cta-btn spark-card flex flex-col items-center justify-center gap-1 rounded-2xl border border-zinc-800 bg-zinc-950/60 p-4"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5 fill-amber-400"
                aria-hidden="true"
              >
                <path d="M12 .5C5.73.5.5 5.74.5 12.02c0 5.1 3.29 9.42 7.86 10.95.58.1.79-.25.79-.56v-2.02c-3.2.7-3.87-1.55-3.87-1.55-.53-1.36-1.29-1.72-1.29-1.72-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.04 1.78 2.73 1.27 3.4.97.1-.75.41-1.27.74-1.56-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.3 1.2-3.11-.12-.3-.52-1.5.11-3.13 0 0 .97-.31 3.18 1.19a11.1 11.1 0 0 1 5.79 0c2.2-1.5 3.17-1.19 3.17-1.19.64 1.63.24 2.83.12 3.13.75.81 1.2 1.85 1.2 3.11 0 4.42-2.7 5.39-5.27 5.68.42.37.79 1.1.79 2.22v3.29c0 .31.21.67.8.56A11.52 11.52 0 0 0 23.5 12C23.5 5.74 18.27.5 12 .5z" />
              </svg>
              <span className="text-xs font-medium">GitHub</span>
            </a>

            <a
              href={linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="cta-btn spark-card flex flex-col items-center justify-center gap-1 rounded-2xl border border-zinc-800 bg-zinc-950/60 p-4"
            >
              <span className="cta-ic font-bold text-amber-400">in</span>
              <span className="text-xs font-medium">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
