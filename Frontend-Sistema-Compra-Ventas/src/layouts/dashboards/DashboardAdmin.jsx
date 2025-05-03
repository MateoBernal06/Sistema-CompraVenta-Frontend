import { Outlet } from "react-router-dom";
import { SiderNav } from "../sidebar/SiderNav";
import './styleDashboard.css'

const DashboardAdmin = () => {
    return (
        <>
            <div className="dashboard-container">
                <SiderNav />
                <div className="dashboard-content">
                    <Outlet />
                </div>
            </div>
        </>
    );
}

export default DashboardAdmin;