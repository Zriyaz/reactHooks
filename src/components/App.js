import React, {useState} from 'react';
import ResourceList from "./ResourceList"
import UserLists from "./UserLists"

const App =()=>{
  const [resource , setResource]= useState('posts')
    return(
    <div>
     <UserLists />
      <div>
       <button type="button"
        onClick={ ()=>setResource('posts')}>Posts</button>
       <button type="button"
        onClick={()=>setResource('todos') }>Todos</button>
      </div>
       <ResourceList resource={resource} />
    </div>
   )
 }
export default App;
