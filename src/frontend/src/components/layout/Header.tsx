import { useState } from 'react';
import { Link, useNavigate, useRouterState } from '@tanstack/react-router';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { mainNavRoutes } from '@/routes/siteRoutes';
import { siteContent } from '@/content/siteContent';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const router = useRouterState();
  const currentPath = router.location.pathname;

  const handleNavClick = (path: string) => {
    navigate({ to: path });
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {/* Top bar with contact info */}
      <div className="border-b border-border/40 bg-primary/5">
        <div className="container flex h-10 items-center justify-between text-sm">
          <div className="flex items-center gap-4">
            <a href={`tel:${siteContent.contact.phone}`} className="flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors">
              <Phone className="h-3 w-3" />
              <span className="hidden sm:inline">{siteContent.contact.phone}</span>
            </a>
            <a href={`mailto:${siteContent.contact.email}`} className="flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors">
              <Mail className="h-3 w-3" />
              <span className="hidden sm:inline">{siteContent.contact.email}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <div className="flex flex-col">
            <span className="text-xl font-bold text-primary">{siteContent.companyName}</span>
            <span className="text-xs text-muted-foreground hidden sm:block">{siteContent.tagline}</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {mainNavRoutes.map((route) => (
            <Link
              key={route.path}
              to={route.path}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                currentPath === route.path ? 'text-primary' : 'text-foreground/80'
              }`}
            >
              {route.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col gap-4 mt-8">
              {mainNavRoutes.map((route) => (
                <button
                  key={route.path}
                  onClick={() => handleNavClick(route.path)}
                  className={`text-left text-lg font-medium transition-colors hover:text-primary py-2 ${
                    currentPath === route.path ? 'text-primary' : 'text-foreground'
                  }`}
                >
                  {route.label}
                </button>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
