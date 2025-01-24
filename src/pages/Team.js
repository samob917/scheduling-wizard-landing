import { Container, Grid, Typography, Card, CardContent, CardMedia, Box, Collapse } from '@mui/material';
import { Email as EmailIcon, Phone as PhoneIcon } from '@mui/icons-material';
import { useState } from 'react';

function Team() {
  const [expandedMember, setExpandedMember] = useState(null);

  const teamMembers = [
    {
      name: 'Samuel Oberly',
      role: 'Cofounder & CEO',
      education: 'Johns Hopkins University & University of Cambridge',
      details: 'BA Mathematics, Economics (2024)\nBS/MS Applied Math & Statistics (2024)',
      experience: 'Minor League Baseball Scheduling,\nModeling & Analysis for DoD',
      email: 'samuel.oberly@schedulingwizard.com',
      phone: '(555) 123-4567'
    },
    {
      name: 'Abdelrahman Hamimi',
      role: 'Cofounder & CTO',
      education: 'Johns Hopkins University',
      details: 'BS/MS Computer Science (2024)\nBA Economics (2024)',
      experience: 'Data Analyst at GEICO,\nSoftware Engineering, & Sports Analytics Research',
      email: 'abdelrahman.hamimi@schedulingwizard.com',
      phone: '(555) 234-5678'
    },
    {
      name: 'Ashley Gijon',
      role: 'Cofounder & COO',
      education: 'Columbia University & Providence College',
      details: 'BS Physics (2022)\nBS/MS Mechanical Engineering (2023)',
      experience: 'D&D Weapons Analyst,\nNordson Builds Corporation Design Engineer,\nGoldman Sachs Engineering',
      email: 'ashley.gijon@schedulingwizard.com',
      phone: '(555) 345-6789'
    },
    {
      name: 'Zachary Dermody',
      role: 'Cofounder & CFO',
      education: 'Johns Hopkins University',
      details: 'BA Economics (2024)\nMinor in Computer Science (2024)',
      experience: 'Operations Analyst at Amazon,\nNLP Research to Combat Vaccine Misinformation',
      email: 'zachary.dermody@schedulingwizard.com',
      phone: '(555) 456-7890'
    }
  ];

  return (
    <Box sx={{ py: 8 }}>
      <Container>
        <Typography variant="h2" component="h1" textAlign="center" gutterBottom>
          Who We Are
        </Typography>
        <Typography variant="h5" textAlign="center" color="text.secondary" sx={{ mb: 8 }}>
          Meet the team behind Scheduling Wizard
        </Typography>

        <Grid container spacing={4}>
          {teamMembers.map((member) => (
            <Grid item xs={12} sm={6} md={3} key={member.name}>
              <Card 
                onClick={() => setExpandedMember(expandedMember === member ? null : member)}
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'translateY(-4px)'
                  },
                  overflow: 'visible'
                }}
              >
                <Box
                  sx={{
                    position: 'relative',
                    paddingTop: '100%',
                    overflow: 'hidden',
                    borderTopLeftRadius: 1,
                    borderTopRightRadius: 1
                  }}
                >
                  <Box
                    component="img"
                    src={`/scheduling-wizard/team/${member.name === 'Samuel Oberly' ? 'sam_photo.jpeg'
                      : member.name === 'Abdelrahman Hamimi' ? 'ab_photo.jpeg'
                      : member.name === 'Ashley Gijon' ? 'ashley_photo.png'
                      : 'zac_photo.jpeg'}`}
                    alt={member.name}
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                </Box>
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    {member.name}
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                    {member.role}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    {member.education}
                  </Typography>
                  <Typography variant="body2" paragraph>
                    {member.details}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {member.experience}
                  </Typography>
                  <Collapse in={expandedMember === member}>
                    <Box sx={{ mt: 2, p: 2, bgcolor: 'rgba(0, 0, 0, 0.03)', borderRadius: 1 }}>
                      <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                        <EmailIcon sx={{ mr: 1, fontSize: 20 }} />
                        {member.email}
                      </Typography>
                      <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center' }}>
                        <PhoneIcon sx={{ mr: 1, fontSize: 20 }} />
                        {member.phone}
                      </Typography>
                    </Box>
                  </Collapse>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Team;