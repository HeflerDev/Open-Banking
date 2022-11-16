import React, {useState} from "react"
import axios from "axios";
import {Col, Row} from "react-bootstrap";

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
            <form onSubmit={handleRegister}>
                <Row>
                    <Col xs={12}>
                        <label htmlFor="username">Username</label>
                        <input type="text" name={"username"} onChange={handleChange}/>
                    </Col>
                    <Col xs={12}>
                        <label htmlFor="email">Email</label>
                        <input type="text" name={"email"} onChange={handleChange}/>
                    </Col>
                    <Col>
                        <label htmlFor="password">Password</label>
                        <input type="text" name={"password"} onChange={handleChange}/>
                    </Col>
                    <Col>
                        <label htmlFor="passwordConf">Password Confirmation</label>
                        <input type="text" name={"passwordConf"} onChange={handleChange}/>
                    </Col>
                </Row>
            </form>
        </>
    )
}