import { Fragment, useReducer, useRef } from "react";

const taskReducer = (state, action) => {
  if (action.type === "ADD") {
    console.log('hiii');
    console.log(action.payload.name+' '+ action.payload.description);
    return {name : action.payload.name, description : action.payload.description}
  }
  return{
    name: "",
    description: "",
  }
};

const InputForm = () => {
const nameRef = useRef();
const descriptionRef = useRef();

  const [task, dispachTask] = useReducer(taskReducer, {
    name: "kk",
    description: "kk",
  });

const submitHandler = (event)=> {
    event.preventDefault();
    console.log('hiii2');
    
    dispachTask({type:"ADD",payload:{
        name:nameRef.current.value,
        description:descriptionRef.current.value
    }})
}

  return (
    <form onSubmit={submitHandler}>
      <div className="mb-3">
        <label htmlFor="formGroupExampleInput" className="form-label">
          task Name
        </label>
        <input
        ref={nameRef}
          type="text"
          className="form-control form-input-width"
          id="formGroupExampleInput"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="formGroupExampleInput2" className="form-label">
          Task Description
        </label>
        <input
        ref={descriptionRef}
          type="text"
          className="form-control form-input-width"
          id="formGroupExampleInput2"
        />
      </div>
      <div className="d-flex justify-content-end">
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
    </form>
  );
};
export default InputForm;
