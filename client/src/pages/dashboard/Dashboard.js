import DashboardCenter from "./Dashboard-center";
import DashboardLeft from "./Dashboard-left";
import DashboardRight from "./Dashboard-right";
import './Dashboard.css'

function Dashboard() {
  return (
    <>
      <div className='dashboard-container'>
        <DashboardLeft></DashboardLeft>
        <DashboardCenter></DashboardCenter>
      </div>
    </>
  );
}

export default Dashboard;