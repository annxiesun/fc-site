import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import AssignmentIcon from '@material-ui/icons/Assignment';
import ScheduleIcon from '@material-ui/icons/Schedule';

export const headers = {
  APPLICATION_PROCCES:{ header: 'Application Process', desc: 'Every academic year, applications are opened for Directors, Executives, and Models. There are a lot of opportunities to get involved at Fashion for Change! We welcome everyone, new and returning members, to apply to a position that interests you.' },
  OUR_TEAMS: { header: 'Our Teams', desc: 'Each team has a different focus and function in building our annual charity fashion show. Click to find out more about each team and its positions.' },
  MEET_DIRECTORS: { header: 'Meet Our Directors', desc: null }
};

export const processGeneral = [
  {
    index: 1,
    icon: <InfoOutlinedIcon fontSize="large" />,
    title: 'Attend the Information Session',
    desc: 'Learn more about Fashion for Change at our annual information session on the campus. You’ll be able to find out more about the open positions and the plans for the year.\n\nCheck out out Facebook, Instagram, and Twitter for announcements.'
  },
  {
    index: 2,
    icon: <AssignmentIcon fontSize="large" />,
    title: 'Apply',
    desc: 'Apply Most* applications are open right after the information session in September. There are separate applications and processes for each team, these are posted on the team pages. *Directors positions are filled in the summer prior to the academic term.'
  },
  {
    index: 3,
    icon: <ScheduleIcon fontSize="large" />,
    title: 'Interviews, Auditions & Final Decisions',
    desc: 'Most teams will require an interview to be considered for an executive role. You will be contacted for an interview by the respective team\'s director. Models are required to go through auditions, which are announced ahead of time. Final decicions for executives are usually made in mid-October.'
  }
];