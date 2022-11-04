import { Image, Button } from '~/components';
import images from '~/assets';
import { NavLink } from 'react-router-dom';

const quickLinks = [
    {
        id: 0,
        title: 'Sitemap',
        links: [
            {
                id: 0,
                title: 'Home',
                path: '/',
            },
            {
                id: 1,
                title: 'Cars',
                path: '/',
            },
            {
                id: 2,
                title: 'How it works',
                path: '/',
            },
            {
                id: 3,
                title: 'Testimonial',
                path: '/',
            },
        ],
    },
    {
        id: 1,
        title: 'Support',
        links: [
            {
                id: 0,
                title: 'Live Support',
                path: '/support',
            },
            {
                id: 1,
                title: 'Help',
                path: '/help',
            },
            {
                id: 2,
                title: 'FAQ',
                path: '/faq',
            },
            {
                id: 3,
                title: 'Privacy Policy',
                path: '/privacy-policy',
            },
        ],
    },
];

function Footer() {
    return (
        <footer className="mt-20 rounded-t-[3rem] bg-sky-100 pt-10 pb-4 px-7">
            <section className="grid grid-cols-6 gap-x-4">
                <div className="p-3 col-span-2">
                    <a href="/" className="block h-16">
                        <Image className="h-full" src={images.logoTransparent} alt="logo" />
                    </a>
                    <p className="text-sm text-slate-700">
                        HirenGo is popular in the UK for quality service. We make sure a great rental experience by
                        providing superior services that provide to out customer's needs. It was founded in London in
                        2003.
                    </p>
                </div>
                {quickLinks.map((quickLink) => (
                    <div key={quickLink.id} className="p-3">
                        <h4 className="mb-3 text-lg">{quickLink.title}</h4>
                        <div>
                            {quickLink.links.map((link) => {
                                return (
                                    <NavLink
                                        className="hover:pl-1 ease duration-200 hover:text-sky-400 py-1 block text-sm text-slate-700"
                                        to={link.path}
                                        key={link.id}
                                    >
                                        {link.title}
                                    </NavLink>
                                );
                            })}
                        </div>
                    </div>
                ))}
                <div className="p-3 col-span-2">
                    <h4 className="mb-3 text-lg">Contact</h4>
                    <div>
                        <p className="py-1 text-sm text-slate-700">
                            <span className="text-sky-500 mr-1">Address: </span>TDTu Nguyen Huu Tho, Tan Hung, District
                            7, HCMC VietNam
                        </p>
                        <p className="py-1 text-sm text-slate-700">
                            <span className="text-sky-500 mr-1">Phone: </span>+44 7911 457842
                        </p>
                        <p className="py-1 text-sm text-slate-700">
                            <span className="text-sky-500 mr-1">Email: </span>support@hirengo.com
                        </p>
                    </div>
                </div>
            </section>
            <section className="flex items-center justify-between mt-5 py-4 px-3 border border-slate-300 rounded-lg">
                <p className="text-sm text-slate-500">© 2022 HirenGo. All right reserved</p>
                <div className="flex items-center">
                    <a
                        target="_blank"
                        className="ease duration-200 hover:opacity-80 p-2 rounded-full bg-sky-200 mr-3"
                        href="/facebook"
                    >
                        <Image src={images.facebookF} alt="facebook" />
                    </a>
                    <a
                        target="_blank"
                        className="ease duration-200 hover:opacity-80 p-2 rounded-full bg-sky-200 mr-3"
                        href="/twitter"
                    >
                        <Image src={images.twitter} alt="twitter" />
                    </a>
                    <a
                        target="_blank"
                        className="ease duration-200 hover:opacity-80 p-2 rounded-full bg-sky-200 mr-3"
                        href="/instagram"
                    >
                        <Image src={images.instagram} alt="instagram" />
                    </a>
                </div>
                <NavLink className="ease duration-200 hover:text-sky-500 text-sm text-slate-500" to="/terms&conditions">
                    Terms & Conditions
                </NavLink>
            </section>
        </footer>
    );
}

export default Footer;
