import { useState } from "react"
import { useNavigate } from "react-router-dom"

interface PropTypes {
  toggle: boolean,
  setToggle: (val: boolean) => void
}

const Wallet = (props: PropTypes) => {
  const navigate = useNavigate();
  const [num, setNum] = useState<string>('');
  const [amount, setAmount] = useState<string>('');

  async function walletCreate() {
    let sendData = {
      Phnum: num,
      amount: amount
    }

    try{
      const token = localStorage.getItem("token");
      if(!token){
        alert("Please log in first");
        navigate("/"); 
        return;
      }

      const res = await fetch(`http://localhost:3000/api/v1/wallet`,{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "token": token
      },
      body: JSON.stringify(sendData)
    })
    
    if(res.ok){
      alert("Wallet Created Successfully");
    }else{
      console.log("error",res.json());
      alert("Already have an account with this number or Wrong number")
    }
    props.setToggle(false);

    }catch(e){
      console.log("Error while sending data")
    }
  }

  return (
    <div>
      <div className="bg-black absolute inset-0 bg-opacity-50 backdrop-blur-sm flex justify-center items-center">
        <div className="border rounded-lg shadow-md bg-white max-w-[25vw] relative z-10">
          <div className="text-3xl font-semibold border-b-2 border-zinc-400 rounded-lg py-3 px-5">
            Enter your information
          </div>
          <div className="py-2 px-5 mt-3">
            <label className="block text-xl font-semibold mb-2">Phone Number</label>
            <input className="border-none focus:outline-none bg-slate-200 text-xl px-3 py-1
            w-[22vw] rounded-md"
            type="text" placeholder="91xxxxxxxx" maxLength={10} required
            onChange={ (e) => {
                const value = e.target.value;
                if (/^\d{0,10}$/.test(value)) {
                  setNum(value);
                }
              } } value={num}></input>
          </div>
          <div className="py-2 px-5 mb-5">
            <label className="block text-xl font-semibold mb-2">Amount</label>
            <input className="border-none focus:outline-none bg-slate-200 text-xl px-3 py-1
            w-[22vw] rounded-md"
            type="text" placeholder="5000" maxLength={7} required 
            onChange={ (e) => setAmount(e.target.value) } value={amount}/>
          </div>
          <div className="py-2 px-5 mb-5 flex justify-center items-center">
            <button className="bg-blue-200 px-4 py-2 rounded-md text-2xl font-semibold hover:bg-blue-300"
            onClick={ walletCreate }>Create</button>
            <button className="bg-blue-200 px-4 py-2 rounded-md text-2xl font-semibold hover:bg-blue-300 ml-4"
            onClick={ ()=> props.setToggle(!props.toggle)}>Close</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Wallet