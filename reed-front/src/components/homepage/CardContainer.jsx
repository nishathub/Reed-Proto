
const CardContainer = () => {
    
    return (
        <div className="py-20 bg-cyan-950">
            <div className="flex flex-wrap gap-6 items-center justify-center">
                <div className="card min-h-72 w-80 bg-cyan-800 text-primary-content">
                    <div className="card-body text-gray-200">
                        <h2 className="card-title">SERVICE</h2>
                        <p className="text-justify">Here we will put service related short description and the below button to redirect user to the service page.</p>
                        <div className="card-actions justify-center">
                            <button className="btn btn-accent">More Info</button>
                        </div>
                    </div>
                </div>
                <div className="card min-h-72 w-80 bg-cyan-800 text-primary-content">
                    <div className="card-body text-gray-200">
                        <h2 className="card-title">PROJECT</h2>
                        <p className="text-justify">Here we will put project related short description and the below button to redirect user to the project page.</p>
                        <div className="card-actions justify-center">
                            <button className="btn btn-accent">More Info</button>
                        </div>
                    </div>
                </div>
                <div className="card w-80 min-h-72 bg-cyan-800 text-primary-content">
                    <div className="card-body text-gray-200">
                        <h2 className="card-title ">CLIENT</h2>
                        <p className="text-justify">Here we will put client related short description and the below button to redirect user to the client section.</p>
                        <div className="card-actions justify-center">
                            <button className="btn btn-accent">More Info</button>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default CardContainer;