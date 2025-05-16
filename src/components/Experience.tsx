
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "IAM Engineer II",
      company: "Think Logic Systems Inc.",
      location: "Austin, TX",
      period: "Jul 2024 – Present",
      responsibilities: [
        "Leading SailPoint IIQ deployment and CI/CD security automation",
        "Integrating SSO, SAML, OAuth, and implementing RBAC across enterprise applications",
        "Developing custom connectors for cloud and on-premise applications",
        "Managing IAM governance processes and security compliance initiatives"
      ]
    },
    {
      title: "IAM Engineer",
      company: "Think Logic Systems Inc.",
      location: "Austin, TX",
      period: "May 2020 – Jun 2023",
      responsibilities: [
        "Delivered IAM policy customization, MFA enforcement, and SoD compliance across hybrid cloud platforms",
        "Developed and maintained SailPoint IdentityIQ workflows for automated access reviews",
        "Implemented role-based access control systems for enterprise applications",
        "Created user lifecycle management automation solutions"
      ]
    }
  ];

  return (
    <div className="container mx-auto">
      <h2 className="section-title animate-on-scroll">Experience</h2>
      
      <div className="space-y-8">
        <div className="timeline-container ml-4">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item animate-on-scroll">
              <Card className="shadow-md border-l-4 border-security-accent">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2 mb-2">
                    <Briefcase className="h-5 w-5 text-security-accent" />
                    <h3 className="text-xl font-semibold">{exp.title}</h3>
                  </div>
                  
                  <div className="mb-3">
                    <p className="text-lg font-medium">{exp.company}</p>
                    <p className="text-sm text-gray-600">{exp.location} | {exp.period}</p>
                  </div>
                  
                  <ul className="space-y-2">
                    {exp.responsibilities.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="w-2 h-2 bg-security-accent rounded-full mt-2 mr-2"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
