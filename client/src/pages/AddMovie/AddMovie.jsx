import React from 'react';
import {Button, DatePicker, Form, Input, InputNumber, message, Select, Switch, Upload} from "antd";
import {PlusOutlined} from "@ant-design/icons";
import {Link} from "react-router-dom";
import {useMutation} from "@apollo/client";
import {CREATE_MOVIE} from "../../graphql/queries.js";

const {TextArea} = Input


const normFile = (e) => {
    if (Array.isArray(e)) {
        return e;
    }
    return e?.fileList;
};


const AddMovie = () => {
    const [createMovie, {loading, error}] = useMutation(CREATE_MOVIE);


    function handleAction(fields) {
        let {
            title,
            genres,
            stock,
            price,
            country,
            director,
            casts,
            duration,
            releasedYear,
            summary,

        } = fields


        let errorMessage = ""
        for (let fieldsKey in fields) {
            if (fieldsKey === "") {
            } else if (!fields[fieldsKey]) {
                errorMessage = fieldsKey.toUpperCase() + " required."
            }
        }

        if (errorMessage) {
            message.error(errorMessage)
            return;
        }


        createMovie({
            variables: {
                movieInput: {
                    title,
                    genres,
                    stock,
                    price,
                    country,
                    director,
                    casts,
                    duration,
                    releasedYear,
                    summary,
                }
            }
        }).then(r => {
            console.log(r)
        }).catch(ex => {
            console.log(ex)
        })
    }


    function handleChange(e) {
        console.log(e)
    }

    const options = [];

    options.push({
        value: "Comedy",
        label: "Comedy",
    });
    options.push({
        value: "Romance",
        label: "Romance",
    });

    options.push({
        value: "Action",
        label: "Action",
    });

    for (let i = 10; i < 36; i++) {
        options.push({
            value: i.toString(36) + i,
            label: i.toString(36) + i,
        });
    }

    const countries = [
        {name: "Bangladesh"},
        {name: "India"},
        {name: "USA"},
        {name: "Korean"},
        {name: "Japan"},
        {name: "China"},
        {name: "Asia"},
    ]

    return (
        <div>
            <div className="container">
                <div className="max-w-xl mx-auto p-4 my-4">

                    <h4 className="h5 text-center">Add Movie</h4>

                    <Form
                        onFinish={handleAction}
                        layout="vertical"
                        className="w-full"
                    >
                        <Form.Item name="title" label="Movie Title">
                            <Input placeholder="Title"/>
                        </Form.Item>


                        <Form.Item name="genres" label="Genres">
                            <Select
                                mode="tags"
                                style={{ width: '100%' }}
                                placeholder="Genres"
                                options={options}
                            />
                        </Form.Item>



                        <Form.Item name="stock" label="Stock">
                            <InputNumber placeholder="Stock"/>
                        </Form.Item>

                        <Form.Item name="price" label="Price">
                            <InputNumber placeholder="Price"/>
                        </Form.Item>


                        <Form.Item name="country" label="Country" >
                            <Select placeholder="Select country">
                                {countries.map(country=>(
                                    <Select.Option value={country.name}>{country.name}</Select.Option>
                                ))}
                            </Select>
                        </Form.Item>

                        <Form.Item name="director" label="Director">
                            <Input placeholder="Director"/>
                        </Form.Item>

                        <Form.Item name="casts" label="Casts">
                            <Input placeholder="Casts"/>
                        </Form.Item>

                        <Form.Item name="duration" label="Duration (Min)">
                            <InputNumber placeholder="Movie Duration"/>
                        </Form.Item>


                        <Form.Item name="casts" label="Country" >
                            <Select placeholder="Select country">
                                {countries.map(country=>(
                                    <Select.Option value={country.name}>{country.name}</Select.Option>
                                ))}
                            </Select>

                        </Form.Item>


                        <Form.Item name="releasedYear" label="Released Year">
                            <DatePicker placeholder="Released Year" className="w-full"/>
                        </Form.Item>

                        <Form.Item name="summary" label="Summary">
                            <TextArea placeholder={"Movie Summary"} rows={4}/>
                        </Form.Item>

                        <Form.Item label="Preview Photo" valuePropName="fileList" getValueFromEvent={normFile}>
                            <Upload accept="image/*" multiple={false} onChange={handleChange} listType="picture-card">
                                <div>
                                    <PlusOutlined/>
                                    <div style={{marginTop: 8}}>Upload</div>
                                </div>
                            </Upload>
                        </Form.Item>


                        <Form.Item>
                            <Button htmlType="submit">Create Movie</Button>
                        </Form.Item>


                    </Form
                    >
                </div>
            </div>
            );
        </div>
    );
};

export default AddMovie;