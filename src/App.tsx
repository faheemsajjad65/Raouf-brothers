import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, 
  X, 
  Phone, 
  Mail, 
  MapPin, 
  ChevronRight, 
  ArrowRight,
  CheckCircle2,
  Globe,
  Award,
  Users,
  Factory,
  MessageSquare,
  Instagram,
  Linkedin,
  Facebook,
  Twitter
} from 'lucide-react';

// Pages
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import About from './pages/About';
import Industries from './pages/Industries';
import Quality from './pages/Quality';
import Contact from './pages/Contact';

// Components
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'Industries', path: '/industries' },
    { name: 'Quality', path: '/quality' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isHomePage = location.pathname === '/';
  const navBgClass = scrolled || !isHomePage ? 'bg-white shadow-md py-2' : 'bg-transparent py-4';
  const navTextClass = scrolled || !isHomePage ? 'text-gray-900' : 'text-white';
  const navLogoClass = scrolled || !isHomePage ? 'brightness-100' : 'brightness-0 invert';

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${navBgClass}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img 
              src="input_file_1.png" 
              alt="Raouf Brothers Logo" 
              className={`h-12 w-auto transition-all duration-300 ${navLogoClass}`}
            />
          </Link>
 
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-bold transition-colors hover:text-brand-primary ${
                  location.pathname === link.path 
                    ? 'text-brand-primary' 
                    : navTextClass
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-brand-primary text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-green-600 transition-all shadow-lg hover:shadow-green-200"
            >
              Request Quote
            </Link>
          </div>
 
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${isOpen ? 'text-gray-900' : navTextClass} p-2 transition-colors duration-300`}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-4 text-base font-bold rounded-md transition-colors ${
                    location.pathname === link.path 
                      ? 'text-brand-primary bg-green-50' 
                      : 'text-gray-900 hover:text-brand-primary hover:bg-gray-50'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center bg-brand-primary text-white px-4 py-3 rounded-md text-base font-bold mt-4"
              >
                Request Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center mb-6">
              <img 
                src="input_file_1.png" 
                alt="Raouf Brothers Logo" 
                className="h-12 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Leading global manufacturer of premium zipper solutions and components. 
              Committed to quality, precision, and durability since 1995.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-brand-primary transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-brand-primary transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-brand-primary transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-brand-primary transition-colors"><Instagram size={20} /></a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link to="/products" className="hover:text-white transition-colors">All Products</Link></li>
              <li><Link to="/industries" className="hover:text-white transition-colors">Industries Served</Link></li>
              <li><Link to="/quality" className="hover:text-white transition-colors">Quality Control</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">Our Story</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Request a Quote</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Products</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link to="/products/nylon-zippers" className="hover:text-white transition-colors">Nylon Zippers</Link></li>
              <li><Link to="/products/metal-zippers" className="hover:text-white transition-colors">Metal Zippers</Link></li>
              <li><Link to="/products/plastic-zippers" className="hover:text-white transition-colors">Plastic Zippers</Link></li>
              <li><Link to="/products/sliders" className="hover:text-white transition-colors">Custom Sliders</Link></li>
              <li><Link to="/products/pullers" className="hover:text-white transition-colors">Branded Pullers</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-brand-primary shrink-0" />
                <span>123 Industrial Zone, Manufacturing Hub, Global City</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-brand-primary shrink-0" />
                <span>+1 (234) 567-890</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-brand-primary shrink-0" />
                <span>sales@raoufbrothers.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <MessageSquare size={18} className="text-brand-primary shrink-0" />
                <span>WhatsApp: +1 987 654 321</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>© 2026 Raouf Brothers. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white font-sans text-gray-900">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/quality" element={<Quality />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        
        {/* Sticky CTA */}
        <div className="fixed bottom-8 right-8 z-40 hidden md:block">
          <Link
            to="/contact"
            className="bg-brand-primary text-white px-6 py-4 rounded-full font-bold shadow-2xl hover:bg-green-600 transition-all flex items-center space-x-2 group"
          >
            <span>Request a Quote</span>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </Router>
  );
}
