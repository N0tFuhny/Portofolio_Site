import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";

export function generateStaticParams() { return projects.map(project => ({ slug: project.slug })); }

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find(item => item.slug === params.slug);

  if (!project) notFound();

  return (
    <>
      <header className="nav">
        <div className="container nav-inner">
          <Link className="brand" href="/">Rizky<span>_</span>Abdillah</Link>
          <Link className="button button-secondary" href="/">← Back to portfolio</Link>
        </div>
      </header>

      <main>
        <section className="section">
          <div className="container">
            <div className="eyebrow">{project.status} · {project.type}</div>
            <h1 style={{ maxWidth: 900 }}>{project.title}</h1>
            <p className="lead">{project.summary}</p>
            <div className="metric-row">
              {project.metrics?.map(metric => (
                <div className="metric" key={metric.label}>
                  <strong>{metric.value}</strong>
                  <span>{metric.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-alt">
          <div className="container">
            <div className="about-grid">
              <div>
                <div className="eyebrow">01 / overview</div>
                <h2>The problem</h2>
                <p>{project.problem}</p>
                <h2 style={{ marginTop: 50 }}>My role</h2>
                <ul>
                  {project.responsibilities.map(item => (
                    <li key={item} style={{ margin: "12px 0", color: "var(--muted)" }}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="eyebrow">02 / technical approach</div>
                <h2>How I worked</h2>
                <div className="experience-list">
                  {project.approach.map((item, index) => (
                    <div className="experience-item" key={item}>
                      <span className="mono" style={{ color: "var(--accent)" }}>0{index + 1}</span>
                      <p style={{ margin: "8px 0 0" }}>{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="eyebrow">03 / workflow</div>
            <h2>From input to evidence.</h2>
            <div className="timeline">
              {project.workflow.map((item, index) => (
                <div className="timeline-item" key={item}>
                  <div className="step mono">0{index + 1}</div>
                  <h3>{item}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-alt">
          <div className="container about-grid">
            <div>
              <div className="eyebrow">04 / decisions</div>
              <h2>Challenges & solutions</h2>
              {project.challenges.map((item, index) => (
                <div className="experience-item" key={item}>
                  <strong>{item}</strong>
                  <p>{project.solutions[index] || project.solutions[0]}</p>
                </div>
              ))}
            </div>
            <div>
              <div className="eyebrow">05 / reflection</div>
              <h2>What I learned</h2>
              {project.lessons.map(item => <p key={item}>↳ {item}</p>)}
              <div className="tag-list">
                {project.technologies.map(item => <span className="tag" key={item}>{item}</span>)}
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="eyebrow">06 / evidence</div>
            <h2>Project evidence.</h2>

            <div className="evidence-grid">
              {project.evidence.map(item => (
                <details className="evidence-card" key={item.title}>
                  <summary>
                    <div className="card-meta evidence-meta">
                      <span className="mono">EVIDENCE</span>
                    </div>
                    <h3>{item.title}</h3>
                    <p>{item.caption}</p>
                  </summary>
                  <img src={item.imageUrl} alt={item.title} />
                </details>
              ))}
            </div>

            <a className="button button-primary" style={{ marginTop: 28 }} href={project.githubUrl}>View GitHub ↗</a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <Link href="/">← Return home</Link>
          <span className="mono">Rizky Abdillah / AI ENGINEER</span>
        </div>
      </footer>
    </>
  );
}

