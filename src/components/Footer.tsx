import { Linkedin, Github, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold">Karthik Setti</h3>
            <p className="text-primary-foreground/70">SSO Cloud Solutions Engineer</p>
          </div>

          <div className="flex space-x-4 items-center">
            <Button
              variant="ghost"
              className="hover:bg-accent/20 hover:text-accent transition-colors p-2"
              onClick={() => window.open('https://drive.google.com/file/d/1Q0F98HSAX-DaKvoVlvWnnh91UH-MqoeJ/view?usp=sharing', '_blank')}
            >
              <FileText size={18} className="mr-2" /> Resume
            </Button>

            <a
              href="https://linkedin.com/in/karthik-setti-765ba4200"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/5 border border-white/15 flex items-center justify-center hover:bg-accent hover:border-accent hover:scale-110 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="https://github.com/Karthiksetti777"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/5 border border-white/15 flex items-center justify-center hover:bg-accent hover:border-accent hover:scale-110 transition-all duration-300"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
          </div>
        </div>

        <hr className="border-white/10 my-6" />

        <div className="text-center text-primary-foreground/60 text-sm">
          <p>© {new Date().getFullYear()} Karthik Setti. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
