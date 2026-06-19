import { useState, useEffect } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import './Navbar.css'
 
// Navigation links array — easy to add or remove links
const navLinks = [
  { label: 'About',    href: '#about'    },
  { label: 'Skills',   href: '#skills'   },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact',  href: '#contact'  },
]
 
function Navbar() {
  // State: tracks if mobile menu is open (true) or closed (false)
  const [menuOpen, setMenuOpen] = useState(false)
 
  // State: tracks if user has scrolled down (for navbar background)
  const [scrolled, setScrolled] = useState(false)
 
  // useEffect: adds a scroll listener to detect when user scrolls
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
 
  // Toggle the mobile menu open/closed
  const toggleMenu = () => setMenuOpen(!menuOpen)
 
  // Close menu when a link is clicked (mobile UX)
  const closeMenu = () => setMenuOpen(false)
 
  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className='container navbar__inner'>
 
        {/* LOGO / BRAND NAME */}
        <a href='#hero' className='navbar__logo'>

          &lt;OlaideAdebanjo /&gt;
        </a>
 
        {/* DESKTOP NAVIGATION LINKS */}
        <ul className='navbar__links'>
          {navLinks.map(link => (
            <li key={link.href}>
              <a href={link.href} className='navbar__link'>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
 
        {/* MOBILE HAMBURGER BUTTON */}
        <button
          className='navbar__hamburger'
          onClick={toggleMenu}
          aria-label='Toggle menu'
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
 
      {/* MOBILE DROPDOWN MENU */}
      <div className={`navbar__mobile ${menuOpen ? 'navbar__mobile--open' : ''}`}>
        {navLinks.map(link => (
          <a
            key={link.href}
            href={link.href}
            className='navbar__mobile-link'
            onClick={closeMenu}
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  )
}
 
export default Navbar

