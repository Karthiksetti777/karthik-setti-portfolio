
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Handle scroll effect on navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      
      // Update active section based on scroll position
      const sections = document.querySelectorAll('section[id]');
      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).offsetTop - 100;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute('id') || '';
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Impact', href: '#impact' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Expertise', href: '#services' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 dark:bg-security-primary/90 backdrop-blur-md shadow-md py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        <a 
          href="#home" 
          className="text-xl font-bold flex items-center space-x-2 group"
          onClick={() => setIsOpen(false)}
        >
          <span className="text-security-accent font-bold group-hover:scale-110 transition-transform">KS</span>
          <span className="text-security-primary dark:text-white group-hover:text-security-accent transition-colors">Karthik Setti</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`relative px-1 py-2 group ${
                activeSection === link.href.substring(1) 
                  ? 'text-security-accent font-medium' 
                  : 'text-security-primary dark:text-white hover:text-security-accent transition-colors duration-300'
              }`}
            >
              {link.name}
              <span 
                className={`absolute bottom-0 left-0 w-full h-0.5 bg-security-accent transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ${
                  activeSection === link.href.substring(1) ? 'scale-x-100' : ''
                }`}
              ></span>
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden text-security-primary dark:text-white hover:bg-security-accent/10"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-full right-0 left-0 bg-white/95 dark:bg-security-primary/95 backdrop-blur-lg shadow-lg py-4 animate-fade-in">
            <div className="flex flex-col space-y-4 px-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-security-primary dark:text-white hover:text-security-accent transition-colors duration-300 py-2 border-b border-gray-100 dark:border-gray-800 ${
                    activeSection === link.href.substring(1) ? 'text-security-accent font-medium' : ''
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
