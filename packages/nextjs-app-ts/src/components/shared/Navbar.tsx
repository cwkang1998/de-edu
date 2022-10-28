import { AppBar, Box, IconButton, Menu, MenuItem, Theme, Toolbar, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Link from 'next/link';
import React, { FC } from 'react';

const Navbar: FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-use-before-define
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState<null | any>(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = (): void => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = (): void => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event: React.MouseEvent): void => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  // mobile menu starts

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}>
      <MenuItem onClick={handleMenuClose}>Menu</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}>
      <Box className={classes.mobileMenuContainer}>
        <MenuItem>
          <Link className={classes.mobileLink} href="/create-course">
            Create Course
          </Link>
        </MenuItem>
        <MenuItem>
          <Link className={classes.mobileLink} href="/sign-in">
            Sign In
          </Link>
        </MenuItem>
      </Box>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar style={{ background: 'transparent' }} sx={{ boxShadow: 2 }} position="static">
        <Toolbar>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
              sx={{ paddingTop: 0 }}>
              &#9776;
            </IconButton>
          </Box>
          <Box sx={{ textAlign: { xs: 'center' }, flexGrow: { xs: 1, md: 0 } }}>
            <Typography>Chain.Link</Typography>
          </Box>

          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' }, fontSize: '14px' }}>
            <Link className={classes.linkNavbar} href="/create-course">
              Create Course
            </Link>

            <Link className={classes.linkNavbar} href="/sign-in">
              Sign in
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
};

export default Navbar;

const useStyles = makeStyles((theme: Theme) => {
  return {
    headerContainer: {
      [theme.breakpoints.up('md')]: {
        padding: '0 6vw',
        marginTop: '4vw !important',
      },
    },
    mobileLink: {
      textDecoration: 'none',
      color: 'inherit',
      margin: '2vw 15px',
      fontSize: '4vw',
      width: '50vw',
    },
    linkNavbar: {
      textDecoration: 'none',
      color: 'black',
      margin: 'auto 1.1vw',
      [theme.breakpoints.down('lg')]: {
        fontSize: '1.029vw',
      },
    },
    contactUsLink: {
      textDecoration: 'none',
      color: 'white',
      margin: 'auto 1.1vw',
      fontWeight: 700,
      [theme.breakpoints.between('md', 'lg')]: {
        fontSize: '1.029vw',
      },
    },
    mobileMenuIcon: {
      width: '2.5rem',
      paddingTop: '1rem',
    },
    mobileMenuContainer: {
      background: theme.palette.info.light,
      padding: '5vw 2vw',
    },
  };
});
