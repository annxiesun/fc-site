import theme from '../../styles/masterTheme';
import { themeGenerator } from '../../styles/themeGenerator';

const styles = (theme) => (themeGenerator(theme, {
  backgroundImage: {
    width: '100vw',
    height: 'auto',
  }
}));

export default styles;
