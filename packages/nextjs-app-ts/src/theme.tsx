import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 350,
      md: 640,
      lg: 1100,
      xl: 1536,
    },
  },
  palette: {
    primary: {
      main: '#BCC9D6',
    },
    info: {
      main: '#E0E0E0',
      light: '#F1F2F2',
    },
  },
  typography: {
    fontFamily: 'Poppins',
    h1: {
      fontWeight: 600,
      fontSize: '5.29vw',
      lineHeight: '7.94vw',
    },
    h2: {
      fontWeight: 600,
      fontSize: '4.70vw',
      lineHeight: '7.058vw',
      letterSpacing: '11.5%',
    },
    h3: {
      fontWeight: 'bold',
      fontSize: '3.529vw',
      lineHeight: '7.058vw',
    },
    h4: {
      fontWeight: 'bold',
      fontSize: '2.5vw',
      lineHeight: '7.058vw',
    },
    h5: {
      fontWeight: 600,
      fontSize: '1.76vw',
      lineHeight: '3.97vw',
    },
    body1: {
      fontSize: '1.324vw',
      fontWeight: 300,
      lineHeight: '1.4',
    },
    body2: {
      fontSize: '1.56vw',
      fontWeight: 300,
      lineHeight: '2.2vw',
    },
    subtitle1: {
      fontWeight: 500,
      fontSize: '2.64vw',
      lineHeight: '3.97vw',
    },
    subtitle2: {
      fontWeight: 700,
      fontSize: '1.324vw',
      lineHeight: '1.985vw',
    },
    button: {
      textTransform: 'none',
    },
  },
});
