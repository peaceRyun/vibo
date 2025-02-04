// 사용자 리뷰

import {
  DeleteButton,
  MoviePoster,
  RatingStars,
  ReviewCard,
  ReviewContent,
  ReviewDate,
  ReviewListContainer,
  ReviewText,
  Star,
  UserInfo,
  UserName,
} from './style';

const ReviewItems = () => {
  const reviews = [
    {
      id: 1,
      moviePoster: '/images/movie1.jpg',
      user: '바이보',
      date: '2025-01-31',
      text: '콘텐츠 리뷰입니다. 최대 ##글자, 최대 2줄 / 콘텐츠 리뷰입니다. 네. 네?!',
      rating: 5,
    },
    {
      id: 2,
      moviePoster: '/images/movie2.jpg',
      user: '바이보',
      date: '2025-01-31',
      text: '이 영화 너무 재밌어요! 감동적이에요.',
      rating: 4,
    },
    {
      id: 3,
      moviePoster: '/images/movie3.jpg',
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
              <UserInfo>
                <UserName>{review.user}</UserName>
                <ReviewDate>{review.date}</ReviewDate>
              </UserInfo>
              <ReviewText>{review.text}</ReviewText>
              <RatingStars>
                {[...Array(5)].map((_, index) => (
                  <Star key={index} filled={index < review.rating}>
                    ★
                  </Star>
                ))}
              </RatingStars>
            </ReviewContent>
            <DeleteButton>✖</DeleteButton>
          </ReviewCard>
        ))}
      </ReviewListContainer>
    </div>
  );
};

export default ReviewItems;
