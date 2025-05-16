import { useEffect, useState } from "react";


interface GoalProps {

    completeHandler: () => void;
    editHandler: () => void;
    deleteHandler: () => void;
    completed: boolean;
}

function GoalControls({completeHandler, editHandler, deleteHandler, completed} : GoalProps) {
    const [completeAnimation, setCompleteAnimation] = useState(false);
    useEffect( () => {
        if(completeAnimation){
            setTimeout( () => {
                completeHandler();
                setCompleteAnimation(false);
            }, 300)
        }
        
    }, [completeAnimation, completeHandler])
  
  
  return (
    <div>
        
        <div className="flex gap-x-1 relative animate-slide-right text-white">
        
        {completed ? 
        <GoalButton key={'3'} color="fern" completed={true} clickHandler={completeHandler}>completed</GoalButton> 
        :
        <>
        <span className={`${completeAnimation ? 'transition-all duration-350 translate-x-20 opacity-0':''}`}><GoalButton key={'1'} color="red-400" clickHandler={(deleteHandler)}>delete</GoalButton></span>
        <span className={`${completeAnimation ? 'transition-all duration-350 translate-x-20 opacity-0':''}`}><GoalButton key={'2'} color="lapis" clickHandler={editHandler}>edit</GoalButton></span>
        <GoalButton key={'3'} color="fern" clickHandler={() => setCompleteAnimation(true)}>complete</GoalButton>
        </>
        }
        </div>
        
    </div>
  )
}
interface GoalButtonProps {
    color: string, 
    children: string,
    clickHandler: () => void,
    completed?: boolean;
}
const GoalButton = ({color, children, clickHandler, completed = false}: GoalButtonProps) => {
    if(completed){
        const style = `py-1 px-2 border-2 border-forest rounded-xl text-white font-bold transition-all duration-300  ease-in-out bg-forest`;
        return <button className={style} disabled>{children}</button>
    }
    const style = `py-1 px-2 rounded-xl text-gray-800 transition-all cursor-pointer duration-300  ease-in-out border-2 border-yellow-800 hover:text-white ${color === 'red-400' ? 'hover:bg-scarlet' : 'hover:border-forest hover:bg-fern'}`;
    return <button className={style} onClick={clickHandler}>{children}</button>

}
export default GoalControls