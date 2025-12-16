export default function Skills() {
  return (
    <section id="skills" className="bg-slate-950 py-32">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-slate-100">
            Skills & Expertise
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            Core technical, security, and professional competencies.
          </p>
          <div className="mt-6 flex justify-center">
            <span className="h-[3px] w-20 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full"></span>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          <SkillCard
            icon="🖥️"
            title="OS & Tools"
            items={[
              "Linux (Ubuntu, Kali)",
              "Wireshark",
              "PowerShell",
              "GitHub",
            ]}
          />

          <SkillCard
            icon="💻"
            title="Programming"
            items={[
              "C++",
              "Java",
              "Python (Basics)",
              "Bash (Basics)",
            ]}
          />

          <SkillCard
            icon="📊"
            title="SIEM & SOC Tools"
            items={[
              "IBM QRadar",
              "Splunk",
              "ELK Stack",
              "Wireshark",
            ]}
          />

          <SkillCard
            icon="☁️"
            title="Cloud & Security"
            items={[
              "AWS (EC2, SSH)",
              "Metasploit",
              "Firewall Management",
            ]}
          />

          <SkillCard
            icon="🛡️"
            title="Security Operations"
            items={[
              "Log Analysis",
              "Incident Investigation",
              "IDS/IPS Monitoring",
              "Threat Detection",
            ]}
          />

          <SkillCard
            icon="🌐"
            title="Networking"
            items={[
              "OSI & TCP/IP",
              "DHCP, DNS, NAT",
              "VPN & Proxy Configuration",
              "Port Scanning",
            ]}
          />

          <SkillCard
            icon="🤝"
            title="Soft Skills"
            items={[
              "Communication",
              "Team Collaboration",
              "Problem Solving",
            ]}
          />

        </div>
      </div>
    </section>
  );
}

/* Skill Card Component */
function SkillCard({ icon, title, items }) {
  return (
    <div
      className="reveal bg-slate-900 border border-slate-800 rounded-2xl p-6
                 hover:border-cyan-400/50 hover-card transition"
    >
      {/* Heading */}
      <div className="flex items-center gap-3 mb-4">
        <span className="text-2xl">{icon}</span>
        <h3 className="text-lg font-semibold text-cyan-400">
          {title}
        </h3>
      </div>

      {/* Items */}
      <ul className="space-y-2 text-slate-300 text-sm">
        {items.map((item) => (
          <li key={item} className="flex gap-2">
            <span className="text-emerald-400">▸</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
