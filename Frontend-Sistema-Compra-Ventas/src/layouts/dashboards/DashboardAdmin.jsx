import { Outlet } from "react-router-dom";
import { SiderNav } from "../sidebar/SiderNav";
import './styleDashboard.css'

const DashboardAdmin = () => {
    return (
        <>
            <div className="dashboard-container">
                <div>
                    <h2>Panel de Administración</h2>
                </div>
                <SiderNav />
                <div className="dashboard-content">
                    <Outlet />
                </div>
            </div>
        </>
    );
}

export default DashboardAdmin;