export default function Experience() {
  return (
    <section id="experience" className="bg-slate-950 py-32">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="reveal text-center mb-20">
          <h2 className="text-4xl font-bold text-slate-100">
            Experience & Leadership Activities
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            A timeline of my academic, leadership, and cybersecurity-focused experience.
          </p>
          <div className="mt-6 flex justify-center">
            <span className="h-[3px] w-20 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full"></span>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">

          {/* Vertical Line */}
          <div className="absolute left-4 top-0 h-full w-px bg-slate-800"></div>

          <TimelineItem
            delay="reveal-delay-1"
            time="2024 – Present"
            title="SOC & Cybersecurity Learning Path"
            location="Self-Driven / Academic"
            description={[
              "Hands-on practice with SIEM tools such as Splunk, IBM QRadar, and ELK Stack.",
              "Performed log analysis, threat detection, and basic incident investigation.",
              "Worked with IDS/IPS concepts, firewall rules, and security monitoring.",
            ]}
          />

          <TimelineItem
            delay="reveal-delay-2"
            time="2023 – 2025"
            title="Secretary – Student Association of IT"
            location="JSPM’s RSCOE"
            description={[
              "Coordinated technical events and workshops for students.",
              "Managed communication between faculty and student teams.",
              "Strengthened leadership, planning, and organizational skills.",
            ]}
          />

          <TimelineItem
            delay="reveal-delay-3"
            time="2023 – 2025"
            title="Social Media Head – GeeksforGeeks Student Chapter"
            location="College Chapter"
            description={[
              "Handled digital presence and outreach for technical events.",
              "Promoted coding culture and cybersecurity awareness initiatives.",
            ]}
          />

          <TimelineItem
            delay="reveal-delay-1"
            time="2022 – Present"
            title="B.Tech – Information Technology"
            location="JSPM’s Rajarshi Shahu College of Engineering"
            description={[
              "CGPA: 8.42 / 10.",
              "Strong foundation in computer networks, operating systems, and security basics.",
            ]}
          />

        </div>
      </div>
    </section>
  );
}

/* Timeline Item Component */
function TimelineItem({ time, title, location, description, delay }) {
  return (
    <div className="relative pl-12 pb-16">

      {/* Dot */}
      <div className="absolute left-1 top-1 w-6 h-6 rounded-full
                      bg-slate-950 border-2 border-cyan-400"></div>

      {/* Card */}
      <div
        className={`reveal ${delay}
                   bg-slate-900 border border-slate-800
                   rounded-2xl p-6 hover-card`}
      >
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <h3 className="text-lg font-semibold text-slate-100">
            {title}
          </h3>
          <span className="text-sm text-cyan-400 mt-2 sm:mt-0">
            {time}
          </span>
        </div>

        <p className="mt-1 text-sm text-slate-400">
          {location}
        </p>

        <ul className="mt-4 space-y-2 text-slate-300 text-sm">
          {description.map((point, index) => (
            <li key={index} className="flex gap-2">
              <span className="text-emerald-400">▸</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
