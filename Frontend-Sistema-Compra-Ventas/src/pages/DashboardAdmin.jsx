import { SideNav } from "../layouts/sidebar/SideNav";
import { Outlet } from "react-router-dom";

const DashboardAdmin = () => {
    return (
        <>
            <SideNav />
            <Outlet />
        </>
    );
}

export default DashboardAdmin;