
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="bg-muted/20 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold">Vinay</h3>
            <p className="text-muted-foreground max-w-sm text-sm sm:text-base">
              Building scalable applications and intuitive interfaces with modern web technologies.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/vinay-54"
                className="w-10 h-10 bg-background rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="www.linkedin.com/in/vinaykumar54"
                className="w-10 h-10 bg-background rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:vinaykumar5400@gmail.com"
                className="w-10 h-10 bg-background rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm sm:text-base"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold">Get in Touch</h4>
            <div className="space-y-2 text-muted-foreground text-sm sm:text-base">
                  <p>vinaykumar5400@gmail.com</p>
              <p>+91 9948343434</p>
              <p>Tirupati, Andhra Pradesh, India</p>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 sm:mt-12 pt-6 sm:pt-8">
          <div className="flex justify-center">
            <p className="text-muted-foreground text-xs sm:text-sm text-center">
              © {currentYear} Vinay Kumar. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

