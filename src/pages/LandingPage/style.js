import { themeGenerator } from '../../styles/themeGenerator';

const styles = (theme) => (themeGenerator(theme, {
  section: {
    position: "relative",
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
    [theme.breakpoints.down('md')]: {
      height: '100vh'
    }
  },
  header: {
    width: '100%',
    position: 'absolute',
    left: 0,
    top: '300px',
    zIndex: 1,
    [theme.breakpoints.down('md')]: {
      position: 'static'
    }
  },
  button: {
    position: 'absolute',
    top: '500px',
    left: '50%',
    transform: 'translate(-50%)',
    zIndex: 3,
    [theme.breakpoints.down('md')]: {
      position: 'static',
      transform: 'none',
      margin: theme.spacing(5),
      fontSize: '16px',
      width: '80%',
    }
  },
  floatingText: {
    marginTop: theme.spacing(10),
    position: "relative",
    width: '100%',
    [theme.breakpoints.down('md')]: {
      
      position: 'absolute',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }
  },
  photo: {
    width: '100%',
    height: 'auto',
  }
}));

export default styles;
