import { useState } from 'react';
import { PencilIcon } from '@heroicons/react/24/outline';
import classNames from 'classnames/bind';
import styles from './ConfirmationForm.module.scss';
import Loading from './Loading';

const cx = classNames.bind(styles);

function ConfirmationForm({ data, setForward }) {
    const [loading, setLoading] = useState(false);

    const handlePlaceOrder = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 6000);
    };

    return (
        <section className="animate-slide-l-in p-6 shadow-[0_7px_29px_0px_rgba(100,100,111,0.2)] rounded-xl bg-white col-span-2">
            {loading ? (
                <Loading />
            ) : (
                <div>
                    <div className="flex items-center justify-between">
                        <h4 className="text-xl font-semibold">Confirmation Order</h4>
                        <button
                            onClick={() => setForward(false)}
                            type="button"
                            className="p-2 rounded-full border border-slate-200 text-slate-200 hover:text-slate-500 hover:border-slate-500 ease duration-200"
                        >
                            <span>
                                <PencilIcon className="w-5 h-5" />
                            </span>
                        </button>
                    </div>
                    <div className="my-4">
                        <div className={cx('row', 'flex items-center text-lg')}>
                            <h4 className="font-semibold text-slate-500">Customer name: </h4>
                            <p className="ml-3">{data.firstName + ' ' + data.lastName}</p>
                        </div>
                        <div className={cx('row', 'flex items-center text-lg')}>
                            <h4 className="font-semibold text-slate-500">Pickup address: </h4>
                            <p className="ml-3">{data.pickupAddress}</p>
                        </div>
                        <div className={cx('row', 'flex items-center text-lg')}>
                            <h4 className="font-semibold text-slate-500">Pickup Date: </h4>
                            <p className="ml-3">{data.pickupDate}</p>
                        </div>
                        <div className={cx('row', 'flex items-center text-lg')}>
                            <h4 className="font-semibold text-slate-500">Return address: </h4>
                            <p className="ml-3">{data.returnAddress}</p>
                        </div>
                        <div className={cx('row', 'flex items-center text-lg')}>
                            <h4 className="font-semibold text-slate-500">Return Date: </h4>
                            <p className="ml-3">{data.returnDate}</p>
                        </div>
                        <div className={cx('row', 'flex items-center text-lg')}>
                            <h4 className="font-semibold text-slate-500">Your email: </h4>
                            <p className="ml-3">{data.email}</p>
                        </div>
                        <div className={cx('row', 'flex items-center text-lg')}>
                            <h4 className="font-semibold text-slate-500">Contact number: </h4>
                            <p className="ml-3">+84 {data.phoneNumber}</p>
                        </div>
                    </div>
                    <div className="flex justify-end py-2 mt-6">
                        <button
                            onClick={handlePlaceOrder}
                            type="button"
                            className="hover:bg-sky-400 hover:scale-105 ease-in-out duration-200 p-4 rounded-lg bg-sky-500 text-white font-semibold"
                        >
                            Place order
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
}

export default ConfirmationForm;
