import React from "react";
import {Col, Row} from "react-bootstrap";
import {IconConf, IconDock, IconHome, IconLogout, IconUser} from "../assets/icons/Icons";
import axios from "axios";
import {useNavigate} from "react-router-dom";
// TODO: Create the logout button

export const Navbar = () => {
    const navigate = useNavigate()
    const handleLogout = async (e: any) => {
        try {
            await axios.delete("http://localhost:4000/logout");
            navigate("/")
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            <Row className="nav-container">
                <Col className="logo-block">
                    <IconDock width={40} height={40} color={"#fff"}/>
                    <div className="text">Open Bank</div>
                </Col>
                <Col className="user-block">
                    <div className="buttons">
                        <button className={"btn__secondary"}>Lorem</button>
                        <button className={"btn__secondary"}>Ipsum</button>
                    </div>
                    <div className="icons">
                        <div onClick={handleLogout}><IconLogout color={"fff"}/></div>
                        <div><IconHome color={"fff"}/></div>
                        <div><IconConf color={"fff"}/></div>
                        <div><IconUser width={40} height={40} color={"#fff"}/></div>
                    </div>
                </Col>
            </Row>
        </>
    )
}
