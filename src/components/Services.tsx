
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Key, Users, Lock, Code, Cog } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Enterprise IAM Implementation",
      description: "SailPoint IIQ, Okta, Ping identity solutions for large organizations",
      icon: <Shield className="h-10 w-10 text-security-accent" />
    },
    {
      title: "Application Security Assessments",
      description: "Comprehensive security reviews and vulnerability assessments",
      icon: <Code className="h-10 w-10 text-security-accent" />
    },
    {
      title: "Role-Based Access Control Setup",
      description: "Design and implementation of RBAC systems for proper access management",
      icon: <Users className="h-10 w-10 text-security-accent" />
    },
    {
      title: "SSO/MFA Deployment & Federation",
      description: "Secure authentication systems with multi-factor protection",
      icon: <Lock className="h-10 w-10 text-security-accent" />
    },
    {
      title: "IAM Automation with PowerShell & APIs",
      description: "Custom automation solutions for identity management processes",
      icon: <Cog className="h-10 w-10 text-security-accent" />
    },
    {
      title: "Identity Governance Solutions",
      description: "Compliance-focused identity governance and administration",
      icon: <Key className="h-10 w-10 text-security-accent" />
    }
  ];

  return (
    <div className="container mx-auto">
      <h2 className="section-title animate-on-scroll">Services</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <Card 
            key={index}
            className="border border-gray-200 dark:border-gray-700 group hover:border-security-accent hover:shadow-xl transition-all animate-on-scroll backdrop-blur-sm bg-white/80 dark:bg-security-secondary/80"
          >
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="mb-4 p-4 rounded-full bg-security-accent/10 group-hover:bg-security-accent/20 transform transition-transform duration-300 group-hover:scale-110">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-security-primary dark:text-white group-hover:text-security-accent transition-colors">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Services;
