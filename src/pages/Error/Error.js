import { Button } from '~/components';
import { useEffect } from 'react';
import { HomeIcon } from '@heroicons/react/24/outline';

function Error() {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });
    }, []);
    return (
        <section className="w-screen mb-10 min-h-[26rem] px-10 mt-6 flex flex-col items-center justify-center">
            <h1 className="text-sky-500 text-3xl font-semibold">Oops! Something went wrong...</h1>
            <p className="m-4 text-slate-700">The site is under development. Please comback another time, thank you!</p>

            <Button
                className="flex bg-sky-500 hover:bg-sky-400 text-slate-100 rounded-lg ease-in-out duration-200"
                to="/"
                leftIcon={<HomeIcon className="w-4 h-4" />}
            >
                Go Home
            </Button>
        </section>
    );
}

export default Error;
