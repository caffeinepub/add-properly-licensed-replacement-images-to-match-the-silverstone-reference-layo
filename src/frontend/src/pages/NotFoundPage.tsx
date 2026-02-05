import { Link } from '@tanstack/react-router';
import { Home, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function NotFoundPage() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-primary">404</h1>
        <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">Page Not Found</h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Sorry, we couldn't find the page you're looking for.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Button asChild size="lg">
            <Link to="/">
              <Home className="mr-2 h-5 w-5" />
              Go to Homepage
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" onClick={() => window.history.back()}>
            <button>
              <ArrowLeft className="mr-2 h-5 w-5" />
              Go Back
            </button>
          </Button>
        </div>
      </div>
    </div>
  );
}
