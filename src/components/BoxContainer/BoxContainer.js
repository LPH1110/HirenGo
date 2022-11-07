import classNames from 'classnames/bind';
import { Form, Formik } from 'formik';
import { useStore } from '~/store';
import styles from './BoxContainer.module.scss';
import BoxItem from './BoxItem';
import { format } from 'date-fns';
import { actions } from '~/store';

const cx = classNames.bind(styles);

const boxItems = [
    {
        id: 0,
        label: 'Pick Up Location',
        name: 'pickUpLocation',
        icon: <i className="flex fi fi-rs-marker"></i>,
        placeholder: 'Kingston upon Hull',
    },
    {
        id: 1,
        label: 'Return Location',
        name: 'returnLocation',

        icon: <i className="flex fi fi-rs-marker"></i>,
        placeholder: 'Heathrow Airport',
    },
    {
        id: 2,
        label: 'Pick Up Date',
        name: 'pickUpDate',
        icon: <i className="flex fi fi-rr-calendar-lines"></i>,
        placeholder: format(new Date(), 'dd/MM/yyyy'),
    },
    {
        id: 3,
        label: 'Return Date',
        name: 'returnDate',
        icon: <i className="flex fi fi-rr-calendar-lines"></i>,
        placeholder: format(new Date(), 'dd/MM/yyyy'),
    },
];

function BoxContainer() {
    const [state, dispatch] = useStore();
    const { searchProductForm } = state;

    const handleSubmit = (data) => {
        console.log(data);
    };

    return (
        <div className="bg-sky-100 px-10 py-10 flex items-center justify-center">
            <div className="bg-white shadow-[0_5px_24px_0_rgba(148,163,184,0.6)] py-10 px-10 rounded-[2rem]">
                <Formik initialValues={searchProductForm} onSubmit={handleSubmit}>
                    <Form className="flex items-end">
                        <div className="flex items-center">
                            {boxItems.map((box) => (
                                <BoxItem values={searchProductForm} key={box.id} data={box} />
                            ))}
                        </div>
                        <button
                            type="submit"
                            className="min-w-[8rem] px-2 py-3 font-semibold bg-sky-500 text-md hover:bg-sky-400 ease-in-out duration-200 rounded-lg text-slate-100 ml-6"
                        >
                            Search Car
                        </button>
                    </Form>
                </Formik>
            </div>
        </div>
    );
}

export default BoxContainer;
