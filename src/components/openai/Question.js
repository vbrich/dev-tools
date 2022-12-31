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
import CircularProgress from '@mui/material/CircularProgress';

export default function Question() {
  const [data, setData] = useState(null);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  // Track the textfield changes
  const handleMessageChange = event => {
    setMessage(event.target.value);
    // console.log(event.target.value);
  };

  // Handle when enter is clicked on textfield
  const enterPressed = event => {
    var code = event.keyCode || event.which;
    if(code === 13) { //13 is the enter keycode
      handleClick();
    } 
  }

  // Triggered when Send is clicked 
  function handleClick() {
    async function sendData() {
      const resp = await codingQuestion(message);
      let r = JSON.stringify(resp.bot);
      setLoading(false);
      r = r.slice(1,r.length -2); // remove quotes that wrap our response
      r = r.split('\\n').join(''); // just remove \n for now
      setData(r); 
    }
    setData('');
    setLoading(true);
    sendData();
  }

  function clearData() {
    setData('');
    setMessage('');
    setLoading(false);
  }

  return (
    <div>
      <Container sx={{ py: 2 }} maxWidth="xl">                    
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper align="center" elevation={0} style={{ backgroundColor: 'inherit' }}>
              <h1>Code Question</h1>                          
            </Paper>
          </Grid>
        </Grid> 
        <br />

        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper 
              sx={{ p: 2, display: 'flex', flexDirection: 'column' }} 
              style={{ backgroundColor: 'inherit' }}
            >
              <TextField 
                id="question-box" 
                label="Enter a coding question" 
                variant="outlined" 
                value={message} 
                onChange={handleMessageChange}
                onKeyPress={enterPressed.bind(this)}
              />
              <Stack
                sx={{ pt: 1 }}
                direction="row"
                spacing={2}
                justifyContent="center"
              >
                <Button variant="contained" onClick={handleClick} disabled={loading}>
                  {loading && <CircularProgress size={24} />}
                  {!loading && 'Ask'}
                </Button>
                <Button variant="outlined" onClick={clearData}>Clear</Button>
              </Stack>
              <br /><br />
              <div style={{whiteSpace: "pre-wrap"}}>{data}</div>
            </Paper>
          </Grid>
        </Grid>  
      
      </Container>     
    </div>      
  );
}
  