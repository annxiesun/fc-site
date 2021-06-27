import { Typography, Button } from "@material-ui/core";

function StyleGuide() {
  const body = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
  return (
    <>
      <Typography variant='h1'>fashion for change</Typography>
      <Typography variant='h2'>fashion for change</Typography>
      <Typography variant='h3'>fashion for change</Typography>
      <Typography variant='h4'>fashion for change</Typography>
      <Typography variant='h5'>fashion for change</Typography>
      <Typography variant='h6'>fashion for change</Typography>
      <Typography variant='subtitle1'>fashion for change</Typography>
      <Typography variant='subtitle2'>fashion for change</Typography>
      <Typography variant='body1'>{body}</Typography>
      <Typography variant='body2'>{body}</Typography>
      <Button variant="outlined" color="primary" style={{ margin: '1em' }}>Experience the Show</Button>
    </>
  )
}

export default StyleGuide;