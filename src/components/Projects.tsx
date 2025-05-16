
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
            className="shadow-lg hover:shadow-xl transition-shadow border-t-4 border-security-accent animate-on-scroll"
          >
            <CardHeader className="pb-4">
              <div className="mb-4">{project.icon}</div>
              <CardTitle>{project.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base mb-4">
                {project.description}
              </CardDescription>
              <div className="bg-security-accent/10 p-3 rounded-md text-security-primary font-medium">
                Result: {project.result}
              </div>
            </CardContent>
            <CardFooter className="flex flex-wrap gap-2">
              {project.tags.map((tag, i) => (
                <Badge key={i} variant="secondary" className="bg-gray-100 text-security-secondary">
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
