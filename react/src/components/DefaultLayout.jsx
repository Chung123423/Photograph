import { Outlet, Navigate} from "react-router-dom";
import { useStateContext } from "../context/ContextProvider";
import NavigationBar from "./Navigation/Navigation";
import { Container, Stack } from "@mui/material";

export default function DefaultLayout(){
    const {user, token} = useStateContext();

    if(!token){
        return <Navigate to="/login" />
    }

    return(
        <div>
            <NavigationBar />
            <Outlet />
            <br/>
        </div>
    )
}