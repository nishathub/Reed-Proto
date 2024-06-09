import CustomCarousel from "../../CustomComponents/CustomCarousel/CustomCarousel";


const HomeBanner = () => {

    const images = [
        'https://i.ibb.co/KW2xbV7/growing-trees.jpg',
        'https://i.ibb.co/tbLXYb6/reed-by-nishat.jpg',
        'https://i.ibb.co/hRJT0wr/reed-by-nishat-3.jpg',
    ];
    return (
        <div className="relative -mb-2">
            <div className="text-center w-full md:w-5/6 rounded-sm py-2 md:py-6 bg-black/65 absolute bottom-6  left-1/2 -translate-x-1/2 z-20">
                <h4 className=" md:text-2xl text-gray-200 md:mb-4">Developing <span className="tracking-widest text-yellow-200">Innovative</span> Strategies</h4>
                <p className=" md:text-7xl text-yellow-500 font-bold uppercase">Achieving Growth</p>

            </div>
            <div>
                <CustomCarousel images={images} interval={3000}></CustomCarousel>
            </div>
        </div>
    );
};

export default HomeBanner;