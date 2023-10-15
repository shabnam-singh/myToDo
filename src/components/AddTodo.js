import React, { useState } from 'react'

export const AddTodo = (props) => {
    const [title,setTitle]=useState("");
    const [desc,setDesc]=useState("");
 
    const submit=(e)=>{
        if(!title||!desc){
            alert("Enter all Name or Desc");
            return
        }
        props.addTodo(title,desc);

    }




  return (
    <div>
        <span>Task Name</span>
        <input type='text' value={title} onChange={(e)=>{setTitle(e.target.value)}}/>
        <br />
        <span>Type Desc</span>
        <input type='text' value={desc} onChange={(e)=>{setDesc(e.target.value)}}/>
        <br />
        <button id="addbtn" type='button' onClick={()=>{submit()}}>Add To Task</button>

    </div>
  )
}
