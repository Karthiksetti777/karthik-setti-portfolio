
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, Linkedin } from "lucide-react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      setIsSubmitting(true);
      
      // Use EmailJS to send the form
      await emailjs.sendForm(
        'service_0mbs2lc', // Your Service ID
        '__ejs-test-mail-service__', // Updated Template ID
        formRef.current!,
        'EwDUqW7vqZIQi5UNY' // Your Public Key
      );
      
      // Show success toast
      toast({
        title: "Message Sent",
        description: "Thank you! I'll get back to you soon.",
        variant: "default",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    } catch (error) {
      // Show error toast
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      });
      console.error("EmailJS error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5 text-security-accent" />,
      label: "Email",
      value: "settikarthik777@gmail.com",
      href: "mailto:settikarthik777@gmail.com"
    },
    {
      icon: <Phone className="h-5 w-5 text-security-accent" />,
      label: "Phone",
      value: "(940) 758-4811",
      href: "tel:9407584811"
    },
    {
      icon: <MapPin className="h-5 w-5 text-security-accent" />,
      label: "Location",
      value: "Open to Relocate | Austin, Texas",
      href: null
    },
    {
      icon: <Linkedin className="h-5 w-5 text-security-accent" />,
      label: "LinkedIn",
      value: "linkedin.com/in/karthik-setti-765ba4200",
      href: "https://linkedin.com/in/karthik-setti-765ba4200"
    }
  ];

  return (
    <div className="container mx-auto">
      <h2 className="section-title animate-on-scroll">Contact</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Enlarged contact info box: now spans 2/5 columns instead of 1/3 */}
        <div className="md:col-span-2 animate-on-scroll">
          <Card className="shadow-lg hover:shadow-xl transition-all duration-300 border-t-2 border-security-accent bg-white/80 dark:bg-security-secondary/80 backdrop-blur-sm h-full">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-8 pb-2 border-b border-gray-200 dark:border-gray-700 text-security-primary dark:text-white">Get In Touch</h3>
              
              <div className="space-y-8">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start group hover:translate-x-1 transition-transform duration-300">
                    <div className="mt-1 mr-4 bg-security-accent/10 p-3 rounded-full group-hover:bg-security-accent/20 transition-colors">
                      {item.icon}
                    </div>
                    <div>
                      <p className="font-medium text-lg text-security-primary dark:text-white">{item.label}</p>
                      {item.href ? (
                        <a 
                          href={item.href} 
                          className="text-security-accent hover:underline hover:text-security-accent/80 transition-colors text-base"
                          target={item.label === "LinkedIn" ? "_blank" : undefined}
                          rel={item.label === "LinkedIn" ? "noopener noreferrer" : undefined}
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-gray-700 dark:text-gray-300 text-base">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Form section now spans 3/5 columns instead of 2/3 */}
        <div className="md:col-span-3 animate-on-scroll">
          <Card className="shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4 pb-2 border-b border-gray-200 dark:border-gray-700 text-security-primary dark:text-white">Send a Message</h3>
              
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="font-medium text-security-primary dark:text-white">Name</label>
                    <Input 
                      id="name"
                      name="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="border-gray-300 focus:border-security-accent focus:ring focus:ring-security-accent/20 transition-all"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="font-medium text-security-primary dark:text-white">Email</label>
                    <Input 
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Your email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="border-gray-300 focus:border-security-accent focus:ring focus:ring-security-accent/20 transition-all"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="font-medium text-security-primary dark:text-white">Subject</label>
                  <Input 
                    id="subject"
                    name="subject"
                    placeholder="Message subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="border-gray-300 focus:border-security-accent focus:ring focus:ring-security-accent/20 transition-all"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="font-medium text-security-primary dark:text-white">Message</label>
                  <Textarea 
                    id="message"
                    name="message"
                    placeholder="Your message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="border-gray-300 focus:border-security-accent focus:ring focus:ring-security-accent/20 transition-all resize-none"
                  />
                </div>
                
                <Button 
                  type="submit"
                  className="w-full md:w-auto bg-security-accent hover:bg-security-accent/80 text-white shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;
