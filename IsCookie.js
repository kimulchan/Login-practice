import { useReducer, useState } from "react";

function IsCookie(){
    console.log(document.cookie);
    if(!document.cookie)
        return false;        
    return document.cookie;
}

export default IsCookie;
