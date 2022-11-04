import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { Image } from '~/components';
import images from '~/assets';
import classNames from 'classnames/bind';
import styles from './HorizontalSlider.module.scss';

const cx = classNames.bind(styles);

function PrevArrow({ className, style, onClick }) {
    return (
        <div
            className={cx(
                'prevArrow',
                className,
                `z-10 rounded-full hover:opacity-80 shadow-[0_5px_12px_0_rgba(56,189,248,0.8)] ease duration-200`,
            )}
            style={{ ...style }}
            onClick={onClick}
        >
            <Image src={images.prevArrow} />
        </div>
    );
}

function NextArrow({ className, style, onClick }) {
    return (
        <div
            className={cx(
                'nextArrow',
                className,
                'z-10 rounded-full hover:opacity-80 shadow-[0_5px_12px_0_rgba(56,189,248,0.8)] ease duration-200',
            )}
            style={{ ...style }}
            onClick={onClick}
        >
            <Image src={images.nextArrow} />
        </div>
    );
}

function HorizontalSlider({ settings, children, autoplay }) {
    const config = {
        ...settings,
        autoplay,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
    };
    return (
        <Slider className="mx-6 px-4" autoplaySpeed={3000} {...config}>
            {children}
        </Slider>
    );
}

export default HorizontalSlider;
