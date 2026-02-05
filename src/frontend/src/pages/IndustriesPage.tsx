import { Paintbrush, Package, Factory, FileText, Sprout, Droplet } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { siteImages } from '@/content/siteImages';

export default function IndustriesPage() {
  const industries = [
    {
      id: 'paint',
      name: 'Paint Industry',
      icon: Paintbrush,
      description: 'High-quality mineral fillers for the paint and coatings industry',
      details: [
        'Owing to its low cost and platy structure, our minerals are widely used as extenders in paints and coatings.',
        'Improves paint properties including opacity, brightness, and durability.',
        'Reduces production costs while maintaining quality standards.',
        'Available in various particle sizes to suit different paint formulations.',
      ],
      applications: [
        'Architectural paints',
        'Industrial coatings',
        'Automotive paints',
        'Decorative coatings',
      ],
    },
    {
      id: 'rubber',
      name: 'Rubber Industry',
      icon: Package,
      description: 'Specialized minerals for rubber manufacturing and processing',
      details: [
        'Enhances mechanical properties of rubber products.',
        'Improves processing characteristics and reduces production costs.',
        'Provides reinforcement and increases product durability.',
        'Suitable for various rubber applications and formulations.',
      ],
      applications: [
        'Tire manufacturing',
        'Industrial rubber goods',
        'Automotive components',
        'Consumer rubber products',
      ],
    },
    {
      id: 'plastic',
      name: 'Plastic Industry',
      icon: Factory,
      description: 'Functional fillers for plastic and polymer applications',
      details: [
        'Improves mechanical strength and dimensional stability.',
        'Reduces material costs without compromising quality.',
        'Enhances surface finish and appearance.',
        'Compatible with various polymer systems.',
      ],
      applications: [
        'Injection molding',
        'Extrusion processes',
        'Blow molding',
        'Rotational molding',
      ],
    },
    {
      id: 'paper',
      name: 'Paper Industry',
      icon: FileText,
      description: 'Premium minerals for paper manufacturing',
      details: [
        'Improves brightness, opacity, and printability of paper.',
        'Enhances surface smoothness and ink receptivity.',
        'Reduces production costs and improves efficiency.',
        'Available in grades suitable for various paper types.',
      ],
      applications: [
        'Printing paper',
        'Writing paper',
        'Packaging materials',
        'Specialty papers',
      ],
    },
    {
      id: 'agriculture',
      name: 'Agriculture Industry',
      icon: Sprout,
      description: 'Mineral supplements and soil conditioners',
      details: [
        'Provides essential minerals for crop nutrition.',
        'Improves soil pH and structure.',
        'Enhances nutrient availability and uptake.',
        'Supports sustainable agricultural practices.',
      ],
      applications: [
        'Fertilizer production',
        'Soil amendments',
        'Animal feed supplements',
        'Crop protection',
      ],
    },
    {
      id: 'soap',
      name: 'Soap & Detergent',
      icon: Droplet,
      description: 'Specialized minerals for cleaning products',
      details: [
        'The soap and detergent industry is an essential sector that produces a wide range of cleaning products.',
        'Improves cleaning efficiency and product consistency.',
        'Provides bulk and texture to formulations.',
        'Cost-effective filler for various cleaning applications.',
      ],
      applications: [
        'Laundry detergents',
        'Bar soaps',
        'Liquid cleaners',
        'Industrial cleaning products',
      ],
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-primary/5 py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Industries <span className="text-primary">We Serve</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Providing high-quality micronised minerals to diverse industries worldwide
            </p>
          </div>
        </div>
      </section>

      {/* Visual Section */}
      <section className="py-12 bg-muted/30">
        <div className="container">
          <div className="relative aspect-[21/9] overflow-hidden rounded-lg shadow-lg max-w-5xl mx-auto">
            <img
              src={siteImages.industriesTiles.src}
              alt={siteImages.industriesTiles.alt}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Industries Overview */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <p className="text-lg text-muted-foreground">
              We, at our company, are a leading organization engaged in mining and supplying pulverized and processed 
              minerals, extenders, and fillers. Our products serve over 50+ industries across multiple sectors, 
              helping manufacturers reduce costs and improve product quality.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-16">
            {industries.map((industry) => {
              const Icon = industry.icon;
              return (
                <Card key={industry.id} className="border-primary/20 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <Icon className="h-10 w-10 text-primary mb-2" />
                    <CardTitle className="text-primary">{industry.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{industry.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Detailed Industry Information */}
          <div className="mx-auto max-w-5xl">
            <Tabs defaultValue="paint" className="w-full">
              <TabsList className="grid w-full grid-cols-2 lg:grid-cols-6 h-auto">
                {industries.map((industry) => (
                  <TabsTrigger key={industry.id} value={industry.id} className="text-xs sm:text-sm">
                    {industry.name.split(' ')[0]}
                  </TabsTrigger>
                ))}
              </TabsList>
              {industries.map((industry) => {
                const Icon = industry.icon;
                return (
                  <TabsContent key={industry.id} value={industry.id} className="mt-6">
                    <Card>
                      <CardHeader>
                        <div className="flex items-center gap-3">
                          <Icon className="h-8 w-8 text-primary" />
                          <CardTitle className="text-2xl">{industry.name}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <div>
                          <h3 className="font-semibold text-lg mb-3">Overview</h3>
                          <ul className="space-y-2">
                            {industry.details.map((detail, index) => (
                              <li key={index} className="text-muted-foreground flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-3">Applications</h3>
                          <div className="grid grid-cols-2 gap-3">
                            {industry.applications.map((app, index) => (
                              <div
                                key={index}
                                className="bg-primary/5 rounded-lg px-4 py-2 text-sm text-muted-foreground"
                              >
                                {app}
                              </div>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                );
              })}
            </Tabs>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Don't See Your <span className="text-primary">Industry</span>?
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              We work with many other industries and can develop custom solutions for your specific needs. 
              Contact us to discuss how our minerals can benefit your applications.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
