import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaPen } from 'react-icons/fa6';
import { IoClose } from 'react-icons/io5';
import {
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
import ReviewModal from '../../../components/contents/ReviewModal';
import { deleteReview } from '../../../store/modules/reviewSlice';

const ReviewItems = () => {
    const dispatch = useDispatch();
    const reviews = useSelector((state) => state.reviewR.reviews);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedReview, setSelectedReview] = useState(null);

    const handleEditClick = (review) => {
        setSelectedReview(review);
        setIsModalOpen(true);
    };

    const handleDeleteClick = (reviewId) => {
        if (window.confirm('정말로 리뷰를 삭제하시겠습니까?')) {
            dispatch(deleteReview(reviewId));
        }
    };

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
                                <div className="reviewText">
                                    <UserInfo>
                                        <UserName>{review.author}</UserName>
                                        <ReviewDate>{review.created_at.split('T')[0]}</ReviewDate>
                                        <RatingStars style={{ marginLeft: '230px', marginTop: '10px' }}>
                                            {[...Array(5)].map((_, index) => (
                                                <Star
                                                    key={index}
                                                    $filled={index < parseFloat(review.author_details?.rating || 0)}
                                                >
                                                    <img
                                                        src="https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mockup/contentdetail/ui/StarActive.png"
                                                        alt="별"
                                                    />
                                                </Star>
                                            ))}
                                        </RatingStars>
                                    </UserInfo>
                                </div>
                                <ReviewText>
                                    {review.content}
                                    <ReviewIcon>
                                        <FaPen size={15} onClick={() => handleEditClick(review)} />
                                        <IoClose size={20} onClick={() => handleDeleteClick(review.id)} />
                                    </ReviewIcon>
                                </ReviewText>
                            </ReviewContent>
                        </ReviewCard>
                    ))
                ) : (
                    <p style={{ color: 'white', textAlign: 'center', padding: '20px' }}>아직 작성된 리뷰가 없습니다.</p>
                )}
            </ReviewListContainer>
            {isModalOpen && (
                <ReviewModal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    contentDetail={null}
                    existingReview={selectedReview}
                />
            )}
        </div>
    );
};

export default ReviewItems;
