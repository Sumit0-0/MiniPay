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
  const [paymentToggle,setPaymentToggle] = useState(false);
  const [currNumber,setCurrNumber] = useState("");

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
    },50);

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
              <PaymentUi setPaymentToggle={setPaymentToggle} setCurrNumber={setCurrNumber}
              number={ele.number}/>
            </div>
          ))
       ) : "" }
      </div>
      <div>
        {paymentToggle === true ? <Modal setPaymentToggle={setPaymentToggle} currNumber={currNumber} setBalance={setBalance} balance={balance}/> : ""}
      </div>
    </div>
  )
}

interface PropsTypes{
  setPaymentToggle: (val: boolean) => void,
  setCurrNumber: (val: string)=> void,
  number: string
}

function PaymentUi(props: PropsTypes){
  function handle(){
    props.setPaymentToggle(true);
    props.setCurrNumber(props.number)
  }
  return <div>
    <div onClick={ handle } className="bg-green-400 text-xl hover:bg-green-500 hover:cursor-pointer font-semibold px-2 py-1 rounded-lg mr-16">
      Send Money
    </div>
  </div>
}

interface ModalProps{
  currNumber: String,
  setPaymentToggle: (val: boolean)=> void,
  setBalance: (val: string)=> void,
  balance: string
}

function Modal(props: ModalProps){
  const navigate = useNavigate();
  const [amo,setAmo] = useState("");


  async function send(){
    //security check for balance
    if(Number(props.balance) < Number(amo)){
      alert("Low Balance");
      props.setPaymentToggle(false);
      navigate("/dashboard");
      return;
    }

     const token = localStorage.getItem("token");
      if(!token){
        alert("Your Session is Expired");
        navigate("/");
        return;
      }

    const data = await fetch("http://localhost:3000/api/v1/payment",{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "token": token
      },
      body: JSON.stringify({
        senderPh: props.currNumber,
        amount: amo
      })
    })

    if(data.ok){
      alert("Payment Successfull");
      const data =await fetch("http://localhost:3000/api/v1/balance",{
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "token": token
          }
        })
        const result =await data.json();
        if (data.ok) {
        props.setBalance(result.bal);
        }

        props.setPaymentToggle(false);
        navigate("/dashboard");
    }
    else{
      alert("Internet Issue");
      props.setPaymentToggle(false);
      navigate("/dashboard");
    }
  }

  return <div className="bg-black fixed inset-0 z-10 bg-opacity-50 backdrop-blur-sm absolute w-full h-screen flex justify-center items-center">
      <div className="bg-gray-200 h-[35vh] w-[25vw] rounded-md felx flex-col z-20">
        <div className="flex items-center justify-center mt-5">
          <span className="bg-green-500 px-5 py-3 rounded-full text-2xl font-bold">₹</span>
        </div>
        <div className="ml-5 flex flex-col gap-2 mt-7">
          <label className="text-2xl font-semibold"
         >Enter amount to send</label>
          <input type="text" placeholder="500" maxLength={7} minLength={1} required 
          className="w-[22vw] rounded-md p-2 text-xl hover:outline-none bg-gray-200 focus:outline-none hover:bg-gray-300 border border-black" 
           onChange={(e: any)=> setAmo(e.target.value) } value={amo}/>
        </div>
        <div className="flex justify-center items-center gap-4">
          <button className="mt-10 text-2xl font-semibold bg-green-400 px-4 py-1 rounded-md hover:bg-green-500"
          onClick={send}>Send</button>
          <button className="mt-10 text-2xl font-semibold bg-green-400 px-4 py-1 rounded-md hover:bg-green-500"
          onClick={()=> props.setPaymentToggle(false)}>Close</button>
        </div>
      </div>
  </div>
}

export default DashboardMain