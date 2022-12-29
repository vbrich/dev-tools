import { getData, postData } from '../utils/api';
import { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

export default function TestComponent(props) {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const data = await getData();
      setData(data);
    }
    fetchData();
  }, []);

  function handleClick() {
    async function sendData() {
      const data = await postData();
      console.log(data);
    }
    sendData();
  }

  return (
    <div>
      <br />
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
            API Test Component
            <br />
            {props.somedata1}
            <br />
            {props.somedata2}
            <br />
            {data && <p>{data.key}</p>}
            <button onClick={handleClick}>Send data</button>
          </Paper>
        </Grid>
      </Grid>      
    </div>
  );
}
