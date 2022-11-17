import React from 'react'
import {Col, Row, Stack} from "react-bootstrap";

interface Payload {
    OrganisationId: string
    Status: string
    OrganisationName: string
    LegalEntityName: string
    CountryOfRegistration: string
    AddressLine1: string
    City: string
    Postcode: string
    Country: string
}

export const Result = ({payload}: { payload: Payload }) => {
    return (
        <Row>
            <Col xs={12} className={"column"}>
                <Stack className={"ident-block"}>
                    <div className={"ident"}>
                        {payload.OrganisationId}
                    </div>
                </Stack>
            </Col>
            <Col xs={12} className={"column"}>
                <Stack className="name-block">
                    <div>
                        <div className="label">Organisation Name:</div>
                        {payload.OrganisationName}
                    </div>
                    <div>
                        <div className="label">Entity Name:</div>
                        {payload.LegalEntityName}
                    </div>
                </Stack>
            </Col>
            <Col xs={12} md={12} className={"column register-block"}>
                <div className="country">
                    {payload.CountryOfRegistration}
                </div>
                <div className="address">
                    {payload.AddressLine1}
                </div>
                <div className="city">
                    {payload.City}
                </div>
                <div className="postcode">
                    {payload.Postcode}
                </div>
            </Col>
        </Row>
    )
}