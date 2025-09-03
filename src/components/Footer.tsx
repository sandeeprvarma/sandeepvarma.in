import { Mail, Phone, Linkedin, Twitter, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    {
      name: "Email",
      href: "mailto:sandeepvarma.work@gmail.com",
      icon: Mail,
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/sandeep-varma-62640777",
      icon: Linkedin,
    },
    {
      name: "Twitter/X",
      href: "https://x.com/sandeepvarma_in",
      icon: Twitter,
    },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* About */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent to-aws flex items-center justify-center">
                  <span className="text-white font-heading font-bold text-lg">SV</span>
                </div>
                <div>
                  <h3 className="font-heading font-bold text-xl">Sandeep Varma</h3>
                  <p className="text-primary-foreground/80">DevOps & FullStack Engineer</p>
                </div>
              </div>
              <p className="text-primary-foreground/80 leading-relaxed mb-6 max-w-md">
                DevOps & FullStack Engineer with 3+ years in infrastructure automation, CI/CD design, 
                and Kubernetes microservices on AWS—plus 7+ years of full-stack development experience.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <a 
                  href="mailto:sandeepvarma.work@gmail.com" 
                  className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">sandeepvarma.work@gmail.com</span>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-heading font-semibold text-lg mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-heading font-semibold text-lg mb-6">Connect</h4>
              <div className="space-y-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-primary-foreground/10 flex items-center justify-center group-hover:bg-primary-foreground/20 transition-colors">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-sm">{social.name}</span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-primary-foreground/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-primary-foreground/60 text-sm">
                © {currentYear} Sandeep Varma. All rights reserved.
              </p>
              <div className="flex items-center gap-6 text-primary-foreground/60 text-sm">
                <span>Last updated: December 2024</span>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
                  <span>Available for opportunities</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;