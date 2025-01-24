import { Container, Typography, Box, TextField, Button, Paper, Snackbar, Alert } from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';
import emailjs from '@emailjs/browser';
import { useState } from 'react';
import Logo from '../components/Logo';

const validationSchema = yup.object({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Enter a valid email').required('Email is required'),
  organization: yup.string().required('Organization is required'),
  message: yup.string().required('Message is required'),
});

function Contact() {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');

  // EmailJS Configuration
  // 1. Sign up at https://www.emailjs.com
  // 2. Create a new Email Service (Gmail)
  // 3. Create an Email Template
  // 4. Replace these values with your EmailJS credentials:
  const EMAILJS_SERVICE_ID = 'service_schedulingwizard'; // Get this from EmailJS
  const EMAILJS_TEMPLATE_ID = 'template_contact_form'; // Get this from EmailJS
  const EMAILJS_PUBLIC_KEY = '6eCIqIYA4AefhKIwJ'; // Get this from EmailJS

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      organization: '',
      message: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        await emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          {
            from_name: values.name,
            from_email: values.email,
            organization: values.organization,
            message: values.message,
          },
          EMAILJS_PUBLIC_KEY
        );

        setSnackbarMessage('Message sent successfully!');
        setSnackbarSeverity('success');
        setOpenSnackbar(true);
        resetForm();
      } catch (error) {
        console.error('Error sending email:', error);
        setSnackbarMessage('Failed to send message. Please try again.');
        setSnackbarSeverity('error');
        setOpenSnackbar(true);
      }
    },
  });

  return (
    <Container maxWidth="md" sx={{ py: { xs: 4, md: 8 } }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 4 }}>
        <Box sx={{ mb: 3 }}>
          <Box
            component="img"
            src="/scheduling-wizard/logo192.png"
            alt="Scheduling Wizard Logo"
            sx={{
              width: { xs: '100px', md: '150px' },
              height: 'auto',
              mb: 3
            }}
          />
        </Box>
        <Typography variant="h2" component="h1" textAlign="center" gutterBottom
          sx={{
            fontSize: { xs: '2rem', md: '3.75rem' }
          }}
        >
          Contact Us
        </Typography>
        <Typography variant="h5" textAlign="center" color="text.secondary" sx={{ 
          mb: 4,
          fontSize: { xs: '1.2rem', md: '1.5rem' },
          px: { xs: 2, md: 0 }
        }}>
          Let's discuss your scheduling needs
        </Typography>
      </Box>

      <Paper elevation={3} sx={{ p: { xs: 2, md: 4 } }}>
        <form onSubmit={formik.handleSubmit}>
          <Box sx={{ display: 'grid', gap: { xs: 2, md: 3 } }}>
            <TextField
              fullWidth
              name="name"
              label="Name"
              value={formik.values.name}
              onChange={formik.handleChange}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />
            <TextField
              fullWidth
              name="email"
              label="Email"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
            <TextField
              fullWidth
              name="organization"
              label="Organization"
              value={formik.values.organization}
              onChange={formik.handleChange}
              error={formik.touched.organization && Boolean(formik.errors.organization)}
              helperText={formik.touched.organization && formik.errors.organization}
            />
            <TextField
              fullWidth
              multiline
              rows={4}
              name="message"
              label="Message"
              value={formik.values.message}
              onChange={formik.handleChange}
              error={formik.touched.message && Boolean(formik.errors.message)}
              helperText={formik.touched.message && formik.errors.message}
            />
            <Button
              type="submit"
              variant="contained"
              size="large"
              sx={{ 
                mt: { xs: 1, md: 2 },
                py: { xs: 1.5, md: 2 }
              }}
            >
              Send Message
            </Button>
          </Box>
        </form>
      </Paper>
      <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity={snackbarSeverity} sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Container>
  );
}

export default Contact;