function DefaultLayout({ children }) {
    return (
        <section>
            <header>header</header>
            <section>{children}</section>
            <footer>footer</footer>
        </section>
    );
}

export default DefaultLayout;
