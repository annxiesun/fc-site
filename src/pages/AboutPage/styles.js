import { themeGenerator } from '../../styles/themeGenerator';

const styles = (theme) => (themeGenerator(theme, {
  backgroundImage: {
    width: '100%',
    height: 'auto',
    zIndex: 0,
  },
  headerSection: {
    position: 'relative',
    width: '100%',
    height: 'auto',
    minHeight: '1080px',
    marginBottom: theme.spacing(10),
    [theme.breakpoints.down('md')]: {
      minHeight: '80vh',
    }
  },
  floatingText: {
    position: 'absolute',
    top: '10vh',
    right: theme.spacing(10),
    [theme.breakpoints.down('md')]: {
      position: 'static',
      padding: theme.spacing(5),
    }
  },
  section: {
    width: '100%',
    height: 'auto',
  },
  foreground: {
    zIndex: 1,
  },
  photo: {
    width: '100%',
  },
  infoContainerImage: {
    padding: theme.spacing(9),
    boxSizing: 'border-box',
    [theme.breakpoints.down('md')]: {
      order: '2'
    }
  },
  infoContainerText: {
    padding: theme.spacing(9),
    boxSizing: 'border-box',
    [theme.breakpoints.down('md')]: {
      order: '1'
    }
  },
  filmStrip: {
    width: '100%'
  }
}));

export default styles;
