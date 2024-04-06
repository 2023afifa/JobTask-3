import { useEffect, useState } from "react";
import { motion } from 'framer-motion';
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
    const [profile, setProfile] = useState({});

    useEffect(() => {
        fetch("https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae")
            .then(res => res.json())
            .then(data => setProfile(data))
            .catch(error => console.error("Error: ", error))
    }, [])

    useEffect(() => {
        AOS.init({ duration: "2000" });
    }, []);


    return (
        <div className="my-20">
            <motion.h2 className="text-center font-semibold text-5xl mb-10"></motion.h2>
            <div className="lg:flex lg:justify-around lg:items-center lg:mx-20">
                <div className="w-2/5" data-aos="fade-right">
                    <h4 className="text-xl">About Me</h4>
                    <h3 className="font-semibold text-3xl mb-3">{profile.user?.about?.title}</h3>
                    <p className="text-lg text-justify">{profile.user?.about?.description}</p>
                </div>
                <div className="grid lg:grid-cols-2 gap-7" data-aos="fade-left">
                    <div>
                        <span className="">Name </span>
                        <br />
                        <span className="text-2xl ">{profile.user?.about?.name}</span>
                    </div>
                    <div>
                        <span className="">Email </span>
                        <br />
                        <span className="text-2xl ">{profile.user?.about?.contactEmail}</span>
                    </div>
                    <div>
                        <span className="">Address </span>
                        <br />
                        <span className="text-2xl ">{profile.user?.about?.address}</span>
                    </div>
                    <div>
                        <span className="">Experience </span>
                        <br />
                        <span className="text-2xl ">{profile.user?.about?.exp_year} years</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;