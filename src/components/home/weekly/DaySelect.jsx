import styled from 'styled-components';
import { useSelector } from 'react-redux';

const DaySelect = ({ activeDay, setActiveDay }) => {
    const { weeklyContent, isComplete } = useSelector((state) => state.weeklyR);
    const days = ['일', '월', '화', '수', '목', '금', '토'];

    // 요일 컨텐츠 개수 계산
    const getContentCount = (day) => {
        if (!isComplete || !weeklyContent || !weeklyContent[day]) {
            return 0;
        }
        return weeklyContent[day].length;
    };

    return (
        <DayContainer>
            {days.map((day) => {
                const count = getContentCount(day);
                const hasContent = count > 0;

                return (
                    <DayItemWrapper key={day}>
                        <DayItem
                            className={day === activeDay ? 'active' : ''}
                            onClick={() => setActiveDay(day)}
                            disabled={!hasContent && isComplete}
                            hasContent={hasContent || !isComplete}
                        >
                            {day}
                        </DayItem>
                        {hasContent && <ContentCount>{count}</ContentCount>}
                    </DayItemWrapper>
                );
            })}
        </DayContainer>
    );
};

export default DaySelect;

const DayContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: clamp(15px, 2vw, 25px);
    padding: 10px;

    @media (max-width: 1024px) {
        gap: 15px;
    }
`;

const DayItemWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const DayItem = styled.button`
    width: clamp(50px, 3.5vw, 56px);
    height: clamp(50px, 3.5vw, 56px);
    border-radius: 50%;
    border: 2px solid ${(props) => (props.hasContent ? '#a8a9ad' : '#555')};
    background-color: ${(props) => (props.hasContent ? '#333' : '#222')};
    color: ${(props) => (props.hasContent ? 'white' : '#666')};
    font-size: clamp(1rem, 1vw, 1rem);
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: ${(props) => (props.hasContent ? 'pointer' : 'not-allowed')};
    transition: all 0.3s ease-in-out;
    opacity: ${(props) => (props.hasContent ? 1 : 0.7)};

    &:hover {
        border-color: ${(props) => (props.hasContent ? '#07ffe6' : '#555')};
        color: ${(props) => (props.hasContent ? '#07ffe6' : '#666')};
    }

    &.active {
        background-color: #07ffe6;
        color: black;
        border-color: #07ffe6;
        box-shadow: 0px 0px 15px rgba(7, 255, 230, 0.7);
        opacity: 1;
    }

    @media (max-width: 1024px) {
        width: clamp(40px, 4vw, 45px);
        height: clamp(40px, 4vw, 45px);
        font-size: clamp(0.875rem, 1vw, 1.3rem);
    }
`;

const ContentCount = styled.span`
    position: absolute;
    top: -5px;
    right: -5px;
    background-color: #07ffe6;
    color: black;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    font-size: 0.75rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
`;
