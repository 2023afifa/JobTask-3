const Testimonial = ({ t }) => {
    const { name, image, position, review, enabled } = t;

    return (
        <div>
            {
                enabled ?
                    <div className="border-black border-2 p-10 mb-10 lg:flex justify-between items-center gap-10">
                        <img className="w-40" src={image?.url} alt="" />
                        <div>
                            <h2>{name}</h2>
                            <p>{position}</p>
                            <p>{review}</p>
                        </div>
                    </div>
                    :
                    <> </>
            }
        </div>
    );
};

export default Testimonial;