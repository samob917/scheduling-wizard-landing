import { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Box, Drawer, List, ListItem, ListItemText } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import Logo from './Logo';

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { title: 'Home', path: '/' },
    { title: 'Team', path: '/team' },
    { title: 'Contact', path: '/contact' },
  ];

  return (
    <AppBar position="sticky" color="transparent" sx={{ backdropFilter: 'blur(20px)' }}>
      <Toolbar>
        <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
          <Link to="/">
            <Box
              component="img"
              src="/scheduling-wizard/logo192.png"
              alt="Scheduling Wizard Logo"
              sx={{
                width: { xs: '32px', md: '0' },
                height: 'auto',
                mr: 1,
                display: { xs: 'block', md: 'none' }
              }}
            />
          </Link>
          <Typography 
            variant="h6" 
            component={Link} 
            to="/" 
            sx={{ 
              textDecoration: 'none', 
              color: 'inherit',
              display: 'flex',
              alignItems: 'center'
            }}
          >
            Scheduling Wizard
          </Typography>
        </Box>

        {/* Desktop Navigation */}
        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          {navItems.map((item) => (
            <Button
              key={item.title}
              component={Link}
              to={item.path}
              color="inherit"
              sx={{ mx: 1 }}
            >
              {item.title}
            </Button>
          ))}
        </Box>

        {/* Mobile Navigation Icon */}
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={() => setMobileOpen(true)}
          sx={{ display: { md: 'none' } }}
        >
          <MenuIcon />
        </IconButton>

        {/* Mobile Navigation Drawer */}
        <Drawer
          anchor="right"
          open={mobileOpen}
          onClose={() => setMobileOpen(false)}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
          }}
        >
          <Box sx={{ textAlign: 'center', py: 2 }}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Scheduling Wizard
            </Typography>
            <List>
              {navItems.map((item) => (
                <ListItem key={item.title} disablePadding>
                  <ListItemText>
                    <Button
                      component={Link}
                      to={item.path}
                      sx={{ color: 'inherit', width: '100%' }}
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.title}
                    </Button>
                  </ListItemText>
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;