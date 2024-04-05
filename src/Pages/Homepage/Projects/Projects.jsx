import { useEffect, useState } from "react";
import Project from "./Project";

const Projects = () => {
    const [profile, setProfile] = useState({});

    useEffect(() => {
        fetch("https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae")
            .then(res => res.json())
            .then(data => setProfile(data))
            .catch(error => console.error("Error: ", error))
    }, [])

    return (
        <div>
            <h2 className="text-center font-bold text-2xl mt-10 mb-5">Projects</h2>
            <div className="grid lg:grid-cols-3 gap-10">
                {
                    profile.user?.projects.map(p => <Project key={p.id} p={p}></Project>)
                }
            </div>
        </div>
    );
};

export default Projects;