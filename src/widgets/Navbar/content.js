import menu from '../../animations/menu.json';

export const logo = "https://github.com/annxiesun-2/fc-images/blob/main/fc_logo.png?raw=true";

export const links = [
  { to: '/', label: 'Home' },
  { to: '/about-us', label: 'About Us' },
  { to: '/sponsor-us', label: 'Sponsor Us' },
  { to: '/join', label: 'Join the team' },

];

export const menuAnimation = {
  loop: false,
  autoplay: false,
  animationData: menu,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};