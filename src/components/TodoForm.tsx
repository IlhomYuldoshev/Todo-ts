import React from 'react';

interface TodoFormProps {
  onAdd(title: string): void
}

const TodoForm: React.FC<TodoFormProps> = ({onAdd}) => {
  // const [title, setTitle] = React.useState<string>("")
  //
  // const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setTitle(e.target.value)
  // }
  //
  // const onKeyPressHandler = (e: React.KeyboardEvent) => {
  //   if(e.key === "Enter") {
  //     console.log(title)
  //     setTitle("")
  //   }
  // }

  const inputRef = React.useRef<HTMLInputElement>(null)

  const onKeyPressHandler = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      onAdd(inputRef.current!.value)
      inputRef.current!.value = ""
    }
  }

  const onClickAddBtn = () => {
    if (inputRef.current!.value) {
      onAdd(inputRef.current!.value)
      inputRef.current!.value = ""
    }
  }

  return (
    <>
      <div className="input-field">
        <input
          // onChange={changeHandler}
          onKeyPress={onKeyPressHandler}
          ref={inputRef}
          type="text" id="title"/>
        <label htmlFor="title" className="active">
          write todo
        </label>
      </div>
      <button onClick={onClickAddBtn} className="waves-effect waves-light btn blue-grey darken-1">Add todo</button>
    </>
  );
};

export default TodoForm;
