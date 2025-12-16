import { useEffect, useState } from "react";
import profile from "../assets/profile.jpg";

export default function Hero() {
  const roles = "Software Developer · Cybersecurity · Linux & Networking";
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < roles.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + roles[index]);
        setIndex(index + 1);
      }, 40); // typing speed (lower = faster)

      return () => clearTimeout(timeout);
    }
  }, [index, roles]);

  return (
    <section className="min-h-screen flex items-center pt-28 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

        {/* TEXT */}
        <div>
          <h1 className="hero-left text-4xl md:text-6xl font-bold">
            Hi, I’m{" "}
            <span className="text-cyan-400">Jitesh Bagale</span>
          </h1>

          {/* Typing Effect */}
          <p className="hero-left hero-delay-1 mt-6 text-slate-400 text-lg font-mono">
            {text}
            <span className="animate-pulse text-cyan-400">|</span>
          </p>

          <div className="hero-left hero-delay-2 mt-8 flex gap-4">
            <a href="#projects" className="btn-cyber">
              View Projects
            </a>

            <a href="#contact" className="btn-outline">
              Contact
            </a>
          </div>
        </div>

        {/* IMAGE */}
        <div className="flex justify-center lg:justify-end">
          <img
            src={profile}
            alt="Jitesh"
            className="hero-right hero-delay-3
                       w-80 h-80 md:w-96 md:h-96
                       rounded-full object-cover
                       border-4 border-cyan-400
                       shadow-[0_0_80px_rgba(34,211,238,0.5)]"
          />
        </div>

      </div>
    </section>
  );
}
