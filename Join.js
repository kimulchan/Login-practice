import axios from 'axios';
import React, { useRef, useState } from 'react';
import { useHistory } from "react-router-dom";

function Join(){
    const history = useHistory();
    const [userInfo,setUserInfo]=useState({
        userName:'',
        password:'',
        nickName:''
    });
    const changeInfo=(e)=>{
        const {name,value} =e.target;
        setUserInfo(
            {
                ...userInfo,
                [name]:value
            }
        )
    }
    function OnLoginEx({userName,password,nickName}){
        if(userName===''){
            alert("userName을 입력해 주세요!")
            return;
        };
        if(password===''){
            alert("password를 입력해 주세요!");
            return;
        }
        
        if(nickName === '')
        {
            alert("nickName을 입력해 주세요!");
            return;
        }
        OnLogin({userName,password,nickName});
    
        
    }
    
    function OnLogin({userName,password,nickName}){
        axios.post(
            "/join",{
                username:userName,
                password:password,
                name:nickName
            }
        ).then(()=>{
            alert("회원가입 되었습니다");
            history.push("/");
            
        }).catch(e=>
            {
                alert(e);
            }
        )
    
        
    }
    return (
        <>
            <h1>회원가입</h1>
            <input placeholder="userName" name='userName' onChange={(e)=>changeInfo(e) }></input>
            <input placeholder="password" name='password'onChange={(e)=>changeInfo(e)}></input>
            <input placeholder="nickName" name='nickName'onChange={(e)=>changeInfo(e)}></input>
            <button onClick={()=>OnLoginEx(userInfo)}>join</button>
        </>
    );
}
export default Join;