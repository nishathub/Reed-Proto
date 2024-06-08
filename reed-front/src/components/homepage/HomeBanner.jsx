import CustomCarousel from "../../CustomComponents/CustomCarousel/CustomCarousel";


const HomeBanner = () => {

    const images = [
        'https://i.ibb.co/KW2xbV7/growing-trees.jpg',
        'https://i.ibb.co/tbLXYb6/reed-by-nishat.jpg',
        'https://i.ibb.co/hRJT0wr/reed-by-nishat-3.jpg',
      ];
    return (
        <div className="border">
            <CustomCarousel images={images} interval={3000}></CustomCarousel>
        </div>
    );
};

export default HomeBanner;