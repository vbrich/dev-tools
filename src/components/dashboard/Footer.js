import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

export default function Footer() {

  return (
    <div>
      <br />
      <Grid container spacing={3}>
        <Grid item xs={12}>
        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
          Footer Component
        </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
