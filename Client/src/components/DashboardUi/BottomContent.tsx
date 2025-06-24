interface PropTypes1 {
  toggle: boolean,
  setToggle: (via: boolean) => void
}

const BottomContent = (props: PropTypes1) => {
  return (
    <div className="bg-white mt-7 rounded-lg py-8 flex justify-center items-center gap-20">
        <Box title={"Transactions History"} />
       <button onClick={ ()=> props.setToggle(!props.toggle) }> 
        <Box title={"Create Wallet"} />
       </button>
        <Box title={"Sign Out"} />
    </div>
  )
}

interface PropTypes2 {
  title: String,
}

function Box(props: PropTypes2){
  return <div>
    <div className="text-4xl min-w-[20vw] h-[8vh] rounded-xl bg-blue-200 flex hover: cursor-pointer
    justify-center items-center hover:bg-blue-300 hover:translate-y-[-5px] px-3">{props.title}</div>
  </div>
}

export default BottomContent