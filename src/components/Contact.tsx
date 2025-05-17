
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Linkedin } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5 text-security-accent" />,
      label: "Email",
      value: "settikarthik777@gmail.com",
      href: "mailto:settikarthik777@gmail.com"
    },
    {
      icon: <Phone className="h-5 w-5 text-security-accent" />,
      label: "Phone",
      value: "(940) 758-4811",
      href: "tel:9407584811"
    },
    {
      icon: <MapPin className="h-5 w-5 text-security-accent" />,
      label: "Location",
      value: "Open to Relocate | Austin, Texas",
      href: null
    },
    {
      icon: <Linkedin className="h-5 w-5 text-security-accent" />,
      label: "LinkedIn",
      value: "linkedin.com/in/karthik-setti-765ba4200",
      href: "https://linkedin.com/in/karthik-setti-765ba4200"
    }
  ];

  return (
    <div className="container mx-auto">
      <h2 className="section-title animate-on-scroll">Contact</h2>
      
      <div className="max-w-3xl mx-auto animate-on-scroll">
        <Card className="shadow-lg hover:shadow-xl transition-all duration-300 border-t-2 border-security-accent bg-white/80 dark:bg-security-secondary/80 backdrop-blur-sm">
          <CardContent className="p-8">
            <h3 className="text-2xl font-semibold mb-8 pb-2 border-b border-gray-200 dark:border-gray-700 text-security-primary dark:text-white">Get In Touch</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start group hover:translate-x-1 transition-transform duration-300">
                  <div className="mt-1 mr-4 bg-security-accent/10 p-3 rounded-full group-hover:bg-security-accent/20 transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-medium text-lg text-security-primary dark:text-white">{item.label}</p>
                    {item.href ? (
                      <a 
                        href={item.href} 
                        className="text-security-accent hover:underline hover:text-security-accent/80 transition-colors text-base"
                        target={item.label === "LinkedIn" ? "_blank" : undefined}
                        rel={item.label === "LinkedIn" ? "noopener noreferrer" : undefined}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-gray-700 dark:text-gray-300 text-base">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Contact;
