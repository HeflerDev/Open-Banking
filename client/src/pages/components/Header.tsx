import React from "react";
import {Col, Container, Row} from "react-bootstrap";

export const Header = () => {
    return (
        <div className={"header-container"}>
            <Container>
                <Row>
                    <Col sm={12}>
                        <div className="header-text">
                            <h3 className="subtitle">
                                Lorem Ipsum
                            </h3>
                            <p className="description">
                                Lorem ipsum dolor sit amet nunquam
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}