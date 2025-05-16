import { useContext } from "react"
import reducerContext from "../context/context"
import { IGoal } from "../reducer/reducer";

import Goal from "../components/Goal/Goal";


import AddGoal from "../components/Goal/AddGoal";
function GoalsView() {
  const {state, dispatch} = useContext(reducerContext);

  const completeGoal = (id : number | string) => dispatch({type:'completed_goal', payload: {id}}) 
  const editGoal = (goal : IGoal) => dispatch({type:'edited_goal', payload: goal}) 
  const removeGoal = (id : number | string) => dispatch({type:'removed_goal', payload: {id}}) 
  const addGoal = (goal : IGoal) => dispatch({type:'added_goal', payload: goal}) 
  return (
    <div className="mx-auto w-9/10 md:w-full">
      
      {!state.current_goals.length ? <p className="text-center text-lg">You currently have no added goals.</p> : state.current_goals.map( (goal : IGoal)=> {

        return (
          <Goal 
            key={goal.id}
            goal = {goal}
            completeGoal ={completeGoal}
            editGoal ={editGoal}
            removeGoal ={removeGoal}


          />
        )
      })}
      <AddGoal saveHandler = {addGoal}/>

    </div>
  )
}

export default GoalsView