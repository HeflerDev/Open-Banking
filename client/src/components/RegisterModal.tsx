import React, {useState} from "react"
import axios from "axios";
import "./index.scss"
import {Stack} from "react-bootstrap";

export const RegisterModal = ({history}: any) => {
    const [data, setData] = useState({
        username: '',
        email: "",
        password: "",
        passwordConf: ""
    })
    const [msg, setMsg] = useState("")

    // TODO: Type events
    const handleRegister = async (e: any) => {
        e.preventDefault()
        try {
            await axios.post("http://localhost:4000/users", {
                username: data.username,
                email: data.email,
                password: data.password,
                passwordConf: data.passwordConf
            })
            history.push("/")
        } catch (error: any) {
            if (error.response) {
                setMsg(error.response.data.msg)
            }
        }
    }

    const handleChange = ({target}: any) => {
        setData({...data, [target.name]: target.value})
    }

    return (
        <>
            <form onSubmit={handleRegister} className={"form-container"}>
                <Stack className={"form-block"}>
                    <label className={"label__register"} htmlFor="username">Username</label>
                    <input className={"input__register"} type="text" name={"username"} onChange={handleChange}/>
                </Stack>
                <Stack className={"form-block"}>
                    <label className={"label__register"} htmlFor="email">Email</label>
                    <input className={"input__register"} type="text" name={"email"} onChange={handleChange}/>
                </Stack>
                <Stack className={"form-block"}>
                    <label className={"label__register"} htmlFor="password">Password</label>
                    <input className={"input__register"} type="text" name={"password"} onChange={handleChange}/>
                </Stack>
                <Stack className={"form-block"}>
                    <label className={"label__register"} htmlFor="passwordConf">Password Confirmation</label>
                    <input className={"input__register"} type="text" name={"passwordConf"} onChange={handleChange}/>
                </Stack>
                <Stack className={"form-block"}>
                    <button type={"submit"} className={"btn__primary"}>Registrar</button>
                </Stack>
            </form>
        </>
    )
}