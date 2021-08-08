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
  section: {
    position: 'relative',
    width: '100vw',
    height: '150vh',
  },
  foreground: {
    zIndex: 1,
  }
}));

export default styles;
