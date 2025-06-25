import { useEffect, useState } from "react"
import SearchIcon from "../icons/SearchIcon"
import { useNavigate } from "react-router-dom";

type UserType = {
  number: string;
};

const DashboardMain = () => {
  const navigate = useNavigate();
  const [input,setInput] = useState("");
  const [debounce,setDebounce] = useState("");
  const [data1,setData1] = useState<{ data?: [] } | null>(null);
  const [balance,setBalance] = useState("0");

  const token = localStorage.getItem("token");

  useEffect(()=>{

    async function bal(){
      try{
           if(!token){
            alert("Please log in first");
            navigate("/"); 
            return;
          }
        const data =await fetch("http://localhost:3000/api/v1/balance",{
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "token": token
          }
        })
      const result =await data.json();
      if (data.ok) {
      setBalance(result.bal);
      }
      }catch(e){
        console.log("something wrong")
      }
    }

    bal();
  },[])

  //Debouncing Logic
  useEffect(()=>{
    const timer = setTimeout(()=>{
        setDebounce(input)
    },300);

    return () => clearTimeout(timer)
  },[input])

  useEffect(()=>{
    
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/v1/user", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ Phnum: debounce }) 
        });

        const result = await res.json();

        setData1(result); 
        console.log("Result:", result);
      } catch (err) {
        console.error("API Error:", err);
      }
    };

    if (debounce) fetchData();
  },[debounce])

  return (
    <div className="bg-white mt-6 pl-7 rounded-lg h-[60vh]">
      <div className="text-[27px] font-semibold pt-5 mb-7">
        <span className="font-bold">Your Balance</span> ₹{balance}
      </div>
      <div className="font-bold text-[25px] flex">
        Find Users <span className="pl-1 pt-1">
          <SearchIcon />
        </span>
      </div>
      <div>
        <input className="mt-3 border border-gray-500 px-3 py-1 text-2xl rounded-md w-[96vw] hover:outline-none hover:bg-gray-100 focus:outline-none"
        type="text" placeholder="Search Users..." 
        onChange={ (e)=> setInput(e.target.value)} value={input}/>
      </div>
      <div className="w-full h-10 mt-5 mr-12 h-[32vh] overflow-auto flex flex-col gap-2">
       {Array.isArray(data1?.data) && data1.data.length > 0 ? (
          (data1.data as UserType[]).map((ele, idx) => (
            <div key={idx} className="flex justify-between items-center ml-1">
              <div className="font-bold text-lg pl-6">{ele.number}</div>
              <div className="bg-green-400 text-xl hover:bg-green-500 font-semibold px-2 py-1 rounded-lg mr-16">
                Send Money
              </div>
            </div>
          ))
       ) : "" }
      </div>
    </div>
  )
}

export default DashboardMain