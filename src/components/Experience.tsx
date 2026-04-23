import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "SSO Cloud Solutions Engineer II",
      company: "Think Logic Systems Inc.",
      location: "Austin, TX",
      period: "Jul 2024 – Present",
      stack: ["PingFederate", "Okta", "Entra ID", "SailPoint IIQ", "CyberArk", "OAuth 2.0", "OIDC", "SAML"],
      responsibilities: [
        "Architected and operate enterprise SSO with PingFederate and Okta serving 25,000+ workforce and customer identities across hybrid cloud (AWS + Azure).",
        "Designed OAuth 2.0 / OIDC / SAML 2.0 federation flows for 30+ business-critical SaaS and on-prem applications, reducing login friction and help-desk tickets by 40%.",
        "Integrated Microsoft Entra ID Conditional Access with CyberArk PAM to enforce least-privilege and just-in-time access for privileged accounts.",
        "Led SailPoint IdentityIQ deployments, automated joiner-mover-leaver workflows, and embedded IAM checks into CI/CD to shift security left.",
        "Owned production support: on-call for SSO incidents, runbooks, RCA, and 99.9% authentication uptime.",
      ],
    },
    {
      title: "IAM Engineer",
      company: "Think Logic Systems Inc.",
      location: "Austin, TX",
      period: "May 2020 – Jun 2023",
      stack: ["SailPoint IIQ", "Okta", "MFA", "RBAC", "SCIM", "Workday"],
      responsibilities: [
        "Delivered IAM policy customization, MFA enforcement, and Segregation-of-Duties compliance across hybrid cloud platforms.",
        "Built SailPoint IdentityIQ workflows for automated access reviews and certifications, cutting audit prep time by 60%.",
        "Implemented role-based access control across 20+ enterprise applications with SCIM and Workday as authoritative source.",
        "Created lifecycle automation that reduced manual provisioning effort by 95%.",
      ],
    },
  ];

  return (
    <div className="container mx-auto">
      <h2 className="section-title animate-on-scroll">Experience</h2>

      <div className="space-y-8">
        <div className="ml-4">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item animate-on-scroll">
              <Card className="hover-lift shadow-md border-l-4 border-accent overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="bg-accent/15 p-2 rounded-full">
                      <Briefcase className="h-5 w-5 text-accent" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">{exp.title}</h3>
                  </div>

                  <div className="mb-4">
                    <p className="text-lg font-medium text-foreground/90">{exp.company}</p>
                    <p className="text-sm text-muted-foreground italic">{exp.location} | {exp.period}</p>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4 stagger">
                    {exp.stack.map((tech) => (
                      <Badge
                        key={tech}
                        className="bg-accent/10 text-accent border border-accent/30 hover:bg-accent hover:text-accent-foreground transition-colors badge-float"
                        style={{ animationDelay: `${Math.random() * 2}s` }}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <ul className="space-y-2 stagger">
                    {exp.responsibilities.map((item, i) => (
                      <li key={i} className="flex items-start group">
                        <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 group-hover:scale-150 transition-transform shrink-0"></span>
                        <span className="text-foreground/80 leading-relaxed">{item}</span>
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
