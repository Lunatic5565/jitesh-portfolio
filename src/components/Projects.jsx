export default function Projects() {
  return (
    <section id="projects" className="bg-slate-900 py-32">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center mb-20 reveal">
          <h2 className="text-4xl font-bold text-slate-100">
            Projects
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            Hands-on projects focused on cybersecurity, systems, and real-world problem solving.
          </p>
          <div className="mt-6 flex justify-center">
            <span className="h-[3px] w-20 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full"></span>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">

          <ProjectCard
            title="Intrusion Detection System (IDS)"
            description="Intrusion detection system designed to monitor network traffic and identify suspicious activities using machine learning and rule-based techniques."
            tools={[
              "Python",
              "Machine Learning",
              "Network Traffic Analysis",
              "IDS/IPS Concepts",
              "Cybersecurity",
            ]}
            github="https://github.com/yourusername/ids-project"
          />

          <ProjectCard
            title="Phishing Detection System"
            description="Security-focused system to analyze URLs and detect phishing attempts using feature extraction and classification techniques."
            tools={[
              "Python",
              "URL Analysis",
              "Machine Learning",
              "Cybersecurity",
            ]}
            github="https://github.com/Lunatic5565/Phish-King"
          />

          <ProjectCard
            title="Network Scanner (Linux & Bash)"
            description="Automated network scanning tool to identify live hosts and open ports on a network using Bash scripting on Linux."
            tools={[
              "Linux (Kali)",
              "Bash Scripting",
              "Nmap",
              "TCP/IP",
              "Networking",
            ]}
            github="https://github.com/Lunatic5565/netscan-bash"
          />

          <ProjectCard
            title="Expense Splitter Web Application"
            description="Secure ASP.NET Core web application for managing and splitting group expenses with authentication and database persistence."
            tools={[
              "ASP.NET Core",
              "Entity Framework",
              "SQL Server",
              "Authentication",
              "Web Security",
            ]}
            github="https://github.com/yourusername/expense-splitter"
          />

          <ProjectCard
            title="Hotel Management System"
            description="Console-based hotel management system to handle room booking, check-in/check-out, billing, and customer records."
            tools={[
              "Java",
              "OOP Concepts",
              "File Handling",
              "Data Structures",
            ]}
            github="https://github.com/Lunatic5565/Hotel-management-System"
          />

        </div>
      </div>
    </section>
  );
}

/* Reusable Project Card */
function ProjectCard({ title, description, tools, github }) {
  return (
    <div
      className="reveal relative bg-slate-950 border border-slate-800
                 rounded-2xl p-8 hover-card"
    >

      {/* GitHub Icon */}
      <a
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-4 right-4 text-slate-400
                   hover:text-cyan-400
                   hover:drop-shadow-[0_0_6px_rgba(34,211,238,0.6)]"
        aria-label="View GitHub Repository"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 .5C5.73.5.5 5.74.5 12.02c0 5.1 3.29 9.42 7.86 10.95.58.1.79-.25.79-.56v-2.02c-3.2.7-3.87-1.54-3.87-1.54-.53-1.35-1.29-1.71-1.29-1.71-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.3 1.19-3.11-.12-.29-.52-1.45.11-3.02 0 0 .97-.31 3.18 1.19.92-.26 1.9-.39 2.88-.39.98 0 1.96.13 2.88.39 2.21-1.5 3.18-1.19 3.18-1.19.63 1.57.23 2.73.11 3.02.74.81 1.19 1.85 1.19 3.11 0 4.43-2.68 5.41-5.24 5.7.41.35.77 1.04.77 2.1v3.12c0 .31.21.67.8.56 4.57-1.53 7.86-5.85 7.86-10.95C23.5 5.74 18.27.5 12 .5z" />
        </svg>
      </a>

      <h3 className="text-xl font-semibold text-slate-100">
        {title}
      </h3>

      <p className="mt-4 text-slate-400 leading-relaxed">
        {description}
      </p>

      {/* Tools Used */}
      <div className="mt-6">
        <p className="text-sm text-slate-500 mb-2">
          Tools Used
        </p>
        <div className="flex flex-wrap gap-2">
          {tools.map((tool) => (
            <span
              key={tool}
              className="px-3 py-1 text-xs rounded-full
                         bg-slate-900 border border-slate-800
                         text-cyan-400
                         hover:bg-cyan-400 hover:text-black"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>

    </div>
  );
}
