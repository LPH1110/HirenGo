import { Button, Image } from '~/components';
import images from '~/assets';
import { NavLink } from 'react-router-dom';

const navigations = [
    {
        id: 0,
        title: 'Home',
        path: '/',
    },
    {
        id: 1,
        title: 'About',
        path: '/about',
    },
    {
        id: 2,
        title: 'Cars',
        path: '/cars',
    },
    {
        id: 3,
        title: 'Testimonial',
        path: '/testimonial',
    },
];

function Header() {
    const textPrimaryColor = {
        color: 'rgb(14, 165, 233)',
    };
    return (
        <header className="bg-white px-10 w-screen flex justify-between items-center fixed inset-x-0 top-0">
            <a href="/" className="block h-16">
                <Image className="h-full" src={images.logoTransparent} alt="logo" />
            </a>

            <nav>
                {navigations.map((nav) => {
                    return nav.path === '/' ? (
                        <NavLink
                            key={nav.id}
                            className="mr-6 hover:text-sky-500 text-slate-600 ease duration-200"
                            end
                            to={nav.path}
                            style={({ isActive }) => (isActive ? textPrimaryColor : undefined)}
                        >
                            {nav.title}
                        </NavLink>
                    ) : (
                        <NavLink
                            key={nav.id}
                            className="mr-6 hover:text-sky-500 text-slate-600 ease duration-200"
                            style={({ isActive }) => (isActive ? textPrimaryColor : undefined)}
                            to={nav.path}
                        >
                            {nav.title}
                        </NavLink>
                    );
                })}
            </nav>

            <div>
                <Button className="ease duration-200 hover:opacity-70 rounded-full border text-sky-500 border-sky-500 text-sm">
                    Log in
                </Button>
                <Button className="ease duration-200 hover:bg-sky-400 rounded-full border text-sm bg-sky-500 text-slate-100">
                    Sign up
                </Button>
            </div>
        </header>
    );
}

export default Header;
