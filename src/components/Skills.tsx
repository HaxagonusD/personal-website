const groups = [
  {
    label: 'Languages',
    skills: ['Python', 'Java', 'Scala', 'SQL', 'TypeScript', 'JavaScript', 'C', 'C++', 'Rust'],
  },
  {
    label: 'Data & Storage',
    skills: ['Apache Spark', 'HDFS', 'Snowflake', 'AWS S3', 'MongoDB', 'PostgreSQL', 'MySQL', 'Trino'],
  },
  {
    label: 'Cloud & Infra',
    skills: ['AWS EKS', 'AWS Secrets Manager', 'Google Cloud', 'Kubernetes', 'Docker', 'GitLab CI/CD'],
  },
  {
    label: 'Frameworks',
    skills: ['React', 'Next.js', 'Node.js', 'Express', 'Flask', 'React Native'],
  },
  {
    label: 'Tools',
    skills: ['Grafana', 'Python Dash', 'Playwright', 'Azkaban', 'Artifactory'],
  },
  {
    label: 'Specialties',
    skills: ['Spark DAG Optimization', 'Data Migration', 'Observability', 'CI/CD Pipelines'],
  },
]

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="skills__inner">
        <p className="section-label">Skills</p>
        <h2 className="skills__title">Tech Stack.</h2>
        <div className="skills__groups">
          {groups.map((group) => (
            <div key={group.label}>
              <p className="skills__group-label">{group.label}</p>
              <div className="skills__pills">
                {group.skills.map((skill) => (
                  <span key={skill} className="skills__pill">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
