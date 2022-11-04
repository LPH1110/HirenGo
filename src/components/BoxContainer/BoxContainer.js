import Button from '../Button';
import BoxItem from './BoxItem';
import classNames from 'classnames/bind';
import styles from './BoxContainer.module.scss';

const cx = classNames.bind(styles);

const boxItems = [
    {
        id: 0,
        label: 'Pick Up Location',
        icon: <i className="flex fi fi-rs-marker"></i>,
        placeholder: 'Kingston upon Hull',
    },
    {
        id: 1,
        label: 'Return Location',
        icon: <i className="flex fi fi-rs-marker"></i>,
        placeholder: 'Heathrow Airport',
    },
    {
        id: 2,
        label: 'Pick Up Date',
        icon: <i className="flex fi fi-rr-calendar-lines"></i>,
        placeholder: '03/08/2022',
    },
    {
        id: 3,
        label: 'Return Date',
        icon: <i className="flex fi fi-rr-calendar-lines"></i>,
        placeholder: '03/08/2022',
    },
];

function BoxContainer() {
    return (
        <div className="bg-sky-100 px-10 py-10 flex items-center justify-between">
            <div className="bg-white shadow-[0_5px_24px_0_rgba(148,163,184,0.6)] py-10 px-10 rounded-[2rem] flex items-end">
                <div className="flex items-center">
                    {boxItems.map((box) => (
                        <BoxItem key={box.id} data={box} />
                    ))}
                </div>
                <Button
                    className={cx(
                        'searchBtn',
                        'bg-sky-500 hover:bg-sky-400 ease-in-out duration-200 rounded-lg text-slate-100 ml-6',
                    )}
                    type="medium"
                >
                    Search Car
                </Button>
            </div>
        </div>
    );
}

export default BoxContainer;
