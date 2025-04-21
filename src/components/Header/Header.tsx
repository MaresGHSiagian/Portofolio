import { Container } from './styles'
import { BrowserRouter as Router } from 'react-router-dom'
import { NavHashLink, HashLink } from 'react-router-hash-link'
import { useState } from 'react'
import Resume from '../../assets/CV-Mares Hasudungan Siagian.pdf'
export function Header() {
  const [isActive, setActive] = useState(false)
  function toggleTheme() {
    let html = document.getElementsByTagName('html')[0]
    html.classList.toggle('light')
  }
  function closeMenu() {
    setActive(false)
  }
  return (
    <Container className="header-fixed">
      <Router>
        <HashLink smooth to="#home" className="logo">
          <span>{"Mares"}</span>
          <span>{" GH Siagian"}</span>
        </HashLink>
        <input
          onChange={toggleTheme}
          className="container_toggle"
          type="checkbox"
          id="switch"
          name="mode"
        />
        <label htmlFor="switch">Toggle</label>
        <nav className={isActive ? 'active' : ''}>
          <NavHashLink
            smooth
            to="#home"
            onClick={closeMenu}
            className={({ isActive }) => (isActive ? 'active-link' : '')}
          >
            Home
          </NavHashLink>
          <NavHashLink
            smooth
            to="#about"
            onClick={closeMenu}
            className={({ isActive }) => (isActive ? 'active-link' : '')}
          >
            About me
          </NavHashLink>
          <NavHashLink
            smooth
            to="#project"
            onClick={closeMenu}
            className={({ isActive }) => (isActive ? 'active-link' : '')}
          >
            Project
          </NavHashLink>
          <NavHashLink
            smooth
            to="#contact"
            onClick={closeMenu}
            className={({ isActive }) => (isActive ? 'active-link' : '')}
          >
            Contact
          </NavHashLink>
          <a href={Resume} download className="button">
            Resume
          </a>
        </nav>
        <div
          aria-expanded={isActive ? 'true' : 'false'}
          aria-haspopup="true"
          aria-label={isActive ? 'Fechar menu' : 'Abrir menu'}
          className={isActive ? 'menu active' : 'menu'}
          onClick={() => {
            setActive(!isActive)
          }}
        ></div>
      </Router>
    </Container>
  )
}
