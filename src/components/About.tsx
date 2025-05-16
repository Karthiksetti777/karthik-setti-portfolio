
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Award } from "lucide-react";

const About = () => {
  return (
    <div className="container mx-auto">
      <h2 className="section-title animate-on-scroll">About Me</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 animate-on-scroll">
          <p className="text-lg mb-6 leading-relaxed text-gray-700 dark:text-gray-300">
            Karthik Setti is an IAM Engineer with 4+ years of experience in identity security, application development, and IAM tool deployment. He has a strong focus on SailPoint IdentityIQ, Okta, PingFederate, and secure integration with enterprise infrastructure. Currently pursuing a Master's in Computer Science at the University of North Texas (expected May 2025).
          </p>
          <p className="text-lg mb-6 leading-relaxed text-gray-700 dark:text-gray-300">
            With expertise in implementing robust identity governance solutions and automating security processes, Karthik has helped organizations streamline access management while maintaining compliance with regulatory requirements.
          </p>
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            His technical strengths include building secure authentication systems, developing IAM automation tools, and integrating identity solutions across complex enterprise environments.
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
                  <p className="text-sm text-gray-600 dark:text-gray-400">08/2023 – 05/2025 (Expected)</p>
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
                      <span className="text-gray-700 dark:text-gray-300">Introduction to Threat Hunting</span>
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
