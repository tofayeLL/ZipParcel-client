import Banner from "./Banner/Banner";
import Featured from "./Featured/Featured";


const Home = () => {
    return (
        <section>
            <div>
                <Banner></Banner>
            </div>

            <div className="my-20">
                <Featured></Featured>
            </div>

        </section>

    );
};

export default Home;