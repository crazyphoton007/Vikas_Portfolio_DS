import { data } from "../data";

function scrollToId(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Nav({ resumeUrl, githubUrl, linkedinUrl, onOpenEmail }) {
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
          {/* Resume */}
          <a
            className="icon-btn"
            href={resumeUrl}
            target="_blank"
            rel="noreferrer"
            title="Resume"
          >
            <span className="text-sm">📄</span>
          </a>

          {/* Email */}
          <button
            type="button"
            className="icon-btn"
            onClick={onOpenEmail}
            title="Email"
          >
            <span className="text-sm">✉️</span>
          </button>

          {/* GitHub (real icon) */}
          <a
            className="icon-btn"
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            title="GitHub"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5 fill-emerald-400"
              aria-hidden="true"
            >
              <path d="M12 .5C5.73.5.5 5.74.5 12.02c0 5.1 3.29 9.42 7.86 10.95.58.1.79-.25.79-.56v-2.02c-3.2.7-3.87-1.55-3.87-1.55-.53-1.36-1.29-1.72-1.29-1.72-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.04 1.78 2.73 1.27 3.4.97.1-.75.41-1.27.74-1.56-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.3 1.2-3.11-.12-.3-.52-1.5.11-3.13 0 0 .97-.31 3.18 1.19a11.1 11.1 0 0 1 5.79 0c2.2-1.5 3.17-1.19 3.17-1.19.64 1.63.24 2.83.12 3.13.75.81 1.2 1.85 1.2 3.11 0 4.42-2.7 5.39-5.27 5.68.42.37.79 1.1.79 2.22v3.29c0 .31.21.67.8.56A11.52 11.52 0 0 0 23.5 12C23.5 5.74 18.27.5 12 .5z" />
            </svg>
          </a>

          {/* LinkedIn (real icon) */}
          <a
            className="icon-btn"
            href={linkedinUrl}
            target="_blank"
            rel="noreferrer"
            title="LinkedIn"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5 fill-emerald-400"
              aria-hidden="true"
            >
              <path d="M20.45 20.45h-3.55v-5.4c0-1.29-.03-2.95-1.8-2.95-1.8 0-2.07 1.4-2.07 2.85v5.5H9.5V9h3.4v1.56h.05c.47-.9 1.6-1.85 3.3-1.85 3.53 0 4.18 2.33 4.18 5.36v6.38zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.78C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.78 24h20.44c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
            </svg>
          </a>
        </div>
      </div>
    </header>
  );
}
