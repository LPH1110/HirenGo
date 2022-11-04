import classNames from 'classnames/bind';
import styles from './BoxContainer.module.scss';

const cx = classNames.bind(styles);

function BoxItem({ data }) {
    return (
        <div className={cx('inner')}>
            <h4 className="font-semibold mb-2 border-l border-transparent">{data.label}</h4>
            <div className="ease-out-in duration-100 focus-within:outline-none ring-1 ring-slate-200 focus-within:ring-2 focus-within:ring-sky-400 border border-slate-200 rounded-lg px-2 py-3 flex items-center bg-white">
                <span className="text-sm text-slate-400 mr-2 flex items-center">{data.icon}</span>
                <input className="text-sm w-full outline-none" readOnly placeholder={data.placeholder} />
            </div>
        </div>
    );
}

export default BoxItem;
