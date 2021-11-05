import { Certification } from '../types'
import Card from '@mui/material/Card';
import React from 'react';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';

const CertificationCard = (props: Certification) => {
    

    const {certificationCompany, logo, name, obtentionDate} = props
    return(      
        <>  
            <Card sx={{maxWidth: 345, m: "auto"}}>
                <CardHeader
                    avatar={
                        <Tooltip title={certificationCompany}>
                            <Avatar aria-label="school" alt={certificationCompany} src={logo}/>
                        </Tooltip>
                    }
                    title={name}
                    subheader={`${obtentionDate} - ${certificationCompany}`}
                />
            </Card>
        </>     
    )
};

export default CertificationCard;