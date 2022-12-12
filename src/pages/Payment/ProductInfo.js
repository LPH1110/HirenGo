import { CheckCircleIcon } from '@heroicons/react/24/outline';

function ProductInfo({ data, servicePrice, totalRentPrice }) {
    console.log(data);

    return (
        <section className="animate-scroll-in p-6 shadow-[0_7px_29px_0px_rgba(100,100,111,0.2)] rounded-xl bg-white">
            <h1 className="text-xl font-semibold text-slate-700">{data.title}</h1>
            <table className="table w-full my-4">
                <thead>
                    <tr>
                        <th className="text-left">Service</th>
                        <th className="text-center">Quantity</th>
                        <th className="text-right">Price per day</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th className="text-slate-700">Helmet</th>
                        <td className="text-center">{data.helmet}</td>
                        <td className="text-right">$ {servicePrice.helmet}</td>
                    </tr>
                    <tr>
                        <th className="text-slate-700">Raincoat</th>
                        <td className="text-center">{data.raincoat}</td>
                        <td className="text-right">$ {servicePrice.raincoat}</td>
                    </tr>
                </tbody>
            </table>
            <div className="my-4">
                <div className="flex items-center text-md">
                    <span className="mr-2">
                        <CheckCircleIcon className="text-emerald-500 w-6 h-6" />
                    </span>
                    <h4 className="text-slate-500">Delivery to place</h4>
                </div>
                <div className="flex items-center text-md my-2">
                    <span className="mr-2">
                        <CheckCircleIcon className="text-emerald-500 w-6 h-6" />
                    </span>
                    <h4 className="text-slate-500">Insurance + vehicle registration</h4>
                </div>
                <div className="flex items-center text-md">
                    <span className="mr-2">
                        <CheckCircleIcon className="text-emerald-500 w-6 h-6" />
                    </span>
                    <h4 className="text-slate-500">Available 24/7 to rescue</h4>
                </div>
            </div>
            <div className="flex justify-end">
                <h4 className="flex font-semibold text-2xl">
                    Total:
                    <p className="text-red-400 ml-3">
                        ${totalRentPrice()}
                        <span className="text-slate-500 font-normal text-sm">/day</span>
                    </p>
                </h4>
            </div>
        </section>
    );
}

export default ProductInfo;
