import styled from 'styled-components';

// 리뷰 리스트 컨테이너
export const ReviewListContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 60px;
    max-width: 900px;
    margin: auto;
`;

// 개별 리뷰 카드
export const ReviewCard = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 40px;
    background: var(--gray-800);
    padding: 15px;
    border-radius: 10px;
    border: 1px solid #68f5eb;
`;

// 영화 포스터
export const MoviePoster = styled.div`
    width: 127px;
    height: 183px;
    background-size: cover;
    background-position: center;
    border-radius: 10px;
    flex-shrink: 0;
    box-shadow: 15px 10px 10px rgba(0, 0, 0, 0.5);
`;

// 리뷰 내용 영역
export const ReviewContent = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    height: 11.4375rem;
    gap: 20px;
    padding: 20px;
    .reviwText {
        display: flex;
        justify-content: space-between;
    }
`;

// 유저 정보 + 날짜
export const UserInfo = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 5px;
`;

export const UserName = styled.span`
    background: var(--black);
    padding: 2px 0;
    border-radius: 4px;
    border: 1px solid var(--primary-base);
    width: 81px;
    height: 29px;
    font-size: var(--label-small-size);
    color: var(--primary-base);
    text-align: center;
`;

export const ReviewDate = styled.span`
    background: var(--black);
    font-size: var(--label-small-size);
    color: var(--primary-base);
    text-align: center;
    padding: 2px 0;
    border-radius: 4px;
    border: 1px solid var(--primary-base);
    height: 29px;
    width: 130px;
`;

// 리뷰 텍스트
export const ReviewText = styled.div`
    display: flex;
    justify-content: space-between;
    color: white;
    font-size: 14px;
    line-height: 1.5;
    margin-bottom: 5px;
    background: var(--black);
    padding: 15px;
    border-radius: 10px;
    border: 1px solid var(--primary-base);
    height: 6rem;
`;

export const ReviewIcon = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 45px;
    gap: 8px;
    cursor: pointer;
`;

// 별점 컨테이너
export const RatingStars = styled.div`
    display: flex;
    gap: 3px;
    margin-top: 10px;
    margin-left: 10px;
`;

export const Star = styled.span`
    color: ${(props) => (props.$filled ? '#FFD700' : '#444')};
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
