import { Link } from '@tanstack/react-router';
import { ArrowRight, CheckCircle, Factory, Users, Award, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { siteContent } from '@/content/siteContent';
import { siteImages } from '@/content/siteImages';

export default function HomePage() {
  const { companyName, tagline, about, contact } = siteContent;

  return (
    <div className="flex flex-col">
      {/* Hero Section with Image */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={siteImages.hero.src}
            alt={siteImages.hero.alt}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-primary/20" />
        </div>
        <div className="relative py-20 md:py-32">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                <span className="text-white">Welcome to</span> <span className="text-primary">{companyName}</span>
              </h1>
              <p className="mt-6 text-lg text-muted-foreground md:text-xl">
                {tagline}
              </p>
              <p className="mt-4 text-base text-muted-foreground">
                We are a leading organization engaged in mining and supplying pulverized and processed minerals, 
                extenders, and fillers for various industries worldwide.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Button asChild size="lg" className="text-base">
                  <Link to="/services">
                    Our Services <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-base">
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary/5">
        <div className="container">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary md:text-4xl">{about.yearEstablished}</div>
              <div className="mt-2 text-sm text-muted-foreground">Year Established</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary md:text-4xl">{about.productionPerYear}</div>
              <div className="mt-2 text-sm text-muted-foreground">Production Per Year</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary md:text-4xl">{about.micronRange}</div>
              <div className="mt-2 text-sm text-muted-foreground">Micron Range</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary md:text-4xl">{about.industriesServed}</div>
              <div className="mt-2 text-sm text-muted-foreground">Industries Served</div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section with Image */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Introduction to <span className="text-primary">Our Company</span>
              </h2>
              <p className="mt-6 text-lg text-muted-foreground">
                Fillers are being used in industrial processes to reduce the cost of products as well as increase productivity. 
                With decades of experience and state-of-the-art processing facilities, we deliver high-quality micronised minerals 
                that meet the exacting standards of modern industries.
              </p>
            </div>
            <div className="relative aspect-video overflow-hidden rounded-lg shadow-lg">
              <img
                src={siteImages.processingFacility.src}
                alt={siteImages.processingFacility.alt}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card className="border-primary/20 hover:border-primary/40 transition-colors">
              <CardHeader>
                <Factory className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Advanced Processing</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  State-of-the-art machinery for processing both hard and soft natural minerals with precision.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-primary/20 hover:border-primary/40 transition-colors">
              <CardHeader>
                <Award className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Quality Assured</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Rigorous quality control ensures consistent product specifications and customer satisfaction.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-primary/20 hover:border-primary/40 transition-colors">
              <CardHeader>
                <Users className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Expert Team</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Qualified professionals with deep industry knowledge and technical expertise.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-primary/20 hover:border-primary/40 transition-colors">
              <CardHeader>
                <TrendingUp className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Growing Reach</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Solid regional footprint with expanding international presence and partnerships.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              What <span className="text-primary">We Do</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Industries We Serve
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'Paint Industry',
                description: 'High-quality mineral fillers that enhance paint properties, reduce costs, and improve coverage.',
              },
              {
                title: 'Rubber Industry',
                description: 'Specialized minerals that improve rubber strength, durability, and processing characteristics.',
              },
              {
                title: 'Plastic Industry',
                description: 'Functional fillers that enhance mechanical properties and reduce production costs.',
              },
              {
                title: 'Paper Industry',
                description: 'Premium minerals for improved brightness, opacity, and printability of paper products.',
              },
              {
                title: 'Agriculture Industry',
                description: 'Mineral supplements and soil conditioners for enhanced crop yield and soil health.',
              },
              {
                title: 'Soap & Detergent',
                description: 'Specialized minerals that improve cleaning efficiency and product consistency.',
              },
            ].map((industry, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-primary">{industry.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{industry.description}</CardDescription>
                  <Button asChild variant="link" className="mt-4 px-0 text-primary">
                    <Link to="/industries">
                      Learn More <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Get In Touch <span className="text-primary">With Us</span>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              For further inquiries, call us at{' '}
              <a href={`tel:${contact.phone}`} className="font-semibold text-primary hover:underline">
                {contact.phone}
              </a>
            </p>
            <p className="mt-2 text-base text-muted-foreground">
              Our team of knowledgeable representatives is available to assist you with any questions or concerns you may have.
            </p>
            <div className="mt-10">
              <Button asChild size="lg" className="text-base">
                <Link to="/contact">
                  Contact Us Today <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
