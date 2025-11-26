import { Link } from 'react-router-dom';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaTwitter, FaFacebook, FaTools } from 'react-icons/fa';
import { Container } from './Container';

export const Footer = () => {
  return (
    <footer className="bg-metakas-primary text-white">
      <Container>
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-metakas-accent rounded-lg flex items-center justify-center">
                <FaTools className="text-white text-xl" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-xl">Metakas</span>
                <span className="text-metakas-accent text-xs">Engineering Solutions</span>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Engineering Solutions for Sustainable Progress. Delivering excellence in engineering, procurement, and project management across Nigeria.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="w-9 h-9 bg-metakas-slate rounded-full flex items-center justify-center hover:bg-metakas-accent transition-colors" aria-label="LinkedIn">
                <FaLinkedin className="text-white" />
              </a>
              <a href="#" className="w-9 h-9 bg-metakas-slate rounded-full flex items-center justify-center hover:bg-metakas-accent transition-colors" aria-label="Twitter">
                <FaTwitter className="text-white" />
              </a>
              <a href="#" className="w-9 h-9 bg-metakas-slate rounded-full flex items-center justify-center hover:bg-metakas-accent transition-colors" aria-label="Facebook">
                <FaFacebook className="text-white" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['About', 'Services', 'Projects', 'Partners', 'Careers', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase()}`}
                    className="text-gray-300 hover:text-metakas-accent transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              {[
                'Engineering Solutions',
                'Procurement',
                'Project Management',
                'Maintenance Services',
                'Manufacturing',
                'Manpower Solutions'
              ].map((item) => (
                <li key={item}>
                  <Link
                    to="/services"
                    className="text-gray-300 hover:text-metakas-accent transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-metakas-accent mt-1 flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  Lagos, Nigeria
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <FaPhone className="text-metakas-accent flex-shrink-0" />
                <a href="tel:+2341234567890" className="text-gray-300 hover:text-metakas-accent transition-colors text-sm">
                  +234 123 456 7890
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <FaEnvelope className="text-metakas-accent flex-shrink-0" />
                <a href="mailto:info@metakas.ng" className="text-gray-300 hover:text-metakas-accent transition-colors text-sm">
                  info@metakas.ng
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Container>

      <div className="border-t border-metakas-slate">
        <Container>
          <div className="py-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Metakas Limited. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-400 hover:text-metakas-accent text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-metakas-accent text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
};
