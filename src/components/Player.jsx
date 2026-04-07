import { useState } from "react";
export default function Player({initialName,symbol}){
    const [name,setName]=useState(initialName)
const [isEditing,setIsEditing]=useState(false);
    return (
 <li>
    <span className="player">
    {isEditing?
    <input type="text" required value={name} onChange={event=>setName(event.target.value)}/>
    :<span className="player-name">{name}</span>}
    <span className="player-symbol">{symbol}</span>
  </span>
  <button onClick={()=>setIsEditing(editing=> !editing)}>{isEditing?"Save":"Edit"}</button>
  </li>
    );
}