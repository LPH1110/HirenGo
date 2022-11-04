import { Image, Button } from '~/components';
import classNames from 'classnames/bind';
import styles from './ProductCard.module.scss';

const cx = classNames.bind(styles);

function ProductCard({ data }) {
    return (
        <div className="bg-white border-2 border-slate-100 hover:border-sky-400 ease-in-out duration-100 p-4 rounded-lg">
            <h4 className="font-semibold text-normal mb-2">{data.title}</h4>
            <div>
                <Image className="w-full max-h-[8rem]" src={data.thumbnail} alt={data.title} />
            </div>
            <div className="mt-2">
                <span className="w-full h-full text-sm font-semibold">${data.price}/Day</span>
            </div>
            <Button className="w-full bg-sky-500 hover:bg-sky-400 ease-in-out duration-200 text-slate-100 rounded-lg mt-4">
                Rent this car
            </Button>
        </div>
    );
}

export default ProductCard;
