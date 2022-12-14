import React from "react";
import "./normalize.css";
import "./App.css";
import {Navbar} from "./components/Navbar/Navbar";
import {Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

function App() {
    const ProfileRender = () => <ProfileContainer/>;
    const DialogsRender = () => <DialogsContainer/>;
    const UsersRender = () => <UsersContainer/>;

    return (
        <div className={'app-wrapper'}>
            <HeaderContainer/>
            <Navbar/>
            <div className={'app-wrapper__content'}>
                <Route path={'/profile/:userId?'} render={ProfileRender}/>
                <Route path={'/dialogs'} render={DialogsRender}/>
                <Route path={'/news'} render={News}/>
                <Route path={'/music'} render={Music}/>
                <Route path={'/users'} render={UsersRender}/>
                <Route path={'/settings'} render={Settings}/>
            </div>
        </div>
    );
};

export default App;
