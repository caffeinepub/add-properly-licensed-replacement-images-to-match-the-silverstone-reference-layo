/**
 * Centralized image configuration for site-wide image assets.
 * All images are served from the public/assets directory.
 */

export const siteImages = {
  hero: {
    src: '/assets/generated/hero-quartz-lumps.dim_1920x900.png',
    alt: 'High-purity white quartz lumps mineral raw material',
  },
  mineralPowder: {
    src: '/assets/img9.jpg',
    alt: 'Industrial mineral processing equipment and machinery in factory facility',
  },
  processingFacility: {
    src: '/assets/img2-1.jpg',
    alt: 'Advanced mineral processing facility with industrial grinding and separation equipment',
  },
  packagingLogistics: {
    src: '/assets/img11.jpg',
    alt: 'Mineral powder processing plant with automated packaging and material handling systems',
  },
  industriesTiles: {
    src: '/assets/generated/industries-tiles.dim_1600x900.png',
    alt: 'Indian mineral and talc industry applications visual collage',
  },
} as const;
