import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Leaf } from 'lucide-react';
import './Header.css';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            // Scroll Spy Logic
            const sections = ['home', 'studios', 'services', 'packages', 'booking', 'about'];
            let current = '';

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    // If the top of the section is within the viewport (or close to it)
                    if (rect.top <= 120 && rect.bottom >= 120) {
                        current = section;
                        break;
                    }
                }
            }
            if (current) {
                setActiveSection(current);
            }
        };
        window.addEventListener('scroll', handleScroll);
        // Initial check
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        setIsOpen(false);
        const element = document.getElementById(id);
        if (element) {
            const headerOffset = 100;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
            setActiveSection(id);
        }
    };

    const navLinks = [
        { name: 'Home', id: 'home' },
        { name: 'Studios', id: 'studios' },
        { name: 'Services', id: 'services' },
        { name: 'Packages', id: 'packages' },
        { name: 'Booking', id: 'booking' },
        { name: 'About', id: 'about' },
    ];

    return (
        <header className={`header ${scrolled ? 'scrolled glass' : ''} white-nav`}>
            <div className="container header-content">
                <Link to="/" onClick={() => scrollToSection('home')} className="logo">
                    <img src="/images/optimized/logo_chamundi.webp" alt="Chamundi Yoga" className="logo-img" />
                    <span className="logo-text">
                        <span className="logo-main">Yoga Retreat</span>
                        <span className="logo-sub">Chamundi Hill Palace</span>
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="desktop-nav">
                    {navLinks.map((link) => (
                        <button
                            key={link.id}
                            onClick={() => scrollToSection(link.id)}
                            className={`nav-link-btn ${activeSection === link.id ? 'active' : ''}`}
                            style={{
                                background: 'none',
                                border: 'none',
                                cursor: 'pointer',
                                fontSize: '1rem',
                                fontFamily: 'inherit',
                                position: 'relative',
                                fontWeight: activeSection === link.id ? '600' : '500',
                                color: 'inherit'
                            }}
                        >
                            {link.name}
                            {activeSection === link.id && (
                                <span style={{
                                    position: 'absolute',
                                    bottom: '-4px',
                                    left: '0',
                                    width: '100%',
                                    height: '2px',
                                    backgroundColor: 'var(--primary-color, green)',
                                    transition: 'width 0.3s ease'
                                }}></span>
                            )}
                        </button>
                    ))}
                    <button onClick={() => scrollToSection('booking')} className="btn btn-primary">Book Now</button>
                </nav>

                {/* Mobile Menu Button */}
                <button className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

                {/* Mobile Nav */}
                <div className={`mobile-nav ${isOpen ? 'open' : ''}`}>
                    {navLinks.map((link) => (
                        <button
                            key={link.id}
                            onClick={() => scrollToSection(link.id)}
                            className="mobile-link"
                            style={{
                                background: 'none',
                                border: 'none',
                                cursor: 'pointer',
                                width: '100%',
                                textAlign: 'left',
                                color: activeSection === link.id ? 'var(--primary-color)' : 'inherit',
                                fontWeight: activeSection === link.id ? '700' : '600'
                            }}
                        >
                            {link.name}
                        </button>
                    ))}
                    <button onClick={() => scrollToSection('booking')} className="btn btn-primary">Book Now</button>
                </div>
            </div>
        </header>
    );
};

export default Header;
