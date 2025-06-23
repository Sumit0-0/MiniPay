
const BottomContent = () => {
  return (
    <div className="bg-white mt-7 rounded-lg py-8 flex justify-center items-center gap-20">
        <Box title={"Transactions History"} />
        <Box title={"Create Wallet"} />
        <Box title={"Check CIBIL Score"} />
    </div>
  )
}

interface PropTypes{
  title: String
}

function Box(props: PropTypes){
  return <div>
    <button className="text-4xl min-w-[20vw] h-[8vh] rounded-xl bg-blue-200 flex justify-center items-center hover:bg-blue-300 hover:translate-y-[-5px] px-3">{props.title}</button>
  </div>
}

export default BottomContent