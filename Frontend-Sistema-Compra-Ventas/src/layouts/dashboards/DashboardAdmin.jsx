import { SideNav } from "../sidebar/SideNav";
import { Outlet } from "react-router-dom";
import './styleDashboard.css'

const DashboardAdmin = () => {
    return (
        <>
            <div className="dashboard-container">
                <SideNav />
                <div className="dashboard-content">
                    <Outlet />
                </div>
            </div>
        </>
    );
}

export default DashboardAdmin;