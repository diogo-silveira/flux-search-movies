import React from 'react';
import { Movies } from './features/movies/Movies'
import { useSelector } from 'react-redux';
import './App.css';
import { Notifications } from './utils/Notifications'
import { selectErrors } from './features/movies/moviesSlice';
import { useAxiosLoader } from './utils/Api';
import NetworkDetector from './Hoc/NetworkDetector';

function App() {
  
  const selectError = useSelector(selectErrors);
  const notifications = selectError.map((error, index) => <Notifications key={index} index={ index } message={ error }></Notifications>);

  const logo = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQM_62ZYb6Q812SZfSZscOi9-7HtBYWH2P4YlcQJ3Sob_4QKcQY&usqp=CAU';

  const GlobalLoader = () => {
    const [loading] = useAxiosLoader();
    return (loading ? <div className="cover-spin"><div className="spinner-border spinner text-primary"></div></div> : '');
}

  return (
    <div className="App h-100 position-relative">
       { notifications }
      <div className="col-12 h-100 position-relative px-0">
        <div className="col-12 h-auto text-center pt-5 pt-sm-0">
          <img src={logo} className="App-logo" id="logo" alt="logo" />
        </div>
          <Movies />
      </div>
      <GlobalLoader></GlobalLoader>
    </div>
  );
}

export default NetworkDetector(App);
