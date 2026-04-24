type StructuredDataProps = {
  locale: string;
};

const getBaseUrl = () => {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL;
  }
  return 'http://localhost:3000';
};

export function StructuredData({ locale }: StructuredDataProps) {
  const baseUrl = getBaseUrl();

  const localizedData = {
    en: {
      name: 'GLADIUS - Brazilian Jiu-Jitsu School',
      description: 'GLADIUS is a martial arts school in Tbilisi, Georgia specializing in Brazilian Jiu-Jitsu, Krav Maga, and MMA for all ages and skill levels.',
      address: 'Pavle Aslanidi Street 21, Tbilisi, Georgia',
    },
    ka: {
      name: 'GLADIUS - ბრაზილიური ჯიუ-ჯიცუს სკოლა',
      description: 'GLADIUS არის საბრძოლო ხელოვნების სკოლა თბილისში, რომელიც სპეციალიზირებულია ბრაზილიურ ჯიუ-ჯიცუში, კრავ მაგაში და MMA-ში.',
      address: 'პავლე ასლანიძის ქუჩა 21, თბილისი, საქართველო',
    },
    ru: {
      name: 'GLADIUS - Школа бразильского джиу-джитсу',
      description: 'GLADIUS - школа боевых искусств в Тбилиси, Грузия, специализирующаяся на бразильском джиу-джитсу, крав-мага и ММА.',
      address: 'улица Павла Асланиди 21, Тбилиси, Грузия',
    },
  };

  const data = localizedData[locale as keyof typeof localizedData] || localizedData.en;

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'SportsActivityLocation',
    '@id': `${baseUrl}/#organization`,
    name: data.name,
    description: data.description,
    url: `${baseUrl}/${locale}`,
    logo: `${baseUrl}/logo.png`,
    image: `${baseUrl}/og-image.jpg`,
    telephone: '+995555123456',
    email: 'jiujitsugladius@gmail.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Pavle Aslanidi Street 21',
      addressLocality: 'Tbilisi',
      addressCountry: 'GE',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 41.7151,
      longitude: 44.8271,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '09:00',
        closes: '21:00',
      },
    ],
    sameAs: [
      'https://www.facebook.com/GladiusBrazilianJiuJitsu',
      'https://www.instagram.com/gladius_bjj_tbilisi/',
    ],
    priceRange: '$$',
    sport: ['Brazilian Jiu-Jitsu', 'Krav Maga', 'MMA', 'Mixed Martial Arts'],
    amenityFeature: [
      { '@type': 'LocationFeatureSpecification', name: 'Kids Classes', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Adult Classes', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Private Training', value: true },
    ],
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: `${baseUrl}/${locale}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
