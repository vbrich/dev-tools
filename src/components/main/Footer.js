import Typography from '@mui/material/Typography';

export default function Footer(props) {

  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}      
      <a href="https://github.com/vbrich/react-template" target={"_blank"} rel="noreferrer" style={{ textDecoration: 'none' }}>
        ribo916
      </a>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
