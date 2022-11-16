import React, {useState, useEffect} from "react";
import axios, {AxiosRequestConfig, AxiosResponse} from "axios";
import jwt_decode from "jwt-decode"
import {useNavigate} from "react-router-dom";

const Dashboard = () => {
    const navigate = useNavigate()
    const [name, setName] = useState("")
    const [token, setToken] = useState("")
    const [expire, setExpire] = useState(1)
    const [users, setUsers] = useState([])

    useEffect(() => {
        refreshToken()
        getUsers()
    }, [])

    const refreshToken = async () => {
        try {
            const response = await axios.get("http://localhost:4000/token");
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
}

export default Dashboard;