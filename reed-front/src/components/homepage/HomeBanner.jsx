import CustomCarousel from "../../CustomComponents/CustomCarousel/CustomCarousel";


const HomeBanner = () => {

    const images = [
        'https://i.ibb.co/KW2xbV7/growing-trees.jpg',
        'https://i.ibb.co/tbLXYb6/reed-by-nishat.jpg',
        'https://i.ibb.co/hRJT0wr/reed-by-nishat-3.jpg',
    ];
    return (
        <div className="relative">
            <div className="text-center w-full md:w-4/6 rounded-sm py-2 md:py-6 bg-black/65 absolute bottom-1 left-1/2 -translate-x-1/2 z-20">
                <h4 className=" md:text-2xl">Developing Innovative Strategies</h4>
                <p className=" md:text-7xl font-bold">Achieving Growth</p>

            </div>
            <div>
                <CustomCarousel images={images} interval={3000}></CustomCarousel>
            </div>
        </div>
    );
};

export default HomeBanner;