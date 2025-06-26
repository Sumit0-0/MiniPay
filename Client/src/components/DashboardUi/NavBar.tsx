import { useNavigate } from "react-router-dom"

const NavBar = () => {
  const navigate = useNavigate();

  return (
        <div className="border-b rounded-md border-gray-500 bg-white shadow-md h-[9vh] flex justify-between items-center">
        <div onClick={()=> navigate("/dashboard")} className="text-4xl hover:cursor-pointer font-bold ml-6 pb-2 pl-2 text-indigo-600 border-b border-black rounded-lg">
          Mini-Pay💸
        </div>
        <div className="mr-12 text-2xl font-semibold">
          Hello, User
        </div>
      </div>
  )
}

export default NavBar