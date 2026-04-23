import { Badge } from "@/components/ui/badge";
import { KeyRound, ShieldCheck, Cloud, Code2 } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      category: "SSO & Federation",
      icon: <KeyRound className="h-5 w-5" />,
      skills: ["PingFederate", "PingAccess", "Okta", "Entra ID", "SAML 2.0", "OAuth 2.0", "OIDC", "WS-Federation"],
    },
    {
      category: "IAM & Lifecycle",
      icon: <ShieldCheck className="h-5 w-5" />,
      skills: ["SailPoint IIQ", "CyberArk", "SCIM", "Workday HRIS", "RBAC", "Access Reviews", "JML Automation"],
    },
    {
      category: "Cloud & Security",
      icon: <Cloud className="h-5 w-5" />,
      skills: ["AWS", "Azure", "GCP", "Conditional Access", "MFA", "YubiKey", "Zero Trust", "Vulnerability Mgmt"],
    },
    {
      category: "Programming & Automation",
      icon: <Code2 className="h-5 w-5" />,
      skills: ["Python", "Java", "PowerShell", "Bash", "REST APIs", "Git", "CI/CD", "Docker", "Terraform"],
    },
  ];

  return (
    <div className="container mx-auto">
      <h2 className="section-title animate-on-scroll">Skills</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillCategories.map((category, index) => (
          <div
            key={index}
            className="animate-on-scroll hover-lift glass-effect p-6 rounded-xl"
          >
            <h3 className="text-xl font-semibold mb-4 text-foreground flex items-center gap-3">
              <span className="w-9 h-9 rounded-lg bg-gradient-accent flex items-center justify-center text-accent-foreground">
                {category.icon}
              </span>
              {category.category}
            </h3>

            <div className="flex flex-wrap gap-2 stagger">
              {category.skills.map((skill, i) => (
                <Badge
                  key={i}
                  className="bg-accent/10 text-foreground border border-accent/30 py-1.5 px-3 hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-105 cursor-default"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
