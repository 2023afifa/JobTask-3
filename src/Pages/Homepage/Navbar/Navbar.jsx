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
                    <div onBlur={closeNavbar}>
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
                                        initial={{ x: '100%', opacity: 0, }}
                                        animate={{ x: 0, opacity: 1, }}
                                        exit={{ opacity: 0, x: '100%' }}
                                        transition={{ duration: 0.3, type: 'tween' }}
                                    >
                                        <h2 className="text-3xl">Menu</h2>
                                        <hr className="mb-6" />
                                        <ul>
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