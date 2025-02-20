// 사용자 리뷰

import { FaPen } from 'react-icons/fa6';
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
import { IoClose } from 'react-icons/io5';

const ReviewItems = () => {
    const reviews = [
        {
            id: 1,
            moviePoster: '/member/b_drama_01.webp',
            user: '윤구',
            date: '2025-01-31',
            text: '콘텐츠 리뷰입니다. 최대 ##글자, 최대 2줄 / 콘텐츠 리뷰입니다. 네. 네?!',
            rating: 5,
        },
        {
            id: 2,
            moviePoster: '/member/b_drama_02.webp',
            user: '현지',
            date: '2025-01-31',
            text: '이 영화 너무 재밌어요! 감동적이에요.',
            rating: 4,
        },
        {
            id: 3,
            moviePoster: '/member/b_movie_01.webp',
            user: '강산',
            date: '2025-01-31',
            text: '스토리가 조금 아쉬웠지만, 배우 연기는 좋았어요!',
            rating: 3,
        },
        {
            id: 4,
            moviePoster: '/member/b_movie_02.webp',
            user: '혜지',
            date: '2025-01-31',
            text: '스토리가 조금 아쉬웠지만, 배우 연기는 좋았어요!',
            rating: 3,
        },
        {
            id: 5,
            moviePoster: '/member/b_movie_03.webp',
            user: '바이보',
            date: '2025-01-31',
            text: '스토리가 조금 아쉬웠지만, 배우 연기는 좋았어요!',
            rating: 3,
        },
    ];
    return (
        <div>
            <ReviewListContainer>
                {reviews.map((review) => (
                    <ReviewCard key={review.id}>
                        <MoviePoster style={{ backgroundImage: `url(${review.moviePoster})` }} />
                        <ReviewContent>
                            <div className='reviwText'>
                                <UserInfo>
                                    <UserName>{review.user}</UserName>
                                    <ReviewDate>{review.date}</ReviewDate>
                                </UserInfo>
                                <RatingStars>
                                    {[...Array(5)].map((_, index) => (
                                        <Star key={index} $filled={index < review.rating}>
                                            <img src='/contentdetail/ui/StarActive.png' alt='별' />
                                        </Star>
                                    ))}
                                </RatingStars>
                            </div>
                            <ReviewText>
                                {review.text}
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
                ))}
            </ReviewListContainer>
        </div>
    );
};

export default ReviewItems;
