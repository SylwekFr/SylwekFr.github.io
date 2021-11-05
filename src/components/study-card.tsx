import { Study } from '../types'
import Card from '@mui/material/Card';
import React from 'react';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';

const StudyCard = (props: Study) => {
    

    const {date, degree, school, schoolLogo} = props
    return(      
        <>  
            <Card sx={{maxWidth: 345, m: "auto"}}>
                <CardHeader
                    avatar={
                        <Tooltip title={school}>
                            <Avatar aria-label="school" alt={school} src={schoolLogo}/>
                        </Tooltip>
                    }
                    title={degree}
                    subheader={`${date} - ${school}`}
                />
            </Card>
        </>     
    )
};

export default StudyCard;