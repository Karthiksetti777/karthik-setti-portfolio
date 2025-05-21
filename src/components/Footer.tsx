
import { Linkedin, Github, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-security-primary text-white py-12">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold">Karthik Setti</h3>
            <p className="text-gray-300">Identity and Access Management Engineer II</p>
          </div>
          
          <div className="flex space-x-6 items-center">
            <Button 
              variant="ghost" 
              className="text-white hover:bg-security-primary/70 hover:text-security-accent transition-colors p-2"
              onClick={() => {
                window.open('https://docs.google.com/document/d/1p3OpgDPYUKzPR7NmTiLCr5DUmYyvZK4JcrTeGU7diGc/edit?usp=sharing', '_blank');
              }}
            >
              <FileText size={18} className="mr-2" /> Resume
            </Button>
            
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
              href="https://github.com/Karthiksetti777" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-security-accent transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
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
