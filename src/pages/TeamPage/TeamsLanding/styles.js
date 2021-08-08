import { themeGenerator } from '../../../styles/themeGenerator';

const styles = (theme) => (themeGenerator(theme, {
  instructionCardContainer: {
    padding: theme.spacing(0, 10),
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(0, 2),
    }
  },
  instructionCardWrapper: {
    padding: theme.spacing(3),
    boxSizing: 'border-box'
  },
  instructionCard: {
    color: 'white',
    border: '1px solid white',
    borderRadius: '8px',
    padding: theme.spacing(3),
  },
  roleButton: {
    width: '100%',
    padding: theme.spacing(3),
  }
}));

export default styles;
