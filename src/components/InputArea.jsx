import React, { useState } from "react";



function InputArea(props) {

    const [tdText, setText] = useState("");

    function handleChange(event) {
        const newValue = event.target.value;
        setText(newValue);

        if (event.charCode === 13) {
            props.onAdd(tdText);
            setText("");
        }

    };

    return (
        <div className="form">
            <input onChange={handleChange} autoFocus={true} placeholder="Add Item" type="text" value={tdText} onKeyPress={handleChange} />
            <button onClick={() => {
                props.onAdd(tdText)

                setText("");
            }


            }>
                <span>Add</span>
            </button>
        </div>
    );
}


export default InputArea;