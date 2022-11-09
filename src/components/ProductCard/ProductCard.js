import { Image, Button } from '~/components';
import classNames from 'classnames/bind';
import styles from './ProductCard.module.scss';
import { MapPinIcon } from '@heroicons/react/24/outline';

const cx = classNames.bind(styles);

function ProductCard({ data }) {
    return (
        <div className="bg-white border-2 border-slate-100 hover:border-sky-400 ease-in-out duration-100 p-4 rounded-lg">
            <h4 className="font-semibold text-slate-800 text-normal mb-2">{data.title}</h4>
            <div>
                <Image className="w-full max-h-[8rem]" src={data.thumbnail} alt={data.title} />
            </div>
            <div className="mt-2 flex justify-between items-center">
                <span className="h-full text-sm text-slate-800 font-semibold">${data.price}/Day</span>
                <p className="text-sm text-slate-600 flex items-center">
                    <MapPinIcon className="w-4 h-4 mr-1" /> Hà Nội
                </p>
            </div>

            <Button
                to={`/products/${data._id}`}
                className="w-full bg-sky-500 hover:bg-sky-400 ease-in-out duration-200 text-slate-100 rounded-lg mt-4"
            >
                Rent this car
            </Button>
        </div>
    );
}

export default ProductCard;
