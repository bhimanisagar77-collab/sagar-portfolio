"use client";

import { useState } from "react";

// Types
interface Project {
  title: string;
  client: string;
  description: string;
  tags: string[];
  url: string | null;
  category: string;
}

interface Skill {
  name: string;
  level: "Expert" | "Advanced" | "Intermediate";
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  achievements: string[];
}

export default function Home() {
  // Tabs for Interactive Symfony/PHP Code Terminal
  const [activeTab, setActiveTab] = useState<"controller" | "json" | "yaml">("controller");

  // Image loading state
  const [imageError, setImageError] = useState(false);

  // Filter for Projects Showcase
  const [projectFilter, setProjectFilter] = useState<string>("all");

  // Copy status indicators
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  // Copy helpers
  const copyEmail = () => {
    navigator.clipboard.writeText("sbhimani1991@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const copyPhone = () => {
    navigator.clipboard.writeText("+919429566166");
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  // Sagar's actual project list
  const projects: Project[] = [
    {
      title: "MortgageFinder",
      client: "Techiebutler (Dubai Project)",
      description: "Developed scalable REST APIs and backend workflows using Symfony for a leading Dubai mortgage portal. Integrated Amazon S3 for document uploads, configured Braze email integrations, and implemented performance upgrades.",
      tags: ["Symfony", "PHP", "API Platform", "REST APIs", "Amazon S3", "Braze"],
      url: "https://www.mortgagefinder.ae",
      category: "dubai",
    },
    {
      title: "Compare Club",
      client: "ProlixTechnikos (Australia Project)",
      description: "Optimized backend APIs and the Admin Panel/AMS using Symfony and Twig. Managed database maintenance using DbWeaver, upgraded Symfony & PHP versions, and implemented React.js features with Indian/Australian teams.",
      tags: ["Symfony", "Twig", "React.js", "MySQL", "DbWeaver"],
      url: null,
      category: "australia",
    },
    {
      title: "Halo-Analitica",
      client: "ProlixTechnikos (Australia Project)",
      description: "A fingerprint machine system for construction site attendance. Built secure, documented REST APIs using Symfony and API Platform, with Swagger UI documentation and PostgreSQL backend queries.",
      tags: ["Symfony", "API Platform", "PostgreSQL", "Swagger UI", "React.js"],
      url: null,
      category: "australia",
    },
    {
      title: "Cocolabs / Cocorico Ecosystem",
      client: "ProlixTechnikos (France Projects)",
      description: "Developed multiple collaborative marketplaces (HomeExchange, BDT, Sora, Real Data, 52Entertainment). Leveraged Symfony, Twig templates, SCSS styles, jQuery, and MySQL, implementing Figma specifications.",
      tags: ["Symfony", "Twig", "SCSS", "JavaScript", "jQuery", "MySQL"],
      url: "https://cocolabs.com/en/",
      category: "france",
    },
    {
      title: "TravelStride",
      client: "Vispan Solution (USA Project)",
      description: "Integrated travel data feeds using SOAP and REST web services for a premium travel marketplace. Maintained Magento-based backend integrations and worked with USA clients and QA teams.",
      tags: ["Magento", "SOAP APIs", "REST APIs", "PHP", "Integration"],
      url: "https://www.travelstride.com",
      category: "usa",
    }
  ];

  // Sagar's skills
  const skillCategories: SkillCategory[] = [
    {
      title: "Backend Development",
      skills: [
        { name: "PHP / PHP 8", level: "Expert" },
        { name: "Symfony", level: "Expert" },
        { name: "API Platform", level: "Expert" },
        { name: "REST APIs", level: "Expert" },
        { name: "Laravel", level: "Intermediate" },
        { name: "CodeIgniter", level: "Intermediate" },
        { name: "Magento", level: "Intermediate" },
        { name: "Zend", level: "Intermediate" }
      ]
    },
    {
      title: "Frontend Integration",
      skills: [
        { name: "React.js", level: "Intermediate" },
        { name: "Twig Templates", level: "Expert" },
        { name: "JavaScript (ES6+)", level: "Advanced" },
        { name: "jQuery & Twig", level: "Expert" },
        { name: "SCSS / CSS3", level: "Advanced" },
        { name: "HTML5", level: "Expert" }
      ]
    },
    {
      title: "Databases & Tools",
      skills: [
        { name: "PostgreSQL", level: "Advanced" },
        { name: "MySQL", level: "Advanced" },
        { name: "DbWeaver", level: "Expert" },
        { name: "Swagger UI", level: "Expert" },
        { name: "GitHub / Git", level: "Expert" },
        { name: "Amazon S3", level: "Advanced" }
      ]
    }
  ];

  // Professional progression
  const experiences: Experience[] = [
    {
      role: "Senior Backend Developer",
      company: "Techiebutler",
      period: "06/2025 - Present",
      location: "Rajkot, India (Remote / Hybrid)",
      achievements: [
        "Develop scalable REST APIs and robust backend workflows using Symfony.",
        "Implement secure document upload features integrated with Amazon S3 cloud storage.",
        "Integrate Braze email marketing automation and transaction queues to optimize client retention.",
        "Diagnose and optimize database queries and server latency for high-traffic Dubai portals."
      ]
    },
    {
      role: "Symfony Developer",
      company: "ProlixTechnikos",
      period: "11/2018 - 31/05/2026",
      location: "Rajkot, India",
      achievements: [
        "Engineered RESTful APIs with API Platform and Symfony for international enterprise products.",
        "Led upgrades of PHP and Symfony version architectures to maximize server response times and security.",
        "Collaborated with offshore project managers and clients in France and Australia on critical integrations.",
        "Managed database-related queries using DbWeaver and resolved relational database schema design tickets."
      ]
    },
    {
      role: "PHP Developer",
      company: "Vispan Solution Pvt. Ltd.",
      period: "03/2015 - 10/2018",
      location: "Rajkot, India",
      achievements: [
        "Worked on Magento-based e-commerce codebases and structured SOAP/REST API integrations.",
        "Created background scripts to fetch, parse, and synchronize data for US-based travel platforms (TravelStride).",
        "Participated in agile ceremonies and sprint planning with developers, project managers, and QA teams."
      ]
    },
    {
      role: "Developer",
      company: "Superior Techno.",
      period: "05/2014 - 10/2014",
      location: "Rajkot, India",
      achievements: [
        "Developed custom PHP websites and corporate modules with SQL databases.",
        "Maintained existing code configurations and completed customer bug fix tickets."
      ]
    }
  ];

  const filteredProjects = projectFilter === "all" 
    ? projects 
    : projects.filter(p => p.category === projectFilter);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      
      {/* BACKGROUND DECORATIONS */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-20%] h-[600px] w-[600px] rounded-full bg-cyan-900/15 blur-[150px]"></div>
        <div className="absolute bottom-[-10%] right-[-20%] h-[600px] w-[600px] rounded-full bg-violet-900/15 blur-[150px]"></div>
      </div>

      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 border-b border-white/5 bg-slate-950/75 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10">
          <a href="#" className="flex items-center gap-2 text-lg font-bold tracking-tight text-white transition hover:opacity-95">
            <span className="text-cyan-400 font-mono">&lt;</span>
            <span>Sagar Bhimani</span>
            <span className="text-cyan-400 font-mono">/&gt;</span>
          </a>
          
          <div className="hidden space-x-8 text-sm font-medium text-slate-300 md:flex">
            <a href="#about" className="transition hover:text-cyan-400">About</a>
            <a href="#skills" className="transition hover:text-cyan-400">Skills</a>
            <a href="#experience" className="transition hover:text-cyan-400">Experience</a>
            <a href="#projects" className="transition hover:text-cyan-400">Projects</a>
            <a href="#education" className="transition hover:text-cyan-400">Education</a>
          </div>

          <a 
            href="#contact" 
            className="rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-1.5 text-xs font-semibold tracking-wider text-cyan-300 uppercase transition hover:border-cyan-400 hover:bg-cyan-500/20"
          >
            Hire Me
          </a>
        </div>
      </nav>

      {/* MAIN CONTAINER */}
      <main className="relative z-10 mx-auto max-w-6xl px-6 py-8 md:px-10 md:py-16">
        
        {/* HERO SECTION */}
        <section id="about" className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:gap-12 items-center mb-20">
          
          {/* PROFILE CARD */}
          <div className="glass-panel rounded-3xl p-8 relative overflow-hidden border border-white/10 shadow-2xl">
            {/* Glow dot in corner */}
            <div className="absolute top-4 right-4 flex items-center gap-2 rounded-full bg-slate-900/80 px-3.5 py-1.5 border border-emerald-500/30 shadow-inner">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-ping"></span>
              <span className="absolute h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
              <span className="text-[10px] font-bold tracking-wider text-emerald-400 uppercase">Available</span>
            </div>

            <div className="flex flex-col items-center text-center sm:flex-row sm:text-left sm:items-start gap-6">
              {/* Profile Photo */}
              <div className="relative h-32 w-32 shrink-0 rounded-2xl overflow-hidden border-2 border-cyan-500/40 p-1 bg-slate-900 shadow-xl">
                {!imageError ? (
                  <img 
                    src="/sagar.jpg" 
                    alt="Sagar Bhimani" 
                    className="h-full w-full object-cover rounded-xl"
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-slate-900 text-2xl font-bold text-cyan-400 tracking-wider font-mono">
                    SB
                  </div>
                )}
              </div>

              <div>
                <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                  Sagar Bhimani
                </h1>
                <p className="mt-2 text-lg font-medium text-cyan-300 font-mono">
                  Senior Symfony Developer
                </p>
                <div className="mt-3 flex flex-wrap gap-2 justify-center sm:justify-start">
                  <span className="rounded-md bg-white/5 border border-white/5 px-2.5 py-0.5 text-xs text-slate-300">PHP 8</span>
                  <span className="rounded-md bg-white/5 border border-white/5 px-2.5 py-0.5 text-xs text-slate-300">Symfony</span>
                  <span className="rounded-md bg-white/5 border border-white/5 px-2.5 py-0.5 text-xs text-slate-300">API Platform</span>
                  <span className="rounded-md bg-white/5 border border-white/5 px-2.5 py-0.5 text-xs text-slate-300">PostgreSQL</span>
                </div>
              </div>
            </div>

            <hr className="my-6 border-white/5" />

            <p className="text-sm leading-6 text-slate-300">
              Results-driven Senior Backend Developer with **10+ years of experience** in PHP development, Symfony framework, API Platform, REST/SOAP APIs, and enterprise backend systems. Strong expertise in building scalable APIs, integrating cloud services, and optimizing database performance.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <a
                href="/Sagar_Bhimani_CV.pdf"
                download="Sagar_Bhimani_CV.pdf"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-cyan-500/10 hover:shadow-cyan-500/20 hover:from-cyan-400 hover:to-blue-500 transition"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download CV
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-xs font-bold uppercase tracking-wider text-slate-200 hover:border-cyan-400/40 hover:text-cyan-300 transition"
              >
                Get In Touch
              </a>
            </div>
          </div>

          {/* INTERACTIVE CODE TERMINAL */}
          <div className="glass-panel rounded-3xl overflow-hidden border border-white/10 shadow-2xl flex flex-col h-[380px]">
            {/* Terminal Header */}
            <div className="flex items-center justify-between bg-slate-950/80 px-5 py-3.5 border-b border-white/5">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-rose-500"></span>
                <span className="h-3 w-3 rounded-full bg-amber-500"></span>
                <span className="h-3 w-3 rounded-full bg-emerald-500"></span>
              </div>
              <div className="flex gap-2">
                <button 
                  onClick={() => setActiveTab("controller")} 
                  className={`rounded-md px-2.5 py-1 text-xs font-mono transition ${activeTab === "controller" ? "bg-cyan-500/10 text-cyan-400 border border-cyan-400/20" : "text-slate-400 hover:text-slate-200"}`}
                >
                  SagarController.php
                </button>
                <button 
                  onClick={() => setActiveTab("json")} 
                  className={`rounded-md px-2.5 py-1 text-xs font-mono transition ${activeTab === "json" ? "bg-cyan-500/10 text-cyan-400 border border-cyan-400/20" : "text-slate-400 hover:text-slate-200"}`}
                >
                  profile.json
                </button>
                <button 
                  onClick={() => setActiveTab("yaml")} 
                  className={`rounded-md px-2.5 py-1 text-xs font-mono transition ${activeTab === "yaml" ? "bg-cyan-500/10 text-cyan-400 border border-cyan-400/20" : "text-slate-400 hover:text-slate-200"}`}
                >
                  services.yaml
                </button>
              </div>
            </div>

            {/* Terminal Body */}
            <div className="p-6 overflow-y-auto flex-1 font-mono text-xs leading-5 bg-slate-950/50 text-slate-300">
              {activeTab === "controller" && (
                <pre>
                  <span className="text-violet-400">namespace</span> App\Controller;<br />
                  <span className="text-violet-400">use</span> App\Entity\Developer;<br />
                  <span className="text-violet-400">use</span> Symfony\Component\Routing\Annotation\Route;<br /><br />
                  <span className="text-emerald-400">#[Route(&apos;/api/v1/developer/sagar&apos;, methods: [&apos;GET&apos;])]</span><br />
                  <span className="text-violet-400">class</span> <span className="text-blue-400">SagarBhimaniController</span> &#123;<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-violet-400">public function</span> <span className="text-blue-400">__invoke</span>(): array &#123;<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-violet-400">return</span> [<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-amber-400">&apos;experience&apos;</span> =&gt; <span className="text-teal-400">&apos;10+ Years&apos;</span>,<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-amber-400">&apos;specialty&apos;</span> =&gt; <span className="text-teal-400">&apos;Symfony Backend Systems&apos;</span>,<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-amber-400">&apos;databases&apos;</span> =&gt; [<span className="text-teal-400">&apos;PostgreSQL&apos;</span>, <span className="text-teal-400">&apos;MySQL&apos;</span>],<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-amber-400">&apos;location&apos;</span> =&gt; <span className="text-teal-400">&apos;Rajkot, Gujarat, India&apos;</span>,<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-amber-400">&apos;active_status&apos;</span> =&gt; <span className="text-emerald-400">true</span><br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;];<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&#125;<br />
                  &#125;<span className="terminal-cursor"></span>
                </pre>
              )}

              {activeTab === "json" && (
                <pre>
                  &#123;<br />
                  &nbsp;&nbsp;<span className="text-amber-400">&quot;name&quot;</span>: <span className="text-teal-400">&quot;Sagar Bhimani&quot;</span>,<br />
                  &nbsp;&nbsp;<span className="text-amber-400">&quot;role&quot;</span>: <span className="text-teal-400">&quot;Senior Backend Developer&quot;</span>,<br />
                  &nbsp;&nbsp;<span className="text-amber-400">&quot;phone&quot;</span>: <span className="text-teal-400">&quot;+91 94295 66166&quot;</span>,<br />
                  &nbsp;&nbsp;<span className="text-amber-400">&quot;email&quot;</span>: <span className="text-teal-400">&quot;sbhimani1991@gmail.com&quot;</span>,<br />
                  &nbsp;&nbsp;<span className="text-amber-400">&quot;languages&quot;</span>: [<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-teal-400">&quot;English&quot;</span>, <span className="text-teal-400">&quot;Hindi&quot;</span>, <span className="text-teal-400">&quot;Gujarati&quot;</span><br />
                  &nbsp;&nbsp;],<br />
                  &nbsp;&nbsp;<span className="text-amber-400">&quot;education&quot;</span>: &#123;<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-amber-400">&quot;MCA&quot;</span>: <span className="text-teal-400">&quot;B. H. Gardi College, Rajkot (2011-2014)&quot;</span>,<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-amber-400">&quot;BSc_IT&quot;</span>: <span className="text-teal-400">&quot;T.N. Rao College, Rajkot (2008-2011)&quot;</span><br />
                  &nbsp;&nbsp;&#125;<br />
                  &#125;<span className="terminal-cursor"></span>
                </pre>
              )}

              {activeTab === "yaml" && (
                <pre>
                  <span className="text-blue-400">services:</span><br />
                  &nbsp;&nbsp;<span className="text-blue-400">App\Service\BackendOptimizer:</span><br />
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-400">arguments:</span><br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-amber-400">$experienceYears:</span> <span className="text-emerald-400">10</span><br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-amber-400">$primaryFramework:</span> <span className="text-teal-400">&apos;Symfony&apos;</span><br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-amber-400">$apiPlatformIntegration:</span> <span className="text-emerald-400">true</span><br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-amber-400">$databaseSystem:</span> <span className="text-teal-400">&apos;PostgreSQL&apos;</span><br />
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-400">tags:</span><br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- &#123; <span className="text-blue-400">name:</span> <span className="text-teal-400">&apos;kernel.event_listener&apos;</span>, <span className="text-blue-400">event:</span> <span className="text-teal-400">&apos;kernel.request&apos;</span> &#125;<span className="terminal-cursor"></span>
                </pre>
              )}
            </div>
          </div>
        </section>

        {/* STATISTICS BANNER */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          <div className="glass-panel p-6 rounded-2xl text-center border border-white/5">
            <h3 className="text-3xl font-extrabold text-cyan-400">10+</h3>
            <p className="mt-1 text-xs text-slate-400 uppercase tracking-wider font-semibold">Years Experience</p>
          </div>
          <div className="glass-panel p-6 rounded-2xl text-center border border-white/5">
            <h3 className="text-3xl font-extrabold text-violet-400">5+</h3>
            <p className="mt-1 text-xs text-slate-400 uppercase tracking-wider font-semibold">Global Markets</p>
          </div>
          <div className="glass-panel p-6 rounded-2xl text-center border border-white/5">
            <h3 className="text-3xl font-extrabold text-emerald-400">100%</h3>
            <p className="mt-1 text-xs text-slate-400 uppercase tracking-wider font-semibold">REST API Standards</p>
          </div>
          <div className="glass-panel p-6 rounded-2xl text-center border border-white/5">
            <h3 className="text-3xl font-extrabold text-cyan-400">30+</h3>
            <p className="mt-1 text-xs text-slate-400 uppercase tracking-wider font-semibold">Cloud Integrations</p>
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="mb-20 scroll-mt-24">
          <div className="mb-8 text-center md:text-left">
            <p className="text-xs uppercase tracking-[0.25em] text-cyan-400 font-bold">What I Work With</p>
            <h2 className="mt-2 text-3xl font-bold text-white tracking-tight">Technical Skills</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {skillCategories.map((category) => (
              <div 
                key={category.title} 
                className="glass-panel rounded-2xl p-6 border border-white/5 hover:border-white/10 hover:shadow-xl hover:-translate-y-1 transition duration-300"
              >
                <h3 className="text-lg font-bold text-white mb-5 flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-400"></span>
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill) => (
                    <div 
                      key={skill.name} 
                      className={`rounded-lg px-3 py-1.5 text-xs font-medium border flex items-center justify-between w-full ${
                        skill.level === "Expert" 
                          ? "bg-cyan-500/5 border-cyan-400/20 text-cyan-300" 
                          : skill.level === "Advanced"
                          ? "bg-violet-500/5 border-violet-400/20 text-violet-300"
                          : "bg-slate-800/20 border-slate-700/40 text-slate-300"
                      }`}
                    >
                      <span>{skill.name}</span>
                      <span className="text-[10px] uppercase tracking-wider font-semibold opacity-70">
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* TIMELINE EXPERIENCE SECTION */}
        <section id="experience" className="mb-20 scroll-mt-24">
          <div className="mb-10 text-center md:text-left">
            <p className="text-xs uppercase tracking-[0.25em] text-cyan-400 font-bold">My Career Journey</p>
            <h2 className="mt-2 text-3xl font-bold text-white tracking-tight">Professional Experience</h2>
          </div>

          <div className="relative border-l border-slate-800 ml-4 md:ml-6 space-y-12">
            {experiences.map((exp, idx) => (
              <div key={idx} className="relative pl-8 md:pl-10">
                {/* Timeline node dot */}
                <span className="absolute -left-[9px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-slate-950 border-2 border-cyan-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-400"></span>
                </span>

                <div className="glass-panel rounded-2xl p-6 border border-white/5 hover:border-cyan-500/20 hover:shadow-lg transition">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                    <div>
                      <h3 className="text-lg font-bold text-white flex items-center gap-2">
                        {exp.role} 
                        <span className="text-sm font-medium text-cyan-400">@ {exp.company}</span>
                      </h3>
                      <p className="text-xs text-slate-400 font-medium mt-1 flex items-center gap-2">
                        <svg className="h-3 w-3 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {exp.location}
                      </p>
                    </div>
                    <span className="rounded-full bg-slate-900 border border-white/10 px-3.5 py-1 text-xs font-mono font-medium text-slate-300 self-start md:self-center">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="mt-5 space-y-2.5 text-xs text-slate-300 leading-5">
                    {exp.achievements.map((ach, aIdx) => (
                      <li key={aIdx} className="flex items-start gap-2.5">
                        <span className="mt-1.5 text-cyan-400 select-none text-[8px]">•</span>
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="mb-20 scroll-mt-24">
          <div className="mb-8 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div className="text-center md:text-left">
              <p className="text-xs uppercase tracking-[0.25em] text-cyan-400 font-bold">Featured Works</p>
              <h2 className="mt-2 text-3xl font-bold text-white tracking-tight">Project Portfolio</h2>
            </div>
            
            {/* Filter buttons */}
            <div className="flex flex-wrap gap-2 justify-center">
              {["all", "dubai", "australia", "france", "usa"].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setProjectFilter(cat)}
                  className={`rounded-lg px-3 py-1.5 text-xs font-semibold tracking-wide uppercase transition ${
                    projectFilter === cat 
                      ? "bg-cyan-500 text-slate-950 font-bold shadow-md" 
                      : "bg-slate-900 text-slate-300 border border-white/5 hover:border-white/10"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid gap-6 md:grid-cols-2">
            {filteredProjects.map((project, idx) => (
              <div 
                key={idx} 
                className="glass-panel rounded-2xl p-6 border border-white/5 hover:border-cyan-500/20 hover:shadow-2xl hover:-translate-y-1 transition duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-wider">{project.client}</span>
                      <h3 className="text-lg font-bold text-white mt-1">{project.title}</h3>
                    </div>
                    {project.url && (
                      <a 
                        href={project.url} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="rounded-full bg-slate-900 border border-white/10 p-2 text-slate-400 hover:text-cyan-400 transition"
                      >
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    )}
                  </div>
                  <p className="mt-3 text-xs leading-5 text-slate-300">{project.description}</p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="rounded bg-white/5 border border-white/5 px-2 py-0.5 text-[10px] font-medium text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* EDUCATION & LANGUAGES */}
        <section id="education" className="grid gap-6 md:grid-cols-[1.3fr_0.7fr] mb-20 scroll-mt-24">
          
          {/* Education Card */}
          <div className="glass-panel rounded-2xl p-6 border border-white/5">
            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <svg className="h-5 w-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              </svg>
              Education
            </h3>
            
            <div className="space-y-6">
              <div className="border-l-2 border-slate-800 pl-4">
                <h4 className="text-sm font-bold text-white">Master of Computer Applications (M.C.A)</h4>
                <p className="text-xs text-cyan-300 font-medium mt-1">B. H. Gardi College of Engineering & Technology, Rajkot</p>
                <p className="text-xs text-slate-400 font-mono mt-1">2011 - 2014</p>
              </div>

              <div className="border-l-2 border-slate-800 pl-4">
                <h4 className="text-sm font-bold text-white">Bachelor of Science in Information Technology (B.Sc IT)</h4>
                <p className="text-xs text-cyan-300 font-medium mt-1">T.N. Rao College, Rajkot</p>
                <p className="text-xs text-slate-400 font-mono mt-1">2008 - 2011</p>
              </div>
            </div>
          </div>

          {/* Languages Card */}
          <div className="glass-panel rounded-2xl p-6 border border-white/5 flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                <svg className="h-5 w-5 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 11.37 7.363 16.5 3 18.25" />
                </svg>
                Languages
              </h3>
              
              <div className="space-y-3.5">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-200">English</span>
                  <span className="rounded bg-cyan-500/10 border border-cyan-400/20 px-2 py-0.5 text-[10px] font-bold text-cyan-400">Professional</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-200">Hindi</span>
                  <span className="rounded bg-violet-500/10 border border-violet-400/20 px-2 py-0.5 text-[10px] font-bold text-violet-400">Fluent</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-200">Gujarati</span>
                  <span className="rounded bg-emerald-500/10 border border-emerald-400/20 px-2 py-0.5 text-[10px] font-bold text-emerald-400">Native</span>
                </div>
              </div>
            </div>
            
            <div className="mt-8 rounded-xl bg-slate-900/60 border border-white/5 p-4 text-[10px] text-slate-400 leading-4 text-center">
              Available for localized contracts in Rajkot or remote positions globally.
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="mb-10 scroll-mt-24">
          <div className="mb-8 text-center">
            <p className="text-xs uppercase tracking-[0.25em] text-cyan-400 font-bold">Get In Touch</p>
            <h2 className="mt-2 text-3xl font-bold text-white tracking-tight">Let&apos;s Build Something Together</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-[0.9fr_1.1fr]">
            
            {/* Contact Details Card */}
            <div className="glass-panel rounded-2xl p-6 border border-white/5 flex flex-col justify-between gap-6">
              <div className="space-y-6">
                <div>
                  <h3 className="text-base font-bold text-white">Direct Contacts</h3>
                  <p className="text-xs text-slate-400 mt-1 leading-5">Feel free to contact me directly via phone call, email, or GitHub for immediate freelance or fulltime hiring inquiries.</p>
                </div>

                <div className="space-y-4">
                  {/* Email row */}
                  <div className="flex items-center justify-between gap-2 rounded-xl bg-slate-950/40 border border-white/5 p-3">
                    <div className="flex items-center gap-3">
                      <div className="rounded-lg bg-cyan-500/10 p-2 text-cyan-300">
                        <svg className="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div className="text-left">
                        <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">Email Address</p>
                        <a href="mailto:sbhimani1991@gmail.com" className="text-xs font-bold text-white hover:text-cyan-300 transition">sbhimani1991@gmail.com</a>
                      </div>
                    </div>
                    <button 
                      onClick={copyEmail}
                      className="rounded-lg bg-slate-900 border border-white/10 px-2.5 py-1.5 text-[10px] font-bold text-slate-300 hover:text-white transition shrink-0"
                    >
                      {copiedEmail ? "Copied" : "Copy"}
                    </button>
                  </div>

                  {/* Phone row */}
                  <div className="flex items-center justify-between gap-2 rounded-xl bg-slate-950/40 border border-white/5 p-3">
                    <div className="flex items-center gap-3">
                      <div className="rounded-lg bg-violet-500/10 p-2 text-violet-300">
                        <svg className="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div className="text-left">
                        <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">Phone Number</p>
                        <a href="tel:+919429566166" className="text-xs font-bold text-white hover:text-violet-300 transition">+91 94295 66166</a>
                      </div>
                    </div>
                    <button 
                      onClick={copyPhone}
                      className="rounded-lg bg-slate-900 border border-white/10 px-2.5 py-1.5 text-[10px] font-bold text-slate-300 hover:text-white transition shrink-0"
                    >
                      {copiedPhone ? "Copied" : "Copy"}
                    </button>
                  </div>

                  {/* Location row */}
                  <div className="flex items-center gap-3 rounded-xl bg-slate-950/40 border border-white/5 p-3">
                    <div className="rounded-lg bg-emerald-500/10 p-2 text-emerald-300">
                      <svg className="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div className="text-left">
                      <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">Location</p>
                      <p className="text-xs font-bold text-white">Rajkot, Gujarat, India</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* GitHub Link */}
              <a 
                href="https://github.com/bhimanisagar77-collab" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl bg-slate-900 border border-white/10 px-5 py-3 text-xs font-bold uppercase tracking-wider text-slate-200 hover:border-cyan-400/40 hover:text-cyan-300 transition"
              >
                <svg className="h-4.5 w-4.5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" clipRule="evenodd" />
                </svg>
                GitHub Profile
              </a>
            </div>

            {/* Simulated Contact Form Card */}
            <form onSubmit={(e) => e.preventDefault()} className="glass-panel rounded-2xl p-6 border border-white/5 flex flex-col gap-4">
              <h3 className="text-base font-bold text-white">Send a Quick Message</h3>
              
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex flex-col gap-1.5 text-left">
                  <label htmlFor="name-input" className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Your Name</label>
                  <input 
                    id="name-input"
                    type="text" 
                    placeholder="John Doe" 
                    className="rounded-lg bg-slate-950 border border-white/5 px-3.5 py-2 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400/50"
                  />
                </div>
                <div className="flex flex-col gap-1.5 text-left">
                  <label htmlFor="email-input" className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Email Address</label>
                  <input 
                    id="email-input"
                    type="email" 
                    placeholder="john@example.com" 
                    className="rounded-lg bg-slate-950 border border-white/5 px-3.5 py-2 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400/50"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5 text-left">
                <label htmlFor="subject-input" className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Subject</label>
                <input 
                  id="subject-input"
                  type="text" 
                  placeholder="Opportunity for Senior Symfony Role" 
                  className="rounded-lg bg-slate-950 border border-white/5 px-3.5 py-2 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400/50"
                />
              </div>

              <div className="flex flex-col gap-1.5 text-left">
                <label htmlFor="message-input" className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Message Description</label>
                <textarea 
                  id="message-input"
                  rows={4} 
                  placeholder="Hi Sagar, I reviewed your portfolio and would love to talk about..." 
                  className="rounded-lg bg-slate-950 border border-white/5 px-3.5 py-2.5 text-xs text-white placeholder-slate-600 resize-none focus:outline-none focus:border-cyan-400/50"
                ></textarea>
              </div>

              <button
                type="submit"
                onClick={() => {
                  // Quick feedback for mock send
                  alert("Thank you for your message! This form is a frontend demonstration. Please reach out directly at sbhimani1991@gmail.com for inquiries.");
                }}
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-500 px-5 py-3 text-xs font-bold uppercase tracking-wider text-slate-950 hover:bg-cyan-400 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="border-t border-white/5 py-8 text-center text-[10px] tracking-wide text-slate-500 uppercase">
        <div className="mx-auto max-w-6xl px-6 flex flex-col md:flex-row md:justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} Sagar Bhimani. All rights reserved.</p>
          <p>Built with Next.js, React 19, and Tailwind CSS v4</p>
        </div>
      </footer>
    </div>
  );
}
