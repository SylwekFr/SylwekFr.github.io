import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

type Contact = {
  action: () => void;
  icon: JSX.Element;
  text: string;
};

export const contactInfo: Contact[] = [
  {
    action: () => window.open('tel:+48880108360'),
    icon: <ContactPhoneIcon />,
    text: '+48 880 108 360',
  },
  {
    action: () => window.open('mailto:sylvain.michel@2018.icam.fr'),
    icon: <EmailIcon />,
    text: 'sylvain.michel@2018.icam.fr',
  },
  {
    action: () =>
      window.open(
        'https://www.linkedin.com/in/sylvain-michel-065652119/',
        '_blank',
      ),
    icon: <LinkedInIcon />,
    text: 'Sylvain Michel',
  },
];
