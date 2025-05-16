import { useState } from "react";

import { IGoal } from "../../reducer/reducer";
import { nanoid } from "nanoid";

import TextInput from "../TextInput";
import RewardChoice from "./RewardChoice";

function getRndInteger(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min)) + min;
}

interface EditFormProps {
  editHandler: (goal: IGoal) => void;
  goal: IGoal;
}
export function EditingForm({ editHandler, goal }: EditFormProps) {
  //a callback that dispatches the edit event, and re-uses existing id, date, etc

  return <GoalForm submitCallback={editHandler} goal={goal} />;
}

interface SaveFormProps {
  saveHandler: (goal: IGoal) => void;
}
export function SavingForm({ saveHandler }: SaveFormProps) {
  //callback that generates new id and date, and goal is passed in as empty
  const goal: IGoal = {
    id: nanoid(8),
    title: "",
    rewarded_exp: 0,
    completed: false,
    date_created: new Date(),
  };
  return <GoalForm submitCallback={saveHandler} goal={goal} />;
}
interface GoalFormProps {
  submitCallback: (goal: IGoal) => void;
  goal: IGoal;
}

function GoalForm({ submitCallback, goal }: GoalFormProps) {
  const [title, setTitle] = useState(goal.title);
  const [tag, setTag] = useState(goal.tag);
  const [description, setDescription] = useState(goal.description);
  const [rewardType, setRewardType] = useState(() => {
    return goal.rewarded_exp < 26
      ? "small"
      : goal.rewarded_exp < 46
      ? "medium"
      : "large";
  }); //goal.rewarded_exp);

  const clearForm = () => {
    setTitle("");
    setTag("");
    setDescription("");
    setRewardType("");
  };
  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    let rewardValue = goal.rewarded_exp;
    let min: number = 0;
    let max: number = 0;
    if (rewardType === "small" && (rewardValue > 25 || rewardValue < 1)) {
      min = 12;
      max = 26;
      rewardValue = getRndInteger(min, max);
    } else if (
      rewardType === "medium" &&
      (rewardValue < 26 || rewardValue > 45)
    ) {
      min = 30;
      max = 46;
      rewardValue = getRndInteger(min, max);
    } else if (rewardType === "large" && rewardValue < 50) {
      min = 50;
      max = 76;
      rewardValue = getRndInteger(min, max);
    }

    const new_goal: IGoal = {
      id: goal.id,
      title,
      tag,
      description,
      rewarded_exp: rewardValue,
      completed: false,
      date_created: goal.title === "" ? new Date() : goal.date_created,
    };
    submitCallback(new_goal);
    clearForm();
  };
  return (
    <div>
      <form
        onSubmit={submitHandler}
        className="mt-4 w-full md:w-3/4 mx-auto grid grid-cols-9 gap-2 auto-rows-max align-items: start"
      >
        <span className="row-start-2 md:row-start-1 col-span-5">
          <TextInput
            value={title}
            required={true}
            handler={setTitle}
            focus={true}
            placeholder="Goal title..."
          />
        </span>
        <span className="row-start-2 md:row-start-1 col-span-4 md:col-span-2">
          <TextInput
            value={tag ? tag : ""}
            handler={setTag}
            placeholder="Tag..."
          />
        </span>

        
        <span className="row-span-1 row-start-3 md:row-start-2 md:row-span-2 col-span-9">
          <textarea
            className="w-full bg-white border-2 border-forest 
    focus:outline-none focus:ring-0 focus:border-fern
    focus:shadow-xl focus:shadow-fern/50
    rounded-md px-2 py-2 text-xl h-full mt-auto"
            required
            placeholder={"Description..."}
            value={description}
            onChange={(event) => {
              setDescription(event.target.value);
            }}
          />
        </span>

        <div className="row-start-4 col-start-1 col-span-9">
          <RewardChoice
            reward={goal.rewarded_exp}
            setRewardType={setRewardType}
          />
        </div>

        <button
          type="submit"
          className="cursor-pointer row-start-1 h-12 col-start-3 pb-0 md:pb-1 lg:pb-0 md:col-start-8 col-span-5 md:col-span-2 bg-fern hover:bg-forest hover:border-black border-2 border-forest text-white text-lg leading-none md:text-xl rounded-md px-1 md:px-3 font-bold transition-all duration-300 ease-in-out"
        >
          {goal.title !== '' ? 'save changes' : 'add goal'}
        </button>
      </form>
    </div>
  );
}

export default GoalForm;
