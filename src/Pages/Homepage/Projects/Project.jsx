const Project = ({ p }) => {
    const { title, sequence, image, description, liveurl, githuburl, techStack, enabled } = p;

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
                            <p>{description}</p>
                            <div className="card-actions justify-end">
                                <button className="btn" onClick={() => document.getElementById('my_modal_5').showModal()}>View</button>
                                <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                                    <div className="modal-box">
                                        <h3 className="font-bold text-lg">Hello!</h3>
                                        <p className="py-4">Press ESC key or click the button below to close</p>
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
                    <></>
            }
        </div>
    );
};

export default Project;