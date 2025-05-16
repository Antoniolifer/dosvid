import { useContext } from "react";
import reducerContext from "../context/context";


import AwardItem from "../components/Award/AwardItem";
import AddAward from "../components/Award/AddAward";
import ExpandableAwardList from "../components/Award/ExpandableAwardList";
import { IAward } from "../reducer/reducer";
function RewardsView() {
  const {state, dispatch} = useContext(reducerContext);

  const addAward = (award: IAward) => dispatch({type:'added_award', payload:award});

  //don't add edit - it is a design choice -
  //so that you cannot easily "reward yourself too much"
  //you should set the reward once, and just patiently wait for it
  //don't promise yourself x, and then a day later decide you want to double it. 
  //respect your initial decision.
  //delete if you don't want it completely.
  // const editAward = (award: IAward) => dispatch({type: 'edited_award', payload:award});

  const deleteAward = (id :number | string) => dispatch({type:'deleted_award', payload:{id}});

  //defer in theory should be more of a swap, but for now it's "from current to future" only.
  //maybe that's also a design choice - so that you don't make things "overly sweet" for yourself.
  //once you defer - you have decided that this award would be too early for you. 
  const deferAward = (id :number | string) => dispatch({type:'deferred_award', payload:{id}});
  const claimAward = (id :number | string) => dispatch({type:'claimed_award', payload:{id}});
  return (
    <div className="w-10/11 md:w-8/10 mx-auto">
          <AddAward addAward ={addAward}/>

      {/* <DecorativeLine widthPercent={50}/> */}
      <h1 className="font-thin text-3xl text-center underline decoration-1 underline-offset-3 ">Level {state.current_level + 1} rewards</h1>
      {!state.current_awards.length ? <p className="text-center my-2">No rewards here yet.</p> : state.current_awards.map( award => {
        return <AwardItem key={award.id} award={award} showControls={true} claimAward={claimAward} deferAward={deferAward} deleteAward={deleteAward} /> 
      })}
      {/* <DecorativeLine widthPercent={50}/> */}

      <h1 className="font-thin text-3xl text-center underline decoration-1 underline-offset-3">Future rewards</h1>
      {!state.future_awards.length ? <p className="text-center my-2">No rewards here yet.</p> : state.future_awards.map( award => {
        return <AwardItem key={award.id} award={award} showControls={false} claimAward={claimAward} deferAward={deferAward} deleteAward={deleteAward} /> 
      })}

      <ExpandableAwardList awards ={state.claimed_awards}/>
    </div>
  )
}

export default RewardsView