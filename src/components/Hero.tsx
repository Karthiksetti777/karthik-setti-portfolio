import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, Key, Lock, Download } from 'lucide-react';
import { useState, useEffect } from 'react';

const Hero = () => {
  const [nameText, setNameText] = useState('');
  const [titleText, setTitleText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  
  const fullName = 'Karthik Setti';
  const fullTitle = 'Identity and Access Management Engineer II';
  
  useEffect(() => {
    // Cursor blinking effect
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    
    // Type name first
    let nameIndex = 0;
    const nameInterval = setInterval(() => {
      if (nameIndex < fullName.length) {
        setNameText(fullName.slice(0, nameIndex + 1));
        nameIndex++;
      } else {
        clearInterval(nameInterval);
        // Start typing title after name is complete
        let titleIndex = 0;
        const titleInterval = setInterval(() => {
          if (titleIndex < fullTitle.length) {
            setTitleText(fullTitle.slice(0, titleIndex + 1));
            titleIndex++;
          } else {
            clearInterval(titleInterval);
            // Stop cursor blinking after both animations complete
            setTimeout(() => {
              clearInterval(cursorInterval);
              setShowCursor(false);
            }, 1000);
          }
        }, 50);
      }
    }, 100);
    
    return () => {
      clearInterval(cursorInterval);
      clearInterval(nameInterval);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-security-primary relative overflow-hidden flex items-center">
      {/* Background gradient overlay with pastel colors */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#E5DEFF]/90 to-[#D3E4FD]/70 dark:from-security-primary/90 dark:to-[#0c2249]/80 z-10"></div>
      
      {/* Abstract background pattern with enhanced visual effect */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmMGYwZjAiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00bTAtMTZjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNGMwIDIuMi0xLjggNC00IDRzLTQtMS44LTQtNG0tMTYgMGMwLTIuMiAxLjgtNCA0LTRzNCAxLjggNCA0YzAgMi4yLTEuOCA0LTQgNC0yLjIgMC00LTEuOC00LTRtLTE2IDBjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNGMwIDIuMi0xLjggNC00IDQtMi4yIDAtNC0xLjgtNC00bTE2IDE2YzAtMi4yIDEuOC00IDQtNHM0IDEuOCA0IDRjMCAyLjItMS44IDQtNCA0LTIuMiAwLTQtMS44LTQtNG0tMTYgMGMwLTIuMiAxLjgtNCA0LTRzNCAxLjggNCA0YzAgMi4yLTEuOCA0LTQgNC0yLjIgMC00LTEuOC00LTRNNCAxMmMwLTIuMiAxLjgtNCA0LTRzNCAxLjggNCA0YzAgMi4yLTEuOCA0LTQgNC0yLjIgMC00LTEuOC00LTRtMTYgMGMwLTIuMiAxLjgtNCA0LTRzNCAxLjggNCA0YzAgMi4yLTEuOCA0LTQgNC0yLjIgMC00LTEuOC00LTRtLTE2IDE2YzAtMi4yIDEuOC00IDQtNHM0IDEuOCA0IDRjMCAyLjItMS44IDQtNCA0LTIuMiAwLTQtMS44LTQtNCIvPjwvZz48L2c+PC9zdmc+')]"></div>
      
      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-20 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 space-y-6 md:pr-10">
          <div className="animate-on-scroll">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-security-primary dark:text-white min-h-[4rem] md:min-h-[5rem] lg:min-h-[6rem]">
              {nameText}
              {showCursor && <span className="animate-pulse">|</span>}
            </h1>
            <h2 className="text-xl md:text-2xl font-medium mb-6 text-security-secondary dark:text-gray-300 min-h-[2rem] md:min-h-[3rem]">
              {titleText}
              {nameText === fullName && showCursor && <span className="animate-pulse">|</span>}
            </h2>
            <p className="text-base md:text-xl lg:text-[1.7rem] font-bold gradient-text mb-8 bg-clip-text text-transparent bg-gradient-to-r from-security-primary to-security-accent">
              I design and implement identity-driven security solutions to streamline access, automate workflows, and ensure compliance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <Button 
                className="bg-security-accent hover:bg-security-accent/80 text-white font-medium px-6 py-6 rounded-md flex items-center gap-2 shadow-lg transition-all duration-300 hover:translate-y-[-2px]"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Let's Connect <ArrowRight size={16} />
              </Button>
              
              <Button 
                className="bg-white dark:bg-security-secondary hover:bg-gray-100 dark:hover:bg-security-secondary/80 text-security-primary dark:text-white font-medium px-6 py-6 rounded-md flex items-center gap-2 border border-gray-200 dark:border-gray-700 shadow-lg transition-all duration-300 hover:translate-y-[-2px]"
                onClick={() => {
                  window.open('https://drive.google.com/file/d/1Q0F98HSAX-DaKvoVlvWnnh91UH-MqoeJ/view?usp=sharing', '_blank');
                }}
              >
                Resume <Download size={16} />
              </Button>
            </div>
          </div>
        </div>
        
        <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
          <div className="relative">
            {/* Profile image with the new IAM-themed photo */}
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-security-accent shadow-[0_0_30px_rgba(0,191,178,0.3)] transition-transform duration-700 hover:scale-105 flex items-center justify-center">
              <img 
                src="https://i.postimg.cc/GmTpDwGC/IMG-3809.jpg" 
                alt="Karthik Setti - IAM Professional" 
                className="w-full h-full object-cover object-center"
              />
            </div>
            
            {/* Enhanced floating icons with better animation */}
            <div className="absolute -top-4 -right-4 w-14 h-14 bg-white dark:bg-security-secondary rounded-full flex items-center justify-center shadow-lg floating backdrop-blur-sm border border-gray-100 dark:border-gray-700">
              <Shield className="text-security-accent" size={24} />
            </div>
            
            <div className="absolute -bottom-2 -left-4 w-12 h-12 bg-white dark:bg-security-secondary rounded-full flex items-center justify-center shadow-lg floating backdrop-blur-sm border border-gray-100 dark:border-gray-700" style={{animationDelay: "1.5s"}}>
              <Key className="text-security-accent" size={20} />
            </div>
            
            <div className="absolute top-1/4 -right-10 w-10 h-10 bg-white dark:bg-security-secondary rounded-full flex items-center justify-center shadow-lg floating backdrop-blur-sm border border-gray-100 dark:border-gray-700" style={{animationDelay: "2.5s"}}>
              <Lock className="text-security-accent" size={18} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
