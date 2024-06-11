import Banner from "./Banner/Banner";
import Featured from "./Featured/Featured";
import TopDeliveryMen from "./TopDeliveryMen/TopDeliveryMen";


const Home = () => {
    return (
        <section>
            <div>
                <Banner></Banner>
            </div>

            <div className="my-20">
                <Featured></Featured>
            </div>
            <div className="my-20 ">
                <TopDeliveryMen></TopDeliveryMen>
            </div>

        </section>

    );
};

export default Home;