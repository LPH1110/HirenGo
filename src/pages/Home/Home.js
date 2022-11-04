import { Landing, Features, SubscribeBox, Reviews, BoxContainer, Products, Brands } from '~/components';

function Home() {
    return (
        <section>
            <Landing />
            <BoxContainer />
            <Features />
            <Products />
            <Brands />
            <Reviews />
            <SubscribeBox />
        </section>
    );
}

export default Home;
