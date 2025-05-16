import { IAward, IGoal, IReducerState, IWorkday } from "./reducer";

const goals : IGoal[] = [
    {id: 0, title: 'Buy groceries', description: "Make sure to buy some eggs!", tag:'routine',rewarded_exp: 30, date_created: new Date(), completed: false},
    {id: 1, title: 'Clean the kitchen', description: "Maybe reorganise things to have more space.", tag:'routine', rewarded_exp: 20, date_created: new Date(), completed: false},
    {id: 2, title: 'Complete Assignment', description: "The report on algorithms, very important.", tag:'uni',rewarded_exp: 60, date_created: new Date(), completed: false},
];
const awards : IAward[] = [
    {id: 1, title: '1 Bubble Tea', description: 'Or some other drink of choice', claimed: false, locked:true},
    {id: 2, title: 'New Book', description: 'Yukio Mishima - Spring Snow',claimed: false, locked:true},
];

const future_awards : IAward[] = [
    {id: 3, title: 'New Trousers', description: 'The cool black ones', claimed: false, locked:true},
    {id: 4, title: 'Go out on Friday', description: 'Relax after a long week :)', claimed: false, locked:true},
];
const history : IWorkday[] = [
    {
       date: new Date('2025-04-18'), 
       entries: [ {id: 4, title: 'Read The Great Expectations', tag: "reading",description: "Good luck!", rewarded_exp: 20, date_created: new Date(), date_completed: new Date(), completed: true}]
    },
    {
       date: new Date('2025-04-19'), 
       entries: [ {id: 5, title: 'Clean the living room', tag:"routine", description: "Just a little maintenance.", rewarded_exp: 10, date_created: new Date(), date_completed: new Date(), completed: true}]
    },

]
export const initialState : IReducerState = {
    current_exp : 0, 
    daily_exp_goal: 100, 
    levels: [100,150,200,300,400,500,600,700,800,900,1000],
    current_level : 1, 

    current_goals : goals,
    current_awards: awards,
    future_awards: future_awards,
    claimed_awards: [],
    history : history //completed_goals
}
