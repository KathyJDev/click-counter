import './App.css';
import { useEffect, useState } from 'react';
import { DataStore } from 'aws-amplify';
import { Click } from './models';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [clickCount, setClickCount] = useState(0);
  const [browserId, setBrowserId] = useState(localStorage.getItem('browserId') || null);
  const id = browserId || uuidv4();

  useEffect(() => {
    if (!browserId) {
      localStorage.setItem('browserId', id);
      setBrowserId(id);
    }

    async function fetchClickCount() {
      const clicks = await DataStore.query(Click, c => c.browserId.eq(browserId));
      if (clicks.length > 0) {
        setClickCount(clicks[0].count);
      }
    }
    fetchClickCount();
  }, [browserId, id]);

  const handleClick = async () => {
    if (!browserId) {
      return;
    }

    const click = await DataStore.query(Click, c => c.browserId.eq(browserId));
    if (click.length > 0) {
      const updatedClick = Click.copyOf(click[0], updated => {
        updated.count = clickCount + 1;
      });
      await DataStore.save(updatedClick);
      setClickCount(clickCount + 1);
    } else {
      const newClick = new Click({ count: 1, browserId: browserId });
      await DataStore.save(newClick);
      setClickCount(1);
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
