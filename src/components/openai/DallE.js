import { useState } from "react";
import Container from '@mui/material/Container';
import { renderImage } from '../../utils/api';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';

export default function DallE() {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const generateImage = async () => {
    // setPlaceholder(`Search ${prompt}..`);
    setLoading(true);
    const res = await renderImage(prompt);
    setLoading(false);
    setResult(res);
  };

  function clearData() {
    setResult('');
    setLoading(false);
  }  

  // Handle when enter is clicked on textfield
  const enterPressed = event => {
    var code = event.keyCode || event.which;
    if(code === 13) { //13 is the enter keycode
      generateImage();
    } 
  }
  
  return (
    <div>
      <Container sx={{ py: 2 }} maxWidth="xl">                    
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper align="center" elevation={0} style={{ backgroundColor: 'inherit' }}>
              <h1>Generate Image</h1> 
              <h5><i>An example of image generation using DALL-E models from OpenAI</i></h5>                         
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
                id="image-text" 
                label="Enter a description for an image" 
                variant="outlined"
                value={prompt} 
                onChange={(e) => setPrompt(e.target.value)}
                onKeyPress={enterPressed.bind(this)}
              />
              <Stack
                sx={{ pt: 1 }}
                direction="row"
                spacing={2}
                justifyContent="center"
              >
                <Button variant="contained" onClick={generateImage} disabled={loading}>
                  {loading && <CircularProgress size={24} />}
                  {!loading && 'Generate'}                
                </Button>
                <Button variant="outlined" onClick={clearData}>Clear</Button>
              </Stack>
              <br /><br />
              <Stack
                sx={{ pt: 1 }}
                direction="row"
                spacing={2}
                justifyContent="center"
              >
                <div style={{whiteSpace: "pre-wrap"}}>
                  {result.length > 0 ? (
                    <img src={result} style={{width: '100%', border: '2px solid #ddd'}}alt="result" />
                  ) : (
                    <></>
                  )}
                </div>
              </Stack>
            </Paper>
          </Grid>
        </Grid>  
      </Container>     
    </div>
  );
}