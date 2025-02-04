import styled from 'styled-components';

// 리뷰 리스트 컨테이너
export const ReviewListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  max-width: 900px;
  margin: auto;
`;

// 개별 리뷰 카드
export const ReviewCard = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 15px;
  background: #111;
  padding: 15px;
  border-radius: 10px;
  border: 1px solid #68f5eb;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

// 영화 포스터
export const MoviePoster = styled.div`
  width: 80px;
  height: 110px;
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  flex-shrink: 0;
`;

// 리뷰 내용 영역
export const ReviewContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

// 유저 정보 + 날짜
export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 5px;
`;

export const UserName = styled.span`
  background: #068fff;
  color: white;
  padding: 5px 10px;
  border-radius: 15px;
  font-size: 14px;
`;

export const ReviewDate = styled.span`
  background: #222;
  color: #bbb;
  padding: 5px 10px;
  border-radius: 15px;
  font-size: 14px;
`;

// 리뷰 텍스트
export const ReviewText = styled.p`
  color: white;
  font-size: 14px;
  line-height: 1.5;
  margin-bottom: 5px;
`;

// 별점 컨테이너
export const RatingStars = styled.div`
  display: flex;
  gap: 3px;
`;

export const Star = styled.span`
  color: ${(props) => (props.filled ? '#FFD700' : '#444')};
  font-size: 18px;
`;

// 삭제 버튼
export const DeleteButton = styled.button`
  background: none;
  border: none;
  color: #bbb;
  font-size: 16px;
  cursor: pointer;
  align-self: flex-start;
  &:hover {
    color: white;
  }
`;
