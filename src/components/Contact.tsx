import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, ExternalLink, Send, Download, Linkedin, Twitter } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Message sent successfully!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });

    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "sandeepvarma.work@gmail.com",
      href: "mailto:sandeepvarma.work@gmail.com",
      color: "text-accent"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/sandeep-varma-62640777",
      href: "https://linkedin.com/in/sandeep-varma-62640777",
      color: "text-accent"
    },
    {
      icon: Twitter,
      label: "Twitter/X",
      value: "x.com/sandeepvarma_in",
      href: "https://x.com/sandeepvarma_in",
      color: "text-accent"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-foreground mb-4">
              Let's Work Together
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to optimize your cloud infrastructure and automate your DevOps processes? 
              Let's discuss how I can help your team achieve better performance and reliability.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="card-hover border-card-border">
              <CardContent className="p-8">
                <h3 className="text-2xl font-heading font-bold text-foreground mb-6">
                  Send me a message
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-medium text-foreground">
                      Your Name *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      className="w-full"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium text-foreground">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@company.com"
                      className="w-full"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm font-medium text-foreground">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project, timeline, and how I can help..."
                      rows={6}
                      className="w-full resize-none"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    variant="primary" 
                    size="lg" 
                    disabled={isSubmitting}
                    className="w-full"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <Send className="w-4 h-4 ml-2" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info & CTA */}
            <div className="space-y-8">
              {/* Contact Information */}
              <Card className="card-hover border-card-border">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-heading font-bold text-foreground mb-6">
                    Get in touch
                  </h3>
                  
                  <div className="space-y-6">
                    {contactInfo.map((item, index) => {
                      const Icon = item.icon;
                      return (
                        <a
                          key={index}
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-4 p-4 rounded-lg hover:bg-secondary/50 transition-colors group"
                        >
                          <div className="w-12 h-12 rounded-xl bg-metric-bg flex items-center justify-center">
                            <Icon className={`w-6 h-6 ${item.color}`} />
                          </div>
                          <div className="flex-1">
                            <p className="text-sm text-muted-foreground">{item.label}</p>
                            <p className="text-foreground font-medium group-hover:text-accent transition-colors">
                              {item.value}
                            </p>
                          </div>
                          <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                        </a>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>

              {/* Resume Download CTA */}
              <Card className="card-hover border-card-border">
                <CardContent className="p-8 text-center">
                  <h3 className="text-xl font-heading font-bold text-foreground mb-4">
                    Download My Resume
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Get a detailed overview of my experience, skills, and achievements in a 
                    professional PDF format.
                  </p>
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full"
                    onClick={() => window.open("/Sandeep-Varma.pdf", "_blank")}
                  >
                      <Download className="w-5 h-5 mr-2" />
                      Download Resume (PDF)
                  </Button>
                </CardContent>
              </Card>

              {/* Availability Status */}
              <Card className="card-hover border-card-border bg-metric-bg">
                <CardContent className="p-8 text-center">
                  <div className="w-3 h-3 bg-success rounded-full mx-auto mb-4 animate-pulse" />
                  <h3 className="text-lg font-heading font-bold text-foreground mb-2">
                    Let’s create something amazing together.
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Always up for building something awesome.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;