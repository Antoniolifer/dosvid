import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import ControlButton from "./ControlButton";

function formatDate(date : Date) : string{
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  const weekday = days[date.getDay()];

  return `${weekday} ${day} of ${month}, ${year}`;
}

interface HistoryDateDisplayProps {
    handleBackwardClick : () => void;
    handleForwardClick : () => void;
    isLast: boolean;
    isFirst: boolean;
    date: Date;
}

function HistoryDateDisplay({handleBackwardClick, handleForwardClick, date, isLast, isFirst} : HistoryDateDisplayProps) {
  return (
    <div className="flex mx-auto justify-evenly gap-4 my-4 items-center bg-lime text-black w-9/10 md:w-1/2 py-2 px-4 rounded-xl">
        <ControlButton clickHandler={handleBackwardClick} disabled={isFirst}><FaArrowLeft/></ControlButton>

        <h1 className="w-70 px-2 font-bold border-x-white border-x-2 text-center text-xl align-middle">{formatDate(new Date(date))}</h1>

        <ControlButton clickHandler={handleForwardClick} disabled={isLast}><FaArrowRight/></ControlButton>


    </div>
  )
}

export default HistoryDateDisplay