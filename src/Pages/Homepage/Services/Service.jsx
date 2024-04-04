const Service = ({ s }) => {
    const { name, charge, desc, image, enabled } = s;

    return (
        <div>
            {
                enabled
                    ?
                    <div className="card w-96 bg-base-100 shadow-xl mx-auto">
                        <figure><img src={image?.url} alt="" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{name}</h2>
                            <p>{desc}</p>
                            <p>{charge}</p>
                        </div>
                    </div>
                    :
                    <></>
            }
        </div>
    );
};

export default Service;