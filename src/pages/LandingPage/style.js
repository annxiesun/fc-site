import { themeGenerator } from '../../styles/themeGenerator';

const styles = (theme) => (themeGenerator(theme, {
  section: {
    position: "relative",
    minHeight: '1080px',
    perspective: '8px',
    [theme.breakpoints.down('md')]: {
      minHeight: '80vh',
    }
  },
  blankBlock: {
    height: '500px',
    backgroundColor: theme.palette.common.black,
    zIndex: 0,
    position: 'absolute',
    width: '100vw'
  },
    // HEADER SECTIONS CLASSES (header sections are sections with image backgrounds)
  fgImage: {
    width: "100%",
    height: "auto",
    objectFit: "cover",
    position: 'absolute',
    zIndex: 2,
    bottom: 0,
    left: 0,
  },
  bgImage: {
    width: "100%",
    height: "auto",
    objectFit: "cover",
    zIndex: 0,
    [theme.breakpoints.down('sm')]: {
      height: '80vh',
    },
    "@media (min-height: 1080px)": {
      height: '1080px'
    }
  },
  header: {
    width: '100%',
    zIndex: 1,
    position: 'static',
  },
  button: {
    zIndex: 3,
    position: 'static',
    margin: theme.spacing(5),
    [theme.breakpoints.down('sm')]: {
      fontSize: '16px',
      width: '80%',
    }
  },
  floatingText: {
    position: 'absolute',
  },
  // SECTION 1 SPECIFIC STYLES
  section1Text: {
    marginTop: '25vh',
    [theme.breakpoints.down('sm')]: {
      marginTop: '10vh',
    },
    "@media (min-height: 1080px)": {
      marginTop: '200px'
    }
  },
  // SECTION 2 SPECIFIC STYLES
  bgImage2: {
    objectPosition: '0% 0%', // crops image left
    [theme.breakpoints.down('sm')]: {
      height: '30vh',
    }
  },
  section2Text: {
    marginTop: '150px',
    [theme.breakpoints.down('sm')]: {
      marginTop: '100px',
      position: 'static',
    },
  },
  // OTHER
  photo: {
    width: '100%',
    height: 'auto',
  }
}));

export default styles;
