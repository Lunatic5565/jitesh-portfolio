export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-slate-950 py-36 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="reveal text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-100">
            Let’s Connect Securely
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto text-lg">
            Open to cybersecurity, SOC, DevOps, and software development
            opportunities. Let’s talk.
          </p>
          <div className="mt-6 flex justify-center">
            <span className="h-[3px] w-28 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full"></span>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <div className="space-y-10">
            <p className="reveal reveal-delay-1 text-slate-300 text-lg leading-relaxed">
              I’m interested in roles involving{" "}
              <span className="text-cyan-400">Cybersecurity</span>,{" "}
              <span className="text-cyan-400">SOC Operations</span>, DevOps
              automation, and system-level problem solving.
            </p>

            <div className="reveal reveal-delay-2 grid sm:grid-cols-2 gap-4">

              <ContactButton
                label="GitHub"
                link="https://github.com/Lunatic5565"
                icon={<GitHubIcon />}
              />

              <ContactButton
                label="LinkedIn"
                link="https://www.linkedin.com/in/jitesh-bagale-14ba82181/"
                icon={<LinkedInIcon />}
              />

              <ContactButton
                label="Email"
                link="mailto:bagalejitesh1234@gmail.com"
                icon={<MailIcon />}
              />

              <ContactButton
                label="Phone"
                link="tel:+919082058098"
                icon={<PhoneIcon />}
              />

              <ContactButton
  label="Download Resume"
  link="/JiteshResume.pdf"
  icon={<ResumeIcon />}
/>

            </div>
          </div>

          {/* RIGHT */}
          <div className="reveal reveal-delay-3">
            <div className="rounded-2xl bg-slate-900/70 border border-slate-800 p-8 hover-card">
              <div className="text-sm text-slate-400 uppercase tracking-widest">
                Current Status
              </div>

              <h3 className="mt-3 text-2xl font-semibold text-slate-100">
                Open to Opportunities
              </h3>

              <ul className="mt-6 space-y-3 text-slate-300 text-sm">
                <li className="flex gap-2">
                  <span className="text-emerald-400">✔</span>
                  Internships & Entry-Level Roles
                </li>
                <li className="flex gap-2">
                  <span className="text-emerald-400">✔</span>
                  SOC / Cybersecurity Roles
                </li>
                <li className="flex gap-2">
                  <span className="text-emerald-400">✔</span>
                  DevOps & Cloud Support Roles
                </li>
                <li className="flex gap-2">
                  <span className="text-emerald-400">✔</span>
                  Remote / On-site / Hybrid
                </li>
              </ul>

              <div className="mt-6 text-xs text-slate-500 font-mono">
                RESPONSE TIME: <span className="text-cyan-400">&lt; 24 hours</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

/* CONTACT BUTTON */
function ContactButton({ label, link, icon }) {
  return (
    <a
  href={link}
  download={label === "Download Resume" ? true : undefined}
  target={label !== "Email" && label !== "Phone" && label !== "Download Resume" ? "_blank" : undefined}
  rel="noopener noreferrer"
      className="flex items-center gap-4 px-6 py-4 rounded-xl
                 bg-slate-900 border border-slate-800
                 hover:border-cyan-400/50 hover-card
                 text-slate-200 leading-none"
    >
      <span className="w-5 h-5 shrink-0 flex items-center justify-center text-cyan-400">
        {icon}
      </span>
      <span className="font-medium">{label}</span>
    </a>
  );
}

/* ICONS */
function GitHubIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 .5C5.73.5.5 5.74.5 12.02c0 5.1 3.29 9.42 7.86 10.95.58.1.79-.25.79-.56v-2.02c-3.2.7-3.87-1.54-3.87-1.54-.53-1.35-1.29-1.71-1.29-1.71-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.3 1.19-3.11-.12-.29-.52-1.45.11-3.02 0 0 .97-.31 3.18 1.19.92-.26 1.9-.39 2.88-.39.98 0 1.96.13 2.88.39 2.21-1.5 3.18-1.19 3.18-1.19.63 1.57.23 2.73.11 3.02.74.81 1.19 1.85 1.19 3.11 0 4.43-2.68 5.41-5.24 5.7.41.35.77 1.04.77 2.1v3.12c0 .31.21.67.8.56 4.57-1.53 7.86-5.85 7.86-10.95C23.5 5.74 18.27.5 12 .5z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M4.98 3.5C3.34 3.5 2 4.84 2 6.48c0 1.63 1.34 2.98 2.98 2.98h.02c1.64 0 2.98-1.35 2.98-2.98C7.98 4.84 6.64 3.5 4.98 3.5zM2.4 21h5.16V9H2.4v12zM9.34 9h4.95v1.64h.07c.69-1.24 2.38-2.54 4.9-2.54 5.24 0 6.2 3.45 6.2 7.94V21h-5.16v-4.99c0-1.19-.02-2.72-1.66-2.72-1.67 0-1.92 1.3-1.92 2.63V21H9.34V9z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.07 21 3 13.93 3 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.21 2.2z" />
    </svg>
  );
}

function ResumeIcon() {
  return (
    <svg
      className="w-5 h-5"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zm1 7V3.5L18.5 9H15zM8 13h8v1.5H8V13zm0 3h8v1.5H8V16zm0-6h5v1.5H8V10z" />
    </svg>
  );
}

