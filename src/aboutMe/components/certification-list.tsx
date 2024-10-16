import Avatar from '@mui/material/Avatar';
import { FC } from 'react';
import Certification from '../entities/certification';
import { useTranslation } from 'react-i18next';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';

const CertificationList: FC = () => {
  const { t } = useTranslation('certifications');
  return (
    <List>
      {t<string, Certification[]>('certifications', {
          returnObjects: true,
        }).map((cert: Certification) => (
          <ListItem>
          <ListItemAvatar>
            <Avatar aria-label="certification company" alt={cert.certificationCompany} src={cert.logo}/>
          </ListItemAvatar>
          <ListItemText primary={cert.name} secondary={cert.obtentionDate} />
        </ListItem>
        ))}
    </List>
  );
};

export default CertificationList;
