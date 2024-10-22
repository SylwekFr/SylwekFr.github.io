import Avatar from '@mui/material/Avatar';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Study from '../entities/study';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent/TimelineOppositeContent';
import Tooltip from '@mui/material/Tooltip/Tooltip';

const StudiesTimeline: FC = () => {
  const { t } = useTranslation('studies');
  return (
    <Timeline position="alternate">
      {t<string, Study[]>('studies', {
        returnObjects: true,
      }).map((study: Study, index: number) => (
        <TimelineItem key={index}>
          <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="text.secondary"
          >
              {study.date}
          </TimelineOppositeContent>
          <TimelineSeparator>
            <Tooltip title={study.school}>
              <TimelineDot variant="outlined" sx={{ p: 0 }}>
                <Avatar aria-label="school" src={study.schoolLogo} />
              </TimelineDot >
            </Tooltip>
            <TimelineConnector sx={{ minHeight: '15px' }}/>
          </TimelineSeparator>
          <TimelineContent sx={{ m: 'auto 0' }}> {study.degree} </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
};

export default StudiesTimeline;
