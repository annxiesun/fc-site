import { themeGenerator } from '../../styles/themeGenerator';

const styles = (theme) => (themeGenerator(theme, {
  backgroundImage: {
    width: '100vw',
    height: 'auto',
    zIndex: 0,
  },
  headerSection: {
    position: 'relative',
    width: '100vw',
    height: 'auto',
    marginBottom: theme.spacing(10),
  },
  floatingText: {
    position: 'absolute',
    top: '10vh',
    right: '5vw',
    [theme.breakpoints.down('md')]: {
      position: 'static',
      padding: theme.spacing(5),
    }
  },
  section: {
    width: '100vw',
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
