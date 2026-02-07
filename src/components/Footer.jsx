export default function Footer() {
  return (
    <footer className="mt-14 pb-6 text-center text-xs text-zinc-500">
      <div>© {new Date().getFullYear()} Vikas Shukla</div>
      <div className="mt-1">Built with React, Vite & Tailwind CSS</div>
    </footer>
  );
}
