import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Overview() {

  const [count, setCount] = useState(0);
  const navigate = useNavigate();
  
  useEffect(() => {
    if (count > 5)
      navigate('/');    
  });

  return (
    <div>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>
            <Grid item xs={12}>
            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
              Overview Component

              <br />
              <p>You clicked {count} times</p>
              <button onClick={() => setCount(count + 1)}>
                Click me
              </button>

            </Paper>
            </Grid>
        </Grid>
      </Container>
    </div>
  );
}
