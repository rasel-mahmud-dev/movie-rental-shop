import {Button, Form, Input, message, Switch,} from 'antd';
import React from 'react';
import {Link} from "react-router-dom";
import {gql} from "graphql-tag";
import {useMutation} from "@apollo/client";
import {useBoundStore} from "../zustand/store.js";
import {LOGIN_USER} from "../graphql/queries.js";


const Login = () => {

    const [loginUser] = useMutation(LOGIN_USER)

    const {auth, setAuth} = useBoundStore(state=>state)


    function handleAction(fields) {
        let {
            email,
            password
        } = fields


        let errorMessage = ""
        for (let fieldsKey in fields) {
            if (fieldsKey === "rememberMe" || fieldsKey === "aboutMe") {
            } else if (!fields[fieldsKey]) {
                errorMessage = fieldsKey.toUpperCase() + " required."
            }
        }

        if (errorMessage) {
            message.error(errorMessage)
            return;
        }

        loginUser({
            variables: {
                userInput: {
                    email,
                    password
                }
            }
        }).then(({data}) => {
            localStorage.setItem("token", data.loginUser.token)

            setAuth(data.loginUser)

        }).catch(ex => {
            console.log()
        })

    }



    function handleChange(e) {
        console.log(e)
    }

    return (
        <div className="container">
            <div className="max-w-xl mx-auto p-4 m-10">

                <h4 className="h5 text-center">Login</h4>

                <Form
                    onFinish={handleAction}
                    layout="vertical"
                    className="w-full"
                >


                    <Form.Item name="email" label="Email">
                        <Input placeholder="Email"/>
                    </Form.Item>

                    <Form.Item name="password" label="Password">
                        <Input placeholder="Password"/>
                    </Form.Item>


                    <div className="flex justify-between items-center">

                        <Form.Item name="rememberMe" className="input-row" label="Remember me?" valuePropName="checked">
                            <Switch/>
                        </Form.Item>

                        <Form.Item>
                            <Button htmlType="submit">Login</Button>
                        </Form.Item>
                    </div>

                    <div>
                        <p className="text-label">Not have an account? <Link to="/registration">Create new one</Link>
                        </p>
                    </div>

                </Form
                >
            </div>
        </div>
    );
};

export default Login