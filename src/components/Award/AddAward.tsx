import { useState } from "react"
import AwardForm from "./AwardForm";
import { IAward } from "../../reducer/reducer";
function AddAward({addAward} : {addAward: (award : IAward) => void}) {
  const [showingForm, setShowingForm] = useState(false);

  const SubmitHandler= (award: IAward) => {
    setShowingForm(false);
    addAward(award);
  }
  return (
    <div>
    <div onClick={() => setShowingForm(true)} className="cursor-pointer hover:bg-forest transition-all duration-300 h-11 md:h-12 absolute top-55 md:top-52 px-2.5 md:px-4 font-bold  text-white text-3xl md:text-4xl bg-fern border-2 border-forest rounded-xl">+</div>
    {showingForm && <AwardForm submitHandler={SubmitHandler}/>}
    </div>
  )
}

export default AddAward