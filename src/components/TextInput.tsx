import { useEffect, useRef } from "react";


type TextInputProps = {
  value : string; 
  handler: (newState: string) => void;
  placeholder: string;
  required? : boolean;
  focus?: boolean;
}

function TextInput({value, handler, placeholder, required = false, focus = false} : TextInputProps) {
  const ref = useRef<HTMLInputElement>(null);

  useEffect( () => {
    if((ref) && focus){
      ref.current?.focus();
    }
  },[focus])
  return (
    <input ref={ref} className='w-full bg-white border-2 border-forest 
    focus:outline-none focus:ring-0 focus:border-fern 
    focus:shadow-xl focus:shadow-fern/50
    rounded-md px-2 py-2 text-xl' type="text" required ={required} placeholder={placeholder} value={value} onChange={(event) => {handler(event.target.value)}} />

  )
}

export default TextInput