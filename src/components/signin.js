import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { noAuth } from "../apis";
import routes from "../shared/routes";

const Signin = () => {
    const navigate = useNavigate();
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const handleClick = () => {
        const url = "auth/google";
        window.open(`${process.env.REACT_APP_API_URL}${url}`, "_self");
    };
    const PostData = () => {
        const url = routes.signin;
        const data = {
            password,
            email,
        };
        noAuth({ method: "post", url: url, data: data })
            .then(data => {
                console.log("data :", data.data.token);
                if (data.error) {
                    console.log(data.error);
                } else {
                    console.log(data.data.token, "  data.dat.fasdf ");
                    const d = data.data.token;
                    localStorage.setItem('jwt',d);
                    navigate("/admin");
                    toast.success("Login successful!", {
                        position: "top-right",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                }
            })
            .catch(error => {
                toast.error(error, {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            });
    };
    return (
        <Box className="flex flex-col justify-center text-center p-2 space-y-8">
            <Box className="flex flex-col space-y-6 flex-wrap items-center">
                <Typography variant="h4" className="font-semibold text-3xl p-10" fontWeight="bold">
                    Log in to your LangNinja
                </Typography>
                <TextField
                    type="text"
                    label="Email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <TextField
                    type="password"
                    label="Password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
            </Box>
            <Button
                className="px-10 py-5 m-8 bg-rose-400 w-fit self-center"
                onClick={() => PostData()}
                variant="contained"
            >
                Login
            </Button>
            <Typography variant="h6" className="text-red-600 underline" gutterBottom>
                <Link to="/signup">Don&apos;t have an account?</Link>
            </Typography>
            <Button
                className="bg-white m-5 w-fit p-5 self-center"
                onClick={handleClick}
                variant="contained"
            >
                <span>Sign in with Google</span>
            </Button>
        </Box>
    );
};

export default Signin;
