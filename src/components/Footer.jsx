export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-12">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Copyright */}
        <p className="text-slate-400 text-sm">
          © {new Date().getFullYear()} Jitesh Bagale
        </p>

        {/* Tagline */}
        <p className="mt-2 text-xs text-slate-500">
          Built with React, Tailwind CSS & a Cybersecurity mindset 🔐
        </p>

        {/* Links */}
        <div className="mt-6 flex justify-center gap-8 text-sm">

          <a
            href="https://github.com/Lunatic5565"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-cyan-400 transition"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/jitesh-bagale-14ba82181/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-cyan-400 transition"
          >
            LinkedIn
          </a>

          <a
            href="mailto:bagalejitesh1234@gmail.com"
            className="text-slate-400 hover:text-cyan-400 transition"
          >
            Email
          </a>

        </div>

      </div>
    </footer>
  );
}
