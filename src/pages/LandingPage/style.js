import { themeGenerator } from '../../styles/themeGenerator';

const styles = (theme) => (themeGenerator(theme, {
  section: {
    position: "relative",
    minHeight: '1080px',
    [theme.breakpoints.down('md')]: {
      minHeight: '80vh',
    }
  },
  fgImage: {
    width: "100%",
    height: "auto",
    objectFit: "cover",
    position: 'absolute',
    zIndex: 2,
    bottom: 0,
  },
  bgImage: {
    width: "100%",
    height: "auto",
    objectFit: "cover",
    zIndex: 0,
    [theme.breakpoints.down('sm')]: {
      height: '100vh'
    }
  },
  header: {
    width: '100%',
    position: 'absolute',
    left: 0,
    top: '120px',
    zIndex: 1,
    [theme.breakpoints.down('sm')]: {
      position: 'static'
    }
  },
  button: {
    position: 'absolute',
    top: '400px',
    left: '50%',
    transform: 'translate(-50%)',
    zIndex: 3,
    [theme.breakpoints.down('sm')]: {
      position: 'static',
      transform: 'none',
      margin: theme.spacing(5),
      fontSize: '16px',
      width: '80%',
    }
  },
  floatingText: {
    position: "relative",
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      position: 'absolute',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginTop: theme.spacing(15)
    }
  },
  photo: {
    width: '100%',
    height: 'auto',
  }
}));

export default styles;
