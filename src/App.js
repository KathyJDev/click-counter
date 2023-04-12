import './App.css';
import { useEffect, useState } from 'react';
import { DataStore } from 'aws-amplify';
import { Click } from './models';

function App() {
  const [clickCount, setClickCount] = useState(0);

  useEffect(() => {
    async function fetchClickCount() {
      const clicks = await DataStore.query(Click);
      if (clicks.length > 0) {
        setClickCount(clicks[0].count);
      }
    }
    fetchClickCount();
  }, []);

  const handleClick = async () => {
    const clicks = await DataStore.query(Click);
    if (clicks.length > 0) {
      const updatedClick = Click.copyOf(clicks[0], updated => {
        updated.count = clicks[0].count + 1;
      });
      await DataStore.save(updatedClick);
      setClickCount(updatedClick.count);
    } else {
      const newClick = new Click({ count: 1 });
      await DataStore.save(newClick);
      setClickCount(newClick.count);
    }
  };

  return (
    <div className='container'>
      <h1 className='heading'>Click Counter</h1>
      <h1 className='heading'> {clickCount} </h1>
      <button className='rounded-button' onClick={handleClick}>
        +
      </button>
    </div>
  );
}

export default App;
