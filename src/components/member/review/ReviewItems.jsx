import { useSelector } from 'react-redux';
import { FaPen } from 'react-icons/fa6';
import { IoClose } from 'react-icons/io5';
import {
    DeleteButton,
    MoviePoster,
    RatingStars,
    ReviewCard,
    ReviewContent,
    ReviewDate,
    ReviewIcon,
    ReviewListContainer,
    ReviewText,
    Star,
    UserInfo,
    UserName,
} from './style';

const ReviewItems = () => {
    // Redux에서 리뷰 리스트 가져오기
    const reviews = useSelector((state) => state.reviewR.reviews);

    return (
        <div>
            <ReviewListContainer>
                {reviews.length > 0 ? (
                    reviews.map((review) => (
                        <ReviewCard key={review.id}>
                            <MoviePoster
                                style={{ backgroundImage: `url(${review.moviePoster || '/default-movie-poster.jpg'})` }}
                            />
                            <ReviewContent>
                                <div className="reviwText">
                                    <UserInfo>
                                        <UserName>{review.author}</UserName>
                                        <ReviewDate>{review.created_at.split('T')[0]}</ReviewDate>
                                    </UserInfo>
                                    <RatingStars>
                                        {[...Array(5)].map((_, index) => (
                                            <Star key={index} $filled={index < (review.author_details?.rating || 0)}>
                                                <img src="/contentdetail/ui/StarActive.png" alt="별" />
                                            </Star>
                                        ))}
                                    </RatingStars>
                                </div>
                                <ReviewText>
                                    {review.content}
                                    <ReviewIcon>
                                        <FaPen size={15} />
                                        <IoClose size={20} />
                                    </ReviewIcon>
                                </ReviewText>
                            </ReviewContent>
                            <DeleteButton>
                                <IoClose size={30} />
                            </DeleteButton>
                        </ReviewCard>
                    ))
                ) : (
                    <p style={{ color: 'white', textAlign: 'center', padding: '20px' }}>아직 작성된 리뷰가 없습니다.</p>
                )}
            </ReviewListContainer>
        </div>
    );
};

export default ReviewItems;
