import { useEffect } from "react";
import { useState } from "react";

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
            <div className="hero bg-slate-100 mt-20">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={profile.user?.about?.avatar?.url} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">{profile.user?.about?.name}</h1>
                        <p className="py-6">{profile.user?.about?.subTitle}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;