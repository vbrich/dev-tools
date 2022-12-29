import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";

export default function Footer(props) {

  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://github.com/vbrich/react-template">
        ribo916
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
