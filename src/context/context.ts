import { createContext } from "react";
import { IReducerState, TAction } from "../reducer/reducer";
import { initialState } from "../reducer/initialState";

interface IContext {
    state: IReducerState;
    dispatch: ( action: TAction ) => void 
}


const reducerContext = createContext<IContext>({state: initialState, dispatch: ()=> {}});

export default reducerContext;