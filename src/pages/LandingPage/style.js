import { themeGenerator } from '../../styles/themeGenerator';

const styles = (theme) => (themeGenerator(theme, {
  wrapper: {
    position: 'relative',
    width: '100vw',
    height: '100vh',
    // perspective: '8px',
    // perspectiveOrigin: '0%',
  },
  section: {
    position: "relative",
    height: "100vh",
    width: "100%",
  },
  sectionImage: {
    objectFit: "cover",
  },
  fg_1: {
    position: "absolute",
    zIndex: "2",
    //transform: "translateZ(3px) scale(0.625) translateY(-200px)",
    //transformOrigin: "0 50%",
    width: '100%',
  },
  bg: {
    top: 0,
    left: 0,
    width: "100vw",
    height: "auto",
    position: "absolute",
    objectPosition: 'bottom',
  },
  blackCover: {
    background: 'linear-gradient(180deg, rgba(0,0,0,1) 50%, rgba(255,255,255,0) 100%, rgba(2,0,36,1) 002993%)',
    height: '100vh',
    width: '100vw',
    transform: 'translateY(-20px)'
  },
  header: {
    marginTop: theme.spacing(10),
    marginBottom:  theme.spacing(20),
    zIndex: '1',
    width: '100%',
  },
  button: {
    zIndex: '3',
  },

  fg_2: {
    position: "absolute",
    zIndex: "2",
    transform: "translateZ(3px) scale(0.625) translateY(-200px)",
    transformOrigin: "0 50%",
    width: '100%',
  },

  photo: {
    width: '100%',
    height: 'auto',
  }
}));

export default styles;
