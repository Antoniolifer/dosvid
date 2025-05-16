import { IGoal } from "../../reducer/reducer"


function formatTime(date : Date): string {
    const mins = String(date.getMinutes());
    const formattedMins = mins.length === 1 ? '0' + mins : mins;
    const hours = String(date.getHours());
    const formattedHours = hours.length === 1 ? '0' + hours : hours;

    return `${formattedHours}:${formattedMins}`;
}
function HistoryEntry({entry} :{entry: IGoal}) {
  if(!entry.date_completed){
    return;
  }
  return (
    <div className="bg-gray-100 border-2 w-full text-lg text-thin border-gray-400 rounded-xl p-3 flex flex-col  gap-x-5 gap-y-1 shadow-md shadow-gray-900/25">
        <h1 className="font-bold">Title: {entry.title}</h1>
        <p>Description: {entry.description}</p>

        <span className="flex flex-col md:flex-row md:gap-6 justify-evenly">
            <p>Tag: {entry.tag}</p>
            <p>Rewarded: {entry.rewarded_exp}exp.</p>
            <p>Completed at: {formatTime(new Date(entry.date_completed))}</p>
        </span>

    </div>
  )
}

export default HistoryEntry