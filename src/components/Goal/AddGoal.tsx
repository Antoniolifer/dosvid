import { useState } from "react";
import AddGoalButton from "./AddGoalButton";
import {SavingForm} from "./GoalForm";
import { IGoal } from "../../reducer/reducer";

type AddGoalProps = {saveHandler: (goal : IGoal) => void} 

function AddGoal({saveHandler} : AddGoalProps) {
    const [showingForm, setShowingForm] = useState(false);

    if(!showingForm){
        return <AddGoalButton handleClick={() => setShowingForm(true)}/> 
    }
    return (
        
        <SavingForm saveHandler={(goal : IGoal) => {
            setShowingForm(false);
            saveHandler(goal)
        }}/>
        
    )
}

export default AddGoal