import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

export default function Test() {

  return (
    <div>
      <br />
      <Grid container spacing={3}>
        <Grid item xs={12}>
        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
          UI Test Component
        </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
