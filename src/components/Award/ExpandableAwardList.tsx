import { useState } from "react"
import { IAward } from "../../reducer/reducer"
import AwardItem from "./AwardItem"
import { FaAngleRight } from "react-icons/fa";
function ExpandableAwardList({awards} : {awards:IAward[]}) {
    const [isExpanded, setIsExpanded] = useState(false);
    const toggleExpandHandler = () => {
        setIsExpanded(prev => !prev);
    }
  return (
    <div className="mx-auto">
    <h1  className="font-thin text-3xl text-center underline decoration-1 underline-offset-3">Claimed rewards</h1>
    {!!awards.length && <span className="cursor-pointer flex items-end justify-center" onClick={toggleExpandHandler}><button className="text-xl font-thin cursor-pointer">{isExpanded ? 'hide' :'expand'}</button><FaAngleRight className={`text-3xl ${isExpanded ? 'transition-all rotate-90 duration-400' : 'transition-all rotate-0 duration-400'}`}/>
    </span>}
      {!awards.length ? <p className="text-center my-3">No rewards here yet.</p> : isExpanded && <div className="flex flex-col-reverse sm:flex-row md:flex-wrap justify-center gap-x-2">{awards.map( award => {
        return <AwardItem key={award.id} award={award} showControls={false} claimAward={()=>{}} deferAward={()=>{}} deleteAward={()=>{}} /> 
      })}</div>}
    </div>
  )
}

export default ExpandableAwardList