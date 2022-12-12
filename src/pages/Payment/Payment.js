import { useState, useCallback } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import classNames from 'classnames/bind';
import styles from './Payment.module.scss';
import { CalendarIcon } from '@heroicons/react/24/outline';
import { useStore } from '~/store';
import PopperWrapper from '~/components/PopperWrapper';
import { format } from 'date-fns';
import ProductInfo from './ProductInfo';
import ConfirmationForm from './ConfirmationForm';

const cx = classNames.bind(styles);

const servicePrice = {
    helmet: 0.5,
    raincoat: 0.5,
};

function Payment() {
    const [forward, setForward] = useState(false);
    const [paymentInfo, setPaymentInfo] = useState({});
    const [state, dispatch] = useStore();
    const { chooseToRent } = state;
    const [paymentForm, setPaymentForm] = useState({
        firstName: '',
        lastName: '',
        pickupAddress: '',
        returnAddress: '',
        pickupDate: format(new Date(), 'dd/MM/yyyy'),
        returnDate: format(new Date(), 'dd/MM/yyyy'),
        email: '',
        phoneNumber: '',
    });

    const handleOnChange = (field, value) => {
        setPaymentForm((prev) => ({
            ...prev,
            [field]: value,
        }));
    };

    const validationSchema = yup.object().shape({
        firstName: yup.string(),
        lastName: yup.string(),
        pickupAddress: yup.string(),
        returnAddress: yup.string(),
        pickupDate: yup.string(),
        returnDate: yup.string(),
        email: yup.string().email(),
        phoneNumber: yup.string(),
    });

    const totalRentPrice = useCallback(() => {
        return (
            Number(chooseToRent.price) +
            chooseToRent.helmet * servicePrice.helmet +
            chooseToRent.raincoat * servicePrice.raincoat
        );
    }, []);

    const handleSubmit = (data) => {
        setPaymentInfo({ ...chooseToRent, ...paymentForm, totalPrice: totalRentPrice() });
        setForward(true);
    };

    return (
        <div className="w-screen mb-10 min-h-[26rem] px-10 mt-20">
            <section className="grid grid-cols-3 gap-x-9">
                {!forward ? (
                    <section className="animate-slide-l-in p-6 shadow-[0_7px_29px_0px_rgba(100,100,111,0.2)] rounded-xl bg-white col-span-2">
                        <Formik onSubmit={handleSubmit} initialValues={paymentForm} validationSchema={validationSchema}>
                            <Form>
                                {/* Row 1 */}
                                <div className={cx('row', 'grid grid-cols-2 gap-x-6')}>
                                    <div className="flex flex-col">
                                        <label htmlFor="lastName">Last name</label>
                                        <Field
                                            autoComplete="off"
                                            id="lastName"
                                            name="lastName"
                                            value={paymentForm.lastName}
                                            onChange={(e) => handleOnChange('lastName', e.target.value)}
                                            className="ease duration-200 p-2 border border-slate-100 focus-within:border-sky-500 rounded-md"
                                        />
                                        <ErrorMessage name="lastName">
                                            {(message) => <span className="text-red-300">{message}</span>}
                                        </ErrorMessage>
                                    </div>
                                    <div className="flex flex-col">
                                        <label htmlFor="firstName">First name</label>
                                        <Field
                                            autoComplete="off"
                                            id="firstName"
                                            name="firstName"
                                            value={paymentForm.firstName}
                                            onChange={(e) => handleOnChange('firstName', e.target.value)}
                                            className="ease duration-200 p-2 border border-slate-100  focus-within:border-sky-500 rounded-md"
                                        />
                                        <ErrorMessage name="firstName">
                                            {(message) => <span className="text-red-300">{message}</span>}
                                        </ErrorMessage>
                                    </div>
                                </div>

                                {/* Row 2 */}
                                <div className={cx('row', 'grid grid-cols-3 gap-x-6')}>
                                    <div className="flex flex-col col-span-2">
                                        <label htmlFor="pickupAddress">Pick up address</label>
                                        <Field
                                            autoComplete="off"
                                            name="pickupAddress"
                                            id="pickupAddress"
                                            onChange={(e) => handleOnChange('pickupAddress', e.target.value)}
                                            value={paymentForm.pickupAddress}
                                            className="ease duration-200 p-2 border border-slate-100  focus-within:border-sky-500 rounded-md"
                                        />
                                        <ErrorMessage name="pickupAddress">
                                            {(message) => <span className="text-red-300">{message}</span>}
                                        </ErrorMessage>
                                    </div>
                                    <div className="flex flex-col">
                                        <label htmlFor="pickupDate">Pick up date</label>
                                        <PopperWrapper
                                            calendarPopper
                                            onDispatch={{ field: 'pickupDate', handleOnChange }}
                                        >
                                            <div className="flex items-center ease duration-200 p-2 border border-slate-100  focus-within:border-sky-500 rounded-md">
                                                <button type="button" className="mr-2">
                                                    <span>
                                                        <CalendarIcon className="w-5 h-5 text-sky-500" />
                                                    </span>
                                                </button>
                                                <Field
                                                    autoComplete="off"
                                                    value={paymentForm.pickupDate}
                                                    readOnly
                                                    name="pickupDate"
                                                    id="pickupDate"
                                                    className="w-full"
                                                />
                                            </div>
                                        </PopperWrapper>
                                        <ErrorMessage name="pickupDate">
                                            {(message) => <span className="text-red-300">{message}</span>}
                                        </ErrorMessage>
                                    </div>
                                </div>

                                {/* Row 3 */}
                                <div className={cx('row', 'grid grid-cols-3 gap-x-6')}>
                                    <div className="flex flex-col col-span-2">
                                        <label htmlFor="returnAddress">Return address</label>
                                        <Field
                                            autoComplete="off"
                                            name="returnAddress"
                                            id="returnAddress"
                                            value={paymentForm.returnAddress}
                                            onChange={(e) => handleOnChange('returnAddress', e.target.value)}
                                            className="ease duration-200 p-2 border border-slate-100  focus-within:border-sky-500 rounded-md"
                                        />
                                        <ErrorMessage name="returnAddress">
                                            {(message) => <span className="text-red-300">{message}</span>}
                                        </ErrorMessage>
                                    </div>
                                    <div className="flex flex-col">
                                        <label htmlFor="pickupDate">Return date</label>
                                        <PopperWrapper
                                            calendarPopper
                                            onDispatch={{ field: 'returnDate', handleOnChange }}
                                        >
                                            <div className="flex items-center ease duration-200 p-2 border border-slate-100  focus-within:border-sky-500 rounded-md">
                                                <button type="button" className="mr-2">
                                                    <span>
                                                        <CalendarIcon className="w-5 h-5 text-sky-500" />
                                                    </span>
                                                </button>
                                                <Field
                                                    autoComplete="off"
                                                    value={paymentForm.returnDate}
                                                    readOnly
                                                    name="pickupDate"
                                                    id="pickupDate"
                                                    className="w-full"
                                                />
                                            </div>
                                        </PopperWrapper>
                                        <ErrorMessage name="pickupDate">
                                            {(message) => <span className="text-red-300">{message}</span>}
                                        </ErrorMessage>
                                    </div>
                                </div>

                                {/* Row 3 */}
                                <div className={cx('row', 'grid grid-cols-3 gap-x-6')}>
                                    <div className="flex flex-col col-span-2">
                                        <label htmlFor="email">Your email</label>
                                        <Field
                                            autoComplete="off"
                                            name="email"
                                            id="email"
                                            value={paymentForm.email}
                                            onChange={(e) => handleOnChange('email', e.target.value)}
                                            className="ease duration-200 p-2 border border-slate-100  focus-within:border-sky-500 rounded-md"
                                        />
                                        <ErrorMessage name="email">
                                            {(message) => <span className="text-red-300">{message}</span>}
                                        </ErrorMessage>
                                    </div>
                                    <div className="flex flex-col">
                                        <label htmlFor="phoneNumber">Phone number</label>
                                        <div className="flex items-center ease duration-200 p-2 border border-slate-100  focus-within:border-sky-500 rounded-md">
                                            <button type="button" className="mr-2">
                                                <span>+84</span>
                                            </button>
                                            <Field
                                                autoComplete="off"
                                                value={paymentForm.phoneNumber}
                                                onChange={(e) => handleOnChange('phoneNumber', e.target.value)}
                                                name="phoneNumber"
                                                id="phoneNumber"
                                                className="w-full"
                                            />
                                        </div>
                                        <ErrorMessage name="phoneNumber">
                                            {(message) => <span className="text-red-300">{message}</span>}
                                        </ErrorMessage>
                                    </div>
                                </div>

                                {/* Next step */}
                                <div className="flex justify-end py-2 mt-6">
                                    <button
                                        type="submit"
                                        className="hover:bg-sky-400 hover:scale-105 ease-in-out duration-200 p-4 rounded-lg bg-sky-500 text-white font-semibold"
                                    >
                                        Continue next step
                                    </button>
                                </div>
                            </Form>
                        </Formik>
                    </section>
                ) : (
                    <ConfirmationForm data={paymentInfo} setForward={setForward} />
                )}
                <ProductInfo totalRentPrice={totalRentPrice} servicePrice={servicePrice} data={chooseToRent} />
            </section>
        </div>
    );
}

export default Payment;
