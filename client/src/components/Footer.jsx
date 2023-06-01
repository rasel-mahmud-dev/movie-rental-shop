import React from 'react';
import {FaDev, FaFacebook} from "react-icons/fa";
import {BsFacebook, BsGithub, BsInstagram, BsLinkedin} from "react-icons/bs";
import {CgFacebook} from "react-icons/cg";
import {DiCodepen} from "react-icons/di";

const Footer = () => {

    const socials = [
        { icon: <CgFacebook className="text-base " />, url: "https://www.facebook.com/rasel.mahmud.dev" },
        { icon: <BsInstagram className="text-base " />, url: "https://www.instagram.com/raselmraju" },
        { icon: <BsGithub className="text-base " />, url: "https://github.com/rasel-mahmud-dev" },
        { icon: <DiCodepen className="text-base " />, url: "https://codepen.io/rasel-mahmud-dev" },
        { icon: <FaDev className="text-base " />, url: "https://dev.to/raselmahmuddev" },
        { icon: <BsLinkedin className="text-base " />, url: "https://www.linkedin.com/in/rasel-mahmud-dev" },
    ];

    return (
        <footer className="footer">

            <section className="bg-neutral-800 py-16">
                <div className="container">
                    <div className="grid grid-cols-12  text-neutral-100">
                        <div className="col-span-6">
                            <img className="w-36" src="/logo.svg" alt=""/>
                            <p className="text-neutral-400 max-w-md">
                                Here , write the complete address of the Registered office address along with telephone
                                number.
                            </p>

                            <ul className="flex align-center gap-x-2 m-0 p-0">
                                {socials.map((social, i) => (
                                    <a className="social-icon " rel="noreferrer" key={i.toString()} target="_blank" href={social.url}>
                                        {social.icon}
                                    </a>
                                ))}
                            </ul>

                        </div>
                        <div className="col-span-2">
                            <h4>Genre</h4>
                            <ul className="my-2 p-0">
                                <li className="list-none text-base text-neutral-400">Comedy</li>
                                <li className="list-none text-base text-neutral-400">Romance</li>
                                <li className="list-none text-base text-neutral-400">Action</li>
                            </ul>
                        </div>

                        <div className="col-span-2">
                            <h4>Products</h4>
                            <ul className="my-2 p-0">
                                <li className="list-none text-base text-neutral-400">2000 Year</li>
                                <li className="list-none text-base text-neutral-400">2005 Year</li>
                                <li className="list-none text-base text-neutral-400">2022 Year</li>
                            </ul>
                        </div>

                        <div className="col-span-2">
                            <h4>Quality</h4>
                            <ul className="my-2 p-0">
                                <li className="list-none text-base text-neutral-400">SD DVD</li>
                                <li className="list-none text-base text-neutral-400">FHD</li>
                                <li className="list-none text-base text-neutral-400">4K</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </section>


            <section className="bg-neutral-900">
                <div className="container">
                    <div className="flex justify-between items-center py-4 text-white">
                        <h4>Rasel Mahmud</h4>
                        <div>
                            {new Date().getFullYear()}
                        </div>
                    </div>
                </div>
            </section>
        </footer>


    );
};

export default Footer;