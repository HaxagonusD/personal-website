import HoverCard from './HoverCard'

const projects = [
  {
    emoji: '🎬',
    name: 'Animation Helper',
    label: 'Video Annotation Tool',
    desc: 'Frame-by-frame video annotation tool for animators. Place named coordinate points across keyframes and export JSON to feed into an LLM for Remotion code generation.',
    color: 'proj-card--white',
    link: null,
  },
  {
    emoji: '📊',
    name: 'Cost Estimator',
    label: 'AI Cost Analytics',
    desc: 'OpenRouter cost analytics dashboard. Tracks spend, token usage, and model costs across providers with charts and breakdowns.',
    color: 'proj-card--warm',
    link: 'https://cost-estimator-dashboard-8v8yakez5-haxagonusdyad-5633s-projects.vercel.app',
  },
  {
    emoji: '🎵',
    name: 'Harmony Social',
    label: 'Oct 2020 – Jan 2021',
    desc: 'Music-focused social platform with Twilio and Spotify APIs. React SPA served by Express with a Node.js background worker.',
    color: 'proj-card--pale',
    link: null,
  },
  {
    emoji: '🍓',
    name: 'Strawberry Sound',
    label: 'Feb – Mar 2021',
    desc: 'Shazam-like song identification tool. Recognized 2,000+ songs in two weeks using Web APIs and AuD Music Recognition.',
    color: 'proj-card--orange',
    link: null,
  },
  {
    emoji: '🏆',
    name: 'Hackathon Wins',
    label: '2022 – 2023',
    desc: '1st at Citi Bank (Google Cloud Vision ML). 2nd at Valtech × Create Labs (GPT-3 resume summarizer). Two wins, two different stacks.',
    color: 'proj-card--white',
    link: null,
  },
]

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="projects__header">
        <p className="section-label">Projects</p>
        <h2 className="projects__title">Things I&apos;ve built.</h2>
      </div>
      <div className="projects__grid">
        {projects.map((p) => {
          const inner = (
            <>
              <div className="proj-card__visual">{p.emoji}</div>
              <div className="proj-card__body">
                <p className="proj-card__label">{p.label}</p>
                <h3 className="proj-card__name">{p.name}</h3>
                <p className="proj-card__desc">{p.desc}</p>
                {p.link && <span className="proj-card__live">↗ Live</span>}
              </div>
            </>
          )

          return p.link ? (
            <HoverCard
              key={p.name}
              as="a"
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`proj-card ${p.color}`}
            >
              {inner}
            </HoverCard>
          ) : (
            <HoverCard key={p.name} className={`proj-card ${p.color}`}>
              {inner}
            </HoverCard>
          )
        })}
      </div>
    </section>
  )
}
