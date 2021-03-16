import React from "react";

function ToDoItem(props) {

   

    return <div>
    <li >
    {props.text}<span style={{float: "right", cursor: "pointer"}} onClick={() =>{
        props.onChecked(props.id)
    }
    
    }>X</span></li>
    
    </div>

}


export default ToDoItem;