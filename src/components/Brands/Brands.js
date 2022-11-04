import { Image } from '~/components';

const brands = [
    {
        id: 0,
        thumbnail:
            'https://res.cloudinary.com/dzzv49yec/image/upload/v1667592811/Car%20thumbnails/unionbank-transparent_eqa48c.png',
    },
    {
        id: 1,
        thumbnail:
            'https://res.cloudinary.com/dzzv49yec/image/upload/v1667593483/Car%20thumbnails/TuneIN-logo_tw6exn.png',
    },
    {
        id: 2,
        thumbnail:
            'https://res.cloudinary.com/dzzv49yec/image/upload/v1667593526/Car%20thumbnails/Walmart-Logo_lh43qc.png',
    },
    {
        id: 3,
        thumbnail:
            'https://res.cloudinary.com/dzzv49yec/image/upload/v1667593550/Car%20thumbnails/HubSpot-Logo.wine_tqmjxe.png',
    },
    {
        id: 4,
        thumbnail:
            'https://res.cloudinary.com/dzzv49yec/image/upload/v1667593815/Car%20thumbnails/png-transparent-club-med-hd-logo_ec2b2v.png',
    },
];

function Brands() {
    return (
        <section className="bg-sky-100 my-10 px-10 py-24 flex items-center justify-center">
            <div className="flex items-center">
                {brands.map((brand) => (
                    <div className="rounded-full w-32 ml-5 p-2 h-12 shadow-[0_5px_24px_0_rgba(148,163,184,0.6)] bg-white flex items-center justify-center">
                        <Image className="w-full" src={brand.thumbnail} alt="brand logo" />
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Brands;
