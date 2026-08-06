import { data } from "../data";
import { Github, Linkedin, Mail, MapPin, Sparkles } from "lucide-react";

export default function Hero({
  photoUrl,
  githubUrl,
  linkedinUrl,
  onOpenEmail,
}) {
  return (
    <section className="card hero-card spark-card p-6 md:p-8">
      <div className="grid gap-8 md:grid-cols-[auto,1fr] md:items-center">
        {/* Avatar */}
        <div className="flex justify-center md:justify-start">
          <div className="avatar-pop">
            <img
              src={photoUrl}
              alt={data.name}
              className="h-44 w-44 rounded-2xl border border-white/15 object-cover shadow-2xl md:h-52 md:w-52"
            />
          </div>
        </div>

        {/* Content */}
        <div className="space-y-6 text-center md:text-left">
          <div>
            <div className="premium-kicker mx-auto mb-4 md:mx-0">
              <Sparkles className="h-4 w-4 text-amber-300" />
              <span>Analytics, risk strategy and data craft</span>
            </div>

            <h1 className="gradient-name text-4xl font-black leading-tight md:text-6xl">
              {data.name}
            </h1>

            {/*  FINAL: white "A", bigger, aligned */}
            <div className="mt-3 flex items-center justify-center gap-3 md:justify-start">
              <span className="text-3xl font-bold text-white/95">
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

          <div className="flex flex-wrap justify-center gap-2 text-xs text-zinc-300 md:justify-start">
            <span className="metric-chip inline-flex items-center gap-2">
              <MapPin className="h-3.5 w-3.5 text-cyan-300" />
              {data.location}
            </span>
            <span className="metric-chip">7+ years experience</span>
            <span className="metric-chip">Cloud-scale analytics</span>
          </div>

          {/* CTA tiles */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            <button
              type="button"
              onClick={onOpenEmail}
              className="cta-btn spark-card flex flex-col items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 p-4"
            >
              <Mail className="cta-ic h-5 w-5" />
              <span className="text-xs font-medium">Email</span>
            </button>

            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              className="cta-btn spark-card flex flex-col items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 p-4"
            >
              <Github className="cta-ic h-5 w-5" />
              <span className="text-xs font-medium">GitHub</span>
            </a>

            <a
              href={linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="cta-btn spark-card flex flex-col items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 p-4"
            >
              <Linkedin className="cta-ic h-5 w-5" />
              <span className="text-xs font-medium">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
