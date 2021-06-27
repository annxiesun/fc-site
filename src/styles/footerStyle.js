import theme from './masterTheme';
import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
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
}));

export default styles;
