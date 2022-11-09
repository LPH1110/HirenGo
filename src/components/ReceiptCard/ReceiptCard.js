import { Image } from '~/components';
import images from '~/assets';

function ReceiptCard() {
    return (
        <div>
            <div className="w-12 h-12 mr-4 bg-transparent flex justify-center items-center">
                <Image className="rounded-full w-full" src={images.avatar1} alt="avatar" />
            </div>
            <div>
                <div>
                    <h4>Title</h4>
                </div>
                <div></div>
            </div>
        </div>
    );
}

export default ReceiptCard;
