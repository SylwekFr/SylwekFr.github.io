import type { Contact } from '@/models/entities/contact-info';


export const contactInfo: Contact[] = [
  {
    action: () => window.open('tel:+48739040324'),
    icon: "mdi-phone",
    text: '+48 739 040 324',
  },
  {
    action: () => window.open('mailto:sylvain.michel@2018.icam.fr'),
    icon: "mdi-email-outline",
    text: 'sylvain.michel@2018.icam.fr',
  },
  {
    action: () =>
      window.open(
        'https://www.linkedin.com/in/sylvain--michel/',
        '_blank',
        "noopener"
      ),
    icon: "mdi-linkedin",
    text: 'Sylvain Michel',
  },
];
