import { useEffect, useState } from "react";

const About = () => {
    const [profile, setProfile] = useState({});

    useEffect(() => {
        fetch("https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae")
            .then(res => res.json())
            .then(data => setProfile(data))
            .catch(error => console.error("Error: ", error))
    }, [])


    return (
        <div>
            <h2 className="text-center font-bold text-2xl mt-10 mb-5">About Me</h2>
            <div className="lg:flex gap-28 mx-20">
                <div className="text-xl w-1/2">
                    <h3 className="font-bold my-2">{profile.user?.about?.title}</h3>
                    <p>{profile.user?.about?.description}</p>
                </div>
                <div className="text-xl">
                    <p>Name: {profile.user?.about?.name}</p>
                    <p>Email: {profile.user?.about?.email}</p>
                    <p>Address: {profile.user?.about?.address}</p>
                    <p>Experience: {profile.user?.about?.exp_year}</p>
                    <p>Quote: {profile.user?.about?.quote}</p>
                </div>
            </div>
        </div>
    );
};

export default About;