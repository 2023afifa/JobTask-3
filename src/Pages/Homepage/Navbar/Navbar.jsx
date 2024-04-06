import { useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import { IoMenu, IoClose } from "react-icons/io5";
import "./Navbar.css";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    const closeNavbar = () => {
        setIsOpen(false);
    };


    return (
        <div>
            <div className="navbar navStyle md:px-20 py-3">
                <div className="navbar-start">
                    <a className="btn btn-ghost text-3xl">John Doe</a>
                </div>
                <div className="navbar-end">
                    <div className="dropdown" onBlur={closeNavbar}>
                        <div tabIndex={0} role="button" className="btn btn-ghost" onClick={toggleNavbar}>
                            {
                                isOpen ?
                                    <IoClose className="h-8 w-8" />
                                    :
                                    <IoMenu className="h-8 w-8" />
                            }
                        </div>
                        <AnimatePresence>
                            {
                                isOpen && (
                                    <motion.div
                                        className="navbar-menu"
                                        initial={{ x: '100%' }}
                                        animate={{ x: 0 }}
                                        exit={{ x: '100%' }}
                                    >
                                        <ul className="menu menu-horizontal px-1">
                                            <li><a>About</a></li>
                                            <li><a>Services</a></li>
                                            <li><a>Skills</a></li>
                                            <li><a>Projects</a></li>
                                            <li><a>Timeline</a></li>
                                            <li><a>Testimonial</a></li>
                                            <li><a>Contact</a></li>
                                        </ul>
                                    </motion.div>
                                )
                            }
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;