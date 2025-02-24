import { useEffect, useState } from 'react';
import { Container } from '../../common/style';
import ProfileEdit from './ProfileEdit';
import ProfileSwitch from './ProfileSwitch';
import ProfileInfoEdit from './ProfileInfoEdit';
import { FaPen } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import WatchingContent from '../../components/member/watch/WatchingContent';
import BuyingZzimContent from '../../components/member/buyzzim/BuyingZzimContent';
import ReviewItems from '../../components/member/review/ReviewItems';
import { Link, useNavigate } from 'react-router-dom';
import { MainContainer, MainContent } from '../home/main/style';

const Mypage = () => {
    const [activeTab, setActiveTab] = useState('시청내역');
    const { nickname, srcNow } = useSelector((state) => state.profileR);
    const navigate = useNavigate();

    const selectedPlan = localStorage.getItem('selectedPlan') || '베이직';

    useEffect(() => {
        const hasRefreshed = sessionStorage.getItem('mypageRefreshed');

        if (!hasRefreshed) {
            sessionStorage.setItem('mypageRefreshed', 'true');
            window.location.reload();
        }
    }, []);

    const onGo = () => {
        navigate('/profileselect');
    };

    const onGo2 = () => {
        navigate('/membership');
    };

    return (
        <div>
            <MainContent>
                <Container />
                <ProfileContainer>
                    <ProfileHeader>
                        <ProfileImage src={srcNow} />
                        <UserInfo>
                            <UserName>
                                <strong>{nickname}</strong>
                                <p>님</p>
                                <Link to="/profileforedit">
                                    <FaPen size="21px" color="white" />
                                </Link>
                            </UserName>
                            <button onClick={onGo}>계정 전환</button>
                        </UserInfo>
                    </ProfileHeader>

                    <PassContainer>
                        <PassCard>
                            <div className="PassTitle">
                                <strong>ViBo</strong>
                                <span> {selectedPlan} </span>
                                <p>현재 {selectedPlan} 이용권을 사용 중입니다.</p>
                            </div>
                        </PassCard>
                        <PassButton onClick={onGo2}>
                            <div className="PassTitle2">
                                <strong>패스 구매하기 ▶ </strong>
                            </div>
                        </PassButton>
                    </PassContainer>

                    <PassCard2>
                        <h3>
                            패스를 구매하시면 <strong>ViBo Original</strong> 그리고 <br />
                            <strong>실시간 인기콘텐츠와 다양한 영화를</strong> 시청하실 수 있어요!
                        </h3>
                    </PassCard2>
                    <TabMenu>
                        {['시청내역', '구매내역', '찜', '나의 리뷰'].map((tab) => (
                            <TabItem key={tab} $active={activeTab === tab} onClick={() => setActiveTab(tab)}>
                                {tab}
                            </TabItem>
                        ))}
                    </TabMenu>
                    <ContentWrapper>
                        {activeTab === '시청내역' && <WatchingContent />}
                        {activeTab === '구매내역' && <BuyingZzimContent />}
                        {activeTab === '찜' && <BuyingZzimContent />}
                        {activeTab === '나의 리뷰' && <ReviewItems />}
                    </ContentWrapper>
                </ProfileContainer>
            </MainContent>
        </div>
    );
};

export default Mypage;

import styled from 'styled-components';

// 전체 컨테이너
export const ProfileContainer = styled.div`
    padding: 50px;
`;

export const ProfileHeader = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    margin-bottom: 30px;
`;

export const ProfileImage = styled.div`
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    background-size: cover;
    background-position: center;
    background-image: url(${(props) => props.src || '/images/default-profile.jpg'});
    border: 2px solid #68f5eb;
`;

export const UserInfo = styled.div`
    flex: 1;
    display: flex;
    gap: 40px;
    align-items: center;
    button {
        color: var(--white);
        padding: 10px;
        background: var(--gray-800);
        border-radius: 5px;
        width: 6.25rem;
        height: 2.1875rem;
    }
`;

export const UserName = styled.h2`
    display: flex;
    font-weight: bold;
    align-items: center;
    gap: 10px;
    strong {
        font-size: 48px;
    }
    p {
        font-size: 28px;
        margin-top: 14px;
    }
    a {
        margin-top: 20px;
    }
`;

export const PassContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    gap: 30px;
`;

export const PassCard = styled.div`
    background: var(--gray-800);
    padding: 15px;
    border-radius: 8px;
    margin-bottom: 20px;
    height: 6.875rem;
    .PassTitle {
        width: 26.625rem;
        height: 6.25rem;
        padding: 15px;
        strong {
            font-size: var(--title-medium-size);
            font-weight: var(--title-xlarge-weightt);
            color: var(--primary-base);
        }
        span {
            font-size: var(--title-medium-size);
        }
        p {
            font-size: var(--detail-large-weight);
            font-weight: 300;
        }
    }
`;

export const PassButton = styled.div`
    background: var(--gray-800);
    padding: 15px;
    border-radius: 8px;
    margin-bottom: 20px;
    height: 6.875rem;
    cursor: pointer;
    .PassTitle2 {
        font-size: var(--title-medium-size);
        width: 18.75rem;
        text-align: center;
        padding: 25px;
    }
`;

export const PassCard2 = styled.div`
    font-size: var(--title-medium-size);
    background: var(--gray-800);
    padding: 25px 20px;
    border-radius: 8px;
    margin-bottom: 20px;
    width: 51.09rem;
    height: 6.875rem;
    text-align: left;
    strong {
        color: var(--primary-base);
    }
`;

const TabMenu = styled.div`
    display: flex;
    gap: 60px;
    margin-top: 90px;
    border-bottom: 4px solid #444;
    position: relative;
`;

const TabItem = styled.div`
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    padding-bottom: 5px;
    color: ${(props) => (props.$active ? '#68F5EB' : 'white')};
    position: relative;
    &::after {
        content: '';
        position: absolute;
        bottom: -4px;
        left: 0;
        width: ${(props) => (props.$active ? '100%' : '0')};
        height: 3px;
        background-color: #68f5eb;
        transition: width 0.3s ease;
    }
    &:hover::after {
        width: 100%;
    }
`;

const ContentWrapper = styled.div``;
