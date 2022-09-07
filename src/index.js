import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";

const posts = [
  {id: 1, message: 'Hi, how are you?', likesCount: 15},
  {id: 2, message: "It's my first post", likesCount: 12}
];

const dialogs = [
  {id: 1, name: 'Michael'},
  {id: 2, name: 'Helen'},
  {id: 3, name: 'Henry'},
  {id: 4, name: 'Terry'},
  {id: 5, name: 'Angela'},
  {id: 6, name: 'Tom'},
];

const messages = [
  {id: 1, text: 'Hey'},
  {id: 2, text: 'Hey hey!'},
  {id: 3, text: 'How are you?'},
  {id: 4, text: 'Excellent!'},
  {id: 5, text: 'Wonderful!'},
  {id: 6, text: 'Have a nice day!'},
  {id: 7, text: 'See you )))'},
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App dialogs={dialogs} messages={messages} posts={posts} />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
