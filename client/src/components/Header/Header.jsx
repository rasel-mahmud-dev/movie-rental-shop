import React from 'react';
import "./header.scss"
import {LoginOutlined} from "@ant-design/icons";
// import {Link} from "react-router-dom";


const Header = () => {
    return (
        <header>
            <div className="w-full flex items-center justify-between">
                <div>
                    <h2 className="logo">Movie Rental</h2>
                </div>


                <div>
                    <main className="flex items-center gapx-x-4">
                            <li className="nav-item">Home</li>
                            <li className="nav-item">Genres</li>
                            <li className="nav-item">Movies</li>
                            <li className="nav-item">Artists</li>
                            <li className="nav-item">About us</li>
                    </main>
                </div>

                <div>
                    {/*<Link to="/login">*/}
                        <LoginOutlined className="text-white text-xl hover:text-primary-400" />
                    {/*</Link>*/}
                </div>
            </div>
        </header>
    );
};

export default Header;