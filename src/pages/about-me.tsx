import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { certificates } from "../data/certificates";
import { contactInfo } from "../data/contact-info";
import { skillList } from "../data/skills";
import { profesionalXp } from '../data/profesional-experience';
import { studies } from '../data/studies';
import { hobbies } from "../data/hobbies";
import SkillContainer from "../components/skill-container";
import ExperienceCard from '../components/experience-card';
import HobbyCard from '../components/hobby-card';
import StudyCard from '../components/study-card';
import CertificationCard from '../components/certification-card';

const AboutMe = () => {

    const [tabs, setTabs] = useState('1');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
      setTabs(newValue);
    };

    return(
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
                    <Avatar src="../img/me.jpg" alt="me" sx={{ width: 56, height: 56 }}>
                        SM
                    </Avatar>
                    <Typography variant="h5">
                        Sylvain Michel
                    </Typography>            
                </Box>
                {contactInfo.map((contact) =>
                <ListItemButton onClick={contact.action}>
                    <ListItemIcon>
                        {contact.icon}
                    </ListItemIcon>
                    <ListItemText primary={contact.text} />
                </ListItemButton>
                )}  
                {skillList.map((skill) => 
                    <SkillContainer {...skill}/>
                )}
            </Paper>
        </Grid>
        <Grid item xs={12} sm={8} md={9} xl={10}>
            <Box>
                <TabContext value={tabs}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleChange} aria-label="CV sections">
                        <Tab label="Professional Experiences" value="1" />
                        <Tab label="Studies" value="2" />
                        <Tab label="Certifications" value="3" />
                        <Tab label="Hobbies" value="4" />
                    </TabList>
                    </Box>
                    <TabPanel value="1">
                        <Grid container spacing={2}>
                            {profesionalXp.map((experience)=>
                                <Grid item xs={12} sm={6} md={4} xl={3}>
                                    <ExperienceCard {...experience}/>
                                </Grid>
                            )}
                        </Grid>
                    </TabPanel>
                    <TabPanel value="2">
                        <Grid container spacing={2}>
                            {studies.map((study)=>
                                <Grid item xs={12} sm={6} md={4} xl={3}>
                                    <StudyCard {...study}/>
                                </Grid>
                            )}
                        </Grid>
                    </TabPanel>
                    <TabPanel value="3">
                        <Grid container spacing={2}>
                            {certificates.map((certificate)=>
                                <Grid item xs={12} sm={6} md={4} xl={3}>
                                    <CertificationCard {...certificate}/>
                                </Grid>
                            )}
                        </Grid>
                    </TabPanel>
                    <TabPanel value="4">
                        <Grid container spacing={2}>
                            {hobbies.map((hobby)=>
                                <Grid item xs={12} sm={6} md={4} xl={3}>
                                    <HobbyCard {...hobby}/>
                                </Grid>
                            )}
                        </Grid>
                    </TabPanel>
                </TabContext>
            </Box>
        </Grid>
    </Grid>
    )
};
export default AboutMe;