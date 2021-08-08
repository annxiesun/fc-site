import theme from '../../styles/masterTheme';
import { themeGenerator } from '../../styles/themeGenerator';

const styles = (theme) => (themeGenerator(theme, {
  backgroundImage: {
    width: '100vw',
    height: 'auto',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 0,
  },
  headerSection: {
    position: 'relative',
    width: '100vw',
    height: '180vh',
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
  infoContainer: {
    padding: theme.spacing(9),
    boxSizing: 'border-box'
  },
  filmStrip: {
    width: '100%'
  }
}));

export default styles;
