export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__inner">
        <a href="/" className="navbar__logo">
          Julian
        </a>
        <ul className="navbar__links">
          <li><a href="#work">Work</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <a href="mailto:julianq.js@gmail.com" className="btn btn-primary navbar__cta">
          Say hello
        </a>
      </div>
    </nav>
  )
}
