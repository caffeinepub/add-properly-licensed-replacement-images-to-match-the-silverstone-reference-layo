import { Link } from '@tanstack/react-router';
import { Phone, Mail, MapPin, Heart } from 'lucide-react';
import { SiFacebook, SiX, SiLinkedin, SiInstagram } from 'react-icons/si';
import { siteContent } from '@/content/siteContent';

export default function Footer() {
  const { contact, footer, companyName, social } = siteContent;

  // Format address without empty fields
  const formatAddress = (): string[] => {
    const parts: string[] = [];
    if (contact.address.street) parts.push(contact.address.street);
    
    const cityState = [contact.address.city, contact.address.state]
      .filter(Boolean)
      .join(', ');
    if (cityState) parts.push(cityState);
    
    if (contact.address.zip) parts.push(contact.address.zip);
    if (contact.address.country) parts.push(contact.address.country);
    
    return parts;
  };

  const addressParts = formatAddress();

  return (
    <footer className="border-t bg-muted/30">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary">{companyName}</h3>
            <p className="text-sm text-muted-foreground">{footer.description}</p>
            <div className="flex gap-4">
              <a href={social.facebook} className="text-muted-foreground hover:text-primary transition-colors">
                <SiFacebook className="h-5 w-5" />
              </a>
              <a href={social.twitter} className="text-muted-foreground hover:text-primary transition-colors">
                <SiX className="h-5 w-5" />
              </a>
              <a href={social.linkedin} className="text-muted-foreground hover:text-primary transition-colors">
                <SiLinkedin className="h-5 w-5" />
              </a>
              <a href={social.instagram} className="text-muted-foreground hover:text-primary transition-colors">
                <SiInstagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {footer.quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 mt-0.5 flex-shrink-0 text-primary" />
                <a href={`tel:${contact.phone}`} className="hover:text-primary transition-colors">
                  {contact.phone}
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 mt-0.5 flex-shrink-0 text-primary" />
                <a href={`mailto:${contact.email}`} className="hover:text-primary transition-colors">
                  {contact.email}
                </a>
              </li>
              {addressParts.length > 0 && (
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 text-primary" />
                  <address className="not-italic">
                    {addressParts.map((part, index) => (
                      <div key={index}>{part}</div>
                    ))}
                  </address>
                </li>
              )}
            </ul>
          </div>

          {/* Business Hours / Additional Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Our Expertise</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Micronised Minerals</li>
              <li>Contract Manufacturing</li>
              <li>Quality Processing</li>
              <li>Custom Solutions</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t">
        <div className="container py-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © 2026. Built with <Heart className="inline h-4 w-4 text-primary fill-primary" /> using{' '}
              <a href="https://caffeine.ai" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                caffeine.ai
              </a>
            </p>
            <p className="text-sm text-muted-foreground">
              All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
