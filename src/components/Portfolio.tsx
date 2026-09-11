"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { profile } from "@/data/profile";
import { journey } from "@/data/journey";
import { projects } from "@/data/projects";

const nav = [["Journey","journey"],["Projects","projects"],["Skills","skills"],["Experience","experience"],["About","about"],["Contact","contact"]];
const skillGroups = [
  [
    "Programming",
    [
      "Python",
      "SQL",
      "JavaScript",
      "Java"
    ]
  ],
  [
    "Artificial Intelligence",
    [
      "Machine Learning",
      "Deep Learning",
      "Neural Networks",
      "Computer Vision",
      "Transfer Learning"
    ]
  ],
  [
    "Frameworks & Libraries",
    [
      "TensorFlow",
      "Keras",
      "Scikit-Learn",
      "Pandas",
      "NumPy",
      "MobileNetV2"
    ]
  ],
  [
    "Data & Model Development",
    [
      "Data Preprocessing",
      "Feature Engineering",
      "Model Training",
      "Model Evaluation",
      "Model Deployment"
    ]
  ],
  [
    "Backend & Web",
    [
      "FastAPI",
      "REST APIs",
      "JSON",
      "HTML5",
      "CSS3",
      "JavaScript",
      "LocalStorage"
    ]
  ],
  [
    "Tools",
    [
      "Git",
      "GitHub",
      "Docker",
      "Jupyter Notebook",
      "Google Colab",
      "VS Code"
    ]
  ],
  [
    "Collaboration",
    [
      "Project Management",
      "Agile Collaboration",
      "Cross-Functional Teamwork",
      "Technical Documentation",
      "Reporting",
      "Presentation"
    ]
  ]
];

