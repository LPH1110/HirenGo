import { NavLink } from 'react-router-dom';
import { Button, Image, ReceiptCard } from '~/components';
import images from '~/assets';

function Dashboard() {
    return (
        <section className="grid grid-cols-12">
            <section className="rounded-r-xl shadow-[0_5px_24px_0_rgba(148,163,184,0.8)]">
                <nav className="py-4 rounded-r-xl h-screen flex flex-col items-center bg-white ">
                    <NavLink className="ease-in-out duration-200 hover:bg-slate-100 rounded-xl py-3 px-4 text-slate-700">
                        Receipt
                    </NavLink>
                </nav>
            </section>
            <section className="ml-8 h-screen bg-white col-span-11">
                <header className="flex justify-end p-3">
                    <div className="w-12 h-12 mr-4 bg-transparent flex justify-center items-center">
                        <Image className="rounded-full w-full" src={images.avatar1} alt="avatar" />
                    </div>
                </header>
                <section>
                    <ReceiptCard />
                </section>
            </section>
        </section>
    );
}

export default Dashboard;
