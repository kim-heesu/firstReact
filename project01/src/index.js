import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import Library from './chapter_03/Libraty';
// import Clock from './chapter_04/Clock';
// import NotificationList from './chapter_06/NotificationList';

// import Accommodate from './chapter_07/Accommodate';

// import CommentList from './chapter_05/CommentList';
// import ConfirmButton02 from './chapter_08/ConfirmButton02';
// import LandingPage from './chapter_09/LandingPage';

import AttendanceBook from './chapter_10/AttendanceBook'

ReactDOM.render(
  <React.StrictMode>
    <AttendanceBook />
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
