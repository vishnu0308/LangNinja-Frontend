import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function LoginSuccess() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const token = queryParams.get("token");
    const history = useNavigate(); // Declare the history variable
    console.log("token: ", token);
    useEffect(() => {
        console.log("in useffect");
        // Use localStorage to store the token
        localStorage.setItem('jwt',token);

        // Redirect to the '/admin' route
        history("/admin");
    }, [token, history]);

    return <></>;
}
