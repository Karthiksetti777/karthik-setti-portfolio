import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Award } from "lucide-react";

const About = () => {
  return (
    <div className="container mx-auto">
      <h2 className="section-title animate-on-scroll">About Me</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 animate-on-scroll">
          <p className="text-lg mb-6 leading-relaxed text-gray-700 dark:text-gray-300">
            I am an Identity and Access Management (IAM) Engineer with over 5 years of hands-on experience in designing, implementing, and managing secure identity solutions across enterprise environments. My expertise spans SailPoint IdentityIQ, Okta, and PingFederate, with a strong focus on integrating these platforms seamlessly with enterprise infrastructure to enhance security and operational efficiency. I have completed my Master's degree in Computer Science from the University of North Texas, where I further strengthened my technical and strategic capabilities.
          </p>
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            Throughout my career, I've led the deployment and automation of identity governance frameworks, enabling organizations to enforce compliance, improve access lifecycle management, and reduce security risks. I take pride in building secure authentication systems, developing custom IAM automation tools, and driving end-to-end integrations that align with both business goals and regulatory standards.
          </p>
        </div>
        
        <div className="md:col-span-1">
          <Card className="shadow-xl border-l-4 border-security-accent mb-6 animate-on-scroll hover:shadow-2xl transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div className="rounded-full bg-security-accent/10 p-3 mt-1">
                  <GraduationCap className="h-6 w-6 text-security-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1 text-security-primary dark:text-white">Education</h3>
                  <p className="font-medium">M.S. in Computer Science</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">University of North Texas</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">08/2023 – 05/2025</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="shadow-xl border-l-4 border-security-accent animate-on-scroll hover:shadow-2xl transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div className="rounded-full bg-security-accent/10 p-3 mt-1">
                  <Award className="h-6 w-6 text-security-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-security-primary dark:text-white">Certifications</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-security-accent rounded-full mr-2"></span>
                      <span className="text-gray-700 dark:text-gray-300">AWS Certified Solutions Architect – Associate</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-security-accent rounded-full mr-2"></span>
                      <span className="text-gray-700 dark:text-gray-300">Network Analysis</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-security-accent rounded-full mr-2"></span>
                      <span className="text-gray-700 dark:text-gray-300">Digital Forensics</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-security-accent rounded-full mr-2"></span>
                      <span className="text-gray-700 dark:text-gray-300">OSINT (Security Blue Team)</span>
                    </li>
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
