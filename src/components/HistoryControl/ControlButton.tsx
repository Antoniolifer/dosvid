
interface ControlButtonProps{
    children: React.ReactNode;
    clickHandler: () => void;
    disabled?: boolean

}
function ControlButton({children, clickHandler, disabled = false} : ControlButtonProps) {
  return (
    <button 
    className='h-10 border-2 grow-1 text-forest text-xl 
    bg-white border-forest rounded-xl w-20 
    flex justify-center items-center
    hover:bg-forest hover:text-white
    transition-all duration-400 cursor-pointer
    disabled:cursor-default
    disabled:bg-gray-100 disabled:text-gray-300 disabled:border-gray-400'
    disabled={disabled}
    onClick={clickHandler} >
        {children}
    </button>
  )
}

export default ControlButton