
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-security-primary text-white py-12">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold">Karthik Setti</h3>
            <p className="text-gray-300">Application Security Engineer | IAM Specialist</p>
          </div>
          
          <div className="flex space-x-4">
            <a 
              href="https://linkedin.com/in/karthik-setti-765ba4200" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-security-accent transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="#" 
              className="text-white hover:text-security-accent transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </a>
            <a 
              href="#" 
              className="text-white hover:text-security-accent transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={20} />
            </a>
            <a 
              href="#" 
              className="text-white hover:text-security-accent transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
          </div>
        </div>
        
        <hr className="border-gray-700 my-6" />
        
        <div className="text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Karthik Setti. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
