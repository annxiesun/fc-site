import { themeGenerator } from '../styles/themeGenerator';

const styles = (theme) => (themeGenerator, {
  footerContainer: {
    maxWidth: '1000px',
  },
  icon: {
    color: 'white',
  },
  logo: {
    width: '200px',
  },
  gutterTop: {
    marginTop: theme.spacing(2),
  }
});

export default styles;
