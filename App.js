import logo from './logo.svg';
import './App.css';
import Join from './Join';
import Login from './Login';
import { BrowserRouter, Route ,Link} from "react-router-dom"
import Main from "./Main"
import TopBar from './TopBar';
function App() {
  return (<>
    
    <BrowserRouter>
    <TopBar></TopBar>
      <Route component={Main} path="/" exact></Route>
      <Route component={Login} path="/Login"></Route>
      <Route component={Join} path="/Join"></Route>
    </BrowserRouter>
    </>
  );
}

export default App;
