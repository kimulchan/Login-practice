import { Link } from "react-router-dom";
import IsCookie from "./IsCookie";

function Main(){
    
    return(
        <>
            {IsCookie()?<div>로그아웃</div>:<Link to="/login">로그인</Link>}  
        </>
    )
}


export default Main;