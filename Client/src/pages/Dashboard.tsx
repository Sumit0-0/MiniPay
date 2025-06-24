import BottomContent from "../components/DashboardUi/BottomContent"
import Footer from "../components/DashboardUi/Footer"
import DashboardMain from "../components/DashboardUi/MainContent"
import NavBar from "../components/DashboardUi/NavBar"
import { useState } from "react"
import Wallet from "./Wallet"

const Dashboard = () => {
  const [walletToggle,setWalletToggle] = useState(false);
  return (
    <div className="bg-blue-100 w-full h-screen">
        <NavBar />
        <DashboardMain />
        <BottomContent toggle={walletToggle} setToggle={setWalletToggle}/>
        <Footer />
        {walletToggle == true ? <Wallet toggle={walletToggle} setToggle={setWalletToggle}/> : ""}
    </div>
  )
}

export default Dashboard