
import TabSelection from "../components/Layout/TabSelection";
import Main from "../components/Layout/Main";

import { useState } from "react";
import LevelBar from "../components/Layout/LevelBar";

import { ToastContainer } from 'react-toastify';

function HomePage() {
    const [selected, setSelected] = useState('Goals');

    const handleSelection = (title:string) => {
      setSelected(title);
    }
  return (
    <div className="grow-1  w-full md:w-4/5 md:mx-auto my-1 flex flex-col">
          <ToastContainer autoClose={3000}
            />
        <LevelBar /> 
        <TabSelection handleSelection ={handleSelection} selected={selected}/> 
        <Main selectedView={selected}/>
    </div>
  )
}

export default HomePage