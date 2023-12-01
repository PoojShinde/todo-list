import './App.css';
import { useEffect, useState } from 'react';
import ToDoLists from './ToDoLists';
import axios from 'axios';


function App() {
// const[inputList, setInputList]=useState("");
const [inputList, setInputList] = useState(
  JSON.parse(localStorage.getItem('inputList')) || []
);
const [items, setItems] = useState([]);
const itemEvent = (event) => {
  setInputList(event.target.value);
};
const listOfItems =() =>{
  setItems((oldItems) => {
    return [...oldItems,inputList]
  // axios.post('http://localhost:2345/add',{items:items})
  // .then(result => console.log(result))
  // .catch(err => console.log(err))
});
setInputList("");
};
const deleteItems = (id) => {
  console.log("deleted");

  setItems((oldItems)=>{
    return oldItems.filter((arrElem, index) => {
          return index !== id;
    });
  });
};
useEffect(() => {
  // Update local storage whenever inputList changes
  console.log("ghf")
  localStorage.setItem('inputList', JSON.stringify(inputList));
  // axios.get('http://localhost:2345/get')
  // .then(result => setItems(result.data))
  // .catch(err => console.log(err))
}, [inputList]);

useEffect( () => {
  console.log("Running")
},)


 

  return (
    <>
    <div className="main_div">
      <div className="center_div">
        <br />
        <h1> ToDo List</h1>
        <br />
        <input type="text" placeholder="add a item" value={inputList} onChange={itemEvent}/>
        <button onClick={listOfItems}> + </button>
        <ol>
          {items.map( (itemval, index) => {
            return <ToDoLists key={index} id={index}
            text = {itemval}
            onSelect ={deleteItems}
            />;

          }   )}
        </ol>

      </div>

    </div>
    </>
  );
}

export default App;

