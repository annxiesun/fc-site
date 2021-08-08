import { themeGenerator } from '../../../styles/themeGenerator';

const styles = (theme) => (themeGenerator(theme, {
  // TAB STYLES
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
  },

  // APPLICATION PROCESS STYLES
  applicationProcess: {
    border: '1px solid white',
    borderRadius: '8px',
  },

  // FAQ STYLES
  faq: {
    border: '1px solid white',
    borderRadius: '8px',
  },
  arrowIcon: {
    color: 'white',
    transition: 'transform 0.1s ease-in'
  },
  arrowUp: {
    transform: 'rotate(180deg)'
  }
}));

export default styles;
