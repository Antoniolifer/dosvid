

function AddGoalButton({handleClick} : {handleClick: () => void}) {
  return (
    <div className="mx-auto mt-6 text-center w-8/10">
        <button className="border-double border-3 
            bg-fern border-forest rounded-lg 
            py-6 px-10 text-xl text-white font-bold
            hover:bg-forest hover:text-white hover:border-black hover:border-solid
            transition-all duration-400 ease-in-out
            cursor-pointer"
            onClick ={() => handleClick()}
            >Add a new goal</button>
    </div>
  )
}

export default AddGoalButton