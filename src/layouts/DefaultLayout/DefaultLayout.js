import { Header, Footer } from '../components';

function DefaultLayout({ children }) {
    return (
        <section>
            <Header />
            <section>{children}</section>
            <Footer />
        </section>
    );
}

export default DefaultLayout;
