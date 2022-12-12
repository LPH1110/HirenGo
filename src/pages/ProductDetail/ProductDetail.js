import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { HeartIcon as HeartIconOutline, MapPinIcon, DocumentCheckIcon, PhoneIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartIconSolid, PlusSmallIcon, MinusSmallIcon } from '@heroicons/react/24/solid';

import Error from '../Error';
import { Button, Image } from '~/components';
import images from '~/assets';
import { useStore, actions } from '~/store';

function ProductDetail() {
    const [state, dispatch] = useStore();

    const { productId } = useParams();
    const [product, setProduct] = useState({});
    const [showErrorPage, setShowErrorPage] = useState(false);
    const [favorite, setFavorite] = useState(false);
    const [helmetQty, setHelmetQty] = useState(2);
    const [raincoatQty, setRaincoatQty] = useState(2);

    const navigate = useNavigate();

    const handleIncreaseHelmetQty = () => {
        if (helmetQty < 2) {
            setHelmetQty((prev) => prev + 1);
        }
    };
    const handleDecreaseHelmetQty = () => {
        if (helmetQty > 0) {
            setHelmetQty((prev) => prev - 1);
        }
    };

    const handleIncreaseRaincoatQty = () => {
        if (raincoatQty < 2) {
            setRaincoatQty((prev) => prev + 1);
        }
    };
    const handleDecreaseRaincoatQty = () => {
        if (raincoatQty > 0) {
            setRaincoatQty((prev) => prev - 1);
        }
    };

    const handleChooseToRent = () => {
        dispatch(
            actions.setChooseToRent({
                ...product,
                delivery: true,
                vehicleDocument: true,
                rescue: true,
                helmet: helmetQty,
                raincoat: raincoatQty,
            }),
        );
        navigate('/payment');
    };

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });

        const fetchProduct = async () => {
            try {
                const res = await axios.get(`http://localhost:3001/bikes/${productId}`);
                setProduct(res.data);
                setShowErrorPage(false);
            } catch (e) {
                setShowErrorPage(true);
                console.log(e);
            }
        };

        fetchProduct();
    }, []);

    return (
        <section className="w-screen mb-10 min-h-[26rem] px-10 mt-20">
            {showErrorPage ? (
                <Error />
            ) : (
                <div className="grid grid-cols-2 gap-x-4">
                    <div className="animate-slide-l-in">
                        <Image src={product.thumbnail} alt={product.title} />
                    </div>
                    <div className="animate-scroll-in">
                        <h4 className="text-xl font-semibold mb-4">{product.title}</h4>
                        <p className="my-4 before:select-none text-slate-700 text-md">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel massa sem. Sed sodales
                            dui ac leo luctus fermentum. Mauris venenatis, orci at pharetra ornare, felis ligula
                            lobortis dolor, ut maximus lorem massa a augue. Proin vulputate interdum pharetra. Praesent
                            sit amet turpis sed velit lobortis elementum vitae ut mi. Proin eget aliquet quam. Nam
                            dictum magna consequat, vehicula lacus a, cursus tortor. Donec vel odio maximus, ultricies
                            ligula nec, fringilla dolor. Etiam mattis finibus lectus, in gravida dolor dignissim sed.
                        </p>
                        <div className="mb-6">
                            {/* Row 1 */}
                            <div className="grid grid-cols-2 mb-4">
                                <div className="flex items-center">
                                    <span className="p-2 rounded-full border border-sky-400 mr-4 text-sky-400">
                                        <MapPinIcon className="w-5 h-5" />
                                    </span>
                                    <h4>Delivery to place</h4>
                                </div>
                                <div className="flex items-center">
                                    <span className="p-2 rounded-full border border-sky-400 mr-4 text-sky-400">
                                        <Image className="w-5 h-5" src={images.helmetIcon} />
                                    </span>
                                    <h4>{helmetQty} Helmet</h4>
                                    <div className="flex items-center ml-2 relative">
                                        <button
                                            type="button"
                                            onClick={handleDecreaseHelmetQty}
                                            className="bg-slate-200 hover:bg-slate-200/70 ease-in-out duration-200 p-1 rounded-l-full"
                                        >
                                            <span>
                                                <MinusSmallIcon className="w-5 h-5" />
                                            </span>
                                        </button>
                                        <span className="w-px h-full bg-slate-300 absolute left-1/2 -translate-x-1/2"></span>
                                        <button
                                            type="button"
                                            onClick={handleIncreaseHelmetQty}
                                            className="bg-slate-200 hover:bg-slate-200/70 ease-in-out duration-200 p-1 rounded-r-full"
                                        >
                                            <span>
                                                <PlusSmallIcon className="w-5 h-5" />
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            {/* Row 2 */}
                            <div className="grid grid-cols-2 mb-4">
                                <div className="flex items-center">
                                    <span className="p-2 rounded-full border border-sky-400 mr-4 text-sky-400">
                                        <DocumentCheckIcon className="w-5 h-5" />
                                    </span>
                                    <h4>Insurance + vehicle registration</h4>
                                </div>
                                <div className="flex items-center">
                                    <span className="p-2 rounded-full border border-sky-400 mr-4 text-sky-400">
                                        <Image className="w-5 h-5" src={images.helmetIcon} />
                                    </span>
                                    <h4>{raincoatQty} Raincoat</h4>
                                    <div className="flex items-center ml-2 relative">
                                        <button
                                            type="button"
                                            onClick={handleDecreaseRaincoatQty}
                                            className="bg-slate-200 hover:bg-slate-200/70 ease-in-out duration-200 p-1 rounded-l-full"
                                        >
                                            <span>
                                                <MinusSmallIcon className="w-5 h-5" />
                                            </span>
                                        </button>
                                        <span className="w-px h-full bg-slate-300 absolute left-1/2 -translate-x-1/2"></span>
                                        <button
                                            type="button"
                                            onClick={handleIncreaseRaincoatQty}
                                            className="bg-slate-200 hover:bg-slate-200/70 ease-in-out duration-200 p-1 rounded-r-full"
                                        >
                                            <span>
                                                <PlusSmallIcon className="w-5 h-5" />
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            {/* Row 3 */}
                            <div className="grid grid-cols-2">
                                <div className="flex items-center">
                                    <span className="p-2 rounded-full border border-sky-400 mr-4 text-sky-400">
                                        <PhoneIcon className="w-5 h-5" />
                                    </span>
                                    <h4>Rescue service</h4>
                                </div>
                            </div>
                        </div>
                        <span className="text-slate-500 font-semibold">${product.price}/day</span>
                        <div className="flex items-center mt-6">
                            <Button
                                onClick={() => setFavorite(!favorite)}
                                className="hover:opacity-90 bg-slate-100 border border-slate-400 rounded-lg"
                            >
                                {favorite ? (
                                    <HeartIconSolid className="w-5 h-5 text-red-500" />
                                ) : (
                                    <HeartIconOutline className="w-5 h-5 text-slate-400" />
                                )}
                            </Button>
                            <Button
                                type="button"
                                onClick={handleChooseToRent}
                                className="bg-sky-500 hover:bg-sky-400 text-white rounded-lg ease-in-out duration-200"
                            >
                                Rent this car
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}

export default ProductDetail;
