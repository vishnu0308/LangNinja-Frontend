import React from "react";
import VerifyEmail from "../../components/verifyemail";
import Title from "../../shared/Title";

export default function VerifyUserEmail() {
    return (
        <>
            <Title title={"email verification"} />
            <VerifyEmail />
        </>
    );
}
