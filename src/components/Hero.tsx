import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, Key, Lock, Download, Github, Linkedin } from 'lucide-react';
import { useState, useEffect } from 'react';

const Hero = () => {
  const [nameText, setNameText] = useState('');
  const [titleText, setTitleText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  const fullName = 'Karthik Setti';
  const fullTitle = 'SSO Cloud Solutions Engineer @ Bank of America | Ping | Okta | SailPoint | Entra ID | CyberArk';

  useEffect(() => {
    const cursorInterval = setInterval(() => setShowCursor(p => !p), 500);

    let nameIndex = 0;
    const nameInterval = setInterval(() => {
      if (nameIndex < fullName.length) {
        setNameText(fullName.slice(0, nameIndex + 1));
        nameIndex++;
      } else {
        clearInterval(nameInterval);
        let titleIndex = 0;
        const titleInterval = setInterval(() => {
          if (titleIndex < fullTitle.length) {
            setTitleText(fullTitle.slice(0, titleIndex + 1));
            titleIndex++;
          } else {
            clearInterval(titleInterval);
            setTimeout(() => {
              clearInterval(cursorInterval);
              setShowCursor(false);
            }, 1000);
          }
        }, 30);
      }
    }, 90);

    return () => {
      clearInterval(cursorInterval);
      clearInterval(nameInterval);
    };
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden flex items-center cyber-pastel-bg">
      {/* Animated aurora blobs */}
      <div className="aurora aurora-1" />
      <div className="aurora aurora-2" />
      <div className="aurora aurora-3" />
      {/* Tech grid overlay */}
      <div className="absolute inset-0 tech-grid opacity-40 z-10" />
      {/* Floating particles */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {[...Array(18)].map((_, i) => (
          <span
            key={i}
            className="particle"
            style={{
              left: `${(i * 53) % 100}%`,
              top: `${(i * 37) % 100}%`,
              animationDelay: `${(i % 6) * 1.2}s`,
              animationDuration: `${8 + (i % 5) * 2}s`,
            }}
          />
        ))}
      </div>
      {/* Scan line sheen */}
      <div className="absolute inset-0 scanline z-10 pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-20 flex flex-col md:flex-row items-center py-24">
        <div className="md:w-3/5 space-y-6 md:pr-10">
          <div className="animate-on-scroll">
            <p className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider uppercase rounded-full bg-accent/15 text-accent border border-accent/30">
              Available for new opportunities
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-primary-foreground min-h-[4rem] md:min-h-[5rem] lg:min-h-[6rem]">
              {nameText}
              {showCursor && nameText !== fullName && <span className="text-accent animate-pulse">|</span>}
            </h1>
            <h2 className="text-base md:text-xl font-medium mb-6 text-primary-foreground/80 min-h-[3rem] md:min-h-[3.5rem] leading-relaxed">
              <span className="gradient-text font-semibold">{titleText}</span>
              {nameText === fullName && showCursor && <span className="text-accent animate-pulse">|</span>}
            </h2>
            <p className="text-base md:text-lg text-primary-foreground/80 mb-8 max-w-2xl leading-relaxed">
              Enterprise SSO • OAuth / OIDC / SAML • Hybrid Cloud Identity • L3 Production Support.
              <span className="text-accent font-semibold"> 6 years</span> designing and operating identity platforms across financial-services-grade environments.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <div className="relative inline-block rounded-md glow-cta">
                <Button
                  className="relative bg-gradient-accent hover:opacity-95 text-accent-foreground font-medium px-6 py-6 rounded-md flex items-center gap-2 shadow-lg transition-all duration-300 hover:translate-y-[-2px] border-0"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Let's Connect <ArrowRight size={16} />
                </Button>
              </div>

              <Button
                variant="outline"
                className="bg-white/5 hover:bg-white/10 text-white font-medium px-6 py-6 rounded-md flex items-center gap-2 border border-white/20 backdrop-blur-sm shadow-lg transition-all duration-300 hover:translate-y-[-2px]"
                onClick={() => window.open('https://drive.google.com/file/d/1Q0F98HSAX-DaKvoVlvWnnh91UH-MqoeJ/view?usp=sharing', '_blank')}
              >
                Resume <Download size={16} />
              </Button>
            </div>

            <div className="flex items-center gap-4 mt-8">
              <a
                href="https://linkedin.com/in/karthik-setti-765ba4200"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/20 flex items-center justify-center text-white hover:bg-accent hover:border-accent hover:scale-110 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://github.com/Karthiksetti777"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/20 flex items-center justify-center text-white hover:bg-accent hover:border-accent hover:scale-110 transition-all duration-300"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="md:w-2/5 mt-10 md:mt-0 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-gradient-accent blur-2xl opacity-40 animate-pulse-slow" />
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-accent/70 shadow-[0_0_50px_hsl(var(--accent)/0.45)] transition-transform duration-700 hover:scale-105">
              <img
                src="https://i.postimg.cc/GmTpDwGC/IMG-3809.jpg"
                alt="Karthik Setti - SSO Cloud Solutions Engineer"
                className="w-full h-full object-cover object-center"
              />
            </div>

            <div className="absolute -top-4 -right-4 w-14 h-14 bg-card/90 rounded-full flex items-center justify-center shadow-lg floating backdrop-blur-sm border border-accent/30">
              <Shield className="text-accent" size={24} />
            </div>
            <div className="absolute -bottom-2 -left-4 w-12 h-12 bg-card/90 rounded-full flex items-center justify-center shadow-lg floating backdrop-blur-sm border border-accent/30" style={{ animationDelay: '1.5s' }}>
              <Key className="text-accent" size={20} />
            </div>
            <div className="absolute top-1/4 -right-10 w-10 h-10 bg-card/90 rounded-full flex items-center justify-center shadow-lg floating backdrop-blur-sm border border-accent/30" style={{ animationDelay: '2.5s' }}>
              <Lock className="text-accent" size={18} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
