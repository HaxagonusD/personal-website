export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__blob" />
      <div className="hero__blob-2" />
      <div className="hero__content">
        <h1 className="hero__name">
          Julian<br />
          <span>Quezada</span>
        </h1>
        <p className="hero__title">Software Engineer</p>
        <p className="hero__meta">
          New York, NY
          <span className="hero__meta-dot" />
          Open to new roles
        </p>
        <p className="hero__desc">
          I build infrastructure and tools that scale. Previously at LinkedIn
          (Spark Infrastructure) and KBRA (Data Engineering). I like hard
          problems and clean systems.
        </p>
        <div className="hero__actions">
          <a href="#work" className="btn btn-primary">View Work ↓</a>
          <a
            href="https://github.com/HaxagonusD"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            GitHub →
          </a>
        </div>
        <div className="hero__social">
          <a href="https://www.linkedin.com/in/haxagonus/" target="_blank" rel="noopener noreferrer">
            ↗ LinkedIn
          </a>
          <a href="mailto:julianq.js@gmail.com">↗ Email</a>
        </div>
      </div>
    </section>
  )
}
