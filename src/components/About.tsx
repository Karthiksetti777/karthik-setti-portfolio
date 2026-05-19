import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Award, Users, Server, Activity, Cloud } from "lucide-react";

const About = () => {
  const stats = [
    { icon: <Users className="h-5 w-5" />, value: "25K+", label: "Users Managed" },
    { icon: <Server className="h-5 w-5" />, value: "30+", label: "Enterprise Apps" },
    { icon: <Activity className="h-5 w-5" />, value: "99.9%", label: "SSO Uptime" },
    { icon: <Cloud className="h-5 w-5" />, value: "6+", label: "Years Experience" },
  ];

  return (
    <div className="container mx-auto">
      <h2 className="section-title animate-on-scroll">About Me</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 animate-on-scroll space-y-5">
          <p className="text-lg leading-relaxed text-foreground/85">
            I am an <span className="font-semibold text-accent">Identity and Access Management (IAM) Engineer</span> with <strong>6 years of experience</strong> in IAM, SSO, MFA, identity governance, and cloud security across enterprise environments. I currently work as an <span className="font-semibold text-accent">SSO Cloud Solutions Engineer at Bank of America</span>, with hands-on expertise across PingFederate, PingAccess, PingID, SailPoint IdentityIQ, Okta, CyberArk, Microsoft Entra ID (Azure AD), and AWS.
          </p>
          <p className="text-lg leading-relaxed text-foreground/85">
            I integrate and secure enterprise, cloud, and third-party applications using <strong>SAML 2.0, OAuth 2.0, OIDC, LDAP, SCIM, and WS-Federation</strong>, and design authentication policies, federation, identity lifecycle (JML), and privileged access programs. I automate IAM workflows with Python, PowerShell, and Java, and provide L3 production support backed by Splunk monitoring in Agile/DevOps environments. I hold an M.S. in Computer Science from the University of North Texas.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-4 stagger">
            {stats.map((s, i) => (
              <div key={i} className="hover-lift glass-effect rounded-lg p-4 text-center">
                <div className="flex justify-center text-accent mb-2">{s.icon}</div>
                <div className="text-2xl font-bold text-foreground">{s.value}</div>
                <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="md:col-span-1 space-y-6">
          <Card className="hover-lift shadow-md border-l-4 border-accent animate-on-scroll">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div className="rounded-full bg-accent/10 p-3 mt-1">
                  <GraduationCap className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1 text-foreground">Education</h3>
                  <p className="font-medium">M.S. in Computer Science</p>
                  <p className="text-sm text-muted-foreground">University of North Texas</p>
                  <p className="text-sm text-muted-foreground">08/2023 – 05/2025</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover-lift shadow-md border-l-4 border-accent animate-on-scroll">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div className="rounded-full bg-accent/10 p-3 mt-1">
                  <Award className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">Certifications</h3>
                  <ul className="space-y-2">
                    {["AWS Certified Solutions Architect – Associate","Network Analysis","Digital Forensics","OSINT (Security Blue Team)"].map((c) => (
                      <li key={c} className="flex items-center">
                        <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
                        <span className="text-foreground/80">{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;
