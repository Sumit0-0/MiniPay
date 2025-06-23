import SearchIcon from "../icons/SearchIcon"

const DashboardMain = () => {
  return (
    <div className="bg-white mt-6 pl-7 rounded-lg">
      <div className="text-[27px] font-semibold pt-5 mb-7">
        <span className="font-bold">Your Balance</span> ₹5000
      </div>
      <div className="font-bold text-[25px] flex">
        Find Users <span className="pl-1 pt-1">
          <SearchIcon />
        </span>
      </div>
      <div>
        <input className="mt-2 border border-gray-500 px-3 py-1 text-2xl rounded-md w-[96vw] hover:outline-none hover:bg-gray-100 focus:outline-none"
        type="text" placeholder="Search Users..." />
      </div>
      <div className="mt-7 pb-52">
        <div className="mb-2">User1</div>
        <div>User2</div>
      </div>
    </div>
  )
}

export default DashboardMain