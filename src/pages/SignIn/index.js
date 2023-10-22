import { Grid } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Signin from "../../components/signin";
import Title from "../../shared/Title";

export default function SignIn() {
    return (
        <div className="flex flex-col items-center h-screen align-middle justify-center">
            <Title title={"Sign In"} />
            <Grid container className="flex flex-col align-center items-center justify-center">
                <Grid item xs={12} sm={8} md={6} lg={7}>
                    <div className="flex justify-center flex-col align-center items-center">
                        <Signin />
                        <Link to="/resetpassword" className="text-red-600 underline text-lg">
                            Reset Password
                        </Link>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}
