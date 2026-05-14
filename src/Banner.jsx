import cryptoBg from "./images/cryptoBg.png";
import './index.css'
export default function Banner(){
    return(
        <div className="imgContainer">
            <img src={cryptoBg} style={{width:"100%"}} alt="backGround" />

        </div>
    );
}