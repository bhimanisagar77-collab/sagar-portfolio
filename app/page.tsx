const projects = [
  {
    title: "Portfolio Website",
    description: "A modern, responsive portfolio built with Next.js and Tailwind CSS.",
    tags: ["Next.js", "Tailwind", "Responsive"],
  },
  {
    title: "Task Manager",
    description: "A productivity app to track tasks, priorities, and progress.",
    tags: ["React", "TypeScript", "UX"],
  },
  {
    title: "Blog Platform",
    description: "A clean, fast blog experience with content-first design.",
    tags: ["Markdown", "Performance", "Accessibility"],
  },
];

const skills = [
  "Web Design",
  "Front-End Development",
  "Responsive UI",
  "JavaScript",
  "React",
  "Next.js",
  "Tailwind CSS",
];

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <main className="mx-auto max-w-6xl px-6 py-12 md:px-10">
        <header className="mb-16 rounded-3xl border border-white/10 bg-slate-900/80 p-8 shadow-[0_30px_60px_-30px_rgba(15,23,42,0.9)] backdrop-blur-xl">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-cyan-300/80">Hello, I&apos;m Sagar</p>
          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Building beautiful web experiences for modern products.
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
            I create clean, responsive portfolio websites and web apps with performance and design in mind. Explore my projects, skills, and the kind of work I enjoy building.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              View projects
            </a>
            <a
              href="mailto:hello@sagar.dev"
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-300 hover:text-cyan-200"
            >
              Contact me
            </a>
          </div>
        </header>

        <section className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <div className="mb-10 rounded-3xl border border-white/10 bg-slate-900/80 p-8 shadow-[0_30px_60px_-30px_rgba(15,23,42,0.9)]">
              <h2 className="text-2xl font-semibold text-white">About me</h2>
              <p className="mt-4 leading-7 text-slate-300">
                I&apos;m a web developer focused on building polished portfolio and product websites. I enjoy turning ideas into clean digital experiences that feel fast and intuitive on every device.
              </p>
              <ul className="mt-6 space-y-3 text-slate-300">
                <li>• Creating responsive UI with accessible design.</li>
                <li>• Building projects with React, Next.js, and Tailwind CSS.</li>
                <li>• Optimizing for performance, responsiveness, and clarity.</li>
              </ul>
            </div>

            <div id="projects" className="rounded-3xl border border-white/10 bg-slate-900/80 p-8 shadow-[0_30px_60px_-30px_rgba(15,23,42,0.9)]">
              <div className="mb-6 flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/80">Featured work</p>
                  <h2 className="text-2xl font-semibold text-white">Projects</h2>
                </div>
                <span className="rounded-full bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.2em] text-slate-300">3 items</span>
              </div>
              <div className="space-y-6">
                {projects.map((project) => (
                  <article key={project.title} className="rounded-3xl border border-white/5 bg-slate-950/80 p-6 transition hover:border-cyan-300/40 hover:bg-slate-900/95">
                    <div className="flex items-start justify-between gap-4 sm:items-center">
                      <div>
                        <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                        <p className="mt-2 text-slate-300">{project.description}</p>
                      </div>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="rounded-full bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.2em] text-slate-300">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>

          <aside className="space-y-8">
            <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-8 shadow-[0_30px_60px_-30px_rgba(15,23,42,0.9)]">
              <h2 className="text-2xl font-semibold text-white">Skills</h2>
              <div className="mt-6 flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span key={skill} className="rounded-full bg-white/5 px-4 py-2 text-sm text-slate-300">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-8 shadow-[0_30px_60px_-30px_rgba(15,23,42,0.9)]">
              <h2 className="text-2xl font-semibold text-white">Connect</h2>
              <p className="mt-4 leading-7 text-slate-300">
                Want to collaborate on a web project or have a new idea? Let&apos;s talk.
              </p>
              <div className="mt-6 space-y-3 text-slate-300">
                <p>
                  <span className="font-medium text-slate-100">Email:</span> hello@sagar.dev
                </p>
                <p>
                  <span className="font-medium text-slate-100">GitHub:</span>{" "}
                  <a className="text-cyan-300 hover:text-cyan-200" href="https://github.com/your-username" target="_blank" rel="noreferrer">
                    github.com/your-username
                  </a>
                </p>
              </div>
            </div>
          </aside>
        </section>
      </main>
    </div>
  );
}
