import {useEffect, useState} from 'react'
import './App.css'
import Header from "./components/Header/Header.jsx";
import {Outlet} from "react-router-dom";
import {useBoundStore} from "./zustand/store.js";
import {useQuery} from "@apollo/client";
import {AUTH_FETCHING} from "./graphql/queries.js";

function App() {

    const {loading, data} = useQuery(AUTH_FETCHING)
    const setAuth = useBoundStore(state => state.setAuth)

    useEffect(() => {
        if (data && data.authVerify) {
            setAuth(data.authVerify)
        }
    }, [data, loading])

    return (
        <>
            <div>
                <Header/>
                <Outlet/>
            </div>
        </>
    )
}

export default App
