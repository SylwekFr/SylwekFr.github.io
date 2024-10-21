import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Experience from '../entities/experience';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent/TimelineOppositeContent';
import ExperienceDialog from './experience-modal';

const ExperiencesTimeline: FC = () => {
  const { t } = useTranslation('professional-experiences');
  return (
    <>
      <Timeline position="alternate">
        {t<string, Experience[]>('professional-experiences', {
          returnObjects: true,
        }).map(( xp : Experience) => (
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: '17px 0' }}
              align="right"
              variant="body2"
              color="text.secondary"
            >
                {xp.timeRanges}
            </TimelineOppositeContent>
            <TimelineSeparator>
              <ExperienceDialog {...xp} />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ width: '20%', minWidth: '270px' }}>
              <Card variant="outlined">
                <Box sx={{ p: 2 }}>
                  <Stack
                    direction="row"
                    sx={{ justifyContent: 'space-between', alignItems: 'center' }}
                  >
                    <Typography gutterBottom variant="h5" component="div">
                      {xp.position}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="div" display={{xs: 'none', lg: 'block'}}>
                      {xp.company}
                    </Typography>
                  </Stack>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {xp.context}
                  </Typography>
                </Box>
                <Divider />
                <Box sx={{ p: 2, overflowX: 'scroll'}}>
                  <Stack direction="row" spacing={1} >
                    {xp.tags.map((tag) => (
                      <Chip label={tag} size="small" />
                    ))}
                  </Stack>
                </Box>
              </Card>
            </TimelineContent>
          </TimelineItem>
        ))}
        </Timeline>
    </>
  );
};

export default ExperiencesTimeline;
