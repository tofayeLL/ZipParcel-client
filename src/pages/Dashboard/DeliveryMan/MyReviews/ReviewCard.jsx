import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'



const ReviewCard = ({ myReview }) => {
    const { userName, userImage, reviewDate, rating, feedback } = myReview;

    return (
        <section>

            <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-gray-700 bg-white shadow-xl">
                <div className="flex justify-between gap-10 p-4">
                    <div className="flex flex-col items-start space-y-4">
                        <div>
                            <img src={userImage} alt="" className="object-cover w-12 h-12 rounded-full bg-gray-500" />
                        </div>
                        <div>
                            <h4 className="font-bold">{userName}</h4>
                            <span className="text-xs ">{reviewDate.slice(0, 10)}</span>
                        </div>
                    </div>
                    <div className="flex  items-center   text-yellow-500">
                        <span className="text-xl font-bold">  <Rating
                            style={{ maxWidth: 90 }}
                            value={rating}

                        /></span>
                        <span>{rating}</span>
                    </div>

                </div>

                <div className="p-4 space-y-2 text-sm text-gray-400">
                    <p>{feedback}</p>
                    <p>Donec eget ultricies diam, eu molestie arcu. Etiam nec lacus eu mauris cursus venenatis. Maecenas gravida urna vitae accumsan feugiat. Vestibulum commodo, ante sit urna purus rutrum sem.</p>
                </div>
            </div>


        </section>



    )
};

export default ReviewCard;