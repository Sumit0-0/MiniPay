import BottomContent from "../components/DashboardUi/BottomContent"
import Footer from "../components/DashboardUi/Footer"
import DashboardMain from "../components/DashboardUi/MainContent"
import NavBar from "../components/NavBar"

const Dashboard = () => {
  return (
    <div className="bg-blue-100 w-full h-screen">
      <NavBar />
      <DashboardMain />
      <BottomContent />
      <Footer />
    </div>
  )
}

export default Dashboard