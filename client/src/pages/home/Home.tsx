import React from "react";
import "./Home.scss"
import {Col, Container, Row} from "react-bootstrap";
import {LoginModal, RegisterModal} from "../../components";

const Home = ({type = "login"}: { type?: string }) => {
    return (
        <>
            <div className={"header-container"}>
                <Container>
                    <Row>
                        <Col sm={12}>
                            {
                                type === "login" && (
                                    <LoginModal/>
                                )
                            }
                            {
                                type === "register" && (
                                    <RegisterModal/>
                                )
                            }
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Home;