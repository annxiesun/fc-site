import { themeGenerator } from '../../styles/themeGenerator';

const styles = (theme) => (themeGenerator, {
  logo: {
    height: 'auto',
    width: '40px'
  },
  link: {
    margin: theme.spacing(0, 3),
    textDecoration: 'none',
    textTransform: 'uppercase'
  },
  navBar: {
    padding: theme.spacing(3),
  }
});

export default styles;
