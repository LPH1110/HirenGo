import {
    Home,
    About,
    Cars,
    Testimonial,
    Login,
    Signup,
    SearchProducts,
    Error,
    ProductDetail,
    Dashboard,
} from '~/pages';
import { DefaultLayout, WrapperLayout } from '~/layouts';

const publicRoutes = [
    { id: 0, path: '/', component: Home, layout: DefaultLayout },
    { id: 1, path: '/about', component: About, layout: DefaultLayout },
    { id: 2, path: '/cars', component: Cars, layout: DefaultLayout },
    { id: 3, path: '/testimonial', component: Testimonial, layout: DefaultLayout },
    { id: 4, path: '/login', component: Login, layout: WrapperLayout },
    { id: 5, path: '/signup', component: Signup, layout: WrapperLayout },
    { id: 6, path: '/search', component: SearchProducts, layout: DefaultLayout },
    { id: 7, path: '/error', component: Error, layout: DefaultLayout },
    { id: 8, path: '/products/:productId', component: ProductDetail, layout: DefaultLayout },
    { id: 8, path: '/dashboard', component: Dashboard, layout: WrapperLayout },
];

export { publicRoutes };
