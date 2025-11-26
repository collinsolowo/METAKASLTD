import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaTools } from 'react-icons/fa';
import { useScrollTrigger } from '../../hooks/useScrollTrigger';
import { Container } from './Container';

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isScrolled = useScrollTrigger(50);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/projects', label: 'Projects' },
    { path: '/partners', label: 'Partners' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/careers', label: 'Careers' },
    { path: '/contact', label: 'Contact' }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav
      className={`fixed navbar top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-metakas-primary shadow-lg' : 'bg-metakas-primary shadow-lg'
      }`}
    >
      <Container>
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-3 group">
            <motion.div
              whileHover={{ rotate: 180 }}
              transition={{ duration: 0.3 }}
              className="w-10 h-10 bg-metakas-accent rounded-lg flex items-center justify-center"
            >
              <FaTools className="text-white text-xl" />
            </motion.div>
            <div className="flex flex-col">
              <span className="text-white font-heading font-bold text-xl">Metakas</span>
              <span className="text-metakas-accent text-xs font-medium">Engineering Solutions</span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  isActive(link.path)
                    ? 'bg-metakas-accent text-white'
                    : 'text-white hover:bg-metakas-slate hover:text-metakas-accent'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <Link to="/contact" className="hidden lg:block">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-metakas-accent text-white px-6 py-2.5 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Get A Quote
            </motion.button>
          </Link>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white p-2 rounded-md hover:bg-metakas-slate transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </Container>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-metakas-primary border-t border-metakas-slate"
          >
            <Container>
              <div className="py-4 space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block px-4 py-3 rounded-md text-sm font-medium transition-all ${
                      isActive(link.path)
                        ? 'bg-metakas-accent text-white'
                        : 'text-white hover:bg-metakas-slate'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  to="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full"
                >
                  <button className="w-full bg-metakas-accent text-white px-4 py-3 rounded-md font-medium mt-2">
                    Get A Quote
                  </button>
                </Link>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
