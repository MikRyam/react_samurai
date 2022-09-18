import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import store from "./redux/redux-store";
import {Provider} from "react-redux";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App/>
    </Provider>
  </BrowserRouter>
);


// addPost('Samurai')

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
//     </BrowserRouter>
//   </React.StrictMode>
// );

// const root = ReactDOM.createRoot(document.getElementById('root')); // ВОТ ЭТА СТРОКА
// export let rerenderEntireTree = (state) => {
//   root.render(
//     <React.StrictMode>
//       <BrowserRouter>
//         <Provider store={store}>
//           {/*<App state={state} dispatch={store.dispatch.bind(store)} store={store}/>*/}
//           <App/>
//         </Provider>
//       </BrowserRouter>
//     </React.StrictMode>
//   );
// }

// rerenderEntireTree(store.getState());
// rerenderEntireTree();

// store.subscribe(() => {
//   let state = store.getState();
//   rerenderEntireTree(state);
// })
// store.subscribe(() => {
//   rerenderEntireTree();
// })


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
