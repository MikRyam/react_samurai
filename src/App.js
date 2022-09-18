import React from "react";
import {Route, Routes} from "react-router-dom";
import './App.css';
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import Layout from "./components/Layouts/Layout";
import Homepage from "./pages/Homepage";
import Blogpage from "./pages/Blogpage";
import Singlepage from "./pages/Singlepage";

const App = (props) => {
  return (
    // <div className='app-wrapper'>
    //   <Header/>
    //   <div className="main">
    //     <Navbar/>
    //     <div className='app-content-wrapper'>
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route index element={<Homepage/>}/>
              <Route path="profile/" element={<ProfileContainer/>}/>
              <Route path="profile/:userId" element={<ProfileContainer/>}/>
              <Route path="dialogs/*" element={<DialogsContainer/>}/>
              <Route path="news/*" element={<News/>}/>
              <Route path="posts/" element={<Blogpage/>}/>
              <Route path="posts/:id" element={<Singlepage/>}/>
              <Route path="music/*" element={<Music/>}/>
              <Route path="settings/*" element={<Settings/>}/>
              <Route path="users/*" element={<UsersContainer/>}/>
              {/*<Route path="*" element={<NotFoundPage/>}/>*/}
            </Route>
          </Routes>
    //     </div>
    //   </div>
    // </div>
  );
}

export default App;
