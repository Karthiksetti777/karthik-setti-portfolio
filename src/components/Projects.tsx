
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Shield, Key } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Unified IAM System",
      description: "25,000+ user lifecycle automation with SailPoint, Okta, and PingFederate",
      result: "90% faster provisioning, full SOX/GDPR compliance",
      icon: <Users className="h-8 w-8 text-security-accent" />,
      tags: ["SailPoint", "Okta", "PingFederate", "Automation"]
    },
    {
      title: "Okta Lifecycle Management",
      description: "Automated onboarding for 30+ SaaS apps using SCIM, Workday",
      result: "Reduced manual work by 95%",
      icon: <Shield className="h-8 w-8 text-security-accent" />,
      tags: ["Okta", "SCIM", "Workday", "Automation"]
    },
    {
      title: "Federated Access with MFA/YubiKeys",
      description: "Built secure SSO with phishing-resistant MFA",
      result: "Blocked 98% unauthorized access",
      icon: <Key className="h-8 w-8 text-security-accent" />,
      tags: ["SSO", "MFA", "YubiKey", "Authentication"]
    }
  ];

  return (
    <div className="container mx-auto">
      <h2 className="section-title animate-on-scroll">Projects</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <Card 
            key={index} 
            className="shadow-lg hover:shadow-2xl transition-all duration-500 border-t-4 border-security-accent animate-on-scroll bg-white dark:bg-security-secondary group hover:-translate-y-2"
          >
            <CardHeader className="pb-4 relative overflow-hidden">
              <div className="absolute inset-0 bg-security-accent/5 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
              <div className="relative z-10">
                <div className="mb-4 bg-security-accent/10 p-4 rounded-full inline-block group-hover:bg-security-accent/20 transition-colors duration-300">
                  {project.icon}
                </div>
                <CardTitle className="text-security-primary dark:text-white text-xl">{project.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="relative z-10">
              <CardDescription className="text-base mb-4 text-gray-700 dark:text-gray-300">
                {project.description}
              </CardDescription>
              <div className="bg-security-accent/10 p-4 rounded-md text-security-primary dark:text-white font-medium">
                <span className="font-bold">Result:</span> {project.result}
              </div>
            </CardContent>
            <CardFooter className="flex flex-wrap gap-2 pt-4 relative z-10">
              {project.tags.map((tag, i) => (
                <Badge 
                  key={i} 
                  variant="secondary" 
                  className="bg-gray-100 text-security-secondary dark:bg-gray-700 dark:text-gray-200 hover:bg-security-accent/20 transition-colors"
                >
                  {tag}
                </Badge>
              ))}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Projects;
