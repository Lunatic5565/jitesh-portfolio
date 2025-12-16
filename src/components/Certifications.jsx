export default function Certifications() {
  return (
    <section id="certifications" className="bg-slate-950 py-32">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="reveal text-center mb-20">
          <h2 className="text-4xl font-bold text-slate-100">
            Professional Certifications
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            Verified certifications aligned with cybersecurity, networking,
            cloud infrastructure, and system operations.
          </p>
          <div className="mt-6 flex justify-center">
            <span className="h-[3px] w-24 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full"></span>
          </div>
        </div>

        {/* Certification List */}
        <div className="space-y-6">

          <CertRow
            icon="☁️"
            title="Oracle Cloud Infrastructure 2025 Certified Networking Professional"
            issuer="Oracle"
            date="Sept 2025"
            category="Cloud Networking"
            link="https://catalog-education.oracle.com/ords/certview/sharebadge?id=CD10A356D5D7AB4DD7ECF721086DF9FF4C389C79FF50EB0E2E6B84EC41D01B0F"
          />

          <CertRow
            icon="🌐"
            title="Networking Basics"
            issuer="Cisco"
            date="May 2025"
            category="Networking"
            link="https://www.credly.com/badges/5a755bcc-512e-42e8-aa37-e381ca131e13/public_url"
          />

          <CertRow
            icon="🛡️"
            title="Introduction to Cyber Security"
            issuer="Cisco"
            date="Feb 2025"
            category="Cybersecurity"
            link="https://www.credly.com/badges/09497a6e-eda9-4a62-80af-304edd914dda/public_url"
          />

          <CertRow
            icon="🔐"
            title="Connect and Protect: Network and Network Security"
            issuer="Google"
            date="2024"
            category="Network Security"
            link="https://coursera.org/share/0fcb33c5f6b644995287f031383c32c2"
          />

          <CertRow
            icon="🐍"
            title="Using Python to Interact with Operating System"
            issuer="Google"
            date="2024"
            category="System Automation"
            link="https://coursera.org/share/bb6d6f6f7e4524b4cd2d629703ba686c"
          />

        </div>
      </div>
    </section>
  );
}

/* Certification Row Component */
function CertRow({ icon, title, issuer, date, category, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="reveal block"
    >
      <div
        className="flex flex-col sm:flex-row sm:items-center justify-between
                   gap-6 bg-slate-900 border border-slate-800 rounded-xl
                   px-6 py-5 hover:border-cyan-400/50 hover-card
                   transition cursor-pointer"
      >
        {/* Left */}
        <div className="flex items-start gap-4">
          <div className="text-3xl">{icon}</div>

          <div>
            <h3 className="text-lg font-semibold text-slate-100 flex items-center gap-2">
              {title}
              <span className="text-cyan-400 text-sm">↗</span>
            </h3>
            <p className="text-sm text-slate-400">
              Issued by {issuer} • {date}
            </p>
          </div>
        </div>

        {/* Right */}
        <div>
          <span
            className="px-4 py-1 text-xs rounded-full
                       bg-slate-950 border border-cyan-400/40
                       text-cyan-400 tracking-wide uppercase"
          >
            {category}
          </span>
        </div>
      </div>
    </a>
  );
}
