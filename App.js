import './App.css';
import Join from './Join';
import Login from './Login';
import { BrowserRouter, Route ,Link, Redirect, Switch, useHistory} from "react-router-dom"
import Main from "./Main"
import TopBar from './TopBar';
import LoginOk from "./LoginOk";
import {RestricRoute} from "./RestrictRoute";

const NotLogin =()=>{
  alert("로그인을 해주세요");
  return <Redirect to="/"></Redirect>
}
function App() {
  return (<>
    
    <BrowserRouter>
    <TopBar></TopBar>
    <Switch>
      <Route component={Main} path="/" exact></Route>
      <Route component={Login} path="/Login"></Route>
      <Route component={Join} path="/Join"></Route>
      <RestricRoute component={LoginOk} fallback={NotLogin} path="/loginok"></RestricRoute>
    
    </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
