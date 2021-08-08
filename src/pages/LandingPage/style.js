import theme from '../../styles/masterTheme';
import { themeGenerator } from '../../styles/themeGenerator';

const styles = (theme) => (themeGenerator(theme, {
  wrapper: {
    position: 'relative',
    width: '100vw',
    height: '100vh',
    overflowY: 'scroll',
    perspective: '8px',
    perspectiveOrigin: '0%',
  },
  section: {
    position: "relative",
    height: "100vh",
    width: "100%",
  },
  sectionImage: {
    objectFit: "cover",
  },
  fg_1: {
    position: "absolute",
    zIndex: "2",
    transform: "translateZ(3px) scale(0.625) translateY(-200px)",
    position: "absolute",
    transformOrigin: "0 50%",
    width: '100%',
  },
  bg: {
    top: 0,
    left: 0,
    width: "100vw",
    height: "auto",
    position: "absolute",
    objectPosition: 'bottom',
  },
  blackCover: {
    background: 'linear-gradient(180deg, rgba(0,0,0,1) 50%, rgba(255,255,255,0) 100%, rgba(2,0,36,1) 002993%)',
    height: '100vh',
    width: '100vw',
    transform: 'translateY(-20px)'
  },
  header: {
    marginTop: theme.spacing(10),
    marginBottom:  theme.spacing(20),
    zIndex: '1',
    width: '100%',
  },
  button: {
    zIndex: '3',
  },

  fg_2: {
    position: "absolute",
    zIndex: "2",
    transform: "translateZ(3px) scale(0.625) translateY(-200px)",
    position: "absolute",
    transformOrigin: "0 50%",
    width: '100%',
  },



  titleSection: {
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center"
  },

  titleSectionFgClass: {
    bottom: "0",
    left: "0",
    width: "100vw",
    height: "90vh",
    alignContent: "center"
  },

  //.title-section .title
  titleSectionTitleClass: {
    position: "absolute",
    left: "50%",
    top: "10vh",
    zIndex: "1",
    width: "90vw",
    textAlign: "center",
    transform: "translateX(-50%)"
  },
  //.title-section .button
  titleSectionButtonClass: {
    zIndex: "3"
  },
  //.info-section-1 .fg
  infoSection1FgClass: {
    bottom: "0",
    left: "0",
    width: "100vw",
    height: "100vh"
  },
  //.info-section-1 .text
  infoSection1TextClass: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    marginRight: "5%",
    marginTop: "0vh",
    zIndex: "1",
    textAlign: "right",
    float: "right"
  },
  //.info-section-1
  infoSection1Class: {
    alignItems: "flex-end",
    justifyContent: "center",
    flexDirection: "column",
    paddingRight: "5%"
  },
  //.section .text .desc
  sectionTextDescClass: {
    width: "40vw"
  },
  //.info-section-1 .button
  infoSection1ButtonClass: {
    zIndex: "3",
    marginRight: "5%"
  },
  //.info-section-2
  infoSection2Class: {
    alignItems: "flex-start",
    justifyContent: "center",
    flexDirection: "column",
    paddingLeft: "5%"
  },
  //.info-section-2 .text
  infoSection2TextClass: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    marginRight: "5%",
    marginTop: "0vh",
    zIndex: "1",
    textAlign: "left",
    float: "left"
  },
  //.info-section-2 .fg
  infoSection2FgClass: {
    top: "50%",
    right: "100px",
    width: "400px",
    height: "250px",
    alignContent: "center",
    transform: "translateY(-50%)"
  }
}));

export default styles;
