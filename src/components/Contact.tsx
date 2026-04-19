const links = [
  {
    label: 'Email',
    value: 'julianq.js@gmail.com',
    href: 'mailto:julianq.js@gmail.com',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/haxagonus',
    href: 'https://www.linkedin.com/in/haxagonus/',
  },
  {
    label: 'GitHub',
    value: 'github.com/HaxagonusD',
    href: 'https://github.com/HaxagonusD',
  },
]

export default function Contact() {
  return (
    <>
      <section className="contact" id="contact">
        <div className="contact__inner">
          <div>
            <p className="section-label">Contact</p>
            <h2 className="contact__title">
              Let&apos;s work<br />
              <span>together.</span>
            </h2>
          </div>
          <div className="contact__links">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('mailto') ? undefined : '_blank'}
                rel={link.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                className="contact__link"
              >
                <span>
                  <span className="contact__link-label">{link.label}</span>
                  {link.value}
                </span>
                <span className="contact__link-arrow">→</span>
              </a>
            ))}
          </div>
        </div>
      </section>
      <footer className="footer">
        <div className="footer__inner">
          <span className="footer__copy">© 2026 Julian Quezada</span>
          <div className="footer__links">
            <a href="https://github.com/HaxagonusD" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/haxagonus/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="mailto:julianq.js@gmail.com">Email</a>
          </div>
        </div>
      </footer>
    </>
  )
}
