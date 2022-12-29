import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';

export default function Overview() {

  return (
    <div>
      <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>
            <Grid item xs={12}>
            <Paper sx={{ p: 1, display: 'flex', flexDirection: 'column' }}>
              Technologies, libraries, and concepts used

              <ul>
                <li>CreateReactApp</li>
                <li>Material UI</li>
                <li>Theming</li>
                <li>React Router 6.x</li>
              </ul>

            </Paper>
            </Grid>
        </Grid>
      </Container>
    </div>
  );
}
