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
  menuIcon: {
    color: theme.palette.common.white
  }
}));

export default styles;
