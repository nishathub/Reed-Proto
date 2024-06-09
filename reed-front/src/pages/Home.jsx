import CardContainer from "../components/homepage/CardContainer";
import ClientSection from "../components/homepage/ClientSection";
import HomeAbout from "../components/homepage/HomeAbout";
import HomeBanner from "../components/homepage/HomeBanner";

const Home = () => {
    return (
        <div className="bg-[url('https://i.ibb.co/xLrt2KH/group-photo1.jpg')] bg-fixed bg-center bg-cover">
            <div>
                <HomeBanner></HomeBanner>
            </div>
            <div>
                <CardContainer></CardContainer>
            </div>
            <div>
                <HomeAbout></HomeAbout>
            </div>
            <div>
                <ClientSection></ClientSection>
            </div>
        </div>
    );
};

export default Home;