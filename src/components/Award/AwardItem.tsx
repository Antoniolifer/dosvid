

import { useEffect, useState } from 'react';
import { IAward } from '../../reducer/reducer';
import { toast } from 'react-toastify';

interface AwardProps {
  
  award: IAward;
  claimAward: (id: number | string) => void;
  deferAward: (id: number | string) => void;
  deleteAward: (id: number | string) => void;
  showControls: boolean;
  
}

function AwardItem({award,showControls=false,claimAward, deferAward, deleteAward}: AwardProps) {
 const notifyClaimed = () => toast('Reward claimed!');
 const notifyDeferred = () => toast('Reward deferred to next level.');
 const notifyDeleted = () => toast('Reward has been deleted.');

 const handleDelete = () => {
  notifyDeleted();
  deleteAward(award.id);
}
const [startDeleteAnimation, setStartDeleteAnimation] = useState(false);
  useEffect( () => {
    if(!startDeleteAnimation){
      return;
    }
    setTimeout(() => {
      handleDelete();
    },300)
  },[startDeleteAnimation])
const handleDefer = () => {
  notifyDeferred();
  deferAward(award.id);
}
const [startDeferAnimation, setStartDeferAnimation] = useState(false);
  useEffect( () => {
    if(!startDeferAnimation){
      return;
    }
    setTimeout(() => {
      handleDefer();
    },500)
  },[startDeferAnimation])

const handleClaim = () => {
  notifyClaimed();
  claimAward(award.id);
}
  const [startAnimation, setStartAnimation] = useState(false);
  useEffect( () => {
    if(!startAnimation){
      return;
    }
    setTimeout(() => {
      handleClaim();
      setStartAnimation(false);
    },500)
  },[startAnimation])



  
  return (
    <div className={`my-2 
      
      ${startDeleteAnimation ? 'opacity-0 transition-all duration-300 translate-x-36' : ''}

      ${startDeferAnimation ? 'opacity-25 transition-all duration-500 translate-y-50' : ''}

      ${startAnimation || award.claimed ? 'bg-dark-paper transition-all duration-300 ' : ''} 
      border-4 border-forest p-3 rounded-xl flex items-center justify-between`}>
      <span>
      <h1 className='text-xl'>{award.title}</h1>
      <h3 className='text-lg font-thin'>{award.description}</h3>
      </span>

      
      {showControls && 
      <span className={`font-bold flex flex-col items-end md:flex-row`}>
        
          {!award.claimed && <div className={startAnimation ? 'w-18 md:w-auto inline-block relative top-0 right-0 transition-all duration-300 translate-y-4 md:translate-x-4 md:translate-y-0 opacity-0' : 'w-18 md:w-auto translate-x-0 opacity-100'}>
            <button onClick={() => setStartDeleteAnimation(true)} className='cursor-pointer w-18 h-10 md:h-16 p-1 md:p-2 mr-1 border-2 border-yellow-800 shadow-md shadow-scarlet/50  rounded-md bg-weak-scarlet hover:bg-scarlet transition-all text-white'>delete</button>
            <button onClick={() => setStartDeferAnimation(true)} className='cursor-pointer w-18 h-10 md:h-16 p-1 md:p-2 mr-1 border-2 border-forest shadow-md shadow-forest/50  rounded-md bg-weak-lapis hover:bg-lapis text-white'>defer</button>
          </div>}
          {startAnimation || award.claimed ? 
          <button className='md:w-22 h-10 md:h-16 p-1 md:p-2 border-2 transition-all border-forest shadow-md shadow-forest/50  rounded-md bg-forest text-white'>claimed</button>
          :<button onClick={() => setStartAnimation(true)} className={`w-18 h-10 md:h-16 p-1 md:p-2 border-2 border-forest shadow-md shadow-forest/50  rounded-md ${award.locked ? 'bg-gray-400' :'bg-fern cursor-pointer'} text-white`} disabled={award.locked}>{award.locked ? 'locked':'claim'}</button>
          }
      </span>}
    </div>  
    )
}

export default AwardItem