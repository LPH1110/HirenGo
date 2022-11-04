import { default as VerticalSlider } from '../VerticalSlider';
import { default as ReviewCard } from '../ReviewCard';
import images from '~/assets';

const reviews = [
    {
        id: 0,
        thumbnail: images.avatar1,
        userName: 'Angelica West',
        userTitle: 'Fashion Designer',
        rating: 5,
        content:
            'Great car! Impressive service. Dropped off and picked up on time. Made it very ease by answering all questions. In town for business. Delivery was on time. The car was clean and in full charge. Awesome and clear communication. Thank you. I would book the car again.',
    },
    {
        id: 1,
        thumbnail: images.avatar2,
        userName: 'Gordon Cannon',
        userTitle: 'UI Designer',
        rating: 5,
        content:
            'Great experience!!!! I would highly recommend. Made it very ease by answering all questions. In town for business. Delivery was on time. The car was clean and in full charge. Awesome and clear communication. Thank you. I would book the car again. ',
    },
    {
        id: 2,
        thumbnail: images.avatar3,
        userName: 'Rebecca Andrews',
        userTitle: 'Managing Director',
        rating: 5,
        content:
            'Having used Hirengo three times now for out trips to London. I would love to pass on how happy we have been with their service. The friendly staff meets us at the airport and nothing has ever been too much trouble. Quick responsive and was very helpful and understanding.',
    },
    {
        id: 3,
        thumbnail: images.avatar4,
        userName: 'Aman Hodson',
        userTitle: 'Digital Marketer',
        rating: 5,
        content:
            'Awesome car! Had zero problems. Hirengo was great with the delivery and pick up. I booked at the last minute and he was able to delivery quickly. Amazing car i will definitely rent again next time in Los Angeles. Quick responses was very helpful.',
    },
    {
        id: 4,
        thumbnail: images.avatar1,
        userName: 'Melvin Guzman',
        userTitle: 'Managing Director',
        rating: 5,
        content:
            'Great car! Impressive service. Dropped off and picked up on time. Made it very ease by answering all questions. In town for business. Delivery was on time. The car was clean and in full charge. Awesome and clear communication. Thank you. I would book the car again.',
    },
    {
        id: 5,
        thumbnail: images.avatar2,
        userName: 'Renesmae Gibbs',
        userTitle: 'Fashion Designer',
        rating: 5,
        content:
            'Having used Hirengo three times now for out trips to London. I would love to pass on how happy we have been with their service. The friendly staff meets us at the airport and nothing has ever been too much trouble. Quick responsive and was very helpful and understanding.',
    },
    {
        id: 6,
        thumbnail: images.avatar3,
        userName: 'Alma Hollis',
        userTitle: 'UI Designer',
        rating: 5,
        content:
            'Great experience!!!! I would highly recommend. Made it very ease by answering all questions. In town for business. Delivery was on time. The car was clean and in full charge. Awesome and clear communication. Thank you. I would book the car again. ',
    },
    {
        id: 7,
        thumbnail: '',
        userName: 'Diana Lord',
        userTitle: 'UI Designer',
        rating: 5,
        content:
            'Awesome car! Had zero problems. Hirengo was great with the delivery and pick up. I booked at the last minute and he was able to delivery quickly. Amazing car i will definitely rent again next time in Los Angeles. Quick responses was very helpful.',
    },
    {
        id: 8,
        thumbnail: images.avatar1,
        userName: 'Seamus Beach',
        userTitle: 'Digital Marketer',
        rating: 5,
        content:
            'Great car! Impressive service. Dropped off and picked up on time. Made it very ease by answering all questions. In town for business. Delivery was on time. The car was clean and in full charge. Awesome and clear communication. Thank you. I would book the car again.',
    },
];

function Reviews() {
    const settings = {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        speed: 3000,
    };

    return (
        <section className="p-10">
            <h1 className="text-2xl font-bold mb-[2.1rem]">What our customers are saying?</h1>
            <VerticalSlider autoplay={true} settings={settings}>
                {reviews.map((review) => (
                    <div key={review.id}>
                        <div className="mx-2">
                            <ReviewCard
                                rating={review.rating}
                                content={review.content}
                                thumbnail={review.thumbnail}
                                userName={review.userName}
                                userTitle={review.userTitle}
                            />
                        </div>
                    </div>
                ))}
            </VerticalSlider>
        </section>
    );
}

export default Reviews;
