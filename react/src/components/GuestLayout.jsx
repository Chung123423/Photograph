import { Outlet,  Navigate} from "react-router-dom";
import { useStateContext } from "../context/ContextProvider";

export default function GuestLayout(){
    const {user, token} = useStateContext();

    if(token){
        return <Navigate to="/home" />
    }

    return (
        <div>
            <Outlet />
        </div>
    )
}