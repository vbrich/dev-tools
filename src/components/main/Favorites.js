import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
// import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const cards = [1, 2, 3, 4];
const heading = [
  '', 
  'Features',
  'Encode PDF', 
  'Decode PDF', 
  'Encode JSON'  
];
const subheading = [
  '',   
  'Trello Board',
  'Convert PDF to base64', 
  'Convert base64 to PDF', 
  'Convert JSON to base64'  
];
const link = [
  '', 
  'https://trello.com/b/1m048pHn/features',
  'https://base64.guru/converter/encode/pdf', 
  'https://base64.guru/converter/decode/pdf', 
  'https://codebeautify.org/json-to-base64-converter'  
];

const theme = createTheme();

export default function Favorites() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>

        <Container sx={{ py: 2 }} maxWidth="xl">          

          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper align="center" elevation={10} >
                <h1>Favorites</h1>            
              </Paper>
            </Grid>
          </Grid> 
          <br />

          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {heading[card]}
                    </Typography>
                    <Typography>
                      {subheading[card]}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <a href={link[card]} target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
                      <Button size="small">Visit</Button>                    
                    </a>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>

        </Container>
      </main>
    </ThemeProvider>
  );
}