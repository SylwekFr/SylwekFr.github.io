import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Tooltip from '@mui/material/Tooltip';
import { FC } from 'react';
import { Study } from '../types';

const StudyCard: FC<Study> = (props: Study) => {
  const { date, degree, school, schoolLogo } = props;
  return (
    <>
      <Card sx={{ maxWidth: 345, m: 'auto' }}>
        <CardHeader
          avatar={
            <Tooltip title={school}>
              <Avatar aria-label="school" alt={school} src={schoolLogo} />
            </Tooltip>
          }
          title={degree}
          subheader={`${date} - ${school}`}
        />
      </Card>
    </>
  );
};

export default StudyCard;
