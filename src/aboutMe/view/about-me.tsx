import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import CertificationList from '../components/certification-list';
import HobbyCard from '../components/hobby-card';
import SkillContainer from '../components/skill-container';
import { contactInfo } from '../data/contact-info';
import { skillList } from '../data/skills';
import Hobby from '../entities/hobby';
import StudiesTimeline from '../components/studies-timeline';
import ExperiencesTimeline from '../components/experience-timeline';


const AboutMe = (): JSX.Element => {
  const [tabs, setTabs] = useState('1');
  const { t } = useTranslation('about-me');
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setTabs(newValue);
  };

  return (
    <>
      <Helmet>
        <title>Sylvain Michel</title>
        <meta
          name="description"
          content="some information about me, sort of my online resume / CV"
        />
      </Helmet>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4} md={3} xl={2}>
          <Paper>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center',
              }}
            >
              <Avatar
                src="../img/me.webp"
                alt="me"
                sx={{ width: 56, height: 56 }}
              >
                SM
              </Avatar>
              <Typography component="h1" variant="h5">
                Sylvain Michel
              </Typography>
            </Box>
            {contactInfo.map((contact) => (
              <ListItemButton onClick={contact.action}>
                <ListItemIcon>{contact.icon}</ListItemIcon>
                <ListItemText primary={contact.text} />
              </ListItemButton>
            ))}
            {skillList.map((skill) => (
              <SkillContainer key={ skill.name } {...skill} />
            ))}
          </Paper>
        </Grid>
        <Grid item xs={12} sm={8} md={9} xl={10}>
          <Box>
            <TabContext value={tabs}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <TabList
                  onChange={handleChange}
                  aria-label="CV sections"
                  variant="fullWidth"
                >
                  <Tab
                    label={
                      <Typography component="h2" variant="button">
                        {t<string>('profesionalExp')}
                      </Typography>
                    }
                    value="1"
                  />
                  <Tab
                    label={
                      <Typography component="h2" variant="button">
                        {t<string>('studiesTab')}
                      </Typography>
                    }
                    value="2"
                  />
                  <Tab
                    label={
                      <Typography component="h2" variant="button">
                        {t<string>('certificationsTab')}
                      </Typography>
                    }
                    value="3"
                  />
                  <Tab
                    label={
                      <Typography component="h2" variant="button">
                        {t<string>('hobbiesTab')}
                      </Typography>
                    }
                    value="4"
                  />
                </TabList>
              </Box>
              <TabPanel value="1">
                <ExperiencesTimeline />
              </TabPanel>
              <TabPanel value="2">
                  <StudiesTimeline/>
              </TabPanel>
              <TabPanel value="3">
                <CertificationList />
              </TabPanel>
              <TabPanel value="4">
                <Grid container spacing={2}>
                  {t<string, Hobby[]>('hobbies', {
                    returnObjects: true,
                  }).map((hobby: Hobby) => (
                    <Grid item xs={12} sm={6} md={4} xl={3}>
                      <HobbyCard {...hobby} />
                    </Grid>
                  ))}
                </Grid>
              </TabPanel>
            </TabContext>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};
export default AboutMe;
