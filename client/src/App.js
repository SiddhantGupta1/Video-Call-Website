import React from 'react';
import './App.css';

import VideoPlayer from './components/VideoPlayer';
import Options from './components/Options';
import Notifications from './components/Notifications';

const App = () => {
  return (
    <div className='App'>
      <header>
        <div>
          Video Call Baby!!!
        </div>
      </header>
      <hr />
      <div className='body'>
        <VideoPlayer />
        <Options>
          <Notifications />
        </Options>
      </div>
    </div>

  );
}

export default App;
