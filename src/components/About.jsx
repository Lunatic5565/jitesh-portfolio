export default function About() {
  return (
    <section
      id="about"
      className="bg-slate-950 py-36"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* SECTION HEADER */}
        <div className="reveal text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            About Me
          </h2>
          <p className="mt-4 text-slate-400 text-lg">
            A brief overview of who I am, what I work on, and what drives me.
          </p>
          <div className="mt-6 flex justify-center">
            <span className="h-[3px] w-20 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full"></span>
          </div>
        </div>

        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-5 gap-16 items-start">

          {/* LEFT CONTENT */}
          <div className="lg:col-span-3 space-y-10">

            {/* INTRO TEXT */}
            <p className="reveal reveal-delay-1 text-slate-300 leading-relaxed text-lg">
              I am a final-year{" "}
              <span className="text-white font-medium">
                B.Tech Information Technology
              </span>{" "}
              student at JSPM’s Rajarshi Shahu College of Engineering. I enjoy
              working on real-world problems involving{" "}
              <span className="text-cyan-400">
                software development, cybersecurity, and Linux-based systems
              </span>
              . My focus is on building secure, scalable, and well-engineered
              applications while continuously learning modern technologies.
            </p>

            {/* HIGHLIGHT CARDS */}
            <div className="grid sm:grid-cols-2 gap-6">

              <AboutCard
                title="Academic Focus"
                delay="reveal-delay-1"
                text="Strong foundation in computer science fundamentals with consistent academic performance and practical exposure through projects."
              />

              <AboutCard
                title="Technical Interests"
                delay="reveal-delay-2"
                text="Interested in backend development, networking, cybersecurity, and working with Linux environments."
              />

              <AboutCard
                title="Leadership"
                delay="reveal-delay-2"
                text="Actively involved in student organizations, contributing to team coordination, communication, and technical initiatives."
              />

              <AboutCard
                title="Growth Mindset"
                delay="reveal-delay-3"
                text="Continuously learning through certifications, hands-on projects, and experimentation with new tools and technologies."
              />

            </div>
          </div>

          {/* RIGHT STATS */}
          <div className="lg:col-span-2 space-y-8">

            <div className="reveal reveal-delay-1">
              <StatCard value="8.42" label="CGPA" />
            </div>

            <div className="reveal reveal-delay-2">
              <StatCard value="6+" label="Certifications" />
            </div>

            <div className="reveal reveal-delay-3">
              <StatCard value="5+" label="Projects Built" />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

/* ABOUT CARD */
function AboutCard({ title, text, delay }) {
  return (
    <div
      className={`reveal ${delay} rounded-2xl bg-slate-900/60
                  border border-slate-800 p-6 hover-card`}
    >
      <h3 className="text-lg font-semibold mb-2 text-slate-100">
        {title}
      </h3>
      <p className="text-slate-400 text-sm leading-relaxed">
        {text}
      </p>
    </div>
  );
}

/* STAT CARD */
function StatCard({ value, label }) {
  return (
    <div className="rounded-2xl bg-slate-900/70 border border-slate-800 p-10 text-center hover-card">
      <div className="text-5xl font-bold text-cyan-400">
        {value}
      </div>
      <div className="mt-2 text-sm tracking-widest uppercase text-slate-400">
        {label}
      </div>
    </div>
  );
}
