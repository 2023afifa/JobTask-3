import { useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import { IoMenu, IoClose } from "react-icons/io5";
import "./Navbar.css";
import { Link } from "react-scroll";

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
                    <div>
                        <div tabIndex={0} role="button" className="btn btn-ghost" onClick={toggleNavbar}>
                            <IoMenu className="h-8 w-8" />
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
                                        <div className="flex justify-between">
                                            <h2 className="text-3xl">Menu</h2>
                                            <div onClick={toggleNavbar}>
                                                <IoClose onBlur={closeNavbar} className="h-8 w-8" />
                                            </div>
                                        </div>
                                        <hr className="mt-2 mb-6" />
                                        <ul>
                                            <li><Link to="about" spy={true} smooth={true} offset={-120} duration={900} activeClass="active">About</Link></li>
                                            <li><Link to="services" spy={true} smooth={true} offset={-120} duration={900} activeClass="active">Services</Link></li>
                                            <li><Link to="skills" spy={true} smooth={true} offset={-120} duration={900} activeClass="active">Skills</Link></li>
                                            <li><Link to="projects" spy={true} smooth={true} offset={-120} duration={900} activeClass="active">Projects</Link></li>
                                            <li><Link to="timeline" spy={true} smooth={true} offset={-120} duration={900} activeClass="active">Timeline</Link></li>
                                            <li><Link to="testimonials" spy={true} smooth={true} offset={-120} duration={900} activeClass="active">Testimonials</Link></li>
                                            <li><Link to="contact" spy={true} smooth={true} offset={-120} duration={900} activeClass="active">Contact</Link></li>
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