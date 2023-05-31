import {useState} from 'react'
import './App.css'
import Registration from "./components/Registration.jsx";
import {Button, ConfigProvider} from "antd";
import Header from "./components/Header/Header.jsx";

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <div>
                <ConfigProvider
                    theme={{
                        token: {
                            colorPrimary: '#ef8383',
                        },
                    }}
                >
                    <Header />

                    <Registration/>
                </ConfigProvider>
            </div>
        </>
    )
}

export default App
