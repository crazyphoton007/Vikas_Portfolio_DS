import { useEffect, useMemo, useState } from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { data } from "./data";

// GH Pages-safe: works with or without leading "/" in your paths
function withBasePath(p) {
  const base = import.meta.env.BASE_URL || "/";
  const clean = String(p || "").replace(/^\/+/, "");
  return `${base}${clean}`;
}

function getLinkedInUrl(linkedin) {
  const raw = (linkedin ?? "").trim();
  if (!raw) return "";
  if (raw.startsWith("http")) return raw.replace(/\/+$/, "") + "/";

  const clean = raw
    .replace(/^@/, "")
    .replace(/^linkedin\.com\/in\//i, "")
    .replace(/^www\.linkedin\.com\/in\//i, "")
    .replace(/^https?:\/\/(www\.)?linkedin\.com\/in\//i, "")
    .replace(/\/+$/, "")
    .trim();

  return `https://www.linkedin.com/in/${clean}/`;
}

export default function App() {
  // ---------- normalized links ----------
  const linkedinUrl = useMemo(() => getLinkedInUrl(data.linkedin), []);
  const githubUrl = useMemo(
    () => (data.github ? `https://github.com/${String(data.github).trim()}` : ""),
    []
  );

  // assets (pdf + image) should be served from GH pages base
  const photoUrl = useMemo(() => withBasePath(data.photo), []);
  const resumeUrl = useMemo(() => withBasePath(data.resumeUrl), []);
  const emailText = useMemo(() => String(data.email || "").trim(), []);
  const emailUrl = useMemo(() => (emailText ? `mailto:${emailText}` : ""), [emailText]);

  // ---------- Email UX (modal + toast) ----------
  const [emailModalOpen, setEmailModalOpen] = useState(false);
  const [toast, setToast] = useState(null); // {title, desc}

  function showToast(title, desc) {
    setToast({ title, desc });
    window.clearTimeout(showToast._t);
    showToast._t = window.setTimeout(() => setToast(null), 2200);
  }

  async function copyEmail() {
    if (!emailText) return;
    try {
      await navigator.clipboard.writeText(emailText);
      showToast("Copied!", emailText);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = emailText;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      showToast("Copied!", emailText);
    }
  }

  function openMailto() {
    if (!emailUrl) return;
    window.location.href = emailUrl;
    showToast("Opening mail app…", "If nothing opens, use Gmail or Copy.");
  }

  function openGmailCompose() {
    if (!emailText) return;
    const gmail = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
      emailText
    )}`;
    window.open(gmail, "_blank", "noreferrer");
    showToast("Opening Gmail…", emailText);
  }

  // close modal on ESC
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") setEmailModalOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <div className="container-xxl py-10">
        <Nav
          resumeUrl={resumeUrl}
          githubUrl={githubUrl}
          linkedinUrl={linkedinUrl}
          onOpenEmail={() => setEmailModalOpen(true)}
        />

        <main className="space-y-12">
          <Hero
            photoUrl={photoUrl}
            resumeUrl={resumeUrl}
            githubUrl={githubUrl}
            linkedinUrl={linkedinUrl}
            onOpenEmail={() => setEmailModalOpen(true)}
          />

          <About />
          <Experience />
          <Projects />
          <Skills />
          <Education />
          <Contact />
        </main>

        <Footer />
      </div>

      {/* Email modal (clean + reliable) */}
      {emailModalOpen && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-black/70 p-4">
          <div className="w-full max-w-md rounded-2xl border border-zinc-800 bg-zinc-950 p-5 shadow-2xl">
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="text-sm text-zinc-400">Email</div>
                <div className="mt-1 text-lg font-semibold tracking-tight">
                  {emailText || "(not set)"}
                </div>
              </div>
              <button
                type="button"
                onClick={() => setEmailModalOpen(false)}
                className="grid h-9 w-9 place-items-center rounded-xl border border-zinc-800 bg-zinc-950/60 text-zinc-300 hover:border-amber-400/50"
                title="Close"
              >
                ✕
              </button>
            </div>

            <div className="mt-4 grid gap-3">
              <button
                type="button"
                onClick={openMailto}
                className="contact-btn flex items-center justify-between rounded-2xl border border-zinc-800 bg-zinc-950/60 px-4 py-3 text-left"
              >
                <span>
                  <span className="block text-sm font-semibold">Open Mail App</span>
                  <span className="block text-xs text-zinc-400">mailto link</span>
                </span>
                <span className="text-zinc-500">↗</span>
              </button>

              <button
                type="button"
                onClick={openGmailCompose}
                className="contact-btn flex items-center justify-between rounded-2xl border border-zinc-800 bg-zinc-950/60 px-4 py-3 text-left"
              >
                <span>
                  <span className="block text-sm font-semibold">Open Gmail</span>
                  <span className="block text-xs text-zinc-400">compose window</span>
                </span>
                <span className="text-zinc-500">↗</span>
              </button>

              <button
                type="button"
                onClick={copyEmail}
                className="contact-btn flex items-center justify-between rounded-2xl border border-zinc-800 bg-zinc-950/60 px-4 py-3 text-left"
              >
                <span>
                  <span className="block text-sm font-semibold">Copy Email</span>
                  <span className="block text-xs text-zinc-400">paste anywhere</span>
                </span>
                <span className="text-zinc-500">⧉</span>
              </button>
            </div>

            <div className="mt-4 text-xs text-zinc-500">
              Tip: Press <span className="text-zinc-300">Esc</span> to close.
            </div>
          </div>
        </div>
      )}

      {/* Toast */}
      {toast && (
        <div className="fixed bottom-5 left-1/2 z-50 w-[min(92vw,420px)] -translate-x-1/2">
          <div className="rounded-2xl border border-zinc-800 bg-zinc-950/90 p-4 shadow-xl">
            <div className="text-sm font-semibold">{toast.title}</div>
            <div className="mt-0.5 text-xs text-zinc-400">{toast.desc}</div>
          </div>
        </div>
      )}
    </div>
  );
}
