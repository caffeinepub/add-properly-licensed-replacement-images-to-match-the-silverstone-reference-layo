import { CheckCircle, Target, Eye, Award } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { siteContent } from '@/content/siteContent';
import { siteImages } from '@/content/siteImages';

export default function AboutPage() {
  const { companyName, about } = siteContent;

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-primary/5 py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              About <span className="text-primary">{companyName}</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Leading the way in micronised mineral processing since {about.yearEstablished}
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview with Image */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Our Story</h2>
              <div className="mt-6 space-y-4 text-muted-foreground">
                <p>
                  Established in {about.yearEstablished}, {companyName} has grown to become a trusted name in the mineral 
                  processing industry. We specialize in the production of high-quality micronised minerals that serve a 
                  diverse range of industrial applications.
                </p>
                <p>
                  Our state-of-the-art processing facilities combine indigenous technology with advanced machinery to 
                  process both hard and soft natural minerals. With a production capacity of {about.productionPerYear}, 
                  we serve over {about.industriesServed} industries across multiple sectors.
                </p>
                <p>
                  We are committed to delivering consistent quality, competitive pricing, and exceptional customer service. 
                  Our team of qualified professionals brings decades of combined experience in mineral processing and 
                  industrial applications.
                </p>
              </div>
              <div className="mt-8 relative aspect-video overflow-hidden rounded-lg shadow-lg lg:hidden">
                <img
                  src={siteImages.processingFacility.src}
                  alt={siteImages.processingFacility.alt}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="space-y-6">
              <div className="relative aspect-video overflow-hidden rounded-lg shadow-lg hidden lg:block mb-6">
                <img
                  src={siteImages.processingFacility.src}
                  alt={siteImages.processingFacility.alt}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>

              <Card className="border-primary/20">
                <CardHeader>
                  <Target className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    To provide high-quality micronised minerals that enhance our customers' products while maintaining 
                    sustainable and responsible mining practices.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardHeader>
                  <Eye className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Our Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    To be the preferred global partner for micronised mineral solutions, recognized for innovation, 
                    quality, and customer satisfaction.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardHeader>
                  <Award className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Our Values</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Quality, integrity, innovation, and customer focus drive everything we do. We believe in building 
                    long-term partnerships based on trust and mutual success.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Why Choose <span className="text-primary">Us</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We combine experience, technology, and commitment to deliver exceptional value
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'Quality Assurance',
                description: 'Rigorous testing and quality control at every stage of production ensures consistent product specifications.',
              },
              {
                title: 'Advanced Technology',
                description: 'State-of-the-art processing equipment and techniques for superior product quality and efficiency.',
              },
              {
                title: 'Expert Team',
                description: 'Qualified professionals with deep industry knowledge and technical expertise.',
              },
              {
                title: 'Custom Solutions',
                description: 'Tailored mineral processing solutions to meet specific customer requirements and applications.',
              },
              {
                title: 'Timely Delivery',
                description: 'Reliable supply chain and logistics ensure on-time delivery to customers worldwide.',
              },
              {
                title: 'Competitive Pricing',
                description: 'Cost-effective solutions without compromising on quality or service standards.',
              },
            ].map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CheckCircle className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary">{about.yearEstablished}</div>
                <div className="mt-2 text-sm text-muted-foreground">Years of Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary">{about.productionPerYear}</div>
                <div className="mt-2 text-sm text-muted-foreground">Annual Production</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary">{about.micronRange}</div>
                <div className="mt-2 text-sm text-muted-foreground">Micron Range</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary">{about.industriesServed}</div>
                <div className="mt-2 text-sm text-muted-foreground">Industries Served</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
