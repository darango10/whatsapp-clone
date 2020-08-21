import React, {useEffect} from 'react';
import './App.css';
import Sidebar from "./components/Sidebar";
import Chat from "./components/Chat";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Login from "./components/Login";
import {useStateValue} from "./StateProvider";
import firebase from "firebase";
import {actionTypes} from "./reducer";

function App() {

    const [{user}, dispatch] = useStateValue();

    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            if (user?.uid) {
                dispatch({
                    type: actionTypes.SET_USER,
                    payload: user
                })

            }


        });
    }, [dispatch])

    return (
        <div className="app">

            {!user
                ?
                <Login/>
                :
                <div className="app__body">
                    <Router>
                        <Sidebar/>
                        <Switch>

                            <Route path="/rooms/:roomId">
                                <Chat/>
                            </Route>

                            <Route exact path="/">
                                {/*<Chat/>*/}
                            </Route>

                        </Switch>
                    </Router>
                </div>
            }


        </div>
    );
}

export default App;
