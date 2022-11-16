import React, {useState, useEffect} from "react";
import axios from "axios"
import {Col, Row, Stack} from "react-bootstrap";
import "./index.scss"
import {useNavigate} from "react-router-dom";

export const LoginModal = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState("");

    const HandleAuth = async (e: any) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:4000/login", {
                email,
                password
            })
            navigate("/dashboard")
        } catch (error: any) {
            if (error.response) {
                setMsg(error.response.data.msg)
            }
        }
    }

    const handleLink = () => {
        navigate("/register")
    }
    // TODO: Type events
    return (
        <>
            <form onSubmit={HandleAuth} className={"form-container"}>
                <Stack className={"form-block description"}>
                    <div>
                        Faça login na nossa plataforma ou <span onClick={handleLink}>registre-se</span>.
                    </div>
                </Stack>
                {
                    msg && (
                        <Stack className={"form-block description__error"}>
                            {msg}
                        </Stack>
                    )
                }
                <Stack className={"form-block"}>
                    <label htmlFor="email" className={"label__login"}>Email</label>
                    <input type={"text"} className={"input__login"}
                           onChange={(e: any) => setEmail(e.target.value)}/>
                </Stack>
                <Stack className={"form-block"}>
                    <label htmlFor={"password"} className={"label__login"}>Password</label>
                    <input type={"password"} className={"input__login"}
                           onChange={(e: any) => setPassword(e.target.value)}/>
                </Stack>
                <Stack className={"form-block"}>
                    <button className="btn__primary" type={"submit"}>Login</button>
                </Stack>
            </form>
        </>
    )
}