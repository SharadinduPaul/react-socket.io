import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';
import Login from './pages/Login';
import Chat from './pages/Chat';

function App() {
  const [userName, setUsername] = useState('');
  // console.log(userName);
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Login setUsername={setUsername} />} />
        <Route path='/chat' element={<Chat />} />
      </Routes>
    </div>
  );
}

export default App;
