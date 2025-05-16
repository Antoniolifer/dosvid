import { useContext, useEffect, useState } from "react"
import reducerContext from "../context/context";
import HistoryDateDisplay from "../components/HistoryControl/HistoryDateDisplay";
import HistoryEntry from "../components/HistoryControl/HistoryEntry";

//object collection format: day_entry = {date: Date, completedGoals: IGoal[]}


function HistoryView() {
  const {state} = useContext(reducerContext);


  const [pageIndex, setPageIndex] = useState(1);
  const [isLast, setIsLast] = useState(true); //latest date, page index - 1 
  const [isFirst, setIsFirst] = useState(true); //first date, page index - history.length
  const handleForwardClick = () => {
    if(isLast){
      return;
    }
    setPageIndex(prev => prev - 1)
  }
  const handleBackwardClick = () => {
    if(isFirst){
      return;
    }
    setPageIndex(prev => prev + 1)
  }
  useEffect(()=> {
    if(pageIndex !== 1){setIsLast(false)} 
    else{setIsLast(true)}

    if(pageIndex !== state.history.length){setIsFirst(false)}
    else{setIsFirst(true)}
    
  },[pageIndex,state.history.length]);

  return (
    <div >
      <HistoryDateDisplay 
        handleBackwardClick={handleBackwardClick} 
        handleForwardClick={handleForwardClick} 
        date ={state.history[state.history.length - pageIndex].date}
        isLast={isLast}
        isFirst={isFirst}
      />
      <div className="w-9/10 md:w-2/3 mx-auto flex flex-col gap-2">{
        state.history[state.history.length - pageIndex].entries.map( entry => {

          return <HistoryEntry key={entry.id}entry={entry}/>
        })
      }</div>
    </div>
  )
}

export default HistoryView