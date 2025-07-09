import TabHeader from "./TabHeader";

interface TabSelectionProps {
  selected: string;
  handleSelection: (title:string) => void;
}
function TabSelection({selected, handleSelection} : TabSelectionProps) {
  const tabTitles : string[] = ['Calendar (coming soon!)', 'History', 'Goals', 'Rewards', 'Statistics (coming soon!)'];
  
  return (
    <div className="mt-2 mb-1 md:my-5 flex w-9/10 mx-auto justify-center ">
      {tabTitles.map((title, index) => {
        let disabled : boolean = false;
        if(index === 0 || index === 4){
           disabled = true;
           return;
        }
        return( <TabHeader key={index} title = {title} selected={selected === title} handleSelection={handleSelection} disabled={disabled}/>)
      })}
    </div>
  )
}

export default TabSelection;