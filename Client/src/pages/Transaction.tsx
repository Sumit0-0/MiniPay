import { useEffect, useState } from "react"
import Footer from "../components/DashboardUi/Footer"
import NavBar from "../components/DashboardUi/NavBar"
import { useNavigate } from "react-router-dom";

type TransactionType = {
  amount: string;
  senderPh: string;
};

export const Transaction = () => {
  const [data, setData] = useState<TransactionType[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  useEffect(() => {
  if (!token) {
    alert("Session Time Out");
    navigate("/");
    return;
  }

  const getData = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/v1/transaction", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "token": token,
        },
      });

      const result = await res.json();
      setData(result?.data || []);
    } catch (err) {
      console.error("Failed to fetch transactions:", err);
    } finally {
      setLoading(false);
    }
  };

  getData();
}, []);

    console.log(JSON.stringify(data));
    return (
  <div>
    <NavBar />
    
    {loading ? (
      <div className="flex justify-center items-center h-[60vh] text-3xl font-semibold">
        Loading...
      </div>
    ) : (
      <div className="flex flex-col gap-3 mt-3 mb-3 overflow-auto ml-7">
        {data.length > 0 ? (
          data.map((ele, idx) => (
            <div key={idx} className="bg-blue-100 rounded-lg w-[95vw] h-[7vh] flex justify-between items-center pl-6 pr-6" >
              <div className="text-2xl font-semibold">Payment of {ele.amount}</div>
              <div className="text-2xl font-semibold"> Send to {ele.senderPh}</div>
            </div>
          ))
        ) : (
          <p className="text-center text-xl">No Transactions Found</p>
        )}
      </div>
    )}

    <Footer />
  </div>
);
}

export default Transaction
