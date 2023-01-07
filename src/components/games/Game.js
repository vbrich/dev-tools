import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';

export default function Game(props) {

  return (
    <div>
      <Container sx={{ py: 2 }} maxWidth="xl">                    
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper align="center" elevation={0} style={{ backgroundColor: 'inherit' }}>
                <h1>Games</h1>            
              </Paper>
            </Grid>
          </Grid> 
          <br />
        
        {/* style="width: 100%; height: 550px; overflow: hidden;" */}
        <iframe
            title="game"
            src="https://playpager.com/embed/chess/index.html"
            scrolling="no"
            width="100%" 
            height="500"
            >
        </iframe>  
{/* 
        <iframe
            title="game2"
            src="https://playpager.com/embed/reversi/index.html"
            scrolling="no"
            width="100%" 
            height="500"    
        >
        </iframe>
*/}
      </Container>
    </div>
  );
}
