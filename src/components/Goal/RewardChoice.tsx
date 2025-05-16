
import { useState } from "react"
import RewardButton from "./RewardButton"
function RewardChoice({reward, setRewardType}: {reward: number, setRewardType: (arg: string) => void}) {
  //if reward is passed, use it to choose the selected one - < 30 = small, > 30 & < 60 = medium, etc
  const [selected, setSelected] = useState(()=> {
    if(reward === 0 || reward < 26){
      return 0;
    }else if(reward > 25 && reward < 50){
      return 1;
    }
    return 2;

  });
  return (
    <div className="flex gap-2 flex-col md:flex-row justify-center items-center md:pr-16">
        <p className="text-lg underline decoration-1 underline-offset-3">Reward:</p>
        <div className="flex gap-2">
        <RewardButton color='lime' selected ={selected === 0} handler={() => {
          setSelected(0);
          setRewardType('small')
        }}>small</RewardButton>
        <RewardButton color='fern' selected ={selected === 1} handler={() => {
          setSelected(1);
          setRewardType('medium')
        }}>medium</RewardButton>
        <RewardButton color='forest' selected ={selected === 2} handler={() => {
          setSelected(2);
          setRewardType('large')
        }}>large</RewardButton>
        {/* <RewardButton color='paper' handler={() => {}}>custom</RewardButton> */}
        </div>
    </div>
  )
}

export default RewardChoice