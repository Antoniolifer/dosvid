
import reducerContext from "./context";
import reducer from "../reducer/reducer";
import { useEffect, useReducer } from "react";
import { initialState } from "../reducer/initialState";
import initializer from "../reducer/initializer";

type WrapperProps = {
    children: string | React.JSX.Element | React.JSX.Element[]
  }


function ContextProvider({children}: WrapperProps ) {
  const [state, dispatch] = useReducer(reducer, initialState, initializer);

  useEffect(() => {
    localStorage.setItem("reducerState", JSON.stringify(state));
  }, [state]);

  return (
    <reducerContext.Provider value ={{state, dispatch}}>
        {children}
    </reducerContext.Provider>
  )
}

export default ContextProvider