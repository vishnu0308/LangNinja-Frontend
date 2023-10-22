import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { noAuth } from "../apis";
import routes from "../shared/routes";
// import "./styles.css";

const Signup = () => {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [password, setPasword] = useState("");
    const [email, setEmail] = useState("");
    const isPasswordValid = true;
    const handleClick = () => {
        window.open(`http://localhost:4445/auth/google`, "_self");
    };
    const PostData = () => {
        if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
            toast.error("Invalid Email", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            return
        }
        const url = routes.signup;
        const data = {
            name,
            password,
            email,
        };
        noAuth({ method: "post", url: url, data: data })
            .then(data => {
                console.log(data.success);
                if (data.success) {
                    toast.success("Sign-up successful!", {
                        position: "top-right",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                    // const token = data.data.token;
                    // localStorage.setItem({ token });
                    navigate("/signin");
                } 
            })
            .catch(err => {
                console.log(err);
            });
    };

    return (
        <Box className="flex flex-col justify-center items-center text-center ">
            <Box className="flex flex-col space-y-6 flex-wrap align-center h-auto items-center">
                <Typography variant="h2" className="heading2">
                    LangNinja
                </Typography>
                <TextField
                    type="text"
                    label="Name"
                    id="Name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    style={{ backgroundColor: "white" }}
                />
                <TextField
                    type="text"
                    label="Email"
                    id="Email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <TextField
                    type="password"
                    label="Password"
                    id="Password"
                    value={password}
                    onChange={e => setPasword(e.target.value)}
                    helperText={isPasswordValid ? "" : "choose a strong password"}
                />
            </Box>
            <Box className="my-3" color="primary">
                <Button
                    variant="contained"
                    className="px-10 py-5 m-8"
                    onClick={() => PostData()}
                    color="primary"
                >
                    signup
                </Button>
            </Box>
            <Typography variant="h6" gutterBottom className="text-rose-600 underline">
                <Link className="" to="/signin">
                    Already have an account ?
                </Link>
            </Typography>
            <Button variant="contained" className={`m-8 p-5`} onClick={handleClick} color="primary">
                Sign up with Google
            </Button>
            {/* <p className="self-center m-5"><GoogleLogin onSuccess={responseMessage} onError={errorMessage} /></p> */}
        </Box>
    );
};

export default Signup;
