import { data } from "../data";
import { Github, Linkedin, Mail } from "lucide-react";

function scrollToId(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Nav({ githubUrl, linkedinUrl, onOpenEmail }) {
  const brandLeft = data.location || "USA";
  const brandName = data.name || "Vikas Shukla";

  const links = [
    { label: "About", id: "about" },
    { label: "Experience", id: "experience" },
    { label: "Projects", id: "projects" },
    { label: "Skills", id: "skills" },
    { label: "Education", id: "education" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <header className="header-shell sticky top-4 z-40 mb-10 rounded-3xl border border-zinc-900 bg-zinc-950/60 backdrop-blur-xl">
      <div className="flex flex-col gap-4 p-4 md:flex-row md:items-center md:justify-between">
        {/* Left brand */}
        <div className="brand-card flex items-center gap-3 md:justify-start">
          {/* Active indicator */}
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />

          {/* Location + Name */}
          <div className="text-sm font-semibold tracking-tight text-white">
            <span className="text-emerald-400 font-bold">{brandLeft}</span>
            {" | "}
            <span className="font-bold">{brandName}</span>
          </div>
        </div>

        {/* Center pill nav */}
        <nav className="nav-pill flex flex-wrap items-center justify-center md:flex-nowrap">
          {links.map((l) => (
            <button
              key={l.id}
              type="button"
              className="nav-link"
              onClick={() => scrollToId(l.id)}
            >
              {l.label}
            </button>
          ))}
        </nav>

        {/* Right actions */}
        <div className="flex items-center justify-center gap-2 md:justify-end">
          {/* Email */}
          <button
            type="button"
            className="icon-btn"
            onClick={onOpenEmail}
            title="Email"
          >
            <Mail className="h-[18px] w-[18px] text-rose-300" />
          </button>

          {/* GitHub (real icon) */}
          <a
            className="icon-btn"
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            title="GitHub"
          >
            <Github className="h-5 w-5 text-cyan-300" />
          </a>

          {/* LinkedIn (real icon) */}
          <a
            className="icon-btn"
            href={linkedinUrl}
            target="_blank"
            rel="noreferrer"
            title="LinkedIn"
          >
            <Linkedin className="h-5 w-5 text-violet-300" />
          </a>
        </div>
      </div>
    </header>
  );
}
