

function RewardButton({children,color, handler, selected} : {children: string,color: string, handler: ()=> void, selected: boolean}) {

  const selectedStyle = `px-4 py-2 border-1 border-forest transition-all duration-300 rounded-lg bg-${color} font-bold ${color === 'lime' ? 'text-black' : 'text-white'}`;
  const defaultStyle = `cursor-pointer px-4 py-2 border-1 hover:bg-dark-paper transition-all duration-300 border-forest rounded-lg text-black font-bold`
  return (
    <button 
      type='button' 
      onClick ={handler} 
      className={selected ? selectedStyle : defaultStyle}>
      {children}
    </button>
  )
}

export default RewardButton