import React from "react";
import {Col, Row} from "react-bootstrap";
import {IconConf, IconDock, IconHome, IconUser} from "../../assets/icons/Icons";

export const Navbar = () => {
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
                        <div><IconHome color={"fff"}/></div>
                        <div><IconConf color={"fff"}/></div>
                        <div><IconUser width={40} height={40} color={"#fff"}/></div>
                    </div>
                </Col>
            </Row>
        </>
    )
}
