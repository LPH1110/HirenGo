import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './Loading.module.scss';
import { CheckIcon } from '@heroicons/react/24/solid';

const cx = classNames.bind(styles);

function Loading() {
    const [showSuccess, setShowSuccess] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setShowSuccess(true);
        }, 3000);
    }, []);

    return (
        <div className="flex justify-center items-center w-full h-full">
            {!showSuccess ? (
                <div className={cx('lds-ring')}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            ) : (
                <div className="flex justify-items-center">
                    <span className="mr-3">
                        <CheckIcon className="w-8 h-8 text-emerald-400" />
                    </span>

                    <h4 className="text-2xl">Order Successfully!</h4>
                </div>
            )}
        </div>
    );
}

export default Loading;
