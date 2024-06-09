
const CardContainer = () => {

    const customBackgroundColor = {backgroundColor: '#253741'};
    
    return (
        <div style={customBackgroundColor} className="py-20">
            <div className="flex flex-wrap gap-6 items-center justify-center">
                <div className="card w-96 bg-yellow-500 text-primary-content">
                    <div className="card-body">
                        <h2 className="card-title">SERVICE</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-center">
                            <button className="btn">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-primary text-primary-content">
                    <div className="card-body">
                        <h2 className="card-title">Card title!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-primary text-primary-content">
                    <div className="card-body">
                        <h2 className="card-title">Card title!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardContainer;