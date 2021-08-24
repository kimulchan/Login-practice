import {Link} from 'react-router-dom';


function TopBar(){
    return (
        <div style={{display:'flex',alignItems:"center"}}>
            <Link to="/"><h1>로그인 연습</h1></Link>
            <Link to="/loginok">로그인 했을때 들어가지는 페이지</Link>
        </div>
    );
}

export default TopBar;