import './App.css';
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import MapChart from "./MapChart";
import { collection, doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import { db } from './firebase-config';

function App() {
  const [clickCount, setClickCount] = useState(0);
  const [browserId, setBrowserId] = useState(localStorage.getItem('browserId') || null);
  const id = browserId || uuidv4();
  const clickCollectionRef = collection(db, "Click");

  useEffect(() => {
    if (!browserId) {
      localStorage.setItem('browserId', id);
      setBrowserId(id);
    }

    async function fetchClickCount() {
      const clickDocRef = doc(clickCollectionRef, browserId);
      const clickDoc = await getDoc(clickDocRef);
      if (clickDoc.exists()) {
        setClickCount(clickDoc.data().count);
      }
    }
    fetchClickCount();
  }, [browserId, id]);

  const handleClick = async () => {
    if (!browserId) {
      return;
    }

    const clickDocRef = doc(clickCollectionRef, browserId);
    const clickDoc = await getDoc(clickDocRef);
    if (clickDoc.exists()) {
      await updateDoc(clickDocRef, { count: clickCount + 1 });
      setClickCount(clickCount + 1);
    } else {
      await setDoc(clickDocRef, { count: 1, browserId: browserId });
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
      <MapChart />
    </div>
  );
}

export default App;
