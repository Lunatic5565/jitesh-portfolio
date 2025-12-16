export default function Navbar() {
  return (
    <header className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur border-b border-slate-800">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* NAME */}
        <h1 className="text-lg font-semibold tracking-wide text-cyan-400">
          JITESH BAGALE
        </h1>

        {/* LINKS */}
        <ul className="hidden md:flex gap-8 text-sm text-slate-400">
          {["About", "Skills", "Projects", "Experience", "Contact"].map(item => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="hover:text-cyan-400 transition"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
