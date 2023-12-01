import React from 'react'

const ToDoLists = (props) => {
    
    return(
        <>
        <div className='todo_style'>
        <i className="bi bi-trash3-fill" aria-hidden="true" onClick={()=>{
            props.onSelect(props.id);
        }} />
        
            <li>{props.text}</li>
        
     
     </div>
     </>
    )

};
export default ToDoLists;
{/* <i class="bi bi-trash3-fill"></i> */}