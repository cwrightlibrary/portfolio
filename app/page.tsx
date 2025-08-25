"use client"
import { useRef } from "react";

export default function Home() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <nav className="w-48 bg-gray-900 text-white fixed h-full p-6 space-y-4">
        <button onClick={() => scrollToSection(aboutRef)}>About Me</button>
        <button onClick={() => scrollToSection(projectsRef)}>My Projects</button>
        <button onClick={() => scrollToSection(contactRef)}>Contact Me</button>
      </nav>

      {/* Page Content */}
      <main className="ml-48 flex-1">
        <section ref={aboutRef} className="h-screen flex items-center justify-center bg-blue-200">
          <h1 className="text-4xl">About Me</h1>
        </section>
        
        <section ref={projectsRef} className="h-screen flex items-center justify-center bg-green-200">
          <h1 className="text-4xl">Projects</h1>
        </section>

        <section ref={contactRef} className="h-screen flex items-center justify-center bg-yellow-200">
          <h1 className="text-4xl">Contact</h1>
        </section>
      </main>
    </div>
  );
}