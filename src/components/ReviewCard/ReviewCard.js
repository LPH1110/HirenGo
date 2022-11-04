import { Image } from '~/components';
import images from '~/assets';
import classNames from 'classnames/bind';
import styles from './ReviewCard.module.scss';

const cx = classNames.bind(styles);

function ReviewCard({ rating, content, thumbnail, userName, userTitle }) {
    return (
        <div className="bg-slate-100 p-4 rounded-lg">
            <div className="flex items-center justify-start">
                <Image className={cx('star')} src={images.starTransparent} alt="star" />
                <Image className={cx('star')} src={images.starTransparent} alt="star" />
                <Image className={cx('star')} src={images.starTransparent} alt="star" />
                <Image className={cx('star')} src={images.starTransparent} alt="star" />
                <Image className={cx('star')} src={images.starTransparent} alt="star" />
            </div>
            <div className="my-3 text-sm text-slate-500">{content}</div>
            <div className="flex items-center">
                <div className="w-12 h-12 mr-4 bg-transparent flex justify-center items-center">
                    <Image className="rounded-full w-full" src={thumbnail} alt="avatar" />
                </div>
                <div className="flex-1">
                    <h4 className="font-semibold">{userName}</h4>
                    <span className="text-slate-500">{userTitle}</span>
                </div>
            </div>
        </div>
    );
}

export default ReviewCard;
