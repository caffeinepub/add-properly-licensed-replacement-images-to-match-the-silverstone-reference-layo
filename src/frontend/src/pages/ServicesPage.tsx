import { Package, Cog, FlaskConical, Truck, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { siteImages } from '@/content/siteImages';

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-primary/5 py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Our <span className="text-primary">Services</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Comprehensive mineral processing solutions tailored to your industry needs
            </p>
          </div>
        </div>
      </section>

      {/* Visual Section */}
      <section className="py-12 bg-muted/30">
        <div className="container">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="relative aspect-video overflow-hidden rounded-lg shadow-lg">
              <img
                src={siteImages.mineralPowder.src}
                alt={siteImages.mineralPowder.alt}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="relative aspect-video overflow-hidden rounded-lg shadow-lg">
              <img
                src={siteImages.packagingLogistics.src}
                alt={siteImages.packagingLogistics.alt}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-2">
            <Card className="border-primary/20 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Package className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-2xl">Mineral Processing</CardTitle>
                <CardDescription className="text-base">
                  Advanced processing of natural minerals to precise specifications
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  We specialize in the processing of various minerals including calcium carbonate, dolomite, talc, 
                  marble powder, and more. Our state-of-the-art facilities can process minerals to micron sizes 
                  ranging from 25 to 5 microns.
                </p>
                <Separator />
                <div className="space-y-2">
                  <h4 className="font-semibold">Key Features:</h4>
                  <ul className="space-y-2">
                    {[
                      'Precision grinding and micronisation',
                      'Multiple particle size distributions',
                      'Consistent quality control',
                      'Custom processing specifications',
                    ].map((feature, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/20 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Cog className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-2xl">Contract Manufacturing</CardTitle>
                <CardDescription className="text-base">
                  Flexible manufacturing solutions for your specific requirements
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  We offer contract manufacturing services for companies requiring specialized mineral processing. 
                  Our experienced team works closely with clients to develop custom solutions that meet exact 
                  specifications and quality standards.
                </p>
                <Separator />
                <div className="space-y-2">
                  <h4 className="font-semibold">Key Features:</h4>
                  <ul className="space-y-2">
                    {[
                      'Custom formulation development',
                      'Scalable production capacity',
                      'Quality assurance protocols',
                      'Confidentiality agreements',
                    ].map((feature, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/20 hover:shadow-lg transition-shadow">
              <CardHeader>
                <FlaskConical className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-2xl">Quality Testing</CardTitle>
                <CardDescription className="text-base">
                  Comprehensive testing and analysis services
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Our in-house laboratory is equipped with modern testing equipment to ensure every batch meets 
                  stringent quality standards. We provide detailed analysis reports and certificates of analysis 
                  with every shipment.
                </p>
                <Separator />
                <div className="space-y-2">
                  <h4 className="font-semibold">Testing Services:</h4>
                  <ul className="space-y-2">
                    {[
                      'Particle size analysis',
                      'Chemical composition testing',
                      'Brightness and whiteness measurement',
                      'Moisture content analysis',
                    ].map((feature, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/20 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Truck className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-2xl">Logistics & Supply</CardTitle>
                <CardDescription className="text-base">
                  Reliable delivery and supply chain management
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  We maintain efficient logistics operations to ensure timely delivery of products to customers 
                  across the region and internationally. Our supply chain management ensures consistent availability 
                  and reliable service.
                </p>
                <Separator />
                <div className="space-y-2">
                  <h4 className="font-semibold">Logistics Features:</h4>
                  <ul className="space-y-2">
                    {[
                      'Flexible packaging options',
                      'Timely delivery schedules',
                      'International shipping capability',
                      'Inventory management support',
                    ].map((feature, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Our <span className="text-primary">Products</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              High-quality minerals processed to meet diverse industry requirements
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: 'Calcium Carbonate',
                description: 'Ground and coated calcium carbonate in various grades for multiple applications.',
              },
              {
                name: 'Dolomite',
                description: 'High-purity dolomite and low silica dolomite for industrial use.',
              },
              {
                name: 'Talc / Soapstone',
                description: 'Premium quality talc and steatite in various mesh sizes.',
              },
              {
                name: 'Marble Powder',
                description: 'Finely ground marble powder for paints, plastics, and construction.',
              },
              {
                name: 'Calcite',
                description: 'High-brightness calcite for paper, paint, and plastic industries.',
              },
              {
                name: 'Custom Blends',
                description: 'Tailored mineral blends to meet specific customer requirements.',
              },
            ].map((product, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-primary">{product.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{product.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
