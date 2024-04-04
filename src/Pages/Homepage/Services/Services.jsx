import { useEffect, useState } from "react";
import Service from "./Service";

const Services = () => {
    const [profile, setProfile] = useState({});

    useEffect(() => {
        fetch("https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae")
            .then(res => res.json())
            .then(data => setProfile(data))
            .catch(error => console.error("Error: ", error))
    }, [])


    return (
        <div>
            <h2 className="text-center font-bold text-2xl mt-10 mb-5">Services</h2>
            <div>
                {
                    profile.user?.services.map(s => <Service key={s.id} s={s}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;