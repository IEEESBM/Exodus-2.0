import { useState } from "react";
import Stars from "./home/stars";
import Nav from "../componenets/Nav";
import axios from "axios";
import { Redirect, useParams } from "react-router";

const Verify = (props)=>{
    const {token} = useParams();
    const onVerify = ()=>{
        axios.get("http://localhost:4000/api/auth/verify-email",{
            headers : {
                'x-access-token':token
            }
        })
        .then(()=>{
            console.log('Verified');
            props.history.push("/")
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    return(
    <>
    <Nav/>
        <div className="container fluid">
            <button className="noselect button-verify" onClick={onVerify}>Verify</button>
            {/* <Stars/> */}
        </div>
        </>
    )
}

export default Verify;