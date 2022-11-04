import { Landing, Features, SubscribeBox, Reviews, BoxContainer } from '~/components';

function Home() {
    return (
        <section>
            <Landing />
            <BoxContainer />
            <Features />
            <Reviews />
            <SubscribeBox />
        </section>
    );
}

export default Home;
