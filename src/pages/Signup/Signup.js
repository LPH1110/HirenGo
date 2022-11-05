import axios from 'axios';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useRef, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { Image, Toast } from '~/components';
import images from '~/assets';

function Signup() {
    const [showToast, setShowToast] = useState(false);
    const [toastBody, setToastBody] = useState({
        message: '',
        status: '',
    });
    const navigate = useNavigate();

    const authenForm = useRef();

    const initialValues = {
        email: '',
        password: '',
    };

    const validationSchema = Yup.object().shape({
        email: Yup.string().email().required(),
        password: Yup.string().min(8).required(),
    });

    const handleSubmit = async (data) => {
        try {
            const res = await axios.post('http://0.0.0.0:3001/auth/store', data);
            const { error } = res.data;

            if (!error) {
                setToastBody({ message: 'Created new account successfully!', status: 'success' });
                setTimeout(() => {
                    navigate('/login');
                }, 2000);
            } else {
                setToastBody({ message: error, status: 'error' });
            }

            setShowToast(true);
            setTimeout(() => {
                setShowToast(false);
            }, 2000);
        } catch (e) {
            console.error(e);
        }
    };

    const handleErrorMessage = (message, name) => {
        // const inputElement = authenForm.current.querySelector(`[name='${name}']`);
        // inputElement.classList.add('ring-pink-600');
        return <div className="text-pink-600">{message.replace(name, 'This field')}</div>;
    };

    return (
        <section className="flex flex-col items-center justify-center h-screen">
            <NavLink end to="/" className="mb-4 p-4 max-w-[12rem]">
                <Image src={images.logoTransparent} alt="logo" />
            </NavLink>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                <Form ref={authenForm} className="w-full max-w-[22rem]">
                    <section className="mb-6 flex flex-col">
                        <label htmlFor="email" className="text-slate-900 font-semibold">
                            Email address
                        </label>
                        <Field
                            name="email"
                            type="email"
                            className="ease duration-100 mt-[0.64rem] px-3 py-2 focus:outline-none ring-1 ring-slate-200 focus:ring-2 focus:ring-sky-400 shadow-sm rounded-md"
                        />
                        <ErrorMessage name="email">{(message) => handleErrorMessage(message, 'email')}</ErrorMessage>
                    </section>
                    <section className="mb-6 flex flex-col">
                        <label htmlFor="password" className="text-slate-900 font-semibold">
                            Password
                        </label>
                        <Field
                            name="password"
                            type="password"
                            className="ease duration-100 first-line:mt-[0.64rem] px-3 py-2 focus:outline-none ring-1 ring-slate-200 focus:ring-2 focus:ring-sky-400 shadow-sm rounded-md"
                        />
                        <ErrorMessage name="password">
                            {(message) => handleErrorMessage(message, 'password')}
                        </ErrorMessage>
                    </section>
                    <button
                        type="submit"
                        className="ease-in-out duration-200 inline-flex justify-center items-center w-full px-4 py-3.5 mt-4 font-semibold rounded-lg text-white bg-slate-900 hover:bg-slate-700"
                    >
                        Create account
                    </button>
                </Form>
            </Formik>
            <p className="p-4 mt-4">
                Already have an account?{' '}
                <NavLink to="/login" className="hover:underline hover:underline-offset-4 ml-1 text-sky-500">
                    Sign in here!
                </NavLink>
            </p>
            {showToast && <Toast message={toastBody.message} status={toastBody.status} />}
        </section>
    );
}

export default Signup;
