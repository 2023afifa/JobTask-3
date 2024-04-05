import { useEffect, useState } from "react";
import SingleTimeline from "./SingleTimeline";

const Timeline = () => {
    const [profile, setProfile] = useState({});

    useEffect(() => {
        fetch("https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae")
            .then(res => res.json())
            .then(data => setProfile(data))
            .catch(error => console.error("Error: ", error))
    }, [])

    return (
        <div>
            <h2 className="text-center font-bold text-2xl mt-10 mb-5">Timeline</h2>
            <div className="grid lg:grid-cols-3 gap-10">
                {
                    profile.user?.timeline.map(p => <SingleTimeline key={p.id} p={p}></SingleTimeline>)
                }
            </div>
        </div>
    );
};

export default Timeline;