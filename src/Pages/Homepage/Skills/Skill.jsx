const Skill = ({ s }) => {
    const { name, sequence, percentage, image, enabled } = s;

    return (
        <div>
            {
                enabled ?
                    <div className="card w-96 bg-base-100 shadow-xl mx-auto">
                        <figure><img src={image?.url} alt="" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{name}</h2>
                            <p>{sequence}</p>
                            <p>{percentage}</p>
                        </div>
                    </div>
                    :
                    <> </>
            }
        </div>
    );
};

export default Skill;