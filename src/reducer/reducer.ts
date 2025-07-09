import { initialState } from "./initialState";

export interface IGoal {
  id: number | string;
  title: string;
  description?: string;
  tag?: string;
  rewarded_exp: number;
  completed: boolean;
  date_created: Date;
  date_completed?: Date;
}
export interface IAward {
  id: number | string;
  title: string;
  description?: string;
  claimed: boolean;
  locked: boolean;
}

export interface IWorkday {
  date: Date;
  entries: IGoal[];
}

export interface IReducerState {
  current_exp: number;
  daily_exp_goal: number;
  levels: number[];
  current_level: number;

  current_goals: IGoal[];
  current_awards: IAward[];
  future_awards: IAward[];
  claimed_awards: IAward[];

  history: IWorkday[];
}

export type TAction =
  | { type: "added_goal"; payload: IGoal }
  | { type: "removed_goal"; payload: { id: number | string } }
  | { type: "edited_goal"; payload: IGoal }
  | { type: "completed_goal"; payload: { id: number | string } }
  | { type: "added_award"; payload: IAward }
  | { type: "claimed_award"; payload: { id: number | string } }
  | { type: "deferred_award"; payload: { id: number | string } }
  | { type: "edited_award"; payload: IAward }
  | { type: "deleted_award"; payload: { id: number | string } }
  | { type: "new_day"; payload: { message: "new day." } }
  | { type: "cleared_history"; payload: { message: "Cleared history." } }
  | { type: "restarted_demo"; payload: { message: "Demo restarted." } };

function reducer(state: IReducerState, action: TAction): IReducerState {
  switch (action.type) {
    case "added_goal": {
      //console.log("Reducer: added goal");

      return {
        ...state,
        current_goals: [...state.current_goals, action.payload],
      };
    }
    case "removed_goal": {
      //console.log("Reducer: removed goal");
      return {
        ...state,
        current_goals: [
          ...state.current_goals.filter(
            (goal) => goal.id !== action.payload.id
          ),
        ],
      };
    }
    case "edited_goal": {
      //console.log("Reducer: edited goal");
      return {
        ...state,
        current_goals: [
          ...state.current_goals.map((goal) => {
            if (goal.id !== action.payload.id) {
              return goal;
            }
            return action.payload;
          }),
        ],
      };
    }
    case "completed_goal": {
      //console.log("Reducer: completed goal");
      const newTotalExp =
        state.current_exp +
        state.current_goals.filter((goal) => goal.id === action.payload.id)[0]
          .rewarded_exp;
      let level = state.current_level;
      let current_exp = newTotalExp;
      let didLevelUp = false;
      if (newTotalExp >= state.levels[state.current_level - 1]) {
        //level up happened.
        didLevelUp = true;
        level++;
        current_exp = newTotalExp % state.levels[state.current_level - 1];
      }
      //perform unlocking of awards
      let future_awards = state.future_awards;
      let current_awards = state.current_awards;
      if (didLevelUp) {
        current_awards = [
          ...state.current_awards.map((award) => {
            return { ...award, locked: false };
          }),
          ...future_awards,
        ];
        future_awards = [];
      }
      const today = new Date();
      let latestEntryDate = state.history[state.history.length - 1].date;
      if (typeof latestEntryDate === "string") {
        latestEntryDate = new Date(latestEntryDate);
      }
      let updatedHistory;
      //if today already is in the records
      if (isSameDay(today, latestEntryDate)) {
        updatedHistory = [
          ...state.history.map((entry) => {
            if (isSameDay(today, new Date(entry.date))) {
              return {
                ...entry,
                entries: [
                  ...entry.entries,
                  {
                    ...state.current_goals.filter(
                      (goal) => goal.id === action.payload.id
                    )[0],
                    completed: true,
                    date_completed: new Date(),
                  },
                ],
              };
            }
            return entry;
          }),
        ];
      } else {
        updatedHistory = [
          ...state.history,
          {
            date: new Date(),
            entries: [
              {
                ...state.current_goals.filter(
                  (goal) => goal.id === action.payload.id
                )[0],
                completed: true,
                date_completed: new Date(),
              },
            ],
          },
        ];
      }
      //console.log(updatedHistory);
      return {
        ...state,
        current_level: level,
        current_exp: current_exp,
        current_goals: [
          ...state.current_goals.map((goal) => {
            if (goal.id !== action.payload.id) {
              return goal;
            }
            return { ...goal, completed: true, date_completed: new Date() };
          }),
        ],
        history: updatedHistory,
        future_awards,
        current_awards,
      };
    }
    case "added_award": {
      //console.log('added award');
      return {
        ...state,
        current_awards: [...state.current_awards, action.payload],
      };
    }
    case "claimed_award": {
      //console.log('claimed_award');
      const foundReward = state.current_awards.find(
        (award) => award.id === action.payload.id
      );
      if (!foundReward) {
        throw new Error("no such reward found!");
      }
      return {
        ...state,
        claimed_awards: [foundReward, ...state.claimed_awards],
        current_awards: [
          ...state.current_awards.map((award) => {
            if (award.id === action.payload.id) {
              return { ...award, claimed: true };
            }
            return award;
          }),
        ],
      };
    }
    case "edited_award": {
      //console.log('edited_award');

      return {
        ...state,
        current_awards: [
          ...state.current_awards.map((award) => {
            if (award.id === action.payload.id) {
              return action.payload;
            }
            return award;
          }),
        ],
      };
    }
    case "deleted_award": {
      //console.log('deleted_award');

      return {
        ...state,
        current_awards: [
          ...state.current_awards.filter(
            (award) => award.id !== action.payload.id
          ),
        ],
      };
    }
    case "deferred_award": {
      //console.log('deferred_award');

      const deferred_award = [
        ...state.current_awards.filter(
          (award) => award.id === action.payload.id
        ),
      ][0];
      return {
        ...state,
        current_awards: [
          ...state.current_awards.filter(
            (award) => award.id !== action.payload.id
          ),
        ],
        future_awards: [deferred_award, ...state.future_awards],
      };
    }
    case "new_day": {
      //console.log('new day triggered');

      return { ...state };
    }
    case "cleared_history": {
      //console.log('cleared history.');

      return { ...state, history: [] };
    }
    case "restarted_demo": {
      //console.log('demo restarted');

      return { ...initialState };
    }
    default: {
      //console.log('bad reducer action, default called.');
      return state;
    }
  }
}

function isSameDay(day1: Date, day2: Date): boolean {
  return (
    day1.getDate() === day2.getDate() &&
    day1.getMonth() === day2.getMonth() &&
    day1.getFullYear() === day2.getFullYear()
  );
}

export default reducer;
