import { default as HorizontalSlider } from '../HorizontalSlider';
import { default as ProductCard } from '../ProductCard';
import images from '~/assets';
import Button from '../Button';

const products = [
    {
        id: 0,
        title: 'Honda Jazz',
        price: 250,
        brand: 'Honda',
        thumbnail:
            'https://res.cloudinary.com/dzzv49yec/image/upload/v1667594944/Car%20thumbnails/2019-mercedes-benz-a220-4matic-mmp-1-1638557009-removebg-preview_fuxzme.png',
    },
    {
        id: 1,
        title: 'Honda Jazz',
        price: 250,
        brand: 'Honda',
        thumbnail:
            'https://res.cloudinary.com/dzzv49yec/image/upload/v1667594944/Car%20thumbnails/2019-mercedes-benz-a220-4matic-mmp-1-1638557009-removebg-preview_fuxzme.png',
    },
    {
        id: 2,
        title: 'Nissan GT-R',
        price: 250,
        brand: 'Nissan',
        thumbnail:
            'https://res.cloudinary.com/dzzv49yec/image/upload/v1667594944/Car%20thumbnails/2019-mercedes-benz-a220-4matic-mmp-1-1638557009-removebg-preview_fuxzme.png',
    },
    {
        id: 3,
        title: 'Volkswagen Vento',
        price: 250,
        brand: 'Volkswagen',
        thumbnail:
            'https://res.cloudinary.com/dzzv49yec/image/upload/v1667594944/Car%20thumbnails/2019-mercedes-benz-a220-4matic-mmp-1-1638557009-removebg-preview_fuxzme.png',
    },
    {
        id: 4,
        title: 'Ferrari F8 Tributo',
        price: 250,
        brand: 'Ferrari',
        thumbnail:
            'https://res.cloudinary.com/dzzv49yec/image/upload/v1667594944/Car%20thumbnails/2019-mercedes-benz-a220-4matic-mmp-1-1638557009-removebg-preview_fuxzme.png',
    },
    {
        id: 5,
        title: 'BMW 3 Series',
        price: 250,
        brand: 'BMW',
        thumbnail:
            'https://res.cloudinary.com/dzzv49yec/image/upload/v1667594944/Car%20thumbnails/2019-mercedes-benz-a220-4matic-mmp-1-1638557009-removebg-preview_fuxzme.png',
    },
    {
        id: 6,
        title: 'Lamborghini Aventador',
        price: 250,
        brand: 'Lamborghini',
        thumbnail:
            'https://res.cloudinary.com/dzzv49yec/image/upload/v1667594944/Car%20thumbnails/2019-mercedes-benz-a220-4matic-mmp-1-1638557009-removebg-preview_fuxzme.png',
    },
    {
        id: 7,
        title: 'Mercedes Benz A220',
        price: 250,
        brand: 'Mercedes',
        thumbnail:
            'https://res.cloudinary.com/dzzv49yec/image/upload/v1667594944/Car%20thumbnails/2019-mercedes-benz-a220-4matic-mmp-1-1638557009-removebg-preview_fuxzme.png',
    },
];

const filters = [
    {
        id: 0,
        title: 'Brand',
    },
    {
        id: 1,
        title: 'Type',
    },
    {
        id: 2,
        title: 'Price',
    },
    {
        id: 3,
        title: 'Rating',
    },
];

function Products() {
    const settings = {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        speed: 3000,
    };

    return (
        <section className="my-8 p-10">
            <div className="flex items-start justify-between">
                <h1 className="text-2xl font-bold mb-[2.1rem]">Book Your Suitable Car</h1>
                <div className="flex items-start">
                    {filters.map((filter) => (
                        <button
                            key={filter.id}
                            className="mr-2 py-2 px-3 flex items-center outline-none hover:border-sky-400 ease duration-200 hover:text-sky-400 h-full border-slate-100 border text-slate-400 rounded-lg text-sm"
                        >
                            {filter.title}
                            <span className="ml-4">
                                <i class="flex fi fi-ss-angle-small-down"></i>
                            </span>
                        </button>
                    ))}
                </div>
            </div>
            <HorizontalSlider autoplay={true} settings={settings}>
                {products.map((product) => (
                    <div key={product.id}>
                        <div className="mx-2">
                            <ProductCard data={product} />
                        </div>
                    </div>
                ))}
            </HorizontalSlider>
        </section>
    );
}

export default Products;
