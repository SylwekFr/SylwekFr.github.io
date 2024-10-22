import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import React, { FC } from 'react';
import Experience from '../entities/experience';
import TimelineDot from '@mui/lab/TimelineDot';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';

const ExperienceDialog: FC<Experience> = (xp: Experience) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const { company, companyLogo, position, tasks } =
    xp;
  return (
    <>
    <Button variant="outlined" onClick={handleClickOpen} sx={{border: "none", p:0}}>
      <TimelineDot variant="outlined" sx={{ p: 0 }}>
          <Avatar aria-label="company" src={companyLogo} />
        </TimelineDot>
    </Button>
    <Dialog onClose={handleClose}
      aria-labelledby="{position}"
      open={open}>
      <DialogTitle sx={{ m: 0, p: 2 }}>
        <Typography variant="h5" color="text.primary">
          {position} @ {company}
        </Typography>
      </DialogTitle>
      <IconButton
        aria-label="close"
        onClick={handleClose}
        sx={{
          position: 'absolute',
          right: 8,
          top: 8,
        }}
      >
        <Avatar aria-label="company" src={companyLogo} />
      </IconButton>
      <DialogContent dividers>
        {tasks.map((task, index) => (
          <Typography gutterBottom key={index}>
            {task}
          </Typography>
        ))}
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleClose}>
          Close
        </Button>
      </DialogActions>
    </Dialog>
    </>
  );
};

export default ExperienceDialog;
