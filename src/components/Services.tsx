import { Card, CardContent } from "@/components/ui/card";
import { Shield, Key, Users, Lock, Code, Cog } from "lucide-react";

const Services = () => {
  const services = [
    { title: "Enterprise SSO Architecture", description: "PingFederate, Okta, and Entra ID federation for workforce and customer identities.", icon: <Shield className="h-10 w-10 text-accent" /> },
    { title: "OAuth / OIDC / SAML Integrations", description: "Standards-based protocol design for SaaS, mobile, and legacy applications.", icon: <Code className="h-10 w-10 text-accent" /> },
    { title: "Identity Governance (SailPoint)", description: "Access reviews, JML automation, and SoD enforcement at enterprise scale.", icon: <Users className="h-10 w-10 text-accent" /> },
    { title: "MFA & Zero Trust Deployment", description: "Phishing-resistant authentication with YubiKey, FIDO2, and Conditional Access.", icon: <Lock className="h-10 w-10 text-accent" /> },
    { title: "Privileged Access (CyberArk)", description: "PAM design, vaulting, and just-in-time access for high-value systems.", icon: <Cog className="h-10 w-10 text-accent" /> },
    { title: "IAM Production Support", description: "On-call SSO operations, RCA, runbooks, and 99.9% authentication uptime.", icon: <Key className="h-10 w-10 text-accent" /> },
  ];

  return (
    <div className="container mx-auto">
      <h2 className="section-title animate-on-scroll">Core Expertise</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger">
        {services.map((service, index) => (
          <Card
            key={index}
            className="hover-lift border border-border group hover:border-accent transition-all glass-effect"
          >
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="mb-4 p-4 rounded-full bg-accent/10 group-hover:bg-accent/20 transform transition-transform duration-300 group-hover:scale-110">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-accent transition-colors">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Services;
