import { useEffect, useState } from "react";
import { IGoal } from "../../reducer/reducer";

import GoalControls from "./GoalControls";
import { EditingForm } from "./GoalForm";
import { toast } from "react-toastify";

interface GoalProps {
  goal: IGoal;
  completeGoal: (id: number | string) => void;
  removeGoal: (id: number | string) => void;
  editGoal: (goal: IGoal) => void;

}

function Goal({
  goal,
  completeGoal,
  editGoal,
  removeGoal,

}: GoalProps) {
  const notifyCompleted = () =>
    toast(`Goal completed, congrats! +${goal.rewarded_exp}exp added!`);
  const notifyDeleted = () => toast(`Goal has been removed.`);
  const notifyEdited = () => toast(`Changes saved :)`);

  const [isEditing, setIsEditing] = useState(false);

  const [deletingAnimation, setDeletingAnimation] = useState(false);

  const style = `relative h-full 
        shadow-md shadow-gray-400/25 
        flex justify-between 
        flex-col md:flex-row
        md:items-center
        w-full md:w-4/5 mx-auto text-lg rounded-lg 
        m-4 p-4  gap-y-2
         ${deletingAnimation ? 'absolute transition-all duration-450 opacity-0 -translate-x-70' : ''} 
        border-2 ${goal.completed ? "border-forest" : "border-scarlet"}
    `;
    useEffect( () => {
        if(deletingAnimation){
            setTimeout(() => {
                removeGoal(goal.id);
            },400)
        }
    }, [deletingAnimation, goal.id, removeGoal])
  const deleteHandler = () => {
    setDeletingAnimation(true);
    notifyDeleted();
  };

  const editHandler = (goal: IGoal) => {
    editGoal(goal);
    notifyEdited();
    setIsEditing(false);
  };
  const completeHandler = () => {
    if (!goal.completed) {
      completeGoal(goal.id);
      notifyCompleted();
    }
  };

  if (isEditing) {
    return <EditingForm editHandler={editHandler} goal={goal} />;
  }
  return (
    <div className={style}>
        {/* coloured highlight */}
      <div
        className={`-ml-4 h-full self-start absolute -my-4 w-10 md:w-10 mr-2  ${
          goal.completed ? "bg-forest" : "bg-scarlet"
        }`}
      />

        {/* goal details */}
      <div className="ml-8 mt-2 sm:mt-0">
        <h1 className="  text-lg">{goal.title}</h1>
        <h3 className="font-thin text-lg">{goal.description}</h3>
      </div>

      <div className="self-center  flex ml-10 items-center flex-wrap md:flex-nowrap gap-2">
        <GoalControls
          completed={goal.completed}
          deleteHandler={deleteHandler}
          editHandler={() => setIsEditing(true)}
          completeHandler={completeHandler}
        />
        <h1
          className={`text-end mx-auto absolute top-1 right-1 md:static md:self-auto font-bold ${
            goal.completed ? "text-forest" : "text-scarlet"
          } text-xl`}
        >
          {goal.rewarded_exp}exp.
        </h1>
      </div>
    </div>
  );
}

export default Goal;
