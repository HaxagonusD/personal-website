const jobs = [
  {
    company: 'LinkedIn',
    title: 'Junior Software Engineer',
    team: 'Spark Infrastructure',
    dates: 'Feb 2022 – May 2024',
    languages: ['Python', 'Java', 'Scala'],
    tools: ['Apache Spark', 'HDFS', 'Grafana', 'SQL'],
    bullets: [
      {
        text: 'Built a Grafana dashboard to monitor Spark deployments across all pods and environments — used weekly by on-call engineers to instantly identify failing jobs.',
        metrics: ['60–100 jobs tracked per pod', 'weekly on-call usage'],
      },
      {
        text: 'Implemented caching for the Spark History Server, cutting job UI load time from ~10 minutes to near-instant across the data org.',
        metrics: ['~10 min → near-instant', '1,000+ engineers benefiting'],
      },
      {
        text: 'Built a compute optimization pipeline that analyzed Spark DAGs to detect redundant computations, mapped them to source repos, and auto-notified owners.',
        metrics: ['~$1M/year in compute savings'],
      },
    ],
  },
  {
    company: 'KBRA',
    title: 'Data Engineer',
    team: 'Cyclops — 2-person team',
    dates: 'May 2024 – Mar 2026',
    languages: ['Python', 'SQL'],
    tools: ['Python Dash', 'Playwright', 'Snowflake', 'AWS S3', 'GitLab CI/CD'],
    bullets: [
      {
        text: 'Built Cyclops — an internal Python Dash app used daily by the content management team to surface bond securities mismatches and automate CUSIP validation.',
        metrics: ['6 daily active users', 'replaced manual review process'],
      },
      {
        text: 'Migrated 39 tables (~20GB) from legacy SQL Server to AWS S3 and Snowflake with zero data loss. Redesigned ingestion pipeline from FTP to S3.',
        metrics: ['39 tables', '~20GB migrated', 'zero data loss'],
      },
      {
        text: 'Built a CI/CD validation tool using Playwright to automate post-deployment browser testing — catching version mismatches without manual verification.',
        metrics: [],
      },
      {
        text: 'Served as internal AI advocate. Evaluated Codex, Claude Code, and GitHub Copilot for company adoption and presented recommendations to leadership.',
        metrics: [],
      },
    ],
  },
]

export default function Experience() {
  return (
    <section className="experience" id="work">
      <div className="experience__header">
        <p className="section-label">Experience</p>
        <h2 className="experience__title">Where I&apos;ve built things.</h2>
      </div>
      <div className="experience__grid">
        {jobs.map((job) => (
          <div key={job.company} className="exp-card">
            <div className="exp-card__company">{job.company}</div>
            <div className="exp-card__title">{job.title}</div>
            <div className="exp-card__team">{job.team}</div>
            <div className="exp-card__dates">{job.dates}</div>
            <ul className="exp-card__bullets">
              {job.bullets.map((bullet, i) => (
                <li key={i} className="exp-card__bullet">
                  <span className="exp-card__bullet-dot" />
                  <div>
                    <p className="exp-card__bullet-text">{bullet.text}</p>
                    {bullet.metrics.length > 0 && (
                      <div className="exp-card__metrics">
                        {bullet.metrics.map((m) => (
                          <span key={m} className="exp-card__metric">{m}</span>
                        ))}
                      </div>
                    )}
                  </div>
                </li>
              ))}
            </ul>
            <div className="exp-card__stack">
              {[...job.languages, ...job.tools].map((t) => (
                <span key={t} className="exp-card__pill">{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
