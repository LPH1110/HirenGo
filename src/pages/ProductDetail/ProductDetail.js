import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { HeartIcon as HeartIconOutline } from '@heroicons/react/24/outline';
import { HeartIcon as HeartIconSolid } from '@heroicons/react/24/solid';

import Error from '../Error';
import { Button, Image } from '~/components';

function ProductDetail() {
    const { productId } = useParams();
    const [product, setProduct] = useState({});
    const [showErrorPage, setShowErrorPage] = useState(false);
    const [favorite, setFavorite] = useState(false);

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
                        <p className="my-4 before:select-none text-sm text-slate-700">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel massa sem. Sed sodales
                            dui ac leo luctus fermentum. Mauris venenatis, orci at pharetra ornare, felis ligula
                            lobortis dolor, ut maximus lorem massa a augue. Proin vulputate interdum pharetra. Praesent
                            sit amet turpis sed velit lobortis elementum vitae ut mi. Proin eget aliquet quam. Nam
                            dictum magna consequat, vehicula lacus a, cursus tortor. Donec vel odio maximus, ultricies
                            ligula nec, fringilla dolor. Etiam mattis finibus lectus, in gravida dolor dignissim sed.
                        </p>
                        <span className="text-slate-500 font-semi-bold">${product.price}/day</span>
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
                            <Button className="bg-sky-500 hover:bg-sky-400 text-white rounded-lg ease-in-out duration-200">
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
