import { useEffect, useState } from "react";

const Contact = () => {
    const [profile, setProfile] = useState({});

    useEffect(() => {
        fetch("https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae")
            .then(res => res.json())
            .then(data => setProfile(data))
            .catch(error => console.error("Error: ", error))
    }, [])

    return (
        <div>
            <div className="lg:mx-20 mb-20">
                <div className="hero">
                    <div className="hero-overlay bg-opacity-30"></div>
                    <div className="hero-content w-full">
                        <div className="w-full">
                            <h2 className="text-3xl font-bold mt-10 mb-3 text-center">Contact with me</h2>
                            <div className='lg:flex justify-around items-center'>
                                <div className="w-1/2">
                                    <form className='mb-10'>
                                        <label className='mr-2 text-xl'>Name</label><br />
                                        <input className='mb-5 p-3 w-full' type="text" name="user_name" placeholder='Enter Your Name' /><br />
                                        <label className='mr-2 text-xl'>Email</label><br />
                                        <input className='mb-5 p-3 w-full' type="email" name="user_email" placeholder='Enter Your Email' /><br />
                                        <label className='mr-2 text-xl'>Message</label><br />
                                        <textarea className='mb-5 p-3 w-full h-40' name="message" placeholder='Enter Your Message' /><br />
                                        <div className='text-center'><input type="submit" value="Send" className='bg-black text-white px-6 py-2 rounded-sm' /></div>
                                    </form>
                                </div>
                                <div className="w-1/4 text-2xl font-semibold">
                                    <h3>{profile.user?.about?.phoneNumber}</h3>
                                    <h3>{profile.user?.about?.contactEmail}</h3>
                                    <h3>{profile.user?.about?.address}</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;