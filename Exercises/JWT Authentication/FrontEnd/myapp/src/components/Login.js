import { useState } from "react";
import axios from "../api/axios";

function Login({collectorFunc}){

    const [email,setEmail] = useState();
    const [password,setPassword] = useState();

    const login = ()=>{

        axios.post('/api/login',{
            email,
            password
        })
        .then(response=>{
            console.log(response);
            localStorage.setItem("login",JSON.stringify({
                login:true,
                token:response.data.token
            }));
            collectorFunc();
        })
        .catch(error=>{
            console.log(error);
        });

    };

    return(
        <div className="loginForm">
            <div className="title">
                <h1>Login</h1>
            </div>
            <div className="login">
                <div className="inputarea">
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" onChange={(e)=>{setEmail(e.target.value)}}/>
                </div>
                <div className="inputarea">
                    <label htmlFor="password">Password</label>
                    <input type="text" name="password" onChange={(e)=>{setPassword(e.target.value)}}/>
                </div>
                <button className="btnLogin" onClick={login}>Login</button>
            </div>
            
        </div>
    );
}

export default Login;