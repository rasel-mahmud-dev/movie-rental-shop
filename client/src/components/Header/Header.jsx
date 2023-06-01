import React from 'react';
import "./header.scss"
import {LoginOutlined} from "@ant-design/icons";
import {Link} from "react-router-dom";
import {useBoundStore} from "../../zustand/store.js";
import {Avatar} from "antd";


const Header = () => {

    const {auth} = useBoundStore(state=>state)

    return (
        <header>
            <div className="w-full flex items-center justify-between">
                <div>
                    <h2 className="logo">Movie Rental</h2>
                </div>

                <div>
                    <main className="flex items-center gapx-x-4">
                        <li className="nav-item"><Link to="/">Home</Link></li>
                        <li className="nav-item"><Link to="/genres">Genres</Link></li>
                        <li className="nav-item"><Link to="/movies">Movies</Link></li>
                        <li className="nav-item"><Link to="/artists">Artists</Link></li>
                        <li className="nav-item"><Link to="/about-us">About us</Link></li>
                    </main>
                </div>

                <div>
                    <li className="nav-item">
                        {auth ? (
                            <div>
                                <Avatar src={auth?.avatar} />
                            </div>
                        ) : (
                        <Link to="/login">
                            <LoginOutlined className="text-white text-xl hover:text-primary-400"/>
                        </Link>
                        )}
                    </li>
                </div>
            </div>
        </header>
    );
};

export default Header;