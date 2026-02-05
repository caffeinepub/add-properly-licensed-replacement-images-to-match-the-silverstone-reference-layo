export interface NavRoute {
  path: string;
  label: string;
}

export const mainNavRoutes: NavRoute[] = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About Us' },
  { path: '/services', label: 'Services' },
  { path: '/industries', label: 'Industries' },
  { path: '/contact', label: 'Contact' },
];
