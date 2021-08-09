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
    position: 'absolute'
  },
  navBarMobileOpen: {
    backgroundColor: theme.palette.common.black
  },
  menuIcon: {
    color: theme.palette.common.white
  },
  navBarOffset: {
    height: '50px'
  }
}));

export default styles;