export default function Portfolio() {
  const [dark, setDark] = useState(true); const [menu, setMenu] = useState(false);
  useEffect(() => { const saved = localStorage.getItem("theme"); const isDark = saved ? saved === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches; setDark(isDark); document.documentElement.dataset.theme = isDark ? "dark" : "light"; }, []);
  function toggleTheme() { const next = !dark; setDark(next); document.documentElement.dataset.theme = next ? "dark" : "light"; localStorage.setItem("theme", next ? "dark" : "light"); }
  return <>
  <header className="nav"><div className="container nav-inner"><Link className="brand" href="#home"><span className="brand-mark" aria-label="Rizky Abdillah logo"><svg viewBox="0 0 256 256" role="img" aria-hidden="true"><rect width="256" height="256" rx="54" fill="#05070A"/><path d="M64 186L128 54L192 186H64Z" fill="#F5F7FA"/></svg></span><span className="brand-word">Rizky Abdillah</span></Link><nav className={`nav-links ${menu?"open":""}`}>{nav.map(([label,id])=><a key={id} href={`#${id}`} onClick={()=>setMenu(false)}>{label}</a>)}</nav><div className="nav-actions"><button className="icon-btn" aria-label="Toggle color theme" onClick={toggleTheme}>{dark?"☼":"☾"}</button><a className="button button-primary" href={profile.resume}>Download CV</a><button className="menu-btn" aria-label="Toggle navigation" aria-expanded={menu} onClick={()=>setMenu(!menu)}>{menu?"×":"☰"}</button></div></div></header>
    <main>
      <section id="home" className="hero"><div className="container hero-grid"><div className="hero-copy reveal"><div className="eyebrow">{profile.eyebrow}</div><h1>{profile.headline}</h1><p className="mono">{profile.name}</p><p className="lead">{profile.intro}</p><div className="hero-actions"><a className="button button-primary" href="#projects">View selected projects ↗</a><a className="button button-secondary" href="#journey">Explore the journey</a></div><div className="socials"><a href={profile.github}>GitHub ↗</a><a href={profile.linkedin}>LinkedIn ↗</a><a href={`mailto:${profile.email}`}>Email ↗</a></div></div><div className="hero-side reveal"><div className="profile-photo-card"><img src="/images/profile-placeholder.png" alt="Rizky Abdillah portrait" className="profile-photo" /></div><div className="signal-card"><div className="signal-top"><span className="mono">CURRENT FOCUS</span><span className="dot" aria-label="Currently learning"/></div><div className="signal-row"><span className="muted">Direction</span><strong>AI Engineer</strong></div><div className="signal-row"><span className="muted">Evidence</span><strong>Research → systems</strong></div><div className="signal-row"><span className="muted">Approach</span><strong>Evidence-first</strong></div></div></div></div></section>
      <section id="journey" className="section"><div className="container"><div className="section-heading"><div className="eyebrow">01 / progression</div><h2>A clear progression in AI and systems thinking.</h2><p>Each project deepens my ability to move from model experimentation to reliable, evidence-based engineering decisions.</p></div><div className="timeline">{journey.map(item=><article className="timeline-item" key={item.id}><div className="step mono">{item.step}</div><h3>{item.title}</h3><p>{item.description}</p><div className="tag-list">{item.skills.map(skill=><span className="tag" key={skill}>{skill}</span>)}</div>{item.projectSlug&&<Link className="text-link mono" href={`/projects/${item.projectSlug}`} style={{display:"inline-block",marginTop:20}}>View evidence ↗</Link>}</article>)}</div></div></section>
      <section id="projects" className="section section-alt"><div className="container"><div className="section-heading"><div className="eyebrow">02 / selected work</div><h2>Focused projects with measurable outcomes.</h2><p>Each project combines a real technical challenge, a structured method, and clear evaluation to show how the work translates into practical value.</p></div><div className="project-grid">{projects.map((project,index)=><article className={`project-card ${index===0?"featured":""}`} key={project.slug}><div className="card-meta"><span className="mono">{project.status}</span><span>{project.type}</span></div><h3>{project.title}</h3><p>{project.summary}</p>{project.metrics&&<div className="metric-row">{project.metrics.slice(0,2).map(metric=><div className="metric" key={metric.label}><strong>{metric.value}</strong><span>{metric.label}</span></div>)}</div>}<div className="card-footer"><span className="muted">{project.role}</span>{project.demoUrl && <a className="text-link" href={project.demoUrl} aria-label={`Live Demo: ${project.title}`}>Live Demo</a>}<Link className="text-link" href={`/projects/${project.slug}`}>View Project →</Link></div></article>)}</div></div></section>
      <section id="skills" className="section"><div className="container"><div className="section-heading"><div className="eyebrow">03 / toolkit</div><h2>Technical skills grounded in practice.</h2><p>My toolkit is shaped by applied work in model development, evaluation, tooling, and cross-functional delivery.</p></div><div className="skills-grid">{skillGroups.map(([name,items])=><div className="skill-group" key={name as string}><h3>{name}</h3><ul>{(items as string[]).map(skill=><li key={skill}>{skill}</li>)}</ul></div>)}</div></div></section>
      <section id="experience" className="section section-alt"><div className="container experience"><div><div className="eyebrow">04 / experience</div><h2>Research, engineering, and collaboration in practice.</h2></div><div className="experience-list"><div className="experience-item"><strong>AI Engineer &amp; Project Manager · GizGOAT Health Recommendation Platform</strong><span className="muted">Capstone Project · Feb 2026 – July 2026. Led cross-functional project planning and implemented ML workflows, sleep quality prediction, and RESTful FastAPI services. Best model R² of approximately 0.69 on test data.</span></div><div className="experience-item"><strong>Deep Learning Intrusion Detection System · 2026</strong><span className="muted">Developed TensorFlow/Keras network traffic detection with preprocessing artifacts, desktop and CLI inference, model validation, and testing.</span></div><div className="experience-item"><strong>Certifications · Dicoding Indonesia · 2026</strong><a className="text-link" href="https://www.dicoding.com/certificates/GRX5WMDKYZ0M" target="_blank" rel="noopener noreferrer">Membangun Proyek Deep Learning Tingkat Mahir <span aria-hidden="true">&nearr;</span></a><a className="text-link" href="https://www.dicoding.com/certificates/GRX5WWJ8VZ0M" target="_blank" rel="noopener noreferrer">Fundamental Deep Learning <span aria-hidden="true">&nearr;</span></a></div></div></div></section>
      <section id="about" className="section"><div className="container about-grid"><div className="about-panel"><div className="eyebrow">05 / about</div><h2>Driven by thoughtful, applied AI work.</h2><p>I'm a final-year Informatics Engineering student pursuing a career in AI Engineering. My work focuses on building practical machine learning and deep learning solutions, from data preparation and model development to evaluation, deployment, and integration.</p></div><div className="about-panel"><div className="eyebrow">Working principles</div><p>01 — Make assumptions visible.</p><p>02 — Evaluate beyond a single metric.</p><p>03 — Treat integration as engineering.</p><p>04 — Keep learning in public through evidence.</p></div></div></section>
      <section id="contact" className="section section-alt"><div className="container contact"><div><div className="eyebrow">06 / contact</div><h2>Let’s build what comes next.</h2><p>I’m open to discussions around AI engineering, applied research, and early-career opportunities.</p></div><div className="contact-links"><a className="button button-primary" href={`mailto:${profile.email}`}>Get in touch ↗</a><a className="button button-secondary" href={profile.github}>GitHub ↗</a><a className="button button-secondary" href={profile.linkedin}>LinkedIn ↗</a></div></div></section>
    </main><footer className="footer"><div className="container footer-inner"><span>© 2026 Rizky Abdillah · AI Engineering Portfolio</span><span className="mono">Built to keep growing.</span></div></footer>
  </>;
}
