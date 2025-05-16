

function DecorativeLine({widthPercent} : {widthPercent: number}) {
  return (
    <div style={{width: `${widthPercent}%`}}className={`h-0.5 my-2 mx-auto rounded-xl bg-gray-500`}></div>
  )
}

export default DecorativeLine