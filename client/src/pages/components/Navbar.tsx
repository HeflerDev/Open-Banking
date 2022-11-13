import React from "react";
import {Col, Row} from "react-bootstrap";

export const Navbar = () => {
    return (
        <>
            <Row className="nav-container">
                <Col className="logo-block"></Col>
                <Col className="user-block">
                    <div className="user">User Logo</div>
                    <div className="buttons">
                        <button "btn__primary"></button>
                        <button "btn__primary"></button>
                    </div>
                    <div className="icons">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </Col>
            </Row>
        </>
    )
}