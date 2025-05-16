import { initialState } from "./initialState";



const initializer = (initialValue = initialState) => {
    const storedState = localStorage.getItem("reducerState");
    if(storedState){
        return JSON.parse(storedState)
    }
    return initialValue;
}


export default initializer;