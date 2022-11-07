import { Landing, Features, SubscribeBox, Reviews, BoxContainer, Products, Brands } from '~/components';
import { useEffect } from 'react';

function Home() {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });
    }, []);
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
