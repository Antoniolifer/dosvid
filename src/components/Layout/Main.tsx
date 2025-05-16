import React, { Suspense } from 'react'

// import GoalsView from "../../views/GoalsView";
const GoalsView = React.lazy(() => import("../../views/GoalsView"));
const HistoryView = React.lazy(() => import("../../views/HistoryView"));
const RewardsView = React.lazy(() => import("../../views/RewardsView"));

import Loader from '../Loader';
function Main({selectedView} : {selectedView : string}) {
  
  if(selectedView === 'Rewards'){
   return( <div>
        <Suspense fallback={<Loader/>}><RewardsView/></Suspense>
    </div>)
  }
  else if(selectedView === 'History'){
    return(<div>
        <Suspense fallback={<Loader/>}><HistoryView/></Suspense>
    </div>)
  }
  return (
    <div>
      <Suspense fallback={<Loader/>}><GoalsView/></Suspense>    
      </div>
  )
}

export default Main