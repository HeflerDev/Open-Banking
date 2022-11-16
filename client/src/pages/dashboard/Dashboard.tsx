import React, {useState, useEffect} from "react";
import axios, {AxiosRequestConfig, AxiosResponse} from "axios";
import jwt_decode from "jwt-decode"
import {useNavigate} from "react-router-dom";
import {Col, Row, Stack} from "react-bootstrap";
import {IconSrch, IconUser} from "../../assets/icons/Icons";

const Dashboard = () => {
    const navigate = useNavigate()
    const [name, setName] = useState("")
    const [token, setToken] = useState("")
    const [expire, setExpire] = useState(1)
    const [users, setUsers] = useState([])
    const [query, setQuery] = useState("")

    useEffect(() => {
        refreshToken()
    }, [])

    const refreshToken = async () => {
        try {
            const response = await axios.get("http://localhost:4000/token", {withCredentials: true});
            setToken(response.data.accessToken);
            const decoded: any = jwt_decode(response.data.accessToken)
            setName(decoded.name)
            setExpire(decoded.exp)
        } catch (error: any) {
            if (error.response) {
                navigate("/")
            }
        }
    }

    const axiosJWT = axios.create()

    axiosJWT.interceptors.request.use(async (config: AxiosRequestConfig) => {
        const currentDate = new Date();
        if (expire * 1000 < currentDate.getTime()) {
            const response = await axios.get('http://localhost:4000/token');
            if (config.headers) config.headers.Authorization = `Bearer ${response.data.accessToken}`;
            setToken(response.data.accessToken);
            const decoded = jwt_decode(response.data.accessToken);
            // TODO: Remove console.log
            console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>", decoded)
            // setName(decoded.name);
            // setExpire(decoded.exp);
        }
        return config
    }, (error) => Promise.reject(error))

    const getUsers = async () => {
        const response = await axiosJWT.get("http://localhost:4000/users", {
            headers: {Authorization: `Bearer ${token}`}
        })
        setUsers(response.data)
    }

    return (
        <Row className={"dashboard-container"}>
            <Col xs={12} md={4}>
                <Stack className={"sidebar-block"}>
                    <div className="user-block">
                        <IconUser width={40} height={40}/>
                        <div className="name"></div>
                    </div>
                    <button className="btn__primary"></button>
                    <button className="btn__primary"></button>
                    <button className="btn__primary"></button>
                </Stack>
            </Col>
            <Col xs={12} md={8}>
                <Stack className={"content-block"}>
                    <h1 className="title">Open Bank</h1>
                    <div className="search-bar">
                        <IconSrch/>
                        <input onChange={({target}) => setQuery(target.value)} className={"input"}
                               type="text" value={query}/>
                    </div>
                    <div className="results-block"></div>
                </Stack>
            </Col>
        </Row>
    )
}

export default Dashboard;