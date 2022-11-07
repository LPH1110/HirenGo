import { Button, Image } from '~/components';
import images from '~/assets';

function Landing() {
    return (
        <section className="mb-10 px-10 h-[30rem] flex items-center justify-between mt-6">
            <div className="w-[40%]">
                <h1 className="text-4xl font-semibold">Easy and fast way to rent your car</h1>
                <p className="my-5 text-sm">
                    HirenGo is the most used car rental service in UK. Based on ratings and reviews from real users.
                    HirenGo is the top-ranked car rental service company. If you are planning to rent a car you can
                    trust us.
                </p>
                <Button
                    to="/error"
                    size="medium"
                    className="shadow-[0_5px_19px_0_rgba(56,189,248,0.8)] mt-3 ease duration-200 text-slate-100 rounded-full bg-sky-500 hover:bg-sky-400"
                >
                    Book a car
                </Button>
            </div>
            <div className="flex justify-between animate-scroll-in">
                <Image src={images.landingWallpaper} alt="landing-wallpaper" />
            </div>
        </section>
    );
}

export default Landing;
