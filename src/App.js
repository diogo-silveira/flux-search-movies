import React from 'react';
import { Movies } from './features/movies/Movies'
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import { Notifications } from './app/Notifications'
import { selectErrors } from './features/movies/moviesSlice';

function App() {
  
  const selectError = useSelector(selectErrors);
  const notifications = selectError.map((error, index) => <Notifications index={ index } message={ error }></Notifications>);

  const logo = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQM_62ZYb6Q812SZfSZscOi9-7HtBYWH2P4YlcQJ3Sob_4QKcQY&usqp=CAU';
  return (
    <div className="App h-100 position-relative">
       { notifications }
      <div className="col-12 h-100 position-relative px-0">
        <div className="col-12 h-auto text-center">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
          <Movies />
      </div>
     
    </div>
  );
}

export default App;
