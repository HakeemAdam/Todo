import React, {ChangeEvent, useRef} from 'react'
import "./styles.css"

interface Props{
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAddTodo: (e: React.FormEvent)=>void;
}

const InputFeild: React.FC<Props> = ({todo, setTodo, handleAddTodo}) => {

  const setTodoState = (e: ChangeEvent<HTMLInputElement>) =>{
    setTodo(e.target.value);
  }

  const inputRef = useRef<HTMLInputElement>(null)


  return (
    <form className="input" onSubmit={ (e)=>{
      handleAddTodo(e)
      inputRef.current?.blur()
      }}>
        <input 
        ref={inputRef}
        value={todo}
        onChange={setTodoState}
        type="input" 
        placeholder="Enter a Task" 
        className="input_box" />
        <button className="input_submit" type="submit">Go</button>        
    </form>
  )
}

export default InputFeild