import React from 'react'
import ReactDOM from 'react-dom/client'
import {ApolloProvider} from '@apollo/client';
import client from './graphql';
import './index.scss'
import {RouterProvider} from "react-router-dom";
import routes from "./Routes/index.jsx";
import {ConfigProvider} from "antd";

ReactDOM.createRoot(document.getElementById('root')).render(

        <ApolloProvider client={client}>
            <ConfigProvider
                theme={{
                    token: {
                        colorPrimary: '#ef8383',
                    },
                }}
            >
            <RouterProvider router={routes}/>
            </ConfigProvider>
        </ApolloProvider>

)
