import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Router from './components/Router'

function App() {
  const [hello, setHello] = useState('')

  useEffect(() => {
    axios.get('/api/hello')
        .then(response => setHello(response.data))
        .catch(error => console.log(error))
  }, []);

  return (
      <div>
          <Router />
      </div>
  );
}

export default App;