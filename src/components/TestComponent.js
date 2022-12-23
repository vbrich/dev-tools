import { getData, postData } from '../utils/api';
import { useState, useEffect } from 'react';

export default function TestComponent() {
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
      <h2>TestComponent</h2>
      {data && <p>{data.key}</p>}
      <button onClick={handleClick}>Send data</button>
    </div>
  );
}
