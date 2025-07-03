import { Navigate, Outlet } from "react-router";

const ProtectRoute = (props)=>{
    const token = props.auth.token;
    return token ? <div className="container"><Outlet/></div> : <Navigate to="/login"/>
}
export default ProtectRoute;