import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    text: {
      primary: "#ffffff",
      secondary: "#ffffff"
    }
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

    },
    h6: {

    },
    subtitle1: {

    },
    subtitle2: {

    },
    body1: {

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