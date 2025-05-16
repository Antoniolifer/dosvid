import { useEffect, useRef, useState } from "react"
import { IAward } from "../../reducer/reducer";
import { nanoid } from "nanoid";


function AwardForm({submitHandler} : {submitHandler: (award : IAward) => void}) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const ref = useRef<HTMLInputElement>(null);
    const formHandler = (event :React.FormEvent<HTMLFormElement>) => {
        event?.preventDefault();
        const reward : IAward= {id: nanoid(8), title, description,claimed: false, locked: true}
        submitHandler(reward);
    }
    useEffect(() => {
      ref.current?.focus();
    },[])
  return (
    <form onSubmit={(e) => formHandler(e)} className="ml-16 my-4 h-29 w-3/5 mx-auto border-3 border-forest px-3 pt-3 pb-12 rounded-xl flex flex-col items-center justify-between gap-1">
      <input ref={ref}value={title} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value) }placeholder='title...' required className='text-xl w-full p-1 bg-white rounded-md'/>
      <input value={description} onChange={(e : React.ChangeEvent<HTMLInputElement>) => setDescription(e.target.value) }placeholder='description...' required className='text-lg font-thin w-full p-1 rounded-md bg-white'/>
      <button type="submit" className="p-2 bg-fern border-2 border-forest text-white font-bold rounded-xl text-md">add reward</button>
    </form>
  )
}

export default AwardForm