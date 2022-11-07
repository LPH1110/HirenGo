import { createRef, useEffect, useState } from 'react';
import axios from 'axios';
import { useStore } from '~/store';
import Button from '../Button';
import NotFound from '../NotFound';
import { default as HorizontalSlider } from '../HorizontalSlider';
import ListBoxWrapper from '../ListBoxWrapper';
import { default as ProductCard } from '../ProductCard';

const filters = [
    {
        id: 0,
        title: 'Brand',
        items: [
            {
                id: 0,
                name: 'Yamaha',
            },
            {
                id: 1,
                name: 'Honda',
            },
            {
                id: 2,
                name: 'Suzuki',
            },
            {
                id: 3,
                name: 'Triumph',
            },
            {
                id: 4,
                name: 'Ducati',
            },
        ],
    },
    {
        id: 1,
        title: 'Type',
        items: [
            {
                id: 0,
                name: 'Scooter',
            },
            {
                id: 1,
                name: 'Manual',
            },
            {
                id: 2,
                name: 'Manual clutch',
            },
            {
                id: 3,
                name: 'Sport',
            },
        ],
    },
    {
        id: 2,
        title: 'Color',
        items: [
            {
                id: 0,
                name: 'Red',
            },
            {
                id: 1,
                name: 'Blue',
            },
            {
                id: 2,
                name: 'White',
            },
            {
                id: 3,
                name: 'Black',
            },
        ],
    },
];

function Products() {
    const filterRef = createRef();
    const [state, dispatch] = useStore();
    const { filterForm } = state;
    const [products, setProducts] = useState([]);
    const [notFound, setShowNotFound] = useState(true);
    const [slidesToShow, setSlidesToShow] = useState(0);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await axios.post('http://localhost:3001/bikes/filter', filterForm);
                setProducts(res.data);
                setSlidesToShow(() => (res.data.length < 4 ? res.data.length : 4));
                if (res.data.length === 0) {
                    setShowNotFound(true);
                } else {
                    setShowNotFound(false);
                }
            } catch (e) {
                setShowNotFound(true);
                console.error(e);
            }
        };

        fetchProducts();
    }, []);

    const settings = {
        infinite: true,
        slidesToShow,
        slidesToScroll: 1,
        speed: 3000,
    };

    const handleApplyFilters = async () => {
        try {
            const res = await axios.post('http://localhost:3001/bikes/filter', filterForm);
            setProducts(res.data);
            setSlidesToShow(() => (res.data.length < 4 ? res.data.length : 4));
            if (res.data.length === 0) {
                setShowNotFound(true);
            } else {
                setShowNotFound(false);
            }
        } catch (e) {
            setShowNotFound(true);
            console.error(e);
        }
    };

    return (
        <section className="my-8 p-10">
            <div className="flex items-start justify-between">
                <h1 className="text-2xl font-bold mb-[2.1rem]">Book Your Suitable Car</h1>
                <div className="flex items-start">
                    {filters.map((filter) => (
                        <ListBoxWrapper key={filter.id} data={filter} />
                    ))}
                    <Button
                        onClick={handleApplyFilters}
                        className="ml-2 bg-sky-500 hover:bg-sky-400 ease-in-out duration-200 rounded-lg text-slate-100"
                    >
                        Apply filters
                    </Button>
                </div>
            </div>
            {!notFound ? (
                <HorizontalSlider autoplay={true} settings={settings}>
                    {products.map((product) => (
                        <div key={product._id}>
                            <div className="mx-2">
                                <ProductCard data={product} />
                            </div>
                        </div>
                    ))}
                </HorizontalSlider>
            ) : (
                <NotFound />
            )}
        </section>
    );
}

export default Products;
