import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { siteContent } from '@/content/siteContent';
import { siteImages } from '@/content/siteImages';

export default function ContactPage() {
  const { companyName, contact } = siteContent;

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
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-primary/5 py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Contact <span className="text-primary">Us</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Get in touch with our team for inquiries, quotes, or support
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-8 lg:grid-cols-2">
              {/* Contact Details */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold tracking-tight mb-6">
                    Get In Touch <span className="text-primary">With Us</span>
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    You can reach out to us through a variety of channels. Our friendly and knowledgeable team 
                    will be happy to assist you with any inquiries or support you may need.
                  </p>
                </div>

                <div className="space-y-6">
                  <Card className="border-primary/20">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <Phone className="h-6 w-6 text-primary" />
                        <CardTitle>Phone</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <a
                        href={`tel:${contact.phone}`}
                        className="text-lg font-semibold text-primary hover:underline"
                      >
                        {contact.phone}
                      </a>
                      <p className="mt-2 text-sm text-muted-foreground">
                        Call us for immediate assistance
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-primary/20">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <Mail className="h-6 w-6 text-primary" />
                        <CardTitle>Email</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <a
                        href={`mailto:${contact.email}`}
                        className="text-lg font-semibold text-primary hover:underline"
                      >
                        {contact.email}
                      </a>
                      <p className="mt-2 text-sm text-muted-foreground">
                        Send us an email anytime
                      </p>
                    </CardContent>
                  </Card>

                  {addressParts.length > 0 && (
                    <Card className="border-primary/20">
                      <CardHeader>
                        <div className="flex items-center gap-3">
                          <MapPin className="h-6 w-6 text-primary" />
                          <CardTitle>Address</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <address className="not-italic text-muted-foreground">
                          <div className="font-semibold text-foreground">{companyName}</div>
                          <div className="mt-2 space-y-1">
                            {addressParts.map((part, index) => (
                              <div key={index}>{part}</div>
                            ))}
                          </div>
                        </address>
                      </CardContent>
                    </Card>
                  )}

                  <Card className="border-primary/20">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <Clock className="h-6 w-6 text-primary" />
                        <CardTitle>Business Hours</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 text-muted-foreground">
                        <div className="flex justify-between">
                          <span>Monday - Friday:</span>
                          <span className="font-semibold">9:00 AM - 6:00 PM</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Saturday:</span>
                          <span className="font-semibold">9:00 AM - 1:00 PM</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Sunday:</span>
                          <span className="font-semibold">Closed</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Additional Information with Image */}
              <div className="space-y-8">
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-lg">
                  <img
                    src={siteImages.packagingLogistics.src}
                    alt={siteImages.packagingLogistics.alt}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>

                <Card className="border-primary/20 bg-primary/5">
                  <CardHeader>
                    <CardTitle className="text-2xl">Why Contact Us?</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h3 className="font-semibold mb-2">Product Inquiries</h3>
                      <p className="text-sm text-muted-foreground">
                        Learn more about our micronised minerals, specifications, and applications for your industry.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Request a Quote</h3>
                      <p className="text-sm text-muted-foreground">
                        Get competitive pricing for bulk orders and contract manufacturing services.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Technical Support</h3>
                      <p className="text-sm text-muted-foreground">
                        Our technical team can help you select the right mineral grades for your specific needs.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Partnership Opportunities</h3>
                      <p className="text-sm text-muted-foreground">
                        Explore distribution partnerships and long-term supply agreements.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-primary/20">
                  <CardHeader>
                    <CardTitle className="text-2xl">What to Expect</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary font-semibold text-sm flex-shrink-0">
                        1
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">
                          <span className="font-semibold text-foreground">Quick Response:</span> We typically respond 
                          to inquiries within 24 hours during business days.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary font-semibold text-sm flex-shrink-0">
                        2
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">
                          <span className="font-semibold text-foreground">Expert Guidance:</span> Our knowledgeable 
                          team will help you find the right solution for your needs.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary font-semibold text-sm flex-shrink-0">
                        3
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">
                          <span className="font-semibold text-foreground">Detailed Information:</span> Receive 
                          comprehensive product specifications and technical data.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary font-semibold text-sm flex-shrink-0">
                        4
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">
                          <span className="font-semibold text-foreground">Follow-up Support:</span> Ongoing assistance 
                          to ensure your complete satisfaction.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
