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

// import AttendanceBook from './chapter_10/AttendanceBook'

// import SignUp from "./chapter_11/SignUp"

// import Calculator from './chapter_12/Calculator'
// import ProfileCard from './chapter_13/ProfileCard';

import DarkOrLight from './chapther_14/DarkOrLight';
ReactDOM.render(
  <React.StrictMode>
    <DarkOrLight />
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
