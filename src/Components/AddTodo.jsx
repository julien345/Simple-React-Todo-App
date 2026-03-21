import {useState} from 'react';
function AddTodo({addTodo}){
    //Destructuring props
    const [text,setText]=useState('');
    
    //function to  handle submit
    const handleSubmit=()=>{
        if(!text){
            alert('veuillez entrer du texte');
            return
        }
        addTodo(text);
        setText('');
        
    }


    // Render
    return(
        <div>
        <input value={text} onChange={(e)=> setText(e.target.value)}/>
        <button onClick={handleSubmit}>Add</button>
        </div>
        
    )
}
export default AddTodo;