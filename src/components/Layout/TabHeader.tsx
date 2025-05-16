interface TabHeaderProps {
    title: string;
    selected: boolean;
    handleSelection: (title:string) => void;
    disabled: boolean;
}

function TabHeader({title, selected, handleSelection, disabled} : TabHeaderProps) {
  const className = selected ? "bg-forest text-white" : 'bg-transparent underline text-gray-800 hover:border-forest'
  return (
    <button className={'transition-all duration-400 ease-out cursor-pointer border-2 border-paper  text-xl font-bold mx-2 md:mx-5 px-2 md:px-4 py-2 rounded-xl disabled:cursor-default disabled:text-gray-500 disabled:no-underline disabled:text-lg disabled:font-normal disabled:border-gray-400 disabled:border-1 ' + className} value ={title} onClick={() => handleSelection(title)} disabled={disabled}>{title}</button>
  )
}

export default TabHeader