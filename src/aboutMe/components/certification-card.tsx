import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Tooltip from '@mui/material/Tooltip';
import { FC } from 'react';
import Certification from '../entities/certification';

const CertificationCard: FC<Certification> = (props: Certification) => {
  const { certificationCompany, logo, name, obtentionDate } = props;
  return (
    <>
      <Card sx={{ maxWidth: 345, m: 'auto' }}>
        <CardHeader
          avatar={
            <Tooltip title={certificationCompany}>
              <Avatar
                aria-label="school"
                alt={certificationCompany}
                src={logo}
              />
            </Tooltip>
          }
          title={name}
          subheader={`${obtentionDate} - ${certificationCompany}`}
        />
      </Card>
    </>
  );
};

export default CertificationCard;
