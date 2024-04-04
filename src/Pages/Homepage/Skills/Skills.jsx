import { useEffect, useState } from "react";
import Skill from "./Skill";

const Skills = () => {
    const [profile, setProfile] = useState({});

    useEffect(() => {
        fetch("https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae")
            .then(res => res.json())
            .then(data => setProfile(data))
            .catch(error => console.error("Error: ", error))
    }, [])

    return (
        <div>
            <h2 className="text-center font-bold text-2xl mt-10 mb-5">Skills</h2>
            <div className="grid lg:grid-cols-3 gap-10">
                {
                    profile.user?.skills.map(s => <Skill key={s.id} s={s}></Skill>)
                }
            </div>
        </div>
    );
};

export default Skills;