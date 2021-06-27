import { Typography, Grid, Button, Container } from "@material-ui/core";
import './landingPage.css';
import styles from '../styles/landingStyle';
import Footer from "../widgets/Footer";

function LandingPage() {
  const classes = styles();

  const content = [
    'Fashion for Change is a non-profit organization that unites students from various universities to host the largest student-run charity fashion show in the K-W region. With over 130 executives and models yearly, our family is full of passionate students that use our talents to change the world! We use fashion, dance, film, music, and other mediums to promote artistic expression.',
    'Every year, Fashion for Change chooses a charity to donate to. With over $110,000 in donations to date, we strive to allow students to help locally and globally. We are proud to be making a change both around the world, and right here at home.'
  ];

  const displayStats = [
    { label: 'Money Raised', value: 110000, prefix: '$' },
    { label: 'Sponsors', value: 0 , prefix: '' },
    { label: 'Number of Shows', value: 8, prefix: '' },
    { label: 'Team Members', value: 0, prefix: '' }
  ];

  return (
    <>
      <div className="wrapper">
        <div className="title-section section">
          <Typography className="title" variant="h1">fashion for change</Typography>
          <img className="image fg" src="https://github.com/annxiesun/images/blob/main/SECTION1_foreground.png?raw=true" />
          <img className="image bg" src="https://github.com/annxiesun/images/blob/main/SECTION1_bg.png?raw=true" />
          <img className="image smoke" src="https://github.com/annxiesun/images/blob/main/SECTION1_smoke.png?raw=true" />
          <Button variant="outlined" size="large" className="button">Experience the Show</Button>
        </div>
        <div className="info-section-1 section">
          <div className="text" style={{ width: '25%' }}>
            <Typography className="title" variant="h3" gutterBottom>Artistic expression for good.</Typography>
            <Typography className="desc" variant="body1">{content[0]}</Typography>
          </div>
          <Button className="button">Find out more</Button>
          <img className="image fg" src="https://github.com/annxiesun/images/blob/main/SECTION2_foreground.png?raw=true" />
          <img className="image bg" src="https://github.com/annxiesun/images/blob/main/SECTION2_bg.png?raw=true" />
        </div>
        <div className="info-section-2 section">
          <div className="text">
            <Typography className="title" variant="h2">Proud Charity Partner</Typography>
            <Typography className="desc" variant="body1">{content[1]}</Typography>
          </div>
          <Button className="button">Find out more</Button>
          <img className="image fg" src="https://github.com/annxiesun/images/blob/main/SECTION3_photo1.jpg?raw=true" />
        </div>
        <Container>
          <Grid container direction="row" justify="center" className={classes.statContainer}>
            {displayStats.map((stat) => (
              <Grid item container key={stat.label} direction="column" alignItems="center" xs={12} sm={3}>
                <Typography variant="h3">{stat.prefix}{stat.value}</Typography>
                <Typography variant="body1">{stat.label}</Typography>
              </Grid>
            ))}
          </Grid>
        </Container>
        <div style={{ backgroundColor: 'black', width: '100vw', height: '100vh' }} />
        <Footer/>
      </div>
    </>
  )
}

export default LandingPage;