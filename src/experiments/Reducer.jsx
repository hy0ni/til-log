import { useReducer } from "react";

const initialState = {
  name: "",
  age: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_NAME":
      return { ...state, name: action.payload };
    case "SET_AGE":
      return { ...state, age: action.payload };
    case "RESET":
      return initialState;
    default:
      throw new Error("Unhandled action type: " + action.type);
  }
}
function Reducer() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleNameChange = (e) => {
    dispatch({ type: "SET_NAME", payload: e.target.value });
  };
  const handleAgeChange = (e) => {
    dispatch({ type: "SET_AGE", payload: e.target.value });
  };
  const handleReset = () => {
    dispatch({ type: "RESET" });
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Name"
        value={state.name}
        onChange={handleNameChange}
      />
      <input
        type="number"
        placeholder="Age"
        value={state.age}
        onChange={handleAgeChange}
      />
      <button onClick={handleReset}>Reset</button>
      <p>
        Name: {state.name} / Age: {state.age}
      </p>
    </div>
  );
}

export default Reducer;
