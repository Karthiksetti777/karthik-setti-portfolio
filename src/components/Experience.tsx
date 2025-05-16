
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
              <Card className="shadow-lg hover:shadow-xl border-l-4 border-security-accent transform transition-all duration-300 hover:translate-x-1">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="bg-security-accent/20 p-2 rounded-full">
                      <Briefcase className="h-5 w-5 text-security-accent" />
                    </div>
                    <h3 className="text-xl font-semibold text-security-primary dark:text-white">{exp.title}</h3>
                  </div>
                  
                  <div className="mb-3">
                    <p className="text-lg font-medium text-gray-800 dark:text-gray-200">{exp.company}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 italic">{exp.location} | {exp.period}</p>
                  </div>
                  
                  <ul className="space-y-2">
                    {exp.responsibilities.map((item, i) => (
                      <li key={i} className="flex items-start group">
                        <span className="w-2 h-2 bg-security-accent rounded-full mt-2 mr-2 group-hover:scale-125 transition-transform"></span>
                        <span className="text-gray-700 dark:text-gray-300">{item}</span>
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
