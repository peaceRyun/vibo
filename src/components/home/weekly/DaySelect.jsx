import styled from 'styled-components';
import { useState } from 'react';

const DaySelect = () => {
    const [activeDay, setActiveDay] = useState('월');
    const days = ['월', '화', '수', '목', '금', '토', '일'];

    return (
        <DayContainer>
            {days.map((day) => (
                <DayItem key={day} className={day === activeDay ? 'active' : ''} onClick={() => setActiveDay(day)}>
                    {day}
                </DayItem>
            ))}
        </DayContainer>
    );
};

export default DaySelect;

const DayContainer = styled.div`
    display: flex;
    border-radius: 0.25rem;
    border: 1px solid #a8a9ad;
`;

const DayItem = styled.span`
    padding: 0.75rem 1.5rem;
    background-color: #1a1a1a;
    color: #aaa;
    font-size: 1rem; /* 16px */
    text-align: center;
    cursor: pointer;
    border: 1px solid #a8a9ad;

    &:hover {
        background-color: #333;
    }

    &.active {
        color: black;
        background-color: #1ee0b6;
        font-weight: 700;
        border: 1px solid #1ee0b6;
    }
`;
