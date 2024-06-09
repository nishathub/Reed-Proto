import CustomMarquee from "../../CustomComponents/CustomMarquee/CustomMarquee";

const ClientSection = () => {

    const reedClients =
        <>
            <div className="w-24 md:w-64">
                <img className="w-full" src="https://i.ibb.co/3W7pXx2/puma-logo.png" alt="client-logo" />
            </div>
            <div className="w-24 md:w-64">
                <img className="w-full" src="https://i.ibb.co/XVhTpjz/better-work-vector-logo.png" alt="client-logo" />
            </div>
            <div className="w-24 md:w-64">
                <img className="w-full" src="https://i.ibb.co/TDQcPq1/british-h-c.jpg" alt="client-logo" />
            </div>
            <div className="w-24 md:w-64">
                <img className="w-full" src="https://i.ibb.co/vdBXtGj/enclude-logo.png.png" alt="client-logo" />
            </div>
            <div className="w-24 md:w-64">
                <img className="w-full" src="https://i.ibb.co/mXMbPxN/giz-logo.png" alt="client-logo" />
            </div>
            <div className="w-24 md:w-64">
                <img className="w-3/4" src="https://i.ibb.co/dB6BLL5/hm.png" alt="client-logo" />
            </div>
            <div className="w-24 md:w-64">
                <img className="w-3/4" src="https://i.ibb.co/H4TgZyy/lfmeab-logo.png.png" alt="client-logo" />
            </div>
            <div className="w-24 md:w-64">
                <img className="w-3/4" src="https://i.ibb.co/QK3Yt8c/canada-bd-logo.png.jpg" alt="client-logo" />
            </div>
            <div className="w-24 md:w-64">
                <img className="w-3/4" src="https://i.ibb.co/ZGvW9rQ/save-child-log.png" alt="client-logo" />
            </div>
            <div className="w-24 md:w-64">
                <img className="w-full" src="https://i.ibb.co/s5F93wg/swedish-embassy.png" alt="client-logo" />
            </div>
            <div className="w-24 md:w-64">
                <img className="w-3/4" src="https://i.ibb.co/ZWNM66B/uktrade.png" alt="client-logo" />
            </div>
        </>
    return (
        <div className="bg-cyan-950 py-8 md:py-20">
            <h2 className="text-2xl md:text-4xl text-yellow-500 text-center mb-8">Our Clients</h2>
            <div className="">
                <CustomMarquee>
                    {reedClients}
                </CustomMarquee>
            </div>
        </div>
    );
};

export default ClientSection;