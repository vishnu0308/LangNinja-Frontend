import { Grid } from "@mui/material";
import React from "react";
import Signup from "../../components/signup";
import Title from "../../shared/Title";
// import Signin from "../../components/signin";

export default function SignUp() {
    return (
        <div className="bg-white flex flex-col align-center items-center justify-center min-h-screen text-black">
            <Title title={"Sign Up"} />
            <Grid container className="flex flex-col align-center items-center justify-center">
                <Grid item xs={12} sm={8} md={6} lg={7}>
                    <Signup />
                </Grid>
            </Grid>
        </div>
    );
}
