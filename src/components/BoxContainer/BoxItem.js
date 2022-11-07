import classNames from 'classnames/bind';
import styles from './BoxContainer.module.scss';
import { Field } from 'formik';
import Tippy from '@tippyjs/react/headless';
import { useStore, actions } from '~/store';
import DateRange from '../DateRange';

const cx = classNames.bind(styles);

const pickUpLocations = [
    {
        id: 0,
        title: 'TPHCM, Viet Nam',
        description: 'SGN - Sân bay Tân Sơn Nhất',
        key: 'TPHCM (SGN)',
    },
    {
        id: 1,
        title: 'Tokyo, Nhật Bản',
        description: 'TYOA - Tất cả sân bay ở Tokyo',
        key: 'Tokyo (TYOA)',
    },
    {
        id: 2,
        title: 'Đà Nẵng, Viet Nam',
        description: 'DAD - Sân bay Đà Nẵng',
        key: 'Đà Nẵng (DAD)',
    },
];

function BoxItem({ values, data }) {
    const [state, dispatch] = useStore();
    const { searchProductForm } = state;

    const dispatchProductForm = (key, value) => {
        dispatch(actions.setSearchProductForm(key, value));
    };

    const Component = () => {
        switch (data.name) {
            case 'pickUpLocation':
            case 'returnLocation':
                return (
                    <div className="rounded-lg min-w-[23.5rem]">
                        {pickUpLocations.map((location) => (
                            <div
                                key={location.id}
                                onClick={() => dispatchProductForm(data.name, location.key)}
                                className="hover:bg-sky-100 ease duration-100 cursor-pointer text-slate-700 py-2 px-4"
                            >
                                <h4 className="text-md font-semibold">{location.title}</h4>
                                <p className="text-sm">{location.description}</p>
                            </div>
                        ))}
                    </div>
                );
            case 'pickUpDate':
            case 'returnDate':
                return (
                    <>
                        <DateRange data={data} />
                    </>
                );
            default:
                return <></>;
        }
    };
    return (
        <div className={cx('inner')}>
            <h4 className="font-semibold mb-2 border-l border-transparent">{data.label}</h4>
            <Tippy
                placement="bottom-start"
                trigger="click"
                interactive
                render={(attrs) => (
                    <div
                        className="rounded-lg box max-w-full bg-white shadow-[0_5px_24px_0_rgba(148,163,184,0.6)]"
                        tabIndex="-1"
                        {...attrs}
                    >
                        <Component />
                    </div>
                )}
            >
                <div className="ease-out-in duration-100 focus-within:outline-none ring-1 ring-slate-200 focus-within:ring-2 focus-within:ring-sky-400 border border-slate-200 rounded-lg px-2 py-3 flex items-center bg-white">
                    <span className="text-sm text-slate-400 mr-2 flex items-center">{data.icon}</span>
                    <Field
                        value={searchProductForm[data.name]}
                        id={data.name}
                        className="text-sm w-full outline-none"
                        placeholder={data.placeholder}
                        readOnly
                    />
                </div>
            </Tippy>
        </div>
    );
}

export default BoxItem;
