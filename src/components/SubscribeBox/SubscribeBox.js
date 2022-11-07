import { Button, Toast } from '~/components';
import classNames from 'classnames/bind';
import { createRef, useState } from 'react';
import styles from './SubscribeBox.module.scss';

const cx = classNames.bind(styles);

function SubscribeBox() {
    const toastRef = createRef();
    const [showToast, setShowToast] = useState(false);
    const [toastBody, setToastBody] = useState({
        message: '',
        status: 'default',
    });

    const handleSubscribe = () => {
        setShowToast(true);
        setToastBody({ message: 'You have subscribed successfully!', status: 'success' });
        setTimeout(() => {
            setShowToast(false);
        }, 3000);
    };

    return (
        <section className="flex justify-center my-8">
            <div className="shadow-[0_5px_24px_0_rgba(148,163,184,0.6)] rounded-[2rem] z-0 flex flex-col items-center py-5 px-[5.75rem] bg-slate-100 w-[66%]">
                <h1 className="font-bold text-2xl">Subscribe Our newsletter</h1>
                <p className="mt-4 mb-6 text-sm">
                    Subcribe out newsletter to get the lastest news, updates, and promotial offers
                </p>
                <div className="mb-2 flex items-center justify-between w-full">
                    <div
                        className={cx(
                            'input-container',
                            'focus-within:outline-none ring-1 ring-slate-200 focus-within:ring-2 focus-within:ring-sky-400 shadow-sm mr-4 flex-1 rounded-lg p-2 bg-white flex items-center',
                        )}
                    >
                        <span className="text-slate-400 ml-1 mr-2">
                            <i className="flex fi fi-rr-envelope"></i>
                        </span>
                        <input
                            className="w-full text-slate-600 outline-none bg-transparent"
                            placeholder="Enter email address"
                            type="email"
                        />
                    </div>
                    <Button
                        onClick={handleSubscribe}
                        className="h-full ease-in-out duration-200 hover:bg-sky-400 bg-sky-500 text-slate-100 rounded-lg"
                    >
                        Subscribe
                    </Button>
                </div>
            </div>
            {showToast && (
                <Toast className={cx('toast')} ref={toastRef} message={toastBody.message} status={toastBody.status} />
            )}
        </section>
    );
}

export default SubscribeBox;
