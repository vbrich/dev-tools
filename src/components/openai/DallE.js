import { useState } from "react";
import Container from '@mui/material/Container';
import { renderImage } from '../../utils/api';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';

export default function DallE() {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [placeholder, setPlaceholder] = useState(
    "Search Bears with Paint Brushes the Starry Night, painted by Vincent Van Gogh.."
  );

  const generateImage = async () => {
    setPlaceholder(`Search ${prompt}..`);
    setLoading(true);
    const res = await renderImage(prompt);
    setLoading(false);
    setResult(res);
  };

  function clearData() {
    setResult('');
    setLoading(false);
  }  

  return (
    <div>
      <Container sx={{ py: 2 }} maxWidth="xl">                    
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper align="center" elevation={0} style={{ backgroundColor: 'inherit' }}>
              <h1>Generate Image</h1>                          
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
              <textarea
                className="app-input"
                placeholder={placeholder}
                onChange={(e) => setPrompt(e.target.value)}
                rows="10"
                cols="10"
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