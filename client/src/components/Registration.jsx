import {PlusOutlined} from '@ant-design/icons';
import {Button, DatePicker, Form, Input, message, Radio,  Switch,  Upload,} from 'antd';
import React, {useState} from 'react';
import {Link} from "react-router-dom";


import { useMutation } from '@apollo/client';
import { gql } from 'graphql-tag';

const {TextArea} = Input;

const normFile = (e) => {
    if (Array.isArray(e)) {
        return e;
    }
    return e?.fileList;
};

const CREATE_USER = gql`
    mutation AddUser($userInput: NewUserInput!) {
        createUser(userInput: $userInput) {
            firstName
            lastName
            email
            password
            aboutMe
            gender
            birthday
            avatar
        }
    }
`;

const Registration = () => {

    const [createUser, { loading, error }] = useMutation(CREATE_USER);


    function handleAction(fields){
        let {
            firstName,
            lastName,
            email,
            gender,
            birthday,
            aboutMe,
            password,
            avatar,
            rememberMe,
        }  = fields


        let errorMessage = ""
        for (let fieldsKey in fields) {
            if(fieldsKey === "rememberMe"){}
            else if(!fields[fieldsKey]){
                errorMessage = fieldsKey.toUpperCase() + " required."
            }
        }

        if(errorMessage){
            message.error(errorMessage)
            return;
        }


        createUser({
            variables: {
                userInput: {
                    firstName,
                    lastName,
                    email,
                    password,
                    aboutMe,
                    gender,
                    birthday,
                    avatar,
                }
            }
        }).then(r =>{
            console.log(r)
        }).catch(ex=>{
            console.log(ex)
        })

    }


    function handleChange(e){
        console.log(e)
    }

    return (
        <div className="container">
            <div className="max-w-xl mx-auto p-4 m-10">

                <h4 className="h5 text-center">Create new Account</h4>

                <Form
                    onFinish={handleAction}
                    layout="vertical"
                    className="w-full"
                >
                    <Form.Item name="firstName"  label="First Name">
                        <Input  placeholder="First name"/>
                    </Form.Item>

                    <Form.Item name="lastName" label="Last Name">
                        <Input placeholder="Last name"/>
                    </Form.Item>


                    <Form.Item name="email" label="Email">
                        <Input placeholder="Email"/>
                    </Form.Item>

                    <Form.Item name="password" label="Password">
                        <Input placeholder="Password"/>
                    </Form.Item>



                    <Form.Item name="gender" label="Gender">
                        <Radio.Group>
                            <Radio value="male">Male </Radio>
                            <Radio value="female">Female </Radio>
                        </Radio.Group>
                    </Form.Item>


                    <Form.Item name="birthday" label="Birth Date">
                        <DatePicker placeholder="Date of Birth" className="w-full"/>
                    </Form.Item>

                    <Form.Item name="aboutMe" label="About you">
                        <TextArea placeholder={"About you"} rows={4}/>
                    </Form.Item>


                    <Form.Item  label="Profile Photo"  valuePropName="fileList" getValueFromEvent={normFile}>
                        <Upload accept="image/*" multiple={false} onChange={handleChange} listType="picture-card">
                            <div>
                                <PlusOutlined/>
                                <div style={{marginTop: 8}}>Upload</div>
                            </div>
                        </Upload>
                    </Form.Item>

                    <div className="flex justify-between items-center">

                        <Form.Item  name="rememberMe" className="input-row"   label="Remember me?" valuePropName="checked">
                            <Switch/>
                        </Form.Item>

                        <Form.Item>
                            <Button htmlType="submit" >Create Account</Button>
                        </Form.Item>
                    </div>

                    <div>
                        <p className="text-label">Already have an account? <Link to="/login">Login here</Link> </p>
                    </div>


                </Form
                >
            </div>
        </div>
    );
};

export default Registration