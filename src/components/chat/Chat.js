// import { codingQuestion } from '../../utils/api';
// import { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

export default function Chat() {
  
  function handleClick() {    
    console.log('click');
  }

  return (
    <div>
      <br />
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
            <h2>Chat Component</h2>
            <br />            
            <button onClick={handleClick}>Send data</button>
          </Paper>
        </Grid>
      </Grid>      
    </div>      
  );
}
  