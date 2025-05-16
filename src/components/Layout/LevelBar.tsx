import { useContext } from "react"
import reducerContext from "../../context/context"


function LevelBar() {
  // const level = 2;
  const {state} = useContext(reducerContext);
    // const nearestPercent = 75;
  const nearestPercent = Math.round((state.current_exp / state.levels[state.current_level - 1]) * 100);
  return (
    <div className=" w-9/10 mt-5 md:w-full mx-auto flex justify-between md:justify-center items-center gap-2 md:gap-4">
        <h1 className="underline text-2xl text-center font-bold">LvL {state.current_level}</h1>
        <div className="h-12 border-4 w-8/11 border-gray-700 rounded-2xl z-20">
            <div style={{width: `${nearestPercent}%`}}className="h-10 rounded-xl inline-block bg-gradient-to-r from-forest to-lime z-10 transition-all duration-300"></div>
            {/* <div style={{width: `${100 - nearestPercent+ 5}%`}}className="h-10 rounded-xl -m-l-8 inline-block bg-gradient-to-r from-lime to-paper"></div> */}
            {/* <h3 className="absolute right-1/2 inline-block text-white text-xl text-center">111/222</h3> */}
        </div>
        <h1 className="underline text-2xl font-bold text-center">LvL {state.current_level + 1}</h1>

    </div>
    
  )
}

export default LevelBar