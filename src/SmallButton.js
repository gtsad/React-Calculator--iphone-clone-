import "./SmallButton.css"

function SmallButton(props) {
    return (
     
        <button className={props.className} onClick = {props.onClick}>
            {props.number}
        </button>
   
    );
  }


export default SmallButton;
