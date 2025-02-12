export const generateOrganizationSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Web制作 あおい',
  description: 'フロントエンド開発とLP制作のフリーランスエンジニア',
  url: 'https://yourdomain.com',
  sameAs: [
    'https://note.com/hareharesky',
    'https://www.instagram.com/stellariumix/'
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    availableLanguage: ['Japanese']
  }
}) 