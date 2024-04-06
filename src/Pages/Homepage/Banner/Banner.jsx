import { useEffect } from "react";
import { useState } from "react";
import { motion } from 'framer-motion';

const Banner = () => {
    const [profile, setProfile] = useState({});

    useEffect(() => {
        fetch("https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae")
            .then(res => res.json())
            .then(data => setProfile(data))
            .catch(error => console.error("Error: ", error))
    }, [])


    return (
        <div>
            <div className="hero bg-slate-950 mt-10 py-14">
                <div className="hero-content flex-col lg:flex-row-reverse lg:gap-20">
                    <motion.div
                        style={{
                            width: 400,
                            height: 500,
                            overflow: 'hidden',
                            borderRadius: '40%',
                        }} initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6, duration: 0.5 }}>
                        <motion.img
                            src={profile.user?.about?.avatar?.url}
                            alt="Image"
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                            }}
                        />
                    </motion.div>
                    <div className="text-slate-200 font-bold">
                        <motion.p className="text-xl mb-3" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3, duration: 0.5 }}>
                            Hello, This is
                        </motion.p>
                        <motion.h1 className="text-8xl mb-3" style={{ background: 'linear-gradient(to right, #00FFFF, #0000FF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3, duration: 0.5 }}>
                            {profile.user?.about?.name}
                        </motion.h1>
                        <motion.p className="text-2xl" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3, duration: 0.5 }}>
                            {profile.user?.about?.subTitle}
                        </motion.p>
                        <motion.p className="text-6xl mt-10" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9, duration: 0.5 }}>
                            {profile.user?.about?.quote}...
                        </motion.p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;