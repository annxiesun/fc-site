import { themeGenerator } from '../../styles/themeGenerator';

const styles = (theme) => (themeGenerator (theme, {
  logo: {
    height: 'auto',
    width: '40px',
    objectFit: 'contain',
  },
  link: {
    margin: theme.spacing(0, 3),
    textDecoration: 'none',
    textTransform: 'uppercase'
  },
  navBar: {
    padding: theme.spacing(3),
  },
  navBarMobile: {
    position: 'absolute',
    zIndex: 10,
  },
  navBarMobileOpen: {
    backgroundColor: theme.palette.common.black
  },
  menuIcon: {
    color: theme.palette.common.white
  },
  navBarOffset: {
    height: '50px'
  },
  overlay: {
    position: 'absolute',
    height: '100vh',
    width: '100vw',
    backgroundColor: theme.palette.common.black,
    zIndex: 9,
    opacity: 0.7,
  }
}));

export default styles;
