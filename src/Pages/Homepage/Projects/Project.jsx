const Project = ({ p }) => {
    const { _id, title, sequence, image, description, liveurl, githuburl, techStack, enabled } = p;

    return (
        <div>
            {
                enabled
                    ?
                    <div className="card w-96 bg-base-100 shadow-xl mx-auto">
                        <figure><img src={image?.url} alt="" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{title}</h2>
                            <p>{sequence}</p>
                            <div className="card-actions justify-end">
                                <button className="btn" onClick={() => document.getElementById(`my_modal_${_id}`).showModal()}>View</button>
                                <dialog id={`my_modal_${_id}`} className="modal modal-bottom sm:modal-middle">
                                    <div className="modal-box">
                                        <figure><img src={image?.url} alt="" /></figure>
                                        <h3 className="font-bold text-lg">{title}</h3>
                                        <p className="py-4">{description}</p>
                                        <div className="grid lg:grid-cols-6 mb-5">
                                            {
                                                techStack.map(tech => <div key={tech.id}>
                                                    <p>{tech}</p>
                                                </div>)
                                            }
                                        </div>
                                        <div className="">
                                            <button className="btn mr-5">Live Link</button>
                                            <button className="btn">Github Link</button>
                                        </div>
                                        <div className="modal-action">
                                            <form method="dialog">
                                                <button className="btn">Close</button>
                                            </form>
                                        </div>
                                    </div>
                                </dialog>
                            </div>
                        </div>
                    </div>
                    :
                    <> </>
            }
        </div>
    );
};

export default Project;