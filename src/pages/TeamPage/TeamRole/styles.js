import { themeGenerator } from '../../../styles/themeGenerator';

const styles = (theme) => (themeGenerator(theme, {
  roleTab: {
    color: 'white',
    zIndex: 2,
  },
  roleTabPanel: {
    border: '1px solid white',
    borderRadius: '8px',
    padding: theme.spacing(5),
  },
  tabIndicator: {
    backgroundColor: theme.palette.primary.main,
    width: '80%',
    zIndex: 1,
  }
}));

export default styles;
