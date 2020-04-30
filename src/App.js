import React from 'react';
import { Movies } from './features/movies/Movies'
import './App.css';

function App() {
  const logo = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQM_62ZYb6Q812SZfSZscOi9-7HtBYWH2P4YlcQJ3Sob_4QKcQY&usqp=CAU';
  return (
    <div className="App container-fluid">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Movies />
      </header>
    </div>
  );
}

export default App;
