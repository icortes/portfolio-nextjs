import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link } from '@mui/material';

export default function Footer() {
  const footer = {
    flexShrink: 0,
    textAlign: 'center',
    width: '100%',
    paddingTop: '30px',
    paddingBottom: '40px',
  };

  const icon = {
    color: 'inherit',
    paddingRight: '10px',
  };

  return (
    <footer style={footer}>
      <Link href='https://github.com/icortes' target={'_blank'} style={icon}>
        <GitHubIcon fontSize='large' />
      </Link>
      <Link
        href='https://www.linkedin.com/in/cortes-isaac/'
        target={'_blank'}
        style={icon}>
        <LinkedInIcon fontSize='large' />
      </Link>
      <Link
        href='https://www.instagram.com/omg_ixa/'
        target={'_blank'}
        style={icon}>
        <InstagramIcon fontSize='large' />
      </Link>
    </footer>
  );
}
