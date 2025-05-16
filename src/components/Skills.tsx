
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      category: "Languages",
      skills: ["Python", "Java", "JavaScript", "C++", "SQL"]
    },
    {
      category: "IAM Tools",
      skills: ["SailPoint IIQ", "Okta", "PingFederate", "Azure AD", "ForgeRock"]
    },
    {
      category: "Frameworks",
      skills: ["Django", "Flask", "React", "Angular", "Spring"]
    },
    {
      category: "Cloud & DevOps",
      skills: ["AWS", "Azure", "GCP", "Git", "CI/CD", "Docker"]
    },
    {
      category: "Protocols",
      skills: ["SAML", "OAuth2", "OIDC", "LDAP", "SCIM"]
    },
    {
      category: "Security",
      skills: ["RBAC", "MFA", "Cryptography", "Secure SDLC", "Vulnerability Assessment"]
    }
  ];

  return (
    <div className="container mx-auto">
      <h2 className="section-title animate-on-scroll">Skills</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category, index) => (
          <div key={index} className="animate-on-scroll backdrop-blur-sm bg-white/50 dark:bg-security-secondary/50 p-6 rounded-lg border border-gray-100 dark:border-gray-700 shadow-md hover:shadow-xl transition-all duration-300">
            <h3 className="text-xl font-semibold mb-4 text-security-primary dark:text-white flex items-center">
              <span className="w-2 h-6 bg-security-accent mr-2"></span>
              {category.category}
            </h3>
            
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, i) => (
                <Badge 
                  key={i} 
                  className="bg-white dark:bg-security-secondary text-security-primary dark:text-white border border-gray-200 dark:border-gray-700 py-1.5 px-3 hover:bg-security-accent hover:text-white transition-colors duration-300"
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
