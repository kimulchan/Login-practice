import { useState } from "react";
import {Link, useHistory} from "react-router-dom";
import axios from "axios";
import IsLogin from "./IsLogin"

axios.defaults.baseURL="http://18.219.215.9:8081";

function Login(){
    const history=useHistory();
    const {isLogin,setIsLogin}=IsLogin();
    const OnLogin= (e)=>{
        e.preventDefault();
        const {userName,password}=loginInfo;
        axios.post('/login',{
            username:userName,
            password:password
        }).then(
            response=>{
                const dataRequest=response.data;
                document.cookie=dataRequest[`Bearer-Token`]
                alert("로그인 성공!")
                history.push("/");
                setIsLogin(true);
            }
        ).catch((e)=>{
            console.log(e);
            alert("아이디와 비밀번호를 다시 입력해 주세요");
            return;
        })
    
        
    }
    const OnLoginEx=(e)=>{
        
        console.log(e);
        const {userName,password}=loginInfo;
        if(userName===''){
            alert("userName을 넣어주세요!");
            return;
        }
        if(password===''){
            alert("password을 넣어주세요!");
            return;
        }
        OnLogin(e);
    }
    const [loginInfo,setLoginInfo]=useState({
        userName:'',
        password:''
    })    
    const LoginInfoChange=(e)=>{
        const {name,value}=e.target;
        setLoginInfo(
            {
                ...loginInfo,
                [name]:value
            }
        )
    }
    return(
        <form onSubmit={OnLoginEx}>
            <h1>로그인 연습</h1>
            <input placeholder="userName" name='userName' onChange={(e)=>LoginInfoChange(e)}></input>
            <input placeholder="password" name='password'onChange={(e)=>LoginInfoChange(e)} ></input>
            <button onClick={OnLoginEx}>Login</button>
            <Link to="/Join">Join</Link>
        </form>
    );

}
export default Login;