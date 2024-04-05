const SingleTimeline = ({ t }) => {
    const { company_name, summary, jobTitle, jobLocation, bulletPoints, forEducation, enabled, startDate, endDate } = t;

    return (
        <div>
            {
                enabled ?
                    <div>
                        {
                            forEducation ?
                                <div className="bg-gray-200 shadow-md p-10 mb-10">
                                    <h1 className="text-xl font-bold">Education</h1>
                                    <div className="font-semibold mb-5">
                                        <h2>{company_name}</h2>
                                        <p>{jobTitle}</p>
                                        <p>{startDate} - {endDate}</p>
                                        <p>{jobLocation}</p>
                                    </div>
                                    <p>{summary}</p>
                                    <ul>
                                        {
                                            bulletPoints.map(bullet => <div key={bullet.id}>
                                                <li>{bullet}</li>
                                            </div>)
                                        }
                                    </ul>
                                </div>
                                :
                                <div className="bg-gray-200 shadow-md p-10 mb-10">
                                    <h1 className="text-xl font-bold">Experience</h1>
                                    <div className="font-semibold mb-5">
                                        <h2>{company_name}</h2>
                                        <p>{jobTitle}</p>
                                        <p>{startDate} - {endDate}</p>
                                        <p>{jobLocation}</p>
                                    </div>
                                    <p>{summary}</p>
                                    <ul>
                                        {
                                            bulletPoints.map(bullet => <div key={bullet.id}>
                                                <li>{bullet}</li>
                                            </div>)
                                        }
                                    </ul>
                                </div>
                        }
                    </div>
                    :
                    <> </>
            }
        </div>
    );
};

export default SingleTimeline;