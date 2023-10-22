import { Box } from "@mui/material";
import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { auth } from "../apis";

const VerifyEmail = () => {
    console.log("verify email");
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const token = queryParams.get("verificationtoken");
    console.log("Verification query param : ",token);
    const navigate = useNavigate();
    const url = `auth/verify-mail/${token}`;
    useEffect(() => {
        auth({ method: "post", url })
            .then(data => {
                toast.success("Email verified successfully!", {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                const token = data.data.token;
                console.log("Verify email : token : ",token);
                localStorage.setItem('jwt',token);
                navigate("/admin");
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    }, [token]);

    return (
        <Box>
            <h2>Verification successful</h2>
        </Box>
    );
};

export default VerifyEmail;
