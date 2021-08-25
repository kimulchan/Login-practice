import IsCookie from "./IsCookie";

export const RestricRoute=({
component:Component,
fallback:Fallback
})=>{
    return IsCookie() ? <Component/>:<Fallback/>;
}