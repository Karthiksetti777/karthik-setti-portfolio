import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "SSO Cloud Solutions Engineer",
      company: "Bank of America",
      location: "Denver, Colorado",
      period: "Jan 2026 – Present",
      stack: ["PingFederate", "PingAccess", "PingID", "SAML 2.0", "OAuth 2.0", "OIDC", "WS-Fed", "PowerShell", "Splunk"],
      responsibilities: [
        "Designed and implemented enterprise-grade SSO integrations using PingFederate, PingAccess, and PingID across Non-Production and Production environments for cloud, on-prem, and partner applications.",
        "Onboarded Salesforce, ServiceNow, AWS- and Azure-hosted apps, SaaS platforms, and partner integrations via SAML 2.0, OAuth 2.0, OIDC, WS-Federation, OpenToken, and Agentless authentication.",
        "Built complex PingFederate authentication policies using adapters, selectors, policy contracts, and authentication fragments for MFA, passwordless, and risk-based access control.",
        "Configured PingAccess applications, sites, identity mappings, web sessions, and reverse-proxy policies to secure enterprise web apps, APIs, and cloud workloads.",
        "Implemented PingID MFA for adaptive authentication, step-up MFA, OTP validation, and secure two-factor workflows.",
        "Automated PingFederate configuration migrations, validation, and deployments using Admin APIs and PowerShell scripts (policies, adapters, SP connections, selectors, fragments, certificates).",
        "Integrated PingFederate with AD, LDAP, relational databases, and virtual directories for authentication and attribute retrieval.",
        "Authored Deployment Technical Specifications (DTS), implementation plans, validation procedures, and rollback documentation for production change management.",
        "Provided L3 production support for SSO and federation platforms, troubleshooting authentication failures, MFA issues, federation mismatches, token validation, and certificate issues using Splunk.",
      ],
    },
    {
      title: "IAM Engineer II",
      company: "Vsion Technologies, Inc.",
      location: "Austin, Texas",
      period: "Jul 2024 – Jan 2026",
      stack: ["Okta", "SAML 2.0", "OAuth 2.0", "OIDC", "SCIM", "Workday", "AD", "Splunk"],
      responsibilities: [
        "Implemented and supported Okta SSO, MFA, Lifecycle Management, and Identity Governance across enterprise and cloud applications.",
        "Integrated apps using SAML 2.0, OAuth 2.0, OIDC, WS-Federation, SCIM, and JIT provisioning across ServiceNow, Salesforce, Office 365, AWS, VPNs, and custom web apps.",
        "Automated user provisioning and de-provisioning via Okta Lifecycle Management, Workday integrations, SCIM, and role-based access automation.",
        "Configured Okta Group Rules, Birthright Provisioning, Universal Directory, and Adaptive MFA Policies to streamline onboarding and secure access.",
        "Installed and configured Okta AD Agents to synchronize Active Directory users, groups, and memberships into Universal Directory.",
        "Managed Okta Sign-On, Password, Session, Network Zone, and Conditional Access policies for secure authentication.",
        "Troubleshot SSO/MFA/provisioning issues — SAML assertion failures, issuer/audience errors, relay state, certificate, token validation, and redirect URI mismatches — using Okta System Logs, SAML Tracer, Fiddler, HAR logs, and Splunk.",
        "Drove cloud migration and hybrid-identity transformation projects, migrating legacy on-prem apps to Okta SSO and federation architectures.",
      ],
    },
    {
      title: "IAM Engineer",
      company: "Think Logic Systems Inc.",
      location: "Austin, Texas",
      period: "May 2020 – Jun 2023",
      stack: ["SailPoint IIQ", "RBAC", "SoD", "AD", "LDAP", "SOX", "SOC2", "GDPR", "PCI DSS"],
      responsibilities: [
        "Customized SailPoint IdentityIQ policies, roles, workflows, and rules to align with business needs while enforcing Segregation of Duties (SoD) and compliance controls.",
        "Supported identity lifecycle management (JML) — provisioning, de-provisioning, access requests, and role-based access — across enterprise applications.",
        "Integrated SailPoint IIQ with enterprise applications, Active Directory, LDAP, and secure APIs for automated access governance and entitlement management.",
        "Implemented RBAC policies, access certifications, and compliance workflows aligned to SOX, SOC2, GDPR, and PCI DSS.",
        "Partnered with audit, security, and compliance teams during regulatory assessments and access certification campaigns.",
        "Troubleshot SailPoint provisioning issues, connector failures, access violations, and identity synchronization problems.",
        "Conducted cross-functional workshops to train developers and compliance officers on PAM/IAM controls, increasing policy adoption and reducing misconfigurations.",
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
