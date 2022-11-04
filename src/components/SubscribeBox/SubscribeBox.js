import { Image, Button } from '~/components';
import images from '~/assets';

function SubscribeBox() {
    return (
        <section className="flex justify-center my-8">
            <div className="shadow-[0_5px_24px_0_rgba(148,163,184,0.6)] rounded-[2rem] z-0 flex flex-col items-center py-5 px-[5.75rem] bg-slate-100 w-[66%]">
                <h1 className="font-bold text-2xl">Subscribe Our newsletter</h1>
                <p className="mt-4 mb-6 text-sm">
                    Subcribe out newsletter to get the lastest news, updates, and promotial offers
                </p>
                <div className="mb-2 flex items-center justify-between w-full">
                    <div className="focus-within:outline-none ring-1 ring-slate-200 focus-within:ring-2 focus-within:ring-sky-400 shadow-sm mr-4 flex-1 rounded-lg p-2 bg-white flex items-center">
                        <span className="ml-1 mr-2">
                            <Image className="text-slate-700" src={images.envelope} alt="envelope" />
                        </span>
                        <input
                            className="w-full text-slate-600 outline-none bg-transparent"
                            placeholder="Enter email address"
                            type="email"
                        />
                    </div>
                    <Button className="h-full ease-in-out duration-200 hover:bg-sky-400 bg-sky-500 text-slate-100 rounded-lg">
                        Subscribe
                    </Button>
                </div>
            </div>
        </section>
    );
}

export default SubscribeBox;
