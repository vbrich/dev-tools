// import { codingQuestion } from '../../utils/api';
// import { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import { codingQuestion } from '../../utils/api';
import { useState } from 'react';
import { TextField } from '@mui/material';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function Question() {
  const [data, setData] = useState(null);
  const [message, setMessage] = useState('');

  const handleMessageChange = event => {
    setMessage(event.target.value);
    // console.log(event.target.value);
  };

  function handleClick() {
    async function sendData() {
      const resp = await codingQuestion(message);
      let r = JSON.stringify(resp.bot);
      // r = r.slice(1,r.length -2); // temp hack to remove quotes
      setData(r); 
    }
    sendData();
  }

  function clearData() {
    setData('');
    setMessage('');
  }

  return (
    <div>
      <Container sx={{ py: 2 }} maxWidth="xl">                    
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper align="center" elevation={10} >
              <h1>Code Question</h1>                          
            </Paper>
          </Grid>
        </Grid> 
        <br />

        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
              <TextField id="question-box" label="Enter a coding question" variant="outlined" value={message} onChange={handleMessageChange} />
              <Stack
                sx={{ pt: 1 }}
                direction="row"
                spacing={2}
                justifyContent="center"
              >
                <Button variant="contained" onClick={handleClick}>Send</Button>
                <Button variant="outlined" onClick={clearData}>Clear</Button>
              </Stack>
            </Paper>
          </Grid>
        </Grid>  
        <br />
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
              {data}
            </Paper>
          </Grid>
        </Grid>         

      </Container>     
    </div>      
  );
}
  