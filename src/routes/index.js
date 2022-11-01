import { Home, About, Cars, Testimonial } from '~/pages';
import { DefaultLayout } from '~/layouts';

const publicRoutes = [
    { id: 0, path: '/', component: Home, layout: DefaultLayout },
    { id: 1, path: '/about', component: About, layout: DefaultLayout },
    { id: 2, path: '/cars', component: Cars, layout: DefaultLayout },
    { id: 3, path: '/testimonial', component: Testimonial, layout: DefaultLayout },
];

export { publicRoutes };
