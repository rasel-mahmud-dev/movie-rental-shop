import React, {useState} from 'react';
import "./header.scss"
import {LoginOutlined} from "@ant-design/icons";
import {Link} from "react-router-dom";
import {useBoundStore} from "../../zustand/store.js";
import {Avatar, Badge, Drawer, Dropdown} from "antd";
import staticPath from "../../utils/staticPath.js";
import {BsCart} from "react-icons/bs";


const Header = () => {

    const {auth, setAuth} = useBoundStore(state=>state)

    const [isOpenDrawer, setOpenDrawer] = useState(false)

    function handleLogout(){
        setAuth()
        localStorage.removeItem("token")
    }


    const dropdownRender = ()=> (
        <div className="shadow-2xl w-36 bg-neutral-700 p-5 flex flex-col gap-y-4">
            <li className="text-white">
                <Link className="text-white" to="/profile">Profile</Link>
            </li>
            <li className="text-white">
                <Link className="text-white" to="/add-movie">Add Movie</Link>
            </li>
            <li className="text-white">
                <Link className="text-white" to="/my-carts">My Cart</Link>
            </li>
            <li onClick={handleLogout} className="text-white">
                Log out
            </li>
        </div>
    )

    return (
        <>
        <header>
            <div className="w-full flex items-center justify-between">
                <div>
                    <h2 className="logo">
                        <Link to="/"><img className="w-36" src="/logo.svg" alt=""/></Link>
                    </h2>
                </div>

                <div>
                    <main className="flex items-center gapx-x-4">
                        <li className="active nav-item"><Link to="/">Home</Link></li>
                        <li className="nav-item"><Link to="/genres">Genres</Link></li>
                        <li className="nav-item"><Link to="/movies">Movies</Link></li>
                        <li className="nav-item"><Link to="/artists">Artists</Link></li>
                        <li className="nav-item"><Link to="/about-us">About us</Link></li>
                    </main>
                </div>

                <div className="flex items-center ">

                    {auth ? (

                        <>
                            <li className="nav-item" onClick={()=>setOpenDrawer(true)}>

                                <Badge size="small" style={{border: "none !important"}} count={3}>
                                    <BsCart  className="text-xl text-white    " />
                                </Badge>
                            </li>


                            <Dropdown dropdownRender={dropdownRender} >
                                <li className="nav-item">
                                    <Avatar src={staticPath(auth?.avatar)} />
                                </li>
                            </Dropdown>



                        </>
                    ) : (
                        <li className="nav-item">
                        <Link to="/login">
                            <LoginOutlined className="text-white text-xl hover:text-primary-400"/>
                        </Link>
                        </li>
                    )}

                </div>
            </div>
        </header>

    <Drawer  title="You cart items" placement="right" onClose={()=>setOpenDrawer(false)} open={isOpenDrawer}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
    </Drawer>
    </>



    );

};

export default Header;