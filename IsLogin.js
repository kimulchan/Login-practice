import { useReducer, useState } from "react";


function IsLogin(){
    const [isLogin,setIsLogin]=useState(false);

    return{isLogin,setIsLogin};
}
export default IsLogin;
