import { Grid, Link, Typography, Box, IconButton } from '@material-ui/core';
import { Instagram, Facebook, Youtube, Linkedin, Twitter } from '@icons-pack/react-simple-icons';
import styles from '../styles/footerStyle';

function Footer() {
  const classes = styles();

  const iconProps = {
    className: classes.icon,
    size: 40
  }
  const socials = [
    { label: 'Instagram', icon: <Instagram {...iconProps} />, href: '#' },
    { label: 'Facebook', icon: <Facebook {...iconProps} />, href: '#' },
    { label: 'Youtube', icon: <Youtube {...iconProps} />, href: '#' },
    { label: 'Linkedin', icon: <Linkedin {...iconProps} />, href: '#' },
    { label: 'Twitter',icon: <Twitter {...iconProps} />, href: '#' }
  ]
  const sections = [
    { label: 'About Us', links: [{ display: 'Link', href: '#' }, { display: 'Link', href: '#' }, { display: 'Link', href: '#' }] },
    { label: 'Sponsor Us', links: [{ display: 'Link', href: '#' }, { display: 'Link', href: '#' }, { display: 'Link', href: '#' }] },
    { label: 'Past Events', links: [{ display: 'Link', href: '#' }, { display: 'Link', href: '#' }, { display: 'Link', href: '#' }] },
    { label: 'Join The Team', links: [{ display: 'Link', href: '#' }, { display: 'Link', href: '#' }, { display: 'Link', href: '#' }] }
  ]

  return (
    <>
      <Box clone p={3} m="auto">
        <Grid container direction="row" className={classes.footerContainer}>
          {sections.map((section) => (
            <>
              <Grid item container xs={3} direction="column" alignItems="center">
                <Typography>{section.label}</Typography>
                {section.links.map((link) => (
                  <Link href={link.href} variant="body1">{link.display}</Link>
                ))}
              </Grid>
            </>
          ))}
        </Grid>
      </Box>
      <Box clone p={3} m="auto">
        <Grid container justify="center" spacing={2}>
          {socials.map((social) => (
            <Box clone m={1} key={social.label}>
              <IconButton href={social.href}>
                {social.icon}
              </IconButton>
            </Box>
          ))}
        </Grid>
      </Box>
      <Box clone p={3} m="auto">
        <Grid container alignItems="center" direction="column" spacing={2}>
          <img className={classes.logo} src="https://github.com/annxiesun/images/blob/main/logo2.png?raw=true" />
          <Typography className={classes.gutterTop}>© Fashion for Change 2021</Typography>
        </Grid>
      </Box>
    </>
  )
}

export default Footer;