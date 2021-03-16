import React, { useState } from "react";
import InputArea from "./InputArea"
import ToDoItem from "./ToDoItem";


function App() {

  
  const [listItems, setListItem] = useState([]);

//  typeof(listItems)


  function addListItem(tdText) {

    setListItem((prevValue) => {
      return [...prevValue, tdText]
     
    });
  

  };

  
  function handleDelete(id) {
    console.log(id);
    setListItem((prevValue) => {
      return prevValue.filter((item, index) => {
        return index !== id;
      });
    });


  };

// let handleEnter= (event) =>{

//     if(event.charCode===13){
//       addListItem();
//     }

    
// }




  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
       <InputArea 
         onAdd={addListItem}
       />
      <div>
        <ul>
          {listItems.map((listItem, index) =>
           (<ToDoItem
              key={index}
              id={index}
              text={listItem}
              onChecked={handleDelete}
            />)
            )}
        </ul>
      </div>
    </div>
  );
}

export default App;
