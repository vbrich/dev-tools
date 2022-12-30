import { getData, postData } from '../../utils/api';
import { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

export default function ApiTestComponent(props) {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const data = await getData();
      setData(data);
      console.log('useEffect = ' + JSON.stringify(data));
    }
    fetchData();
  }, []);

  function handleClick() {
    async function sendData() {
      const data = await postData('Hi');
      console.log('handleClick = ' + JSON.stringify(data));
    }
    sendData();
  }

  return (
    <div>
      <br />
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
            <h2>API Test Component</h2>
            <br />
            <i>Data sent into the Component = {props.somedata1}, {props.somedata2}</i>
            <br />
            {data && <p>{data.key}</p>}
            <button onClick={handleClick}>Send data</button>
          </Paper>
        </Grid>
      </Grid>      
    </div>
  );
}
