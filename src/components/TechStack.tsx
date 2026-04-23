const TechStack = () => {
  const technologies = [
    "PingFederate", "PingAccess", "Okta", "SailPoint IdentityIQ", "Microsoft Entra ID",
    "CyberArk", "AWS IAM", "Azure AD", "OAuth 2.0", "OIDC", "SAML 2.0", "SCIM",
    "Workday", "YubiKey", "FIDO2", "Python", "PowerShell", "Terraform", "Docker", "Git",
  ];

  return (
    <div className="container mx-auto">
      <h2 className="section-title animate-on-scroll">Technologies I Work With</h2>
      <p className="text-muted-foreground max-w-2xl mb-10 animate-on-scroll">
        A focused stack covering federation, governance, privileged access, and cloud automation.
      </p>

      <div className="flex flex-wrap gap-3 stagger animate-on-scroll">
        {technologies.map((tech, i) => (
          <span
            key={i}
            className="px-4 py-2 rounded-full text-sm font-medium glass-effect text-foreground/90 border border-accent/30 hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all duration-300 hover:scale-105 badge-float cursor-default"
            style={{ animationDelay: `${(i % 6) * 0.4}s` }}
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
