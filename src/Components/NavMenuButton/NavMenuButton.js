import "./NavMenuButton.css";

function NavMenuButton(props){
    return(
        <div className="ButtonBody"> 
            <img className="ButtonImage" src={props.buttonimage} alt="ButtonImg"></img>
            <p className="ButtonText">{props.buttontext}</p>
        
        </div>

    )
}

export default NavMenuButton;