import { Users, Shield, Activity, TrendingUp } from "lucide-react";

const impacts = [
  { icon: <Users className="h-7 w-7" />, value: "25,000+", label: "Identities federated across hybrid cloud" },
  { icon: <Shield className="h-7 w-7" />, value: "30+", label: "SaaS & on-prem apps integrated via SAML/OIDC" },
  { icon: <Activity className="h-7 w-7" />, value: "99.9%", label: "Authentication uptime under production load" },
  { icon: <TrendingUp className="h-7 w-7" />, value: "95%", label: "Reduction in manual provisioning effort" },
];

const EnterpriseImpact = () => {
  return (
    <div className="container mx-auto">
      <h2 className="section-title animate-on-scroll">Enterprise Impact</h2>
      <p className="text-muted-foreground max-w-2xl mb-10 animate-on-scroll">
        Measurable outcomes delivered across financial-services-grade IAM environments.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 stagger">
        {impacts.map((item, i) => (
          <div
            key={i}
            className="hover-lift glass-effect rounded-xl p-6 text-center group"
          >
            <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-accent flex items-center justify-center text-accent-foreground group-hover:scale-110 transition-transform">
              {item.icon}
            </div>
            <div className="text-3xl font-bold gradient-text mb-2">{item.value}</div>
            <p className="text-sm text-muted-foreground leading-relaxed">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EnterpriseImpact;
