import { Home, About, Cars, Testimonial, Login, Signup } from '~/pages';
import { DefaultLayout, WrapperLayout } from '~/layouts';

const publicRoutes = [
    { id: 0, path: '/', component: Home, layout: DefaultLayout },
    { id: 1, path: '/about', component: About, layout: DefaultLayout },
    { id: 2, path: '/cars', component: Cars, layout: DefaultLayout },
    { id: 3, path: '/testimonial', component: Testimonial, layout: DefaultLayout },
    { id: 4, path: '/login', component: Login, layout: WrapperLayout },
    { id: 5, path: '/signup', component: Signup, layout: WrapperLayout },
];

export { publicRoutes };
