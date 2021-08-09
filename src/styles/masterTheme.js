import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#e6f0ff',
      main: '#adcfff',
      dark: '#3b8cff',
    },
  },
  typography: {
    allVariants: {
      color: 'white'
    },
    fontFamily: [
      'Avenir',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    h1: {
      fontWeight: 'bold',
      fontSize: '128px',
    },
    h2: {
      fontSize: '64px',
      fontWeight: 'bold',
    },
    h3: {
      fontSize: '48px',
      fontWeight: 800,
    },
    h4: {
      fontSize: '24px',
      fontWeight: 'bold',
    },
    h5: {
      fontSize: '18px',
    },
    h6: {

    },
    subtitle1: {
      fontSize: '16px',
      fontWeight: 'bold',
      textTransform: 'uppercase',
    },
    subtitle2: {

    },
    body1: {
      fontSize: '16px',
    },
    body2: {

    }
  },
  palette: {
    primary: {
      main: '#60B0F4',
    }
  },
  overrides: {
    MuiButton: {
      outlined: {
        border: '4px solid #FFF',
        borderRadius: 0,
        color: '#FFF',
        fontFamily: 'Avenir',
        backgroundColor: '#000000ad',
        '&:hover': {
          backgroundColor: '#000000d6'
        }
      },
      outlinedSizeLarge: {
        padding: '1em',
        fontSize: '32px',
        fontWeight: 'bold',
        letterSpacing: '0.2em'
      }
    }
  }
});

export default theme;